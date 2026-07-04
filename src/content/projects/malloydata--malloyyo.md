---
repo: "malloydata/malloyyo"
name: "malloyyo"
description: " Serve any AI a Malloy semantic model over MCP — accurate, consistent answers from your data."
readmeQualityOk: true
url: "https://github.com/malloydata/malloyyo"
homepage: "https://malloyyo.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 8
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-05-20T17:06:34Z"
lastCommitAt: "2026-07-04T23:15:35Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 57
maintainers: ["lloydtabb", "mtoy-googly-moogly", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4509205f3fe736eb448d30988114ae3042aa4501ad819abf16fb211941898466/malloydata/malloyyo"
---

# malloyyo

A **natural-language interface to any corpus of data, however complex** — accurate and consistent, served to any AI over MCP.

**Problem:** AI + document context + your analytical database = **inconsistent** results. Pointed at a raw database, an AI writes SQL from scratch — so the same question tomorrow yields a different query and different numbers, with wrong joins, invented columns, or fan-out double-counts that still *look* right.

**Solution:** AI + a [Malloy](https://malloydata.dev) **semantic layer** + your analytical database = **consistent** results. Measures, dimensions, and joins are defined once, correctly; the AI composes queries against the model instead of writing SQL, so numbers come back right by construction.

Malloyyo is the thin layer that serves that model:

- **Thin by design** — it sits between the AI and your data, nothing more.
- **Develop, then publish** — build the model locally and `malloyyo publish` it (or point Malloyyo at a GitHub repo).
- **Claude already knows Malloy** — the same way it knows Python — so authoring is incredibly fast and assisted.
- **Readable, full-featured queries** — Malloy is a complete query language (join, nest,…
