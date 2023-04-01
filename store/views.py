from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
import json
#npm install react-scripts --save
# Create your views here.
def login(request):
    if request.method == "POST":
        print("Works")
        data = json.loads(request.body)
        print(data)
        return HttpResponse("HI")
    
    
