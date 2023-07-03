from django.shortcuts import redirect
from .jwt_utils import decode_jwt_token

def auth_middleware(get_response):
    # One-time configuration and initialization.

    def middleware(request):
        token = request.COOKIES.get('token')
        if not token:
            return redirect('login')  # Assuming there's a login endpoint defined

        try:
            decoded_token = decode_jwt_token(token)
            # Add the decoded token or relevant user information to the request object
            request.user = decoded_token['user']
        except Exception as e:
            # Handle token validation error
            return redirect('login')  # Assuming there's a login endpoint defined

        response = get_response(request)
        return response

    return middleware
