from django.contrib import admin
from django.urls import path, include
from idolweb import views
urlpatterns = [
    #path('admin/', admin.site.urls),
    #path("", include("idolweb.urls")),
    path("", views.home, name="home"),
]