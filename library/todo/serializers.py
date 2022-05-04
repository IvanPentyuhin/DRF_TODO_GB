from rest_framework.serializers import HyperlinkedModelSerializer

from todo.models import Todo


class TodoModelSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Todo
        fields = '__all__'
