---
repo: "babarot/claude-recall"
name: "claude-recall"
description: "A searchable archive of your coding agent sessions — CLI, MCP, and a live web UI, all on SQLite FTS5."
readmeQualityOk: true
url: "https://github.com/babarot/claude-recall"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [78, 21]
stars: 26
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-04-10T07:48:08Z"
lastCommitAt: "2026-10-09T10:50:04Z"
lastReleaseAt: "2026-10-03T10:20:03Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 49
maintainers: ["babarot", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b9dcc70ba888e851a5cec0027e7bdda1957e4558f4cc295e9264ca8c6e60fae/babarot/claude-recall"
---

# claude-recall

Recall any past Claude Code session: ask Claude to look into it, or find it yourself and go back to it.

claude-recall archives every Claude Code session into SQLite, including the ones whose JSONL Claude Code has since deleted, and gives you three ways back into them from one binary called `recall`:

- MCP server: Claude searches past sessions and reads what was done in them, from inside the session you are working in
- TUI: find a session yourself and resume it where it left off
- Web UI: read past conversations comfortably in the browser, live as they are written

With the [Claude Code plugin](#claude-code-plugin), recall also shows up [in Claude Code](#in-claude-code) itself: the repository's last sessions when you start, search results you can read at a glance, and `/recall`.

## Quick start

```bash
curl -fsSL https://raw.githubusercontent.com/babarot/claude-recall/main/bin/install.sh | bash
recall
```

The installer puts `recall` in `~/.local/bin`, imports your sessions and registers the MCP server with Claude Code. Then ask Claude about a past session ("how did we set up the staging deploy last month?"), or run `recall` to browse them. See…
