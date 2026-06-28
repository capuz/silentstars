---
repo: "cliftonc/lastlight"
name: "lastlight"
description: "Self-hostable, MIT, Enterprise AI Coding Agent"
url: "https://github.com/cliftonc/lastlight"
homepage: "https://lastlight.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["agent", "ai", "coding", "harness"]
stars: 12
forks: 2
openIssues: 13
closedIssues: 53
watchers: 0
contributors: 5
recentReleases: 8
createdAt: "2026-04-04T05:20:57Z"
lastCommitAt: "2026-06-28T03:10:13Z"
lastReleaseAt: "2026-06-28T03:10:49Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 59
maintainers: ["cliftonc", "last-light[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb61f62b695708f63d62f2186a98265b8b2d08c847802ae27d64e894ef1c8033/cliftonc/lastlight"
---

</p>

<h1 align="center">Last Light</h1>

  <strong>GitHub Repository Maintenance Agent</strong><br/>
</p>

An AI agent that maintains GitHub repositories: triaging issues, reviewing PRs, monitoring repo health, and building features through an Architect → Executor → Reviewer development cycle.

Built on [agentic-pi](https://github.com/cliftonc/agentic-pi) (workflow phases) and [`@earendil-works/pi-ai`](https://www.npmjs.com/package/@earendil-works/pi-ai) (in-process chat) with a lightweight TypeScript harness for webhook ingestion, cron scheduling, and process management. Provider-agnostic — point `LASTLIGHT_MODEL` at any `provider/model` pi-ai supports (defaults to `anthropic/claude-sonnet-4-6`).

## Production Setup (Clean Server)

The fastest way to go from a bare server to a running Last Light instance:

```bash
npx lastlight setup
```

The setup wizard walks you through:

1. **GitHub App** — enter your App ID, Installation ID, and PEM key path
2. **Domain & TLS** — optional Caddy config for automatic HTTPS
3. **Managed repositories** — the `owner/repo` list the bot operates on
4. **Provider API key** — `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, and/or `OPENROUTER_API_KEY`,…
