from django.shortcuts import render
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet, GenericViewSet

from user.models import User
from user.serializers import UserModelSerializer
from rest_framework import mixins


# модель User: есть возможность просмотра списка и каждого пользователя в отдельности, можно вносить изменения,
# нельзя удалять и создавать;

class UserModelViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    GenericViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    queryset = User.objects.all()
    serializer_class = UserModelSerializer

