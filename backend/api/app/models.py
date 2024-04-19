from django.db import models

# Create your models here.


class Project(models.Model):
  name = models.CharField(max_length=128)
  description = models.TextField()
  owner = models.ForeignKey('User', on_delete=models.CASCADE)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  folder = models.ForeignKey('Folder', on_delete=models.CASCADE)

class User(models.Model):
  username = models.CharField(max_length=128)
  password = models.CharField(max_length=512)
  email = models.EmailField()
  name = models.CharField(max_length=128)
  created_at = models.DateTimeField(auto_now_add=True)
  projects = models.ManyToManyField(Project, related_name='members')
  favourite_projects = models.ManyToManyField(Project, related_name='users')

class Folder(models.Model):
  name = models.CharField(max_length=128)
  project = models.ForeignKey(Project, on_delete=models.CASCADE)
  parent = models.ForeignKey('Folder', on_delete=models.CASCADE)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

class File(models.Model):
  name = models.CharField(max_length=128)
  folder = models.ForeignKey(Folder, on_delete=models.CASCADE)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)


