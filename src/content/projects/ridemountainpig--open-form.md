---
repo: "ridemountainpig/open-form"
name: "open-form"
description: "A form framework built for agents."
readmeQualityOk: true
url: "https://github.com/ridemountainpig/open-form"
homepage: "https://open-form.build"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
topics: ["agent", "agent-framework", "form", "react"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-13T16:49:55Z"
lastCommitAt: "2026-10-25T02:47:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 44
maintainers: ["ridemountainpig", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1417523335/051613c2-3a9d-47dc-829c-751db3426419"
---

# Open Form

**Forms your agent writes. Responses you own.**

Open Form is an open-source form framework for coding agents. Describe the form to your agent: it writes one React file, and Open Form turns that file into a working form, checked in the browser and on the server, with a submission API, SQLite storage and a Studio for the answers.

[Website](https://open-form.build) · [Docs](https://open-form.build/docs) · [Live demo](https://demo.open-form.build) · [npm](https://www.npmjs.com/package/@open-form-build/core)

```
Questions + Logic  →  Production-ready Form  →  Responses
```

```bash
pnpm create open-form my-forms
cd my-forms
pnpm dev
```

Or `npm create open-form@latest my-forms`, then `npm run dev`. Requires Node.js 22.13+. Forms import from `@open-form-build/core`, and its CLI is `open-form`.

Then ask your coding agent (Claude Code, Codex, Cursor, …):

> Create a registration form for a developer meetup. Ask for name, email, role and experience. If they're a student, ask for their school. Limit the event to 100 registrations.

## Why

A coding agent can already write a form. It just rewrites the same hundreds of lines every time — state, validation, multi-step…
