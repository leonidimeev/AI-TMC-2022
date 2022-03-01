from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello! From M-NOD-21")