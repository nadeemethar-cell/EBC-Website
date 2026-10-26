# Shared data platform

Planned shared backend/API and database layer for the four EBC interfaces. Keep API contracts, schema, migrations, and data ownership guidance here as implementation decisions are made.

The applications should use authenticated server APIs; only the server should hold database credentials. The API framework, database product, hosting, authentication provider, backups, and data-retention rules are still open decisions.

This folder is a scaffold, not a connected backend or database. See [`AGENTS.md`](AGENTS.md).
