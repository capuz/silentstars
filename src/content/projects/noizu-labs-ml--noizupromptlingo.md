---
repo: "noizu-labs-ml/NoizuPromptLingo"
name: "NoizuPromptLingo"
description: "A Standardized Prompt Syntax/Language to train models and humans against for faster behavior tuning of models. "
readmeQualityOk: true
url: "https://github.com/noizu-labs-ml/NoizuPromptLingo"
language: "Elixir"
languages: ["Elixir", "Python", "TypeScript"]
languagePcts: [31, 27, 22]
stars: 13
forks: 4
openIssues: 3
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2023-05-08T02:44:07Z"
lastCommitAt: "2026-08-20T04:09:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 57
maintainers: ["noizu"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdf5e258b66e21b4834e7b21dcd9b8a4845d450300f33a0b935cefc5f60961ee/noizu-labs-ml/NoizuPromptLingo"
---

# NoizuPromptLingo (NPL)

Multi-tenant backend and MCP tool fleet ("tobor") that gives AI coding-agent harnesses — Claude Code, Codex CLI, and similar — durable, organization- and project-scoped infrastructure to coordinate real work: tickets and sprint boards, chat rooms, a wiki, code review, versioned reusable prompts, persistent agent identities with long-term memory, and a companion Next.js web app for the humans supervising them.

This is an Elixir/Next.js rewrite of a deprecated Python build of NoizuPromptLingo (see `docs/FEATURE-PARITY-AUDIT.md`), audited feature-for-feature against that predecessor's PRDs and user stories. The "Prompt Lingua" name refers specifically to the NPL convention/spec-generation engine (`/api/v1/npl/*`, backed by `priv/conventions/npl.yaml`) — one domain among many, rather than the whole product's identity; most of the surface area is general-purpose agent/human collaboration tooling.

If you're reading this inside the Noizu Infra monorepo: the `tobor-organizations`, `tobor-root`, and `tobor-sessions` MCP servers this very Claude Code session uses for work-session tracking (see the repo's root `CLAUDE.md`) are served by this project.…
