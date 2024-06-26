from os import path
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

def file_upload_path(instance, filename):
  ## See all parent folders
  filePath = instance.folder.name
  parent = instance.folder.parent
  while parent:
    filePath = path.join(parent.name, filePath)
    parent = parent.parent
  filePath = path.join('repos', filePath)
  return path.join(filePath, filename)



class Project(models.Model):
  name = models.CharField(max_length=128)
  description = models.TextField()
  owner = models.ForeignKey('Customer', on_delete=models.CASCADE)
  subject = models.CharField(max_length=128, null=True, blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  main_folder = models.ForeignKey('Folder', on_delete=models.CASCADE)

class Customer(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE)
  name = models.CharField(max_length=128, null=True, blank=True)
  profile_pic = models.ImageField(upload_to='profile_pics', blank=True)
  projects = models.ManyToManyField(Project, related_name='members', blank=True)
  favourite_projects = models.ManyToManyField(Project, related_name='users', blank=True)

class Folder(models.Model):
  name = models.CharField(max_length=128)
  parent = models.ForeignKey('Folder', on_delete=models.CASCADE, blank=True, null=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

class File(models.Model):
  name = models.CharField(max_length=512)
  folder = models.ForeignKey(Folder, on_delete=models.CASCADE)
  file = models.FileField(upload_to=file_upload_path, blank=True, null=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)


