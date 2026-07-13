---
repo: "6temes/rails-informant"
name: "rails-informant"
description: "Self-hosted error monitoring for Rails with MCP server for agentic workflows"
readmeQualityOk: true
url: "https://github.com/6temes/rails-informant"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [97]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-02T12:42:15Z"
lastCommitAt: "2026-07-13T06:38:46Z"
lastReleaseAt: "2026-03-09T12:16:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 43
maintainers: ["6temes", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf95f093214272715f9e29040754ec0a734dc7d439236be0bce4837fbc198abe/6temes/rails-informant"
---

<h1 style="margin-top: 10px;">Rails Informant</h1>

  <h2>Self-hosted error monitoring for Rails, built for AI agents</h2>

  </div>

  <p>
    &#9670; <a href="#configuration">Configuration</a>
    &#9670; <a href="#noise-suppression">Noise Suppression</a>
    &#9670; <a href="#mcp-server">MCP Server</a>
    &#9670; <a href="#data-and-privacy">Data and Privacy</a>
  </p>
</div>

---

Captures exceptions, stores them in your app's database with rich context (backtraces, breadcrumbs, request data), sends notifications, and exposes error data via a bundled MCP server -- so AI agents can query, triage, and fix production errors directly.

No dashboard. The agent *is* the interface.

- **Agent-native** -- 14 MCP tools let AI agents list, inspect, resolve, and fix errors without a browser.
- **Self-hosted** -- Errors stay in your database. No external service, no data leaving your infrastructure.
- **Zero-config capture** -- Automatic via `Rails.error` subscriber and Rack middleware. Breadcrumbs from `ActiveSupport::Notifications` provide structured debugging context.
- **Lightweight** -- Two database tables, no Redis, no background workers beyond ActiveJob.

## Quick Start

Add to…
