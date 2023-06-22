from django.contrib import admin
from .models import User
# from .models import User, Product
from .product import Products
from .category import Category
# from .customer import Customer
# from .orders import Order
class AdminProduct(admin.ModelAdmin):
    list_display = ['name', 'price', 'category']



class AdminCategory(admin.ModelAdmin):
    list_display = ['name']



# Register your models here.
admin.site.register(User)
# admin.site.register(Products, AdminProduct)
admin.site.register(Category , AdminCategory)
# admin.site.register(Customer )
# admin.site.register(Order )