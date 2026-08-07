---
repo: "recombyn/recombyn"
name: "recombyn"
description: "Source-available visual design editor + AI Design Agent. Self-host with Docker Compose."
readmeQualityOk: true
url: "https://github.com/recombyn/recombyn"
homepage: "https://recombyn.com"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [64, 35]
topics: ["ai", "design-agent", "fastapi", "langgraph", "react", "self-hosted", "typescript", "design-editor", "visual-editor", "docker"]
stars: 15
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-16T13:03:40Z"
lastCommitAt: "2026-08-07T05:15:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 47
maintainers: ["recombyn"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d83e5867a9bc89ee3a7e765bf47a4a76e08b64fbd192afb1167807ee61cfbfb/recombyn/recombyn"
discussionCount: 1
---

</p>

</p>

</p>

  &nbsp;
  &nbsp;
</p>

**Recombyn** is a **canvas editor + AI Design Agent** (source-available).  
Design on an infinite canvas; a LangGraph agent edits layers, shapes, text, and layout through conversation.

Self-host in minutes with Docker Compose (default **MySQL** + Redis + web + API + **Yjs collab**). Local dev can use **SQLite** (empty `DATABASE_URL`), or **PostgreSQL** — see [docs/postgres-switch.md](https://github.com/recombyn/recombyn/blob/HEAD/docs/postgres-switch.md).

---

## Why Recombyn?

- **Real canvas editing** — Frames, shapes, images, video, text; export and share
- **Live multiplayer** — Yjs sync for the same project (cursors, selection, undo); share view-only or edit
- **Agent that paints** — Conversation plans and applies canvas ops
- **Self-host first** — Same stack locally or on a server
- **Composable** — Infra seeds + prompt packs + **5 core Agent skills** under `apps/api/data/`

## Core features

- **Visual editor** — selection, layers, fills, export, share
- **Realtime collab** — Yjs WebSocket room (`apps/collab`); Live bar in the editor; WSS via nginx `/collab/`
- **Design Agent** — LangGraph tools / skills; create, edit, and chat…
