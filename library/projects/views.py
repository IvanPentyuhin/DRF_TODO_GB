from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from projects.models import Project
from projects.serializers import ProjectModelSerializer
from rest_framework.pagination import LimitOffsetPagination



# модель Project: доступны все варианты запросов; для постраничного вывода установить размер страницы 10 записей;
# добавить фильтрацию по совпадению части названия проекта;

class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class ProjectModelViewSet(ModelViewSet):

    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffsetPagination
    filterset_fields = ['name']
