---
repo: "tidydesigns/tidy"
name: "tidy"
description: "Tidy is an open source product canvas for designers, engineers, and agents. Apache-2.0."
readmeQualityOk: true
url: "https://github.com/tidydesigns/tidy"
homepage: "https://tidydesign.co"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["agents", "design", "javascript", "open-source", "typescript", "mcp", "alternative", "agent"]
stars: 37
forks: 1
openIssues: 9
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-08T23:02:30Z"
lastCommitAt: "2026-10-26T20:59:32Z"
lastReleaseAt: "2026-10-22T11:30:49Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 82
undervaluedScore: 37
maintainers: ["tadhgdowdall", "seandowdall", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a566c583e48ed68bd87fe998a1c2d1bb143352d20fe14b69f034814fd451cd8d/tidydesigns/tidy"
---

An open-source canvas for designers, engineers and agents.

## Made for working together

- **Design on the canvas.** Create interfaces with editable layers.
- **Bring your agent.** Read, create and edit designs through MCP.
- **Work together.** Collaborate with teammates in the same workspace.
- **Capture webpages.** Bring webpages into Tidy with the browser extension.
- **Keep control.** Open source. Self-host on your own infrastructure.

## Watch Tidy in action

Watch the 19-second walkthrough. Click the preview for the full video with sound.

## Local development

You'll need Bun 1.3.14, Git and Docker Compose. Database tests also require
PostgreSQL 17 command-line tools.

```sh
git clone https://github.com/tidydesigns/tidy.git
cd tidy

bun install --frozen-lockfile
docker compose up -d --wait
cp apps/web/.env.example apps/web/.env.local
```

In `apps/web/.env.local`, generate and set `BETTER_AUTH_SECRET` and a separate
`VAULT_ENCRYPTION_KEY`. The encryption key must be a base64-encoded, 32-byte value.

Password accounts require email verification. Before creating an account,
configure your own Cloudflare Email Sending token, account and sender. Disable
email previews that…
