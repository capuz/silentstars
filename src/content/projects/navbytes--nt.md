---
repo: "navbytes/nt"
name: "nt"
description: "A terminal task & note manager that stores everything as **plain files** — todo.txt tasks + markdown notes — so your editor, `grep`, `git`, and AI coding agents can all read and write it directly. Built to be the durable memory layer for AI sessions: action items an agent creates survive the session in text the next agent can read back."
readmeQualityOk: true
url: "https://github.com/navbytes/nt"
language: "Go"
languages: ["Go", "Svelte"]
languagePcts: [59, 23]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-06T15:01:48Z"
lastCommitAt: "2026-07-28T15:03:44Z"
lastReleaseAt: "2026-06-09T04:07:10Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 53
maintainers: ["navbytes", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb5d16f1a7663954008c20b60c3712bff38561ab21f2b0c3fabb1df11912c710/navbytes/nt"
---

# nt

### Tasks & notes as plain text — durable memory your AI agents can't lose.

**Agents forget. Your files don't.** `nt` is a terminal-first task & note manager that keeps everything as plain files — todo.txt tasks and Markdown notes — so your editor, `grep`, `git`, and your AI coding agents all read and write the same source of truth. One static binary. No database. No cloud.

[Quickstart](#-quickstart) · [Why nt](#-why-youll-like-it) · [AI memory](#-durable-memory-for-your-ai-agents) · [The three faces](#-three-faces-one-store) · [vs. alternatives](#-how-it-compares) · [Docs](https://github.com/navbytes/nt/blob/HEAD/SPEC.md)

</div>

---

Most tools make you choose: a slick app that locks your data in a cloud silo, or a pile of text files with no structure. `nt` refuses the trade-off. Your tasks live in `tasks.txt` (the [todo.txt](https://github.com/todotxt/todo.txt) format). Your notes live as `.md` files with YAML frontmatter and `[[wikilinks]]`. On top of those plain files, `nt` gives you a fast CLI, a gorgeous terminal UI, an embedded web app, and a first-class memory loop for AI coding sessions — without ever changing the files underneath. Point Obsidian at the same…
