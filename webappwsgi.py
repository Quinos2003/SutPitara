import os
import sys
from django.core.wsgi import get_wsgi_application

# Add the directory containing the Django project to the Python path
sys.path.append('/home/public_html/SutPitaaraInProgress/SutPitaara')

# Set the Django settings module for the WSGI application
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'SutPitaara.settings')

# Activate the virtual environment (if applicable)
activate_env = os.path.expanduser('/home/public_html/SutPitaaraInProgress/SutPitaara/.venv/bin/activate_this.py')
with open(activate_env) as file_:
    exec(file_.read(), dict(__file__=activate_env))

# Create the WSGI application
application = get_wsgi_application()
