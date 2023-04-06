from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import JsonResponse
import json
from .models import User, Product
from django.views.decorators.csrf import csrf_exempt

#npm install react-scripts --save
#npm i react-multi-carousel
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
            response = {
                'success': True,
                'name': user.firstName + ' ' + user.lastName
            }
            return JsonResponse(response)
        else:
            response = {
                'success': False
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
            response = {
                'success': False
            }
            return JsonResponse(response)
        user = authenticate(request, email=email, password=password)
        login(request, user)
        response = {
                'success': True,
                'name': first_name + ' ' + last_name
            }
        return JsonResponse(response)

@csrf_exempt
def get_product(request, id):
    product = Product.objects.get(id=id)
    return JsonResponse(product)

@csrf_exempt
def get_products(request, offset):
    queryset = Product.objects.order_by('-id').all()[offset:offset+10]
    data = [obj.to_dict() for obj in queryset]
    return JsonResponse(data)