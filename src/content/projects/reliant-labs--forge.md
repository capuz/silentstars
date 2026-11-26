---
repo: "reliant-labs/forge"
name: "forge"
description: "Forge is an open-source framework and CLI that puts guardrails on any app and deploys it with no account: npx -y @reliantlabs/forge@latest env deploy prod --claimable"
readmeQualityOk: true
url: "https://github.com/reliant-labs/forge"
homepage: "https://reliantlabs.io/products/forge"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["ai-agents", "claude-code", "code-generation", "connect-rpc", "cursor", "deployment", "framework", "go", "kubernetes", "mcp"]
stars: 11
forks: 2
openIssues: 31
closedIssues: 127
watchers: 0
contributors: 5
recentReleases: 9
createdAt: "2026-04-12T21:19:37Z"
lastCommitAt: "2026-11-26T22:32:13Z"
lastReleaseAt: "2026-10-30T17:56:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 65
maintainers: ["reliant-01", "reliant-labs[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b136a9f0affa91a2bc80417b27235a4e55a3b662cd9cc3865e944dd8221f0f9/reliant-labs/forge"
---

# Forge

**Reliant Forge: deploy what your coding agent built, and let it prove the release works.**

One command deploys a Vite site, a statically exported Next.js site, or any app
with a Dockerfile, with a managed Postgres when the app uses one. Sign in free,
and your agent reads the release's traces, errors and pass/fail verdict through
the same CLI, or the verdict, errors and logs through Forge's MCP server.

```bash
npx -y @reliantlabs/forge@latest env deploy prod --claimable
```

Run it in your app's directory. No account is needed: it prints a live URL
and a claim link. The deploy goes offline after 72 hours unless someone opens
the link, which signs them up free and makes the deploy theirs. It is a
one-time link for you: keep it out of commits, issues and public places.
Until it is claimed, a service (not a static site) has no outbound internet.
Watching the release afterwards, its traces, errors and `forge obs check`
verdict, needs that free sign-in: there is no anonymous monitoring. The limits: [Deploying with no account](https://github.com/reliant-labs/forge/blob/HEAD/docs/mcp.md#deploying-with-no-account).
