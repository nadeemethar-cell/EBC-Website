# EBC Programs

EBC Programs is the planned home for Ether Building Chemical's public website and internal business tools. The repository is organized as four user-facing applications backed by one shared data platform.

## Project areas

| Folder | Purpose | Intended users |
| --- | --- | --- |
| [`website/`](website/README.md) | Public product catalog and company information | Customers and visitors |
| `store-panel/` | Store operations, such as product and order workflows (scope to confirm) | Store staff |
| `employee-app/` | Phone-first access to the store information employees need (scope to confirm) | Employees |
| `admin-panel/` | Owner-only controls, configuration, access management, and oversight | EBC owner |
| `database/` | Shared API/backend boundary, data model, migrations, and database guidance | All applications through authorized APIs |

## Architecture direction

- Keep the four interfaces separate so each can fit its users and devices.
- Keep one canonical shared data model. Applications should use an authenticated server API; browser and phone clients must not connect directly to the database.
- Enforce permissions on the server for every operation. Hiding a button in an interface is not access control. Owner-only actions require server-side owner authorization.
- Define API contracts and data ownership before implementing cross-application features. Keep secrets out of source control and client bundles.
- Technology choices, deployment, authentication provider, and exact store/employee workflows are intentionally undecided until requirements are discussed.

## Current state

`website/` contains the existing static Arabic-first, bilingual catalog. The other areas are documentation scaffolds; no store panel, phone app, admin panel, API, or database has been implemented yet.

## Working in this repository

Read the root [`AGENTS.md`](AGENTS.md) before making changes, then follow the closest folder-specific `AGENTS.md`. The project skill at [`.agents/skills/ebc-programs/SKILL.md`](.agents/skills/ebc-programs/SKILL.md) describes the shared architecture and product boundaries.

Do not assume that the current static website's email-draft cart is a production order system. Confirm scope and data flows before connecting it to shared services.
