# Generated by Django 5.0.4 on 2024-04-20 20:40

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("app_api", "0011_alter_file_file"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="file",
            name="file_extension",
        ),
        migrations.AlterField(
            model_name="file",
            name="name",
            field=models.CharField(max_length=512),
        ),
    ]