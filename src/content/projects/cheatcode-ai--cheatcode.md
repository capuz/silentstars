---
repo: "cheatcode-ai/cheatcode"
name: "cheatcode"
description: "Source-available generalist AI agent platform — agents that build apps, slides, research, and browser automations. TypeScript, Cloudflare Workers, Daytona sandboxes."
readmeQualityOk: true
url: "https://github.com/cheatcode-ai/cheatcode"
homepage: "https://www.trycheatcode.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["ai-agents", "ai-coding-agent", "cloudflare-workers", "daytona", "source-available", "typescript"]
stars: 14
forks: 3
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-08-28T15:17:03Z"
lastCommitAt: "2026-08-04T06:11:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 68
maintainers: ["iamjr15", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1046361901/e741813b-20ea-4ff3-9b09-5488ba66d319?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260804%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260804T061338Z&X-Amz-Expires=300&X-Amz-Signature=e349985cf69a96607e2267b4342fa62f0382c54745e604f5a9e4d11f98af3227&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTgyNDMxOCwibmJmIjoxNzg1ODI0MDE4LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.o9X8JP8e3BAsKpkWJUQ8lttZVZ-ST7OjhP8CQM7CxT8"
---

# Cheatcode

Cheatcode is a source-available generalist AI agent platform. Give it an
outcome—not a sequence of tool calls—and it can build applications, create
documents and media, research the live web, and operate browser workflows in an
isolated workspace.

The project is built for people who want an inspectable, self-hostable agent
stack without surrendering provider choice. Users bring their own model keys;
the platform keeps long-running work, browser execution, files, generated
outputs, and tenant data behind explicit boundaries.

## Architecture

```mermaid
flowchart LR
  Browser[Next.js web app] --> Gateway[Cloudflare gateway Worker]
  Gateway --> Agent[Agent Worker + Workflows]
  Gateway --> Webhooks[Webhooks Worker]
  Gateway --> Preview[Preview proxy]
  Agent --> Sandbox[Daytona sandbox]
  Gateway --> DB[(Supabase Postgres)]
  Agent --> DB
  Webhooks --> DB
  Agent --> R2[(Cloudflare R2)]
  Agent --> DO[Durable Objects]
```

- Next.js 16 and React 19 provide the product UI.
- Cloudflare Workers, Workflows, and Durable Objects own admission, execution,
  webhooks, and streaming.
- Daytona supplies one isolated workspace and browser runtime per project.
- Supabase…
