from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("login", views.login_view, name="login"),
    path("signup", views.signup, name="signup"),
    

]

#http://localhost:8000/store/login