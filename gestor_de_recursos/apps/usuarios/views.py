from rest_framework import viewsets
from .models import Usuario
from .serializer import UsuarioSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import check_password  # si vas a usar hashing
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny

# Create your views here.
class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    lookup_field = 'id'  
    permission_classes = [IsAuthenticated]



class LoginView(APIView):
     # Permitir acceso sin autenticación previa
    permission_classes = [AllowAny] 
    def post(self, request):
        correo = request.data.get('correo')
        contraseña = request.data.get('contraseña')
        # Aquí es donde validarías las credenciales, si usas el modelo Usuario
        try:
            user = Usuario.objects.get(correo=correo)
            if user.contraseña == contraseña:  # Asegúrate de encriptar las contraseñas en producción
                refresh = RefreshToken.for_user(user)
                access_token = str(refresh.access_token)
                
                return Response({
                    "access": access_token,
                    "usuario": {
                        "id": user.id,
                        "nombre": user.nombre,
                        "correo": user.correo,
                        "rol": user.rol,
                    }
                })
            else:
                return Response({"detail": "Credenciales incorrectas"}, status=status.HTTP_400_BAD_REQUEST)
        except Usuario.DoesNotExist:
            return Response({"detail": "Usuario no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        