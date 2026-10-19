---
repo: "productdevbook/yuva"
name: "yuva"
description: "Open-source customer messaging for teams with many products: e-mail, live chat and in-app conversations in one inbox. Pre-alpha."
readmeQualityOk: true
url: "https://github.com/productdevbook/yuva"
homepage: "https://useyuva.com"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [51, 38]
topics: ["customer-support", "golang", "helpdesk", "in-app-messaging", "live-chat", "self-hosted", "shared-inbox"]
stars: 21
forks: 1
openIssues: 4
closedIssues: 68
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-07T08:02:14Z"
lastCommitAt: "2026-10-19T09:14:29Z"
lastReleaseAt: "2026-10-13T10:53:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 54
maintainers: ["productdevbook"]
openGraphImageUrl: "https://opengraph.githubassets.com/309fa3b4f0e53c333251e5f12f93155af6dcb1b5112163247777d3fd15aea397/productdevbook/yuva"
fundingLinks: ["GITHUB:https://github.com/productdevbook"]
---

# Yuva

**One inbox for every product you run.**

[Website](https://useyuva.com) · [Docs](https://github.com/productdevbook/yuva/blob/HEAD/docs/install.md) · [API](https://github.com/productdevbook/yuva/blob/HEAD/openapi/openapi.yaml) ·
[Releases](https://github.com/productdevbook/yuva/releases) · [Roadmap](https://github.com/productdevbook/yuva/blob/HEAD/docs/roadmap.md)

Yuva is an open-source support inbox. Support e-mail, live chat and in-app messages from all your
products land in one shared inbox. You host it yourself: one Docker image and Postgres.

> [!WARNING]
> **Pre-alpha.** The API and database schema can change without migration paths, and the code has
> not had an independent security audit. Try it with test data, not real customer conversations.

## What you get

- **One inbox per product**, each with its own branding, language, hours and team.
- **E-mail, live chat and in-app messages** in one conversation: the `<yuva-chat>` web component,
  iOS and Android SDKs, and an API.
- **Your users stay yours.** Your backend signs identity tokens; signed webhooks tell it what happened.
- **Build on it** with API keys, bots, an event feed and an MCP server for AI assistants.…
