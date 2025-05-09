# Generated by Django 5.1.7 on 2025-03-29 00:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Recurso',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=255, verbose_name='Nombre del Recurso')),
                ('descripcion', models.TextField(blank=True, null=True, verbose_name='Descripción')),
                ('tipo', models.CharField(max_length=100, verbose_name='Tipo de Recurso')),
                ('cantidad_total', models.IntegerField(default=0, verbose_name='Cantidad Total')),
                ('cantidad_disponible', models.IntegerField(default=0, verbose_name='Cantidad Disponible')),
                ('unidad_medida', models.CharField(blank=True, max_length=50, null=True, verbose_name='Unidad de Medida')),
                ('fecha_creacion', models.DateTimeField(auto_now_add=True, verbose_name='Fecha de Creación')),
                ('fecha_actualizacion', models.DateTimeField(auto_now=True, verbose_name='Fecha de Actualización')),
            ],
        ),
    ]
