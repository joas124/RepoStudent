# Generated by Django 5.0.4 on 2024-04-20 23:43

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("app_api", "0012_remove_file_file_extension_alter_file_name"),
    ]

    operations = [
        migrations.AddField(
            model_name="project",
            name="subject",
            field=models.CharField(blank=True, max_length=128, null=True),
        ),
    ]