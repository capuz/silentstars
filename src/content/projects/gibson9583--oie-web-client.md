---
repo: "gibson9583/oie-web-client"
name: "oie-web-client"
description: "Node Client for Open Integration Engine"
readmeQualityOk: true
url: "https://github.com/gibson9583/oie-web-client"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [73, 25]
stars: 11
forks: 4
openIssues: 2
closedIssues: 58
watchers: 2
contributors: 13
recentReleases: 9
createdAt: "2026-06-15T17:12:43Z"
lastCommitAt: "2026-10-26T18:06:35Z"
lastReleaseAt: "2026-10-20T22:57:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 60
maintainers: ["gibson9583"]
openGraphImageUrl: "https://opengraph.githubassets.com/e85e4081275f0e8235adc6abefb68a97a108e2b077ac233da17194fede8da6a0/gibson9583/oie-web-client"
---

# OIE Web Client

A web-based administrator for **[Open Integration Engine](https://github.com/openintegrationengine)** (OIE / Mirth Connect) — a browser
replacement for the Swing Administrator client. Run it as a standalone Node.js
app, use the published Docker image, or deploy its optional WAR directly into an
existing OIE server. It talks to the engine over the REST API and is **pluggable**: extension
developers add features by dropping a folder into `plugins/` (the web equivalent
of the engine's `plugin.xml` extension model).

Both administrators can be used side by side against the same engine — this app
is read/write through the same `/api` surface the Swing client uses. An optional
**[Web Support plugin](#requirements)** adds message-tree serialization,
engine-side JavaScript validation, engine-served plugin UIs, and an embedded WAR;
the rest of the administrator continues to work without it.

```
┌─────────────┐   http :3030    ┌──────────────────┐   https :8443/api   ┌────────────┐
│   Browser   │ ──────────────▶ │   Web Client     │ ──────────────────▶ │   Engine   │
│  (this SPA) │                 │  (Node/Express)  │   reverse proxy     │ (OIE/Mirth)│
└─────────────┘…
