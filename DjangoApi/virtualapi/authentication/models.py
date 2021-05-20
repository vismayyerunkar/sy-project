from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)
from rest_framework_simplejwt.tokens import RefreshToken


class UserManager(BaseUserManager):

    def create_superuser(self,email,password=None):
        email=self.normalize_email(email)
        user = self.create_user(email=email,is_student=False,subject="none",password=password)

        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
      

        user.save(using=self._db)
        return user

    def create_user(self,email,subject,is_student=None,password=None):

        if not email:
            raise ValueError("Users must have an email")

        user = self.model(
            email=self.normalize_email(email),
            subject=subject,
            is_student=is_student
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    

AUTH_PROVIDERS ={'google':'google','email':'email'}

# 245285436951-bf3970qtu599b5ulo6ltv9v2fi4l6sk5.apps.googleusercontent.com
class User(AbstractBaseUser):
    email = models.EmailField(verbose_name='email',max_length=90,unique=True)
    subject = models.CharField(max_length=90,unique=False,blank=True,null=True)
    date_joined = models.DateTimeField(verbose_name="date joined",auto_now_add=True)
    last_login =  models.DateTimeField(verbose_name="last login",auto_now=True)
    is_verified = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    auth_provider = models.CharField(max_length=255,blank=False,null=False,default=AUTH_PROVIDERS.get('email'))
    is_student = models.BooleanField(default=True)


    USERNAME_FIELD = 'email'


    objects = UserManager()



    def __str(self):
        return self.email 

    def has_perm(self,perm,obj=None):
        return self.is_admin

    def has_module_perms(self,app_label):
        return True


    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }



