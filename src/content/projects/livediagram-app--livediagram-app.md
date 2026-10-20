---
repo: "livediagram-app/livediagram.app"
name: "livediagram.app"
description: "livediagram.app mono repo. Containing frontend and backend code."
readmeQualityOk: true
url: "https://github.com/livediagram-app/livediagram.app"
homepage: "https://www.livediagram.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["collaborate", "diagram", "whiteboard"]
stars: 9
forks: 3
openIssues: 9
closedIssues: 53
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-29T07:46:57Z"
lastCommitAt: "2026-10-20T08:49:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 58
maintainers: ["tommcclean"]
openGraphImageUrl: "https://opengraph.githubassets.com/e03f50c1afda1cb7d3e3f1fa0287141af37b40223764b67bcc11c94681fcd71c/livediagram-app/livediagram.app"
fundingLinks: ["KO_FI:https://ko-fi.com/livediagram"]
discussionCount: 4
---

# livediagram

A collaborative diagram editor that works without signing in. Open a link, draw, share. Real-time presence, cursors, comments, undo and redo. The canvas never sits behind an auth wall, so the friction to start is "open the link, start drawing."

**Live at [livediagram.app](https://livediagram.app).** MIT-licensed and self-hostable end-to-end.

```
apps/        marketing site + editor + telemetry dashboard + help centre + community + api + mcp server + router + cli
packages/    shared document model, wire-format types, UI primitives, icon + template catalogues + template previews, help-article registry, the Explorer filter lens, page backgrounds (slides and form covers), Form tabs, items and the Plan board projection, Plan images, the Sheet engine, the api client and agent verbs, the edit-operations engine, document views, the diagram lint, PNG rendering, sticky-note photo detection, telemetry client, the TypeScript source parser for static guards, the licences generator, test fakes, configs
scripts/     repo-wide dev tooling (shared Next.js dev launcher)
docs/        guides, product specs (docs/specs, read these before adding features) and instructions
marketing/…
