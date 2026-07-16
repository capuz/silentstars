---
repo: "Offsend/Offsend"
name: "Offsend"
description: "Local-first protection for AI coding agents. Check prompts, guard sensitive file reads and shell commands, and keep secrets out of AI context."
readmeQualityOk: true
url: "https://github.com/Offsend/Offsend"
homepage: "https://offsend.io"
language: "Swift"
languages: ["Swift"]
languagePcts: [94]
topics: ["swift", "utilities", "local-first", "privacy", "safe-ai", "agent", "ai-security", "claude-code", "cursor"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-08T07:53:12Z"
lastCommitAt: "2026-07-16T06:00:15Z"
lastReleaseAt: "2026-06-01T12:22:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 54
maintainers: ["hudishkin", "fly-io[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb2706bc00932faba8ec67fb351eea954d9a0bdc877907de88ae2d56e57bdffd/Offsend/Offsend"
---

<h1 align="center"><code>*}• Offsend</code></h1>

  See and fix what AI tools can read.<br>
  Local-first privacy checks for terminals, CI, and macOS — before Claude Code, Codex, Cursor, or Windsurf see your context.
</p>

</p>

</p>

</p>

---

Offsend adds a local review step before sensitive data reaches an AI tool.

- Scanning runs locally on your machine.
- Code and file contents are not uploaded for analysis.
- No cloud account is required.
- The CLI is free and open source.

AI tools need context, but that context can accidentally include API keys, client data, private endpoints, certificates, or config files.

`.gitignore` protects Git. It does not define what AI tools should read.

No install yet? [Scan a public GitHub repo with Check](https://check.offsend.io) — free, no signup.

## Why Offsend

AI workflows create a new boundary problem.

A file does not need to be committed or publicly exposed to become AI context. It can reach an AI tool through a prompt, project index, coding assistant, uploaded document, clipboard, or Git diff.

Offsend helps review that context locally before it leaves your control.

**Platforms:** CLI on macOS and Linux (x86_64 / arm64) · macOS…
