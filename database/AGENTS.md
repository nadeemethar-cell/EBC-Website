# Shared backend and data guidance

- This folder represents the one shared data platform for all four applications. It may contain the server API, data contracts, schema, migrations, and seed examples as the architecture is agreed.
- Applications access shared data through authenticated server endpoints. Never ship database credentials or allow direct client-to-database connections.
- Define canonical ownership, validation, retention, and authorization for each data entity before use across applications.
- Keep schema changes versioned and review their effect on all consumers. Do not store production records, secrets, or real personal data in the repository.
- Database product, API framework, hosting, backup, and migration tooling are undecided; do not introduce them without an implementation decision.
