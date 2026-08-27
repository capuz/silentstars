---
repo: "edenthecat/wanderline"
name: "wanderline"
description: "Wanderline: turn Ink or Twee 3 branching narratives into audio-first, choice-driven web apps."
readmeQualityOk: true
url: "https://github.com/edenthecat/wanderline"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-07-07T23:03:46Z"
lastCommitAt: "2026-08-27T14:18:18Z"
lastReleaseAt: "2026-08-27T01:32:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 82
undervaluedScore: 55
maintainers: ["edenthecat", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7510f83591756680cc64af37680c85dc947ff4c073294d0c7847442fcd5b96cd/edenthecat/wanderline"
---

# Wanderline

Wanderline turns branching-narrative source files into audio-first, choice-driven web apps. You upload an [**Ink**](https://www.inklestudios.com/ink/) (`.ink`) or [**Twee 3**](https://github.com/iftechfoundation/twine-specs/blob/master/twee-3-specification.md) (`.tw*`) story, attach voiceover / music / choice-indicator audio, and the tooling generates a standalone player app the reader can listen to and navigate with keyboard, on-screen buttons, or Bluetooth headphone controls with no screen at all.

The project is a single npm-workspaces monorepo covering four packages:

| Package       | What it is                                                                                                                                                                                   |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `backend/`    | Express + Postgres API. Ink / Twee parsers, story graph storage, audio ingest, Yjs collab server, build pipeline, GCS-backed downloads.…
