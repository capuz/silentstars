---
repo: "CasualOffice/docs"
name: "docs"
description: "Open-source self-hosted web .docx editor with real-time co-editing — an alternative to Google Docs, Microsoft Word Online, and OnlyOffice Document Server you run on your own server."
url: "https://github.com/CasualOffice/docs"
homepage: "http://docs.casualoffice.org/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [55, 40]
topics: ["bun", "co-editing", "collaboration", "docker", "document-editor", "docx", "docx-editor", "go", "ooxml", "open-source"]
stars: 10
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-16T17:22:54Z"
lastCommitAt: "2026-06-28T01:36:24Z"
lastReleaseAt: "2026-06-16T21:36:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 51
maintainers: ["schnsrw"]
openGraphImageUrl: "https://opengraph.githubassets.com/fff79f070d0fb48b8bf9d32109ab06c3c2b4363b3f08b6c0dd3391c6ef251401/CasualOffice/docs"
---

</a>

# Casual Docs

**Open-source, self-hosted web `.docx` editor with real-time co-editing — a Google Docs / Word Online / OnlyOffice alternative you run on your own server.**

[**Live Demo →**](https://docs.casualoffice.org/) &nbsp;·&nbsp; [Docker Hub →](https://hub.docker.com/r/casualoffice/docs) &nbsp;·&nbsp; [Architecture →](./docs/ARCHITECTURE.md)

<sub>The hosted demo is **single-user** (try the editor). **Real-time co-editing** runs in the [Docker image](#-self-host-with-docker) — one container, share a link, edit together.</sub>

<br />

</div>

---

Casual Docs is a **self-hostable, browser-based `.docx` editor** that looks and behaves like Microsoft Word — ribbon-style toolbar, paginated WYSIWYG layout, file-centric workflow — with **real-time multi-user co-editing** built in. Upload a `.docx`, share a link, edit together instantly. **No accounts, no Microsoft / Google login, no lock-in.** One Docker container, a **stateless Go gateway** (~120 LOC of y-websocket protocol), in-memory rooms.

Sister projects: [Casual Sheets](https://github.com/CasualOffice/sheets) (`.xlsx`) and [Casual Slides](https://github.com/CasualOffice/slides) (`.pptx`).

---

## ✨ What's Inside…
