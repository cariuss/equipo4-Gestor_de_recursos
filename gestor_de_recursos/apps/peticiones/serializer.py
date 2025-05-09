from apps.peticiones.models import SolicitudRecurso
from rest_framework import serializers
from django.contrib.auth.models import User


class PeticionSerializer(serializers.ModelSerializer):  # Para serializar un modelo completo
    class Meta:
        model = SolicitudRecurso
        # fields = ['usuario', 'recurso', 'cantidad_solicitada']
        fields = '__all__'  # Para serializar todos los campos del modelo
        
