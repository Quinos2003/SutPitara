from django.contrib import admin
from django.urls import path
from . import views
from .cart import Cart

# from . import product

urlpatterns = [
    path("login", views.login_view, name="login"),
    path("signup", views.signup, name="signup"),
    path("logout", views.logout, name="logout"),
    # path("get-product", views.get_product, name="get-product"),

    path("cart", Cart.as_view() , name="cart"),

    # path("api/check-session", views.check_session, name="check_session"),
    # path("ProductsPath", views.Products, name="signup"),
]

#http://localhost:8000/store/login