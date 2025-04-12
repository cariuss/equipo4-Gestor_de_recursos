from django.contrib import admin
from django.urls import include, path
from rest_framework import routers, permissions
from apps.recursos.views import RecursoViewSet
from apps.peticiones.views import PeticionViewSet
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

router = routers.DefaultRouter()
router.register(r'recursos', RecursoViewSet)
router.register(r'peticiones', PeticionViewSet)

schema_view = get_schema_view(
   openapi.Info(
      title="Gestor de Recursos API",
      default_version='v1',
      description="Documentación de las APIs del Gestor de Recursos",
      contact=openapi.Contact(email="contact@gestor.local"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api/', include('rest_framework.urls', namespace='rest_framework')), 
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   #  path('v1/', include('router.urls')),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
