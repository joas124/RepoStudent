from django.urls import path, include
from .views import UserLoginView, UserRegisterView, UserView, ImageView

urlpatterns = [
    #TODO: Add the path for the api app
    path('login/', UserLoginView.as_view(), name='user-login'),
    path('register/', UserRegisterView.as_view(), name='user-register'),
    path('profile/<username>', UserView.as_view(), name='user-detail'),
    path('profile_pics/<img>', ImageView.as_view(), name='profile-pic'),
]
