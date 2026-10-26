---
repo: "DataZooDE/anofox-visualization"
name: "anofox-visualization"
description: "Charts & dashboards for DuckDB — the grammar of graphics, straight from SQL. Browser app (DuckDB-Wasm) + DuckDB extension."
readmeQualityOk: true
url: "https://github.com/DataZooDE/anofox-visualization"
homepage: "https://datazoode.github.io/anofox-visualization/"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [55, 30]
stars: 13
forks: 0
openIssues: 29
closedIssues: 249
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-13T14:07:22Z"
lastCommitAt: "2026-10-26T09:18:21Z"
lastReleaseAt: "2026-10-22T06:23:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 57
maintainers: ["sipemu"]
openGraphImageUrl: "https://opengraph.githubassets.com/b799532a594db2fdd07fb523ef97e69cef439709aceab80beef28df608ddff47/DataZooDE/anofox-visualization"
---

# Anofox Visualization - DuckDB Extension

Charts & dashboards for DuckDB — the grammar of graphics, straight from SQL. You
write ordinary DuckDB SQL and tag output columns with `::ROLE` casts; each
annotated `SELECT` becomes a panel (chart / KPI / table / input), rendered to
SVG by [ggplot-rs](https://github.com/sipemu/ggplot-rs), a
grammar-of-graphics engine. No JS charting library, no bespoke config — the
SQL *is* the dashboard.

> [!IMPORTANT]
> This extension is in early development, so bugs and breaking changes are expected.
> Please use the [issues page](https://github.com/DataZooDE/anofox-visualization/issues) to report bugs or request features.

```sql
LOAD anofox_visualization;

-- Convenience macros: pass columns, get one SVG per group.
WITH sales AS (SELECT * FROM (VALUES ('app',30),('web',22),('api',12)) t(ch,n))
SELECT anofox_bar(ch, n) FROM sales;                 -- <svg> bar chart
```

**[▶ Live demo](https://datazoode.github.io/anofox-visualization/)** — the full
builder running in your browser on DuckDB-Wasm. Its sidebar keeps your own
dashboards first, then one **Examples** library grouped by business area (start
here, demand & stock, logistics & production,…
