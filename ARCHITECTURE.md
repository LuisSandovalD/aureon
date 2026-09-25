# Arquitectura de AUREON

AUREON es una instalación personal, local-first y no multi-tenant. El dominio no depende de proveedores externos de IA.

## Estilo

Se adopta arquitectura hexagonal por módulo:

- `domain`: entidades, reglas e invariantes.
- `application`: casos de uso y puertos.
- `infrastructure`: Prisma, almacenamiento, sesión y adaptadores externos.
- `presentation`: componentes, Server Actions y Route Handlers.

La estructura se crea a medida que existan implementaciones reales; no se mantienen carpetas vacías.

## Dependencias

Las dependencias apuntan hacia el dominio. Los componentes React no contienen reglas de negocio. Prisma queda confinado a infraestructura. La futura IA local se expondrá mediante un puerto `AIProvider`, con Ollama como adaptador opcional.

## Local-first

PostgreSQL y archivos viven en infraestructura controlada por el usuario. Funciones centrales —tareas, proyectos, notas, calendario, finanzas, búsqueda básica y reportes— no necesitarán Internet.
