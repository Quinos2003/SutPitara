from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
import json
#npm install react-scripts --save
# Create your views here.
def login(request):
    if request.method == "POST":
        data = json.loads(request.body)
        email = data["email"]
        password = data["password"]
        user = authenticate(request, email=email, password=password)
        if user:
            login(request, user)
        else:
            return render(
                request, "MobilesHQ_main/login.html", {"message": "Invalid Credentials"}
            )
        return
    
    
