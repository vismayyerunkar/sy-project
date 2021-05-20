from django.db import models

# Create your models here.

class Teacher(models.Model):
    # id = models.AutoField(primary_key=True)
    name  = models.CharField(max_length=70)
    email = models.EmailField(max_length=70)
    subject = models.CharField(max_length=70)

    description = models.CharField(max_length=500)
    # upload = models.FileField(upload_to='uploads/', max_length=100)


    # created = models.DateTimeField(auto_now_add=True)

    # class Meta:
    #     ordering = ['created']

class Classwork(models.Model):

    # id = models.IntegerField(primary_key=True)
    subject = models.CharField(max_length=70)
    classwork = models.CharField(max_length=570)

