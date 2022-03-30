from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from todo.models import Todo
from todo.serializers import TodoModelSerializer


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer
