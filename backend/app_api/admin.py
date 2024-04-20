from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Project, Customer, Folder, File

admin.site.register(Project)
admin.site.register(Customer)
admin.site.register(Folder)
admin.site.register(File)