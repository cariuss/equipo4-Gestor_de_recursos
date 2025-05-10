from django.shortcuts import render
from rest_framework import  viewsets
from apps.peticiones.models import SolicitudRecurso
from apps.peticiones.serializer import PeticionSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class PeticionViewSet(viewsets.ModelViewSet):
    queryset = SolicitudRecurso.objects.all()
    serializer_class = PeticionSerializer
    permission_classes = [IsAuthenticated]