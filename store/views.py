from django.shortcuts import render , redirect
from django.http import HttpResponseForbidden
import jwt
from django.conf import settings
from django.db import IntegrityError
from django.http import JsonResponse

import json
# from .models import User, Product
from .models import User
from .product import Products
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
@csrf_exempt
def login_view(request):
    if request.method == "POST":
        data = json.loads(request.body)
        email = data["email"]
        password = data["password"]
        user = User.objects.filter(email=email).first()
        if user and user.check_password(password):
            # Generate JWT token
            token_payload = {'user_id': user.id}
            token = jwt.encode(token_payload, settings.JWT_AUTH['JWT_SECRET_KEY'], algorithm=settings.JWT_AUTH['JWT_ALGORITHM'])

            response = {
                'success': True,
                'name': user.firstName + ' ' + user.lastName,
                'status': 200,
                'token': token  # Convert bytes to string
            }
            return JsonResponse(response)
        else:
            response = {
                'success': False,
                'status': 401
            }
            return JsonResponse(response)

@csrf_exempt
def signup(request):
    if request.method == "POST":
        data = json.loads(request.body)
        first_name = data["first_name"]
        last_name = data["last_name"]
        email = data["email"]
        password = data["password"]
        try:
            new_user = User.objects.create_user(first_name, last_name, email, password)
            new_user.save()
        except IntegrityError as e:
            print(e)
            response = {
                'success': False
            }
            return JsonResponse(response)
        user = User.objects.filter(email=email).first()

        # Generate JWT token
        token_payload = {'user_id': user.id}
        token = jwt.encode(token_payload, settings.JWT_AUTH['JWT_SECRET_KEY'], algorithm=settings.JWT_AUTH['JWT_ALGORITHM'])

        response = {
            'success': True,
            'name': first_name + ' ' + last_name,
            'token': token  # Convert bytes to string
        }
        return JsonResponse(response)
    

# adding logout 
def logout(request):
    request.session.clear()
    return redirect('login')


@csrf_exempt
def get_product(request, id):
    # Check if the user is authenticated
    if not request.user.is_authenticated:
        return HttpResponseForbidden("Access denied")

    # Retrieve the user's session
    session_key = request.COOKIES.get("sessionid")
    session = Session.objects.filter(session_key=session_key).first()
    print(session)

    # Retrieve the product and return the response
    product = Products.objects.get(id=id)
    return JsonResponse(product)


# @csrf_exempt
# def get_product(request, id):
#     product = Products.objects.get(id=id)
#     return JsonResponse(product)

@csrf_exempt
def get_product(request, id):
    # Check if the user is authenticated
    token = request.headers.get('Authorization', '').replace('Bearer ', '')

    # Verify and decode the token
    try:
        payload = jwt.decode(token, settings.JWT_AUTH['JWT_SECRET_KEY'], algorithms=[settings.JWT_AUTH['JWT_ALGORITHM']])
        user_id = payload.get('user_id')
        user = User.objects.get(pk=user_id)

        # Retrieve the product and return the response
        product = Products.objects.get(id=id)
        return JsonResponse(product)
    except (jwt.ExpiredSignatureError, jwt.DecodeError, User.DoesNotExist):
        return HttpResponseForbidden("Access denied")



