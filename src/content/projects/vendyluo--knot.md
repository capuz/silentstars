---
repo: "vendyluo/knot"
name: "knot"
description: "A self-hosted LINE memory bot for saving text, photos, videos, audio, and files to your own Cloudflare D1 and R2."
readmeQualityOk: true
url: "https://github.com/vendyluo/knot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-11T03:20:03Z"
lastCommitAt: "2026-09-12T08:04:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 13
maintainers: ["vendyluo"]
openGraphImageUrl: "https://opengraph.githubassets.com/ace4c8d0d95c22fb1d55a7e8f909873af9a426b607237349dbc7858a59e30463/vendyluo/knot"
---

# Knot

> LINE cuts. You keep what matters.

Knot is an open-source, self-hosted memory layer for LINE. Add your own LINE Official Account as a personal notebook, invite it into a group, or use both. Your data goes from your LINE OA to your Cloudflare account—there is no Knot SaaS in the middle.

This repository deliberately provides code and a small, deterministic interaction model rather than a hosted product. Fork it, change the commands, add a UI, or connect AI later if you actually need it.

## Try the test account

Add the Knot test Official Account on LINE by searching for **`@964vpcbg`**, then send `@memo 說明` to see the available commands.

> [!WARNING]
> This public test account runs in the maintainer's Cloudflare account. Chat workspaces are separated, but the maintainer controls the backend and storage. Don't send private, sensitive, or irreplaceable content. Knot doesn't currently add application-level encryption, and test data may be deleted at any time. For real use, deploy your own LINE Official Account and Cloudflare resources.

## What it does

```text
Personal chat                    Group chat
User ↔ your LINE OA              Members ↔ your LINE OA
        │…
