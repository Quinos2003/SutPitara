# from django.views import View
# from django.http import JsonResponse
# from .product import Products
# from .Middleware.auth import auth_middleware

# class Cart(View):
#     @auth_middleware
#     def get(self, request):
#         user = request.user
#         cart = user.cart.all()  # Assuming the cart items are stored in a model called CartItem associated with the user
#         products = Products.get_products_by_id(cart.values_list('product_id', flat=True))
#         return JsonResponse({'products': products})

#     @auth_middleware
#     def post(self, request):
#         user = request.user
#         product_id = request.POST.get('product_id')
#         if not product_id:
#             return JsonResponse({'error': 'Product ID is missing'})

#         # Perform necessary actions to add the product to the cart
#         # Create a new CartItem object associated with the user and product

#         return JsonResponse({'message': 'Product added to cart'})

#     @auth_middleware
#     def delete(self, request):
#         user = request.user
#         product_id = request.POST.get('product_id')
#         if not product_id:
#             return JsonResponse({'error': 'Product ID is missing'})

#         # Perform necessary actions to remove the product from the cart
#         # Delete the CartItem associated with the user and product

#         return JsonResponse({'message': 'Product removed from cart'})

from django.views import View
from django.http import JsonResponse
from .product import Products
from .Middleware.auth import auth_middleware

class Cart(View):
    @auth_middleware
    def get(self, request):
        user = request.user
        cart = user.cart.all()  # Assuming the cart items are stored in a model called CartItem associated with the user
        product_ids = cart.values_list('product_id', flat=True)
        products = Products.get_products_by_id(product_ids)
        return JsonResponse({'products': products})

    @auth_middleware
    def post(self, request):
        user = request.user
        product_id = request.POST.get('product_id')
        if not product_id:
            return JsonResponse({'error': 'Product ID is missing'})

        # Perform necessary actions to add the product to the cart
        # Create a new CartItem object associated with the user and product

        return JsonResponse({'message': 'Product added to cart'})

    @auth_middleware
    def delete(self, request):
        user = request.user
        product_id = request.POST.get('product_id')
        if not product_id:
            return JsonResponse({'error': 'Product ID is missing'})

        # Perform necessary actions to remove the product from the cart
        # Delete the CartItem associated with the user and product

        return JsonResponse({'message': 'Product removed from cart'})
