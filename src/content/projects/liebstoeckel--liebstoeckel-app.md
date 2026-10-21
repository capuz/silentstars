---
repo: "liebstoeckel/liebstoeckel-app"
name: "liebstoeckel-app"
description: "Code-first presentations that are real software driven by agents. Authored in MDX + React, shipped as one self-contained .html. Ejecatble to edit .html file as package. Built on Bun + React 19 + Tailwind v4."
readmeQualityOk: true
url: "https://github.com/liebstoeckel/liebstoeckel-app"
homepage: "https://docs.liebstoeckel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["ai", "ai-agents", "presentation-slides", "skills", "slides"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-27T15:05:55Z"
lastCommitAt: "2026-10-21T23:36:45Z"
lastReleaseAt: "2026-06-02T20:54:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 54
maintainers: ["limond"]
openGraphImageUrl: "https://opengraph.githubassets.com/111a4fc4565207999b729e390880e8b32bf4cf534091221aad25fa8f769a65e3/liebstoeckel/liebstoeckel-app"
discussionCount: 2
---

# liebstoeckel

> **Status: experimental, pre-1.0.** liebstoeckel is an evolving experiment, not yet production-ready. Before 1.0, breaking changes can land in any release without a major-version bump, so pin an exact version if you depend on it.

liebstoeckel is a code-first presentation engine. You write slides in MDX for prose and TSX for anything interactive, theme them from one place, and build a single portable `.html` per deck.
It runs on Bun, React 19, Motion, and Tailwind v4.

Being technical-first is the point: a deck is plain source you edit and own.

That targets a specific problem with AI-built decks. When an agent generates a presentation, the output is usually a finished artifact you cannot open up and edit by hand. liebstoeckel keeps a deck as plain TSX and MDX, and every build inlines its own source into the `.html`, so the file can be ejected back into an editable project. An agent writes the deck; you still own it and can change it.

Every deck ships with a presenter view and runs offline as a single file. When you want the room involved, the CLI hosts that same file as a live session and syncs state between presenter and audience, so people answer polls, ask…
