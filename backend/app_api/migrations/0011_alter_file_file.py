# Generated by Django 5.0.4 on 2024-04-20 20:32

import app_api.models
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("app_api", "0010_alter_file_file"),
    ]

    operations = [
        migrations.AlterField(
            model_name="file",
            name="file",
            field=models.FileField(
                blank=True, null=True, upload_to=app_api.models.file_upload_path
            ),
        ),
    ]
