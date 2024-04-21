from django.urls import path, re_path, include
from .views import UserLoginView, UserRegisterView, UserView, ImageView, ProjectView, FolderView, DownloadFileView, SearchRepoView, SearchUserView

urlpatterns = [
    #TODO: Add the path for the api app
    path('login/', UserLoginView.as_view(), name='user-login'),
    path('register/', UserRegisterView.as_view(), name='user-register'),
    path('profile/<username>', UserView.as_view(), name='user-detail'),
    path('repo/<project>', ProjectView.as_view(), name='project-detail'),
    # path('new_project/', ProjectView.as_view(), name='project-add'),
    # path('add_folder/<parent>', FolderView.as_view(), name='folder-add'),
    # path('add_file/<folder>', DownloadFileView.as_view(), name='file-add'),
    re_path(r'^repo/(?P<project>[\w\-\.]+)/(?P<folder_path>.+)/$', FolderView.as_view(), name='folder-detail'),
    # path('repo/<project>/<folder_path>', FolderView.as_view(), name='project-detail'),
    path('search/repo/<query>', SearchRepoView.as_view(), name='project-search'),
    path('search/user/<query>', SearchUserView.as_view(), name='user-search'),
    path('profile_pics/<img>', ImageView.as_view(), name='profile-pic'),
    path('file/<fileid>', DownloadFileView.as_view(), name='file-download'),
]
