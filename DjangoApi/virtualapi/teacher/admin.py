from django.contrib import admin
from .models import Teacher ,Classwork
# Register your models here.

@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display = ('name','subject','description','email')

@admin.register(Classwork)
class ClassroomAdmin(admin.ModelAdmin):
    list_display = ('subject','classwork')

