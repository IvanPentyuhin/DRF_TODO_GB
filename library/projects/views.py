from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from projects.models import Project
from projects.serializers import ProjectModelSerializer


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer

