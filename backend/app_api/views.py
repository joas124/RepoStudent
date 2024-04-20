from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import login
from rest_framework import status
from rest_framework import permissions
# from django.contrib.auth import authenticate
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