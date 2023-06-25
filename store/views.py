from django.shortcuts import render , redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.sessions.models import Session
from django.contrib.sessions.backends.db import SessionStore
from django.http import HttpResponseForbidden
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
        user = authenticate(request, email=email, password=password)
        if user:
            login(request, user)
            # Create a session for the user
            session = SessionStore()
            session["user_id"] = user.id
            session.create()

            response = {
                'success': True,
                'name': user.firstName + ' ' + user.lastName
            }
            # print(email)
            return JsonResponse(response)
        else:
            response = {
                'success': False
            }
            # print(email)
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
        user = authenticate(request, email=email, password=password)
        login(request, user)

        # Create a session for the user
        session = SessionStore()
        session["user_id"] = user.id
        session.create()
        print(session)
        response = {
                'success': True,
                'name': first_name + ' ' + last_name
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
def get_products(request, offset):
    queryset = Products.objects.order_by('-id').all()[offset:offset+10]
    data = [obj.to_dict() for obj in queryset]
    return JsonResponse(data)