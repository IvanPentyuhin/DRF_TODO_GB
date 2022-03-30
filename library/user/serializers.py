from rest_framework.serializers import HyperlinkedModelSerializer
from user.models import User


class UserModelSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = '__all__'





