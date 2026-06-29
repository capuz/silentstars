---
repo: "bluebear-io/baloo-bear"
name: "baloo-bear"
description: "AI-powered code review agent for GitHub pull requests. Self-hosted GitHub App using PI."
url: "https://github.com/bluebear-io/baloo-bear"
homepage: "https://www.bluebear.io"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["ai", "ai-code-review", "anthropic", "claude", "code-review", "devtools", "fastapi", "gemini", "github-app", "llm"]
stars: 33
forks: 3
openIssues: 7
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 4
createdAt: "2026-04-14T11:04:16Z"
lastCommitAt: "2026-06-29T07:23:13Z"
lastReleaseAt: "2026-06-07T06:16:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 43
maintainers: ["bb-amir", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f3c71b08a885c4c667e13aea5d12e9c9a1449c13d6e46de4c22889c2a773744/bluebear-io/baloo-bear"
discussionCount: 2
---

# Baloo: self-hosted AI code review for GitHub pull requests

</p>

---

Baloo is an open source **GitHub App for AI pull request review**. It installs on your repositories, reads PR diffs and relevant project context, and posts actionable review comments that catch bugs, security issues, missing error handling, and repository guideline violations before humans review the code.

Baloo is built for teams that want a **self-hosted AI code review agent** instead of a hosted SaaS reviewer. You run the service, control the GitHub App installation scope, and provide your own model API keys for Claude or Gemini.

Website: [BlueBear Security](https://www.bluebear.io)

## Why Baloo?

- **Catches what linters can't** — logic errors, silent failures, security antipatterns, missing error handling
- **Respects your conventions** — reads `AGENTS.md` and `CONTRIBUTING.md` from your repo and enforces them
- **Posts like a teammate** — inline comments on specific lines, severity labels, approval/request-changes decisions
- **Runs on every push** — new commits get reviewed automatically, with discussion thread tracking across iterations
- **Self-hosted & private** — your code never leaves your…
