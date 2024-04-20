from django.urls import path, include
from .views import UserLoginView, UserRegisterView, UserView, ImageView, ProjectView, FolderView, DownloadFileView

urlpatterns = [
    #TODO: Add the path for the api app
    path('login/', UserLoginView.as_view(), name='user-login'),
    path('register/', UserRegisterView.as_view(), name='user-register'),
    path('profile/<username>', UserView.as_view(), name='user-detail'),
    path('repo/<project>', ProjectView.as_view(), name='project-detail'),
    path('repo/<project>/<folder_path>', FolderView.as_view(), name='project-detail'),
    path('profile_pics/<img>', ImageView.as_view(), name='profile-pic'),
    path('file/<fileid>', DownloadFileView.as_view(), name='file-download'),
]
