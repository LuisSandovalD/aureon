# Seguridad

## Principios

- Secretos únicamente mediante variables de entorno.
- Contraseñas siempre con hashing resistente a fuerza bruta.
- Cookies de sesión HttpOnly, Secure en producción y SameSite apropiado.
- Validación de entrada con Zod en límites de confianza.
- Autorización antes de cada operación sensible.
- Rate limiting en autenticación y endpoints de riesgo.
- Sin stack traces, tokens o contraseñas en respuestas o logs.
- Archivos privados servidos únicamente tras autorización.
- Operaciones destructivas con confirmación explícita.

## Estado

La configuración inicial ya incorpora cabeceras defensivas. La implementación de autenticación, rate limiting, CSRF y políticas de archivos se realizará antes de exponer funciones de usuario.
