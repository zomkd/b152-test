from django.contrib.auth.models import User
from django.db import models


class Builder(models.Model):
    '''Модель застройшиков'''

    name = models.CharField(max_length=32)
    description = models.TextField(max_length=256)

    def houses(self):
        builders = Builder.objects.get(name=self.name)
        houses = House.objects.filter(builder_id=builders).count()

        return houses

    def __str__(self):
        return self.name


class House(models.Model):
    '''Модель домов'''

    city = models.CharField(max_length=32)
    address = models.CharField(max_length=32)
    builder = models.ForeignKey(Builder, on_delete=models.CASCADE)
    description = models.TextField(max_length=256)

    def __str__(self):
        return self.address


class Comment(models.Model):
    '''Модель комментариев'''

    builder = models.ForeignKey(Builder, on_delete=models.CASCADE, blank=True, null=True)
    house = models.ForeignKey(House, on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=32)
    text = models.TextField(max_length=128)
    created_on = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        ordering = ["created_on"]

    def __str__(self):
        return "Comment {} by {}".format(self.text, self.name)
