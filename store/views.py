from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
import json
from .models import User
from django.views.decorators.csrf import csrf_exempt

#npm install react-scripts --save
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
@csrf_exempt
def signup(request):
    if request.method == "POST":
        data = json.loads(request.body)
        first_name = data["first_name"]
        last_name = data["last_name"]
        email = data["email"]
        password = data["password"]
        new_user = User.objects.create_user(first_name, last_name, email, password)
        new_user.save()
        user = authenticate(request, email=email, password=password)
        login(request, user)
