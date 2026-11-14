---
repo: "yap-tools/yap-core"
name: "yap-core"
description: "Open source context layer"
readmeQualityOk: true
url: "https://github.com/yap-tools/yap-core"
homepage: "https://yap.tools"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 27
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-05T15:00:09Z"
lastCommitAt: "2026-11-14T10:45:13Z"
lastReleaseAt: "2026-06-18T09:44:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 24
maintainers: ["troels-a", "continuous-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/8844f67de67e488119c8525ab76b0399e27a2500301902db90b7bf6575545577/yap-tools/yap-core"
---

---

Yap is an API-first, self-hosted, open-source system for building **navigable
contexts** that any AI agent can connect to over MCP. There is no UI: a REST
API is the entire product surface. It runs **on a single machine by
default** — SQLite and local-disk file storage, no external dependencies —
and the same codebase swaps to Postgres and S3-compatible object storage by
configuration alone.

Context is modeled as a filesystem-like tree an agent can descend:

```
context (root)
└── space            (many per system)
    └── bundle       (many per space)
        ├── docs        (one or more; autoloaded binding instructions and read-on-demand docs)
        ├── item-types  (one or more schemas; each holds many items)
        ├── files       (many static files)
        └── services    (many named, driver-backed capabilities agents can run)
```

Spaces do not nest. Combining bundles is a **runtime act** — a session loads
several bundles into an ephemeral working set; bundles are never merged on
disk. The one thing outside the tree is **user docs**: account-level guidance
that travels with a user across all their spaces (optionally autoloading at
session start).

## Quickstart…
