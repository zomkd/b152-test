from rest_framework import viewsets

from .serializers import BuilderSerializer, HouseSerializer, CommentSerializer
from .models import Builder, House, Comment


class BuilderViewSet(viewsets.ModelViewSet):
    queryset = Builder.objects.all().order_by('name')
    serializer_class = BuilderSerializer

class HouseViewSet(viewsets.ModelViewSet):
    queryset = House.objects.all().order_by('address')
    serializer_class = HouseSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all().order_by('name')
    serializer_class = CommentSerializer
