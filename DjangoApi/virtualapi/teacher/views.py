from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from .models import Teacher ,Classwork
from .serializers import TeacherSerializer ,ClassworkSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
# from .serializers import UserSerializer


# Create your views here.

@csrf_exempt
def teacher(request,id):
    """
    List all code snippets, or create a new snippet.
    """
    print(request.method)
    if request.method == 'GET':
        teacherData = Teacher.objects.all()
        serializer = TeacherSerializer(teacherData, many=True)
        print(JsonResponse(serializer.data,safe=False))
        return JsonResponse(serializer.data,safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = TeacherSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


def userViewSet(request):
    queryset = User.objects.all()
    serializer_class = UserSerializer(data = queryset)
    return JsonResponse(serializer_class, status=201,safe=False)


@csrf_exempt
def classroom(request,**id):

    if request.method == 'GET':
        classworks = Classwork.objects.all()
        cwSerializer = ClassworkSerializer(classworks, many=True)
        return JsonResponse(cwSerializer.data,safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        print(data['Subject'])
        newObj = Classwork.objects.create(subject=data['Subject'] ,classwork=data['Classwork'])
        cwSerializer = ClassworkSerializer(newObj)
        
        return JsonResponse(cwSerializer.data, status=201)

    if request.method =="DELETE":
       
        obj = Classwork.objects.get(pk=id)
        obj.delete()


        return HttpResponse(status=200)




    return JsonResponse(cwSerializer.errors, status=400)




@csrf_exempt
def delNotice(request,id):
    
    if request.method =="DELETE":
        # data = JSONParser().parse(request)

        obj = Classwork.objects.get(pk=id)
        obj.delete()
        # print(request.DELETE['subject'])


        return HttpResponse(status=200)

    return HttpResponse(status=400)



