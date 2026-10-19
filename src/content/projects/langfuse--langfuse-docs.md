---
repo: "langfuse/langfuse-docs"
name: "langfuse-docs"
description: "🪢 Open source agent evals & observability: Trace, evaluate, and improve LLM applications with one open platform."
readmeQualityOk: true
url: "https://github.com/langfuse/langfuse-docs"
homepage: "https://langfuse.com/docs"
language: "MDX"
languages: ["MDX", "Jupyter Notebook"]
languagePcts: [53, 26]
topics: ["genai", "langfuse", "large-language-models", "llms", "nextra", "observability", "prompt-management", "hacktoberfest", "agent-skills", "agents"]
stars: 246
forks: 324
openIssues: 25
closedIssues: 152
watchers: 3
contributors: 178
recentReleases: 0
createdAt: "2023-05-22T14:48:56Z"
lastCommitAt: "2026-10-19T09:14:51Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 96
undervaluedScore: 49
maintainers: ["actions-user", "hassiebp", "Lotte-Verheyden"]
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

Pre-requisites: Node.js 22 (22.13+), pnpm v12.8.1

To use Node 22 (e.g. with [nvm](https://github.com/nvm-sh/nvm)): `nvm install 22` then `nvm use` (or `nvm use 22`). The repo includes an `.nvmrc` so `nvm use` picks 22 automatically.

1. Optional: Create env based on [.env.template](https://github.com/langfuse/langfuse-docs/blob/HEAD/.env.template)
2. Run `pnpm i` to install the dependencies.
3. Run `pnpm dev` to start the development server on localhost:3333

## Formatting

This repo uses [Prettier](https://prettier.io/) for formatting supported source and content files, including Markdown and MDX.

- Run `pnpm run format`…
