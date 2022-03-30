from uuid import uuid4

from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    uid = models.UUIDField(
        primary_key=True,
        default=uuid4
    )
    user_name = models.CharField(
        max_length=64,
        blank=True
    )
    first_name = models.CharField(
        max_length=64,
        blank=True
    )
    last_name = models.CharField(
        max_length=64,
        blank=True
    )
    birthday_year = models.PositiveIntegerField()
    email = models.EmailField(
        max_length=110,
        unique=True)
    update = models.DateTimeField(
        auto_now=True,
        blank=True
    )


