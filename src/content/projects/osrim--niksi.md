---
repo: "osrim/niksi"
name: "niksi"
description: "🪄 Install, review, and share agent skills."
readmeQualityOk: true
url: "https://github.com/osrim/niksi"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agent-skills", "ai-agents", "claude-code", "claude-skills", "cli", "homebrew", "opencode", "skills", "codex", "cursor"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-05T15:45:52Z"
lastCommitAt: "2026-11-13T18:31:44Z"
lastReleaseAt: "2026-09-19T18:48:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 44
maintainers: ["osrim", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c6e6491f27160ae682339dc2c34087b5e6466bbccd679e00e75c35b7505369c/osrim/niksi"
---

# niksi: install, review, and share agent skills

`nik` lets you install skills from Git repositories and keeps them up to date. Each skill is stored once and symlinked into your favourite agents: Claude Code, Codex, Cursor, Gemini CLI, GitHub Copilot, OpenCode, Windsurf, Amp, Kiro, Cline, Qwen Code, and any agent that reads `.agents/skills`.

> Niksi is the Finnish word for "trick"

## What you get

- **Install only what you need:** `nik add owner/repo` lists the skills in a repository. Pick the ones you want and which agents can use them.
- **Choose a scope:** install skills in a specific project or globally.
- **See what you are installing:** before anything is written, `nik` lists every file, scans the contents, and tells you if something looks harmful.
- **Scan installed skills again:** `nik audit` runs the current rules over the skills on disk, offline. Run it after you upgrade niksi.
- **Keep skills up to date:** `nik update` fetches each source and shows you the diff. Approve it, or keep what you have.
- **Pin what should never change:** `nik add owner/repo@v1.2.0`. Everything else follows the latest stable tag, or the default branch.
- **Share skills with your team:**…
