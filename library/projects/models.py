from uuid import uuid4

from django.db import models

from user.models import User


class Project(models.Model):
    uid = models.UUIDField(
        primary_key=True,
        default=uuid4
    )
    name = models.CharField(
        max_length=44,
        blank=True,
        null=False
    )
    repository = models.URLField(
        max_length=128,
        default=''
    )
    users = models.ManyToManyField(
        User,
        related_name='user_projects'
    )
    is_active = models.BooleanField(
        default=True
    )
    created = models.DateTimeField(
        auto_now_add=True
    )
    updated = models.DateTimeField(
        auto_now=True,
        null=True,
        blank=True
    )

