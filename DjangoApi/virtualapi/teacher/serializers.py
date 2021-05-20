from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Teacher ,Classwork
from rest_framework import serializers
# from rest_framework.authtoken.models import Token




class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['name','subject','description','email']

        

class ClassworkSerializer(serializers.ModelSerializer):
    
    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Classwork.objects.create(Subject = validated_data['subject'],Classwork=validated_data['classwork'])
   
    class Meta:
        model = Classwork
        fields = ['subject','classwork','id']




