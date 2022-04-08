from uuid import uuid4

from django.db import models

from projects.models import Project
from user.models import User


class Todo(models.Model):
    uid = models.UUIDField(
        primary_key=True,
        default=uuid4
    )
    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        related_name='project_todo'
    )
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='project_user'
    )
    text = models.TextField(
        max_length=400,
        blank=False
    )
    is_active = models.BooleanField(
        default=True
    )
    create = models.DateTimeField(
        auto_now_add=True
    )
    update = models.DateTimeField(
        auto_now=True
    )
