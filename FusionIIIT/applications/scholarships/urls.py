from django.conf.urls import url

from . import views

app_name = 'spacs'

urlpatterns = [

<<<<<<< HEAD
    url(r'^$', views.spacs, name='spacs'),
    url(r'^student_view/$', views.student_view, name='student_view'),
    url(r'^convener_view/$', views.convener_view, name='convener_view'),
    url(r'^staff_view/$', views.staff_view, name='staff_view'),
    url(r'^apply_form/$', views.apply_form, name='apply_form'),
    url(r'^submitted_forms/$', views.submitted_forms, name='submitted_forms'),
    url(r'^submitted_form/$', views.submitted_form, name='submitted_form'),
=======
    url(r'^', views.spacs, name='spacs'),

>>>>>>> e3ac96ceedffd47377b5269957e46456f777ea3b
]
