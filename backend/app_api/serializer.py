from rest_framework import serializers
from .models import Customer, Project, Folder, File
from django.contrib.auth import authenticate

class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        print(data)
        user = authenticate(username=data['username'], password=data['password'])
        print(user)
        if user:
            if user.is_active:
                return user
            raise serializers.ValidationError("User account is disabled.")
        raise serializers.ValidationError("Invalid credentials.")
    
class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['email', 'password']
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        user = Customer.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = Customer
    fields = '__all__'
  
class ProjectSerializer(serializers.ModelSerializer):
  class Meta:
    model = Project
    fields = '__all__'

class FolderSerializer(serializers.ModelSerializer):
  class Meta:
    model = Folder
    fields = '__all__'

class FileSerializer(serializers.ModelSerializer):
  class Meta:
    model = File
    fields = '__all__'

