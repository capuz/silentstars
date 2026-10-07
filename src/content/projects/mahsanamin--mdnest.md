---
repo: "mahsanamin/mdnest"
name: "mdnest"
description: "Privately-hosted markdown notes — reachable from your browser, terminal, and AI assistants, all on your own hardware"
readmeQualityOk: true
url: "https://github.com/mahsanamin/mdnest"
homepage: "https://mdnest.dev"
language: "JavaScript"
languages: ["JavaScript", "Go"]
languagePcts: [43, 37]
stars: 26
forks: 7
openIssues: 1
closedIssues: 7
watchers: 4
contributors: 6
recentReleases: 5
createdAt: "2026-03-18T11:10:24Z"
lastCommitAt: "2026-10-07T10:31:28Z"
lastReleaseAt: "2026-08-02T11:30:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 45
maintainers: ["mahsanamin", "core-hsol"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a6831a04c9350825e20a1ace9d0b7b2688c86655556cb91f0a8f23b7e59fbd4/mahsanamin/mdnest"
---

# mdnest

**Your notes. On your server. Open in a browser, a terminal, or Claude.**

mdnest is a notes app you run yourself. Every note is an ordinary Markdown file
in a folder you chose — so you can open it in mdnest, `grep` it from a terminal,
or let an AI agent read and edit it, and it is always the same file.

No cloud account. No database to feed. Nothing leaves your machine.

### Three ways in, one set of files

Most people find mdnest as a web app and never learn the rest. The **CLI** talks
to *several servers at once* — `mdnest read @work/engineering/spec.md` and
`mdnest append @home/journal/today.md "..."` from the same shell. The **MCP
server** gives Claude or Cursor the same read and write access, so an agent has
a memory that survives the session.

### What you get

- 📝 **A real editor.** Markdown turns into rich text as you type — tables you
  edit like a spreadsheet, diagrams from a code fence, math, drag-and-drop
  images. Or flip to plain text whenever you want.
- 🗂️ **Folders, not one big pile.** Nest them as deep as you like, and keep
  separate workspaces for work, home and side projects.
- 👥 **Two people, one note.** See who else is in it, watch them type,…
