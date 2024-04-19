from django.urls import path, include
from .views import UserLoginView, UserRegisterView

urlpatterns = [
    #TODO: Add the path for the api app
    path('login/', UserLoginView.as_view(), name='user-login'),
    path('register/', UserRegisterView.as_view(), name='user-register'),
]
