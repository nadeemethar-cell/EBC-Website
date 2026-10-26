---
name: ebc-programs
description: Project-specific guidance for building EBC's public website, store panel, employee phone app, owner admin panel, and shared data platform in this repository.
---

# EBC Programs project skill

Use this skill for work in the EBC Programs repository, especially changes involving more than one application or shared business data.

## Before changing code

1. Read the root `AGENTS.md` and the nearest folder-specific `AGENTS.md`.
2. Identify which of the four interfaces the request affects and which user role/device it serves.
3. Treat unconfirmed workflows and business rules as open questions. Implement only confirmed scope; record important decisions in the relevant README or shared contract.

## Architecture boundaries

- The product has four distinct interfaces: public website, store panel, employee phone app, and owner admin panel.
- All share one canonical data platform. Client applications call a server API; they never connect directly to the database.
- Authentication identifies the caller; server-side authorization decides which records and actions that caller may access.
- The admin panel is owner-only. Check owner permission at the server for every privileged action.
- Keep shared API schemas and business rules in `database/` and update affected consumers when a contract changes.
- Do not place secrets or private operational data in browser/mobile code or version control.

## Product and implementation restraint

- Preserve the existing static website and its Arabic/English support unless the task explicitly changes them.
- Do not present scaffolding, mock data, or email drafts as connected production functionality.
- Do not choose a framework, database vendor, identity provider, hosting platform, or offline strategy without a stated requirement or an explicit architecture decision.
- Keep proposed store and employee workflows clearly marked as proposals until the owner confirms them.
