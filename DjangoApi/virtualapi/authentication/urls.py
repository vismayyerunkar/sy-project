from django.urls import path
from django.contrib.auth import views as auth_views
from .views import RegisterView, LogoutAPIView, SetNewPasswordAPIView, VerifyEmail, LoginAPIView, PasswordTokenCheckAPI, RequestPasswordResetEmail
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('register/', RegisterView.as_view(), name="register"),
    path('login/', LoginAPIView.as_view(), name="login"),
    path('logout/', LogoutAPIView.as_view(), name="logout"),
    path('email-verify/', VerifyEmail.as_view(), name="email-verify"),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('request-reset-email/', RequestPasswordResetEmail.as_view(),
         name="request-reset-email"),
    path('password-reset/<uidb64>/<token>/',
         PasswordTokenCheckAPI.as_view(), name='password-reset-confirm'),
    path('password-reset-complete', SetNewPasswordAPIView.as_view(),
         name='password-reset-complete'),



# These are used in django to get the password reset email


#      path('reset_password/',
#      auth_views.PasswordResetView.as_view(),name="reset_password"),

#     path('reset_password_sent/', 
#         auth_views.PasswordResetDoneView.as_view(),name="password_reset_done"),

#     path('reset/<uidb64>/<token>/',
#      auth_views.PasswordResetConfirmView.as_view(),name="password_reset_confirm"),

#     path('reset_password_complete/', 
#         auth_views.PasswordResetCompleteView.as_view(),name="password_reset_complete"),    
]




