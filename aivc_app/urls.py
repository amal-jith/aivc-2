from django.urls import path
from . import views


app_name = "aivc_app"

urlpatterns = [
    path('', views.home, name='home'),
    path('who-we-are/', views.about, name='about'),
    path('what-we-do/', views.whatWeDo, name="whatWeDo"),
    path('pursue-for-sellers/', views.pursueSellers, name="pursueSellers"),
    path('pursue-for-acquirers/', views.pursueAcquirers, name="pursueAcquirers"),
    path('explore-growth-equity/', views.exploreGE, name="exploreGE"),

    path('send-contact/', views.send_contact, name='send_contact'),
]