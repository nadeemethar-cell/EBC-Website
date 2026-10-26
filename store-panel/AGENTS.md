# Store panel guidance

- This is a planned internal interface for store operations. Its workflows, inventory rules, order lifecycle, and supported devices remain to be confirmed.
- Do not assume a stock adjustment, sale, reservation, return, or order has business meaning until that rule is specified.
- Use the shared server API for data access and enforce store-role permissions on the server.
- Keep store-only information out of the public website and employee views unless an explicit access rule allows it.
