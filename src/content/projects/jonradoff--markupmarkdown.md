---
repo: "jonradoff/markupmarkdown"
name: "markupmarkdown"
description: "Google-Docs-style commenting on markdown files, with built-in editing and GitHub integration. Integrates with GitHub. Self-hosted, lightweight, BYOK AI revision."
url: "https://github.com/jonradoff/markupmarkdown"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [69, 31]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-03T21:33:27Z"
lastCommitAt: "2026-07-03T12:40:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 44
maintainers: ["jonradoff"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bedb4f895932729b8da2d645636cb7538e1bef5ef2190c9eb0c0db8e128ed70/jonradoff/markupmarkdown"
---

# markupmarkdown

**Google Docs for markdown — comment on, edit, and ship `.md` files like it's a real document.** Paste a URL, drag-select text, leave a margin comment. Your teammates see it in real time. Edit the raw markdown in a native CodeMirror editor with a formatting toolbar, find-and-replace, and live preview. Resolve threads, then hand them to Claude for an AI-revised version — or push your edits straight back to GitHub as a pull request or direct commit. Agents join the same review through an MCP server: they read what humans read, leave threads humans approve, and (with explicit human sign-off) apply the resolved feedback as a new revision.

Unlike Google Docs, edits happen on the actual markdown — so the file in your repo stays the source of truth and the round-trip back to GitHub is one click.

Live: **<https://mumd.metavert.io/>**

---

## The problem

Markdown is where a lot of real thinking lives now — PRDs, design docs, RFCs, release notes, prompts, briefs. But the tools for *reviewing* it are miserable:

- **GitHub PRs** force every discussion through a code-review workflow. Fine for production code, painful for a quick "this paragraph is unclear" on a…
