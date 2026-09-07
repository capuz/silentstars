---
repo: "langfuse/langfuse-docs"
name: "langfuse-docs"
description: "🪢 Langfuse documentation -- Langfuse is the open source LLM Engineering Platform. Observability, evals, prompt management, playground and metrics to debug and improve LLM apps"
readmeQualityOk: true
url: "https://github.com/langfuse/langfuse-docs"
homepage: "https://langfuse.com"
language: "MDX"
languages: ["MDX", "Jupyter Notebook"]
languagePcts: [52, 29]
topics: ["genai", "langfuse", "large-language-models", "llms", "nextra", "observability", "prompt-management", "hacktoberfest", "agent-skills", "agents"]
stars: 240
forks: 295
openIssues: 17
closedIssues: 146
watchers: 3
contributors: 163
recentReleases: 0
createdAt: "2023-05-22T14:48:56Z"
lastCommitAt: "2026-09-07T08:30:38Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 97
undervaluedScore: 49
maintainers: ["marcklingen", "actions-user", "jannikmaierhoefer"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/643978507/8e09e55b-b6d1-4f53-b66b-04913336b9d8"
---

# Langfuse Docs

Repo for [langfuse.com](https://langfuse.com). Built with [Fumadocs](https://fumadocs.vercel.app/) and Next.js App Router.

> ### 🧑‍💻 We're hiring
>
> Langfuse is growing fast (we doubled the team in the last 6 months) - since January 2026 we're part of ClickHouse, we're hiring engineering hybrid across the EU.
> We hire engineers who love open source and great developer experiences.
> **[See open roles →](https://langfuse.com/careers?utm_source=github&utm_medium=readme&utm_campaign=hiring&utm_content=langfuse-docs)**

## Local Development

Pre-requisites: Node.js 22, pnpm v9.5.0

To use Node 22 (e.g. with [nvm](https://github.com/nvm-sh/nvm)): `nvm install 22` then `nvm use` (or `nvm use 22`). The repo includes an `.nvmrc` so `nvm use` picks 22 automatically.

1. Optional: Create env based on [.env.template](https://github.com/langfuse/langfuse-docs/blob/HEAD/.env.template)
2. Run `pnpm i` to install the dependencies.
3. Run `pnpm dev` to start the development server on localhost:3333

## Formatting

This repo uses [Prettier](https://prettier.io/) for formatting supported source and content files, including Markdown and MDX.

- Run `pnpm run format` to format…
