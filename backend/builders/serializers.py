from rest_framework import serializers

from .models import Builder, House, Comment


class BuilderSerializer(serializers.ModelSerializer):
    houses = serializers.ReadOnlyField()

    class Meta:
        model = Builder
        fields = ('id', 'name', 'description', 'houses')


class HouseSerializer(serializers.ModelSerializer):
    builder_name = serializers.ReadOnlyField()

    class Meta:
        model = House
        fields = ('id', 'city', 'address', 'builder', 'description','builder_name')


class CommentSerializer(serializers.ModelSerializer):
    house_or_builder_name = serializers.ReadOnlyField()
    class Meta:
        model = Comment
        fields = ('id', 'name', 'text', 'house', 'builder', 'created_on', 'house_or_builder_name')
