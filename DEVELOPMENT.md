# Desarrollo

## Requisitos

- Node.js 24 LTS o superior compatible.
- Docker con Compose.
- npm.

## Inicio

1. Copia `.env.example` a `.env`.
2. Genera un `SESSION_SECRET` local seguro.
3. Ejecuta `docker compose up -d postgres`.
4. Ejecuta `npm install`.
5. Ejecuta `npm run db:generate`.
6. Ejecuta `npm run db:migrate -- --name init`.
7. Ejecuta `npm run dev`.

Ollama es opcional: `docker compose --profile ai up -d ollama`.

## Verificación

Ejecuta `npm run check` antes de integrar cambios.
