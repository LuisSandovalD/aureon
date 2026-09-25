# Base de datos

PostgreSQL es la base principal y Prisma el ORM.

El esquema inicial contiene únicamente agregados necesarios para el primer bloque funcional: `User`, `Project`, `Task`, `Goal` y `AuditLog`. Se ampliará por fases, evitando modelos especulativos.

## Reglas

- IDs CUID.
- `createdAt` y `updatedAt` en entidades mutables.
- Índices para filtros frecuentes por usuario, estado, prioridad y fechas.
- Eliminación en cascada solo cuando el dato depende completamente del usuario.
- Relaciones opcionales usan `SetNull` cuando preservar el historial sea preferible.
