from django.shortcuts import render
from rest_framework import status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from todo.models import Todo
from todo.serializers import TodoModelSerializer


# модель ToDo: доступны все варианты запросов; при удалении не удалять ToDo, а выставлять признак,
# что оно закрыто; добавить фильтрацию по проекту; для постраничного вывода установить размер страницы 20.

class TodoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class TodoModelViewSet(ModelViewSet):

    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer
    pagination_class = TodoLimitOffsetPagination
    fifilterset_fields = ['project']

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_active = 0
        instance.save()
        return Response(status=status.HTTP_204_NO_CONTENT)

