---
repo: "objectstack-ai/framework"
name: "framework"
description: "ObjectStack is a metadata-driven backend for building business applications that AI agents can understand, operate, and audit safely."
readmeQualityOk: true
url: "https://github.com/objectstack-ai/framework"
homepage: "https://objectstack.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["json-schema", "protocol", "standard", "typescript-interfaces"]
stars: 14
forks: 4
openIssues: 49
closedIssues: 663
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-01-18T06:47:54Z"
lastCommitAt: "2026-07-18T05:50:54Z"
lastReleaseAt: "2026-01-21T08:11:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 54
maintainers: ["os-zhuang", "baozhoutao", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb6b17b44c59758896d7f45206d7211f641cb8bdad749992926c314bc7436471/objectstack-ai/framework"
---

# ObjectStack

> ## AI writes the app. ObjectStack is what it writes.
>
> The open target format and runtime for AI-written business apps. Your coding
> agent writes models, UI, workflows, and permissions as compact typed metadata —
> [a complete CRM is under 2,000 lines](#why-the-mistakes-dont-ship), so the whole
> app fits in the agent's context — and strict TypeScript, Zod schemas, and a
> validation gate catch its mistakes at authoring time. The runtime derives the
> database, REST API, UI, and MCP server, and enforces permissions and audit on
> every call.

`Fits in an agent's context` · `Typed, validated, governed` · `Self-host anywhere` · Apache-2.0

  <br><sub>One typed definition → database · REST API · client SDK · UI · MCP tools.</sub>
</p>

## The loop

**1 · Create a project.** The scaffolder installs the AI skills bundle and writes
an `AGENTS.md`, so your agent starts with the protocol's rules already loaded —
not with generic "write me some TypeScript" priors.

```bash
npm create objectstack@latest my-app && cd my-app
```

**2 · Describe the requirement.** Open the project in Claude Code (or Cursor,
Copilot, …) and say what the business needs:

> Build a support…
