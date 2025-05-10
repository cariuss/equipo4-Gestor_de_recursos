from rest_framework import serializers
from apps.peticiones.models import SolicitudRecurso
from apps.recursos.models import Recurso

class PeticionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SolicitudRecurso
        fields = '__all__'

    def validate(self, data):
        recurso = data['recurso']
        cantidad_solicitada = data['cantidad_solicitada']

        if recurso.cantidad_disponible < cantidad_solicitada:
            raise serializers.ValidationError(
                f"No hay suficientes unidades disponibles. Solo quedan {recurso.cantidad_disponible}."
            )
        return data

    def create(self, validated_data):
        instancia = super().create(validated_data)
        if instancia.estado == 'aprobada':
            recurso = instancia.recurso
            recurso.cantidad_disponible -= instancia.cantidad_solicitada
            recurso.save()
        return instancia
