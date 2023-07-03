# from django.shortcuts import redirect
# from .jwt_utils import decode_jwt_token

# def auth_middleware(get_response):
#     # One-time configuration and initialization.

#     def middleware(request):
#         token = request.COOKIES.get('token')
#         if not token:
#             return redirect('login')  # Assuming there's a login endpoint defined

#         try:
#             decoded_token = decode_jwt_token(token)
#             # Add the decoded token or relevant user information to the request object
#             request.user = decoded_token['user']
#         except Exception as e:
#             # Handle token validation error
#             return redirect('login')  # Assuming there's a login endpoint defined

#         response = get_response(request)
#         return response

#     return middleware

# from django.shortcuts import redirect
# from .jwt_utils import decode_jwt_token

# def auth_middleware(get_response):
#     def middleware(request):
#         token = request.COOKIES.get('token')

#         if not token:
#             return redirect('login')

#         try:
#             decoded_token = decode_jwt_token(token)
#             request.user_id = decoded_token['user_id']
#         except:
#             return redirect('login')

#         response = get_response(request)
#         return response

#     return middleware

import jwt
from django.shortcuts import redirect

def auth_middleware(get_response):
    def middleware(request):
        token = request.COOKIES.get('token')

        if not token:
            return redirect('login')

        try:
            decoded_token = jwt.decode(token, 'SECRET_KEY', algorithms=['HS256'])
            request.user_id = decoded_token['user_id']
        except jwt.InvalidTokenError:
            return redirect('login')

        response = get_response(request)
        return response

    return middleware
