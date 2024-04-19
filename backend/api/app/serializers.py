from rest_framework import serializers
from models import Project, User, Folder, File

class UserSerializer(serializers.ModelSerializer):
  id = serializers.IntegerField(read_only=True)
  username = serializers.CharField()
  password = serializers.CharField()
  email = serializers.EmailField()
  name = serializers.CharField()
  created_at = serializers.DateTimeField(read_only=True)
  

