# Owner admin panel guidance

- This is a planned owner-only control interface. The owner role, emergency recovery, audit history, and settings scope need explicit product decisions.
- Enforce owner authorization on the server for every privileged operation; never rely on a hidden route, button, or client-side role flag.
- Treat changes affecting users, permissions, catalog, orders, and configuration as auditable operations when those capabilities are introduced.
- Do not expose secrets in the panel's client bundle or logs. Require confirmation for destructive actions in a future implementation.
