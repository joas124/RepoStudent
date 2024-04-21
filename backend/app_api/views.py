from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import login
from rest_framework import status
from rest_framework import permissions
from django.contrib.auth import get_user_model
from django.http import HttpResponse
from .models import Customer, Project, Folder, File
from .serializer import UserLoginSerializer, UserSerializer, ProjectSerializer, FolderSerializer, FileSerializer

# Login API

class UserLoginView(APIView):
   def post(self, request, format=None):
       serializer = UserLoginSerializer(data=request.data)
       if serializer.is_valid():
           user = serializer.validated_data
           login(request, user)
           return Response(status=status.HTTP_200_OK)
       return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UserRegisterView(APIView):
    permission_classes = [permissions.AllowAny]
    
    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UserView(APIView):
    def get(self, request, username, format=None):
        user = get_user_model().objects.get(username=username)
        user = Customer.objects.get(user=user)
        serializer = UserSerializer(user)
        json = serializer.data
        json['user'] = user.user.username
        json['email'] = user.user.email
        json['favourite_projects'] = [p.name for p in user.favourite_projects.all()]
        json['projects'] = [p.name for p in user.projects.all()]
        return Response(json)

class ImageView(APIView):
    def get(self, request, img, format=None):
        img = open('./profile_pics/'+img, 'rb')
        return HttpResponse(img, content_type='image/jpeg')
    
class ProjectView(APIView):
    def get(self, request, project, format=None):
        project = Project.objects.get(name=project)
        serializer = ProjectSerializer(project)
        json = serializer.data
        json['files'] = [(f.name) for f in project.main_folder.file_set.all()]
        json['filesID'] = [(f.id) for f in project.main_folder.file_set.all()]
        json['folders'] = [f.name for f in project.main_folder.folder_set.all()]
        json['owner'] = project.owner.user.username
        json['members'] = [m.user.username for m in project.members.all()]
        return Response(json)
    
    
class FolderView(APIView):
    def get(self, request, project, folder_path, format=None):
        project = Project.objects.get(name=project)
        folder = project.main_folder
        for folder_name in folder_path.split('/'):
            folder = folder.folder_set.get(name=folder_name)
        serializer = FolderSerializer(folder)
        json = serializer.data
        json['files'] = [f.name for f in folder.file_set.all()]
        json['filesID'] = [f.id for f in folder.file_set.all()]
        json['folders'] = [f.name for f in folder.folder_set.all()]
        return Response(json)
    

class SearchRepoView(APIView):
    def get(self, request, query, format=None):
        projects = Project.objects.filter(name__icontains=query)
        serializer = ProjectSerializer(projects, many=True)
        json = serializer.data
        return Response(json)
    
class SearchUserView(APIView):
    def get(self, request, query, format=None):
        users = Customer.objects.filter(name__icontains=query)
        serializer = UserSerializer(users, many=True)
        json = serializer.data
        return Response(json)

#Download File API
class DownloadFileView(APIView):
    def get(self, request, fileid, format=None):
        file = File.objects.get(id=fileid)
        file = open(file.file.path, 'rb')
        return HttpResponse(file, content_type='application/octet-stream')