from rest_framework import serializers

from .models import Builder, House, Comment

class BuilderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Builder
        fields = ('id', 'name', 'description')

class HouseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = House
        fields = ('id', 'city', 'address', 'builder', 'description')

class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'builder', 'house', 'name', 'text', 'created_on', 'author')