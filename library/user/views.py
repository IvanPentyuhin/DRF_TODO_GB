from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from user.models import User
from user.serializers import UserModelSerializer


class UserModelViewSet(ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserModelSerializer

