from django.urls import path
from .views import teacher ,classroom,delNotice
from django.conf.urls import include
from rest_framework import routers
from django.contrib import admin
from .views import userViewSet

# router = routers.DefaultRouter()
# router.register('users', UserViewSet)


urlpatterns = [
    path('',teacher),
    path('users/',userViewSet),
    path('classroom/<int:id>',delNotice),
    path('classroom/',classroom)
    # path('', include('router.urls'),
]


