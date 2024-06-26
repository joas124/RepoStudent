# Generated by Django 5.0.4 on 2024-04-20 11:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("app_api", "0005_customer_profile_pic"),
    ]

    operations = [
        migrations.AlterField(
            model_name="customer",
            name="favourite_projects",
            field=models.ManyToManyField(
                blank=True, related_name="users", to="app_api.project"
            ),
        ),
        migrations.AlterField(
            model_name="customer",
            name="projects",
            field=models.ManyToManyField(
                blank=True, related_name="members", to="app_api.project"
            ),
        ),
        migrations.AlterField(
            model_name="folder",
            name="parent",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="app_api.folder",
            ),
        ),
    ]
