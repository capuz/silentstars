---
repo: "kentcdodds/kody"
name: "kody"
description: "Your assistant's home — the memory, keys, code, and automations your AI agent keeps, portable across every MCP host. Built on Cloudflare Workers."
readmeQualityOk: true
url: "https://github.com/kentcdodds/kody"
homepage: "https://heykody.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agents", "ai-assistant", "cloudflare-workers", "code-mode", "mcp", "personal-assistant"]
stars: 355
forks: 29
openIssues: 4
closedIssues: 57
watchers: 3
contributors: 3
recentReleases: 10
createdAt: "2026-03-18T23:30:18Z"
lastCommitAt: "2026-07-22T06:10:55Z"
lastReleaseAt: "2026-07-19T16:08:32Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 31
maintainers: ["kentcdodds", "cursor[bot]", "kody-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0f311af976058cef3e7678f376d8b5a835c31349f83ade16cca48ac6d9ff48b/kentcdodds/kody"
---

<p>
    <strong>Your assistant's home — the memory, keys, code, and automations your AI agent keeps, portable across every MCP host. Built on Cloudflare Workers.</strong>
  </p>

  <p>
  </p>
</div>

---

Kody is your assistant's home—the memory, keys, code, and automations your AI
agent keeps, portable across every MCP host. Built on Cloudflare Workers and the
Model Context Protocol (MCP), it ships a Remix UI, Worker-based request routing,
package runtime plumbing, and OAuth-protected MCP endpoints. The project favors
a compact MCP surface with powerful `search` and Code Mode `execute` flows over
a large static tool catalog.

Kody is a multi-user personal assistant: each signed-in user gets a fully
isolated assistant (packages, jobs, secrets, values, memories, and related
state). Tests and fixtures may seed deterministic local accounts, but no account
is privileged at runtime. The repo follows several
[epicflare](https://github.com/epicweb-dev/epicflare) starter conventions.

The repo is organized as an Nx monorepo, with shared modules in
`packages/shared` (`@kody-internal/shared`), the main app worker under
`packages/worker`, and mock Workers under `packages/mock-servers/*`.

##…
