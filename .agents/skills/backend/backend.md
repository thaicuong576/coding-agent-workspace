# Backend Development Skill

Use this skill when designing backend components, databases, APIs, authentication, and processing pipelines.

## Architectural Best Practices

- **Strict Input Validation**: Always enforce validation schemas (Pydantic models in FastAPI, Zod/Joi in Node/NestJS) at API boundaries.
- **RESTful Design**: Use correct HTTP methods (GET, POST, PUT, DELETE, PATCH) and descriptive resource names.
- **ORM & Migrations**: Use ORMs (SQLAlchemy, Prisma, TypeORM) carefully. Ensure all database changes are backed by versioned migration files (Alembic, Prisma migrate).
- **Security & Authorization**:
  - Store passwords using secure algorithms (bcrypt, argon2).
  - Verify tokens (JWT) on protected routes.
  - Implement proper CORS policies and limit origin access.
- **Asynchronous Operations**: Use async functions for I/O bound operations (database calls, external API queries) to preserve server throughput.
- **Structured Error Handling**:
  - Implement custom HTTP exceptions with error codes and descriptive messaging.
  - Use global exception handlers/middleware to catch unhandled errors and prevent server crashes or detail exposure.
- **Background Workers**: Offload heavy computations or notification flows to background tasks (Celery, BullMQ, or native framework background task runners).
