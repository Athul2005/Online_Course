from django.urls import path
from . import views

urlpatterns = [
    path('home', views.index),
    path('', views.signin),
    path('intro_content', views.intro_content),
    path('content1', views.content1),
    path('content2', views.content2),
    path('content3', views.content3),
    path('content4', views.content4),
    path('content5', views.content5),
    path('intro_quiz', views.intro_quiz),
    path('quiz', views.quiz),
    path('quiz_pass', views.quiz_pass),
    path('get_certificate', views.get_certificate),
    path('quiz_fail', views.quiz_fail),
    path('final', views.final),
    path('register', views.register),
    path('certificate', views.certificate),
]