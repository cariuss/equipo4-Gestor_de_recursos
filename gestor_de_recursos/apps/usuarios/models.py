from django.db import models

class Usuario(models.Model):
    id = models.IntegerField(primary_key=True,  max_length=50, verbose_name='ID')
    nombre = models.CharField(max_length=255, verbose_name="Nombre del Recurso")
    correo = models.EmailField(max_length=100, verbose_name='Correo Electrónico')
    numero = models.CharField(max_length=20, verbose_name='Número de Teléfono')
    direccion = models.CharField(max_length=200, verbose_name='Dirección')
    contraseña = models.CharField(max_length=100, verbose_name='Contraseña')
    ROL_CHOICES = [
        ('administrador', 'Administrador'),
        ('usuario_estandar', 'Usuario Estándar'),
        ('supervisor', 'Supervisor'),
    ]
    rol = models.CharField(max_length=50, choices=ROL_CHOICES, default='usuario_estandar', verbose_name='Rol')
    rol_inicial = None

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.rol_inicial = self.rol

    def save(self, *args, **kwargs):
        if self._state.adding:
            # If it's a new object being created, the role can be set
            pass  # Allow setting the role during creation
        else:
            # If it's an existing object, prevent role modification
            if self.rol != self.rol_inicial:
                raise ValueError("No se permite modificar el rol después de la creación.")
        super().save(*args, **kwargs)
        self.rol_inicial = self.rol

    def __str__(self):
        return self.nombre

