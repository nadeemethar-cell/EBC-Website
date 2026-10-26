# EBC Programs repository guidance

## Product shape

- This repository is one EBC product with four separate interfaces: public website, store panel, employee phone app, and owner admin panel. `database/` holds the shared service and persistence guidance.
- Preserve the existing website in `website/`; keep its assets and relative asset paths together.
- Treat scope notes as proposals until the owner confirms workflows, fields, and permissions. Do not invent business rules, pricing, stock rules, or employee capabilities.

## Shared system rules

- Keep a single canonical source of business data. Cross-application reads and writes go through authenticated server-side APIs, never direct database access from a browser or mobile client.
- Enforce authorization at the API/service boundary for every action. Admin-only operations require owner authorization on the server; UI visibility is not a security boundary.
- Document API contracts, data ownership, validation, and permission changes where they are introduced. Keep interfaces independently understandable and device-appropriate.
- Never commit secrets, real customer/employee data, credentials, or production database dumps. Use documented placeholders for configuration.
- Avoid selecting frameworks, hosting, identity providers, or database products before requirements call for a decision.

## Change workflow

- Read the relevant folder `AGENTS.md` and `.agents/skills/ebc-programs/SKILL.md` before cross-application work.
- Keep changes within the requested area. When a change affects multiple applications, update the shared contract and all affected consumers together.
- Do not describe a scaffold as a working application or claim that the system is connected until the API, authentication, and persistence are implemented and verified.
