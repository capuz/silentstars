---
repo: "akarras/ultros"
name: "ultros"
description: "fast ffxiv marketboard tools. Still heavily WIP"
url: "https://github.com/akarras/ultros"
homepage: "https://ultros.app"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["ffxiv", "rust"]
stars: 8
forks: 3
openIssues: 22
closedIssues: 88
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2022-08-01T20:47:50Z"
lastCommitAt: "2026-06-26T21:30:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 80
maintainers: ["akarras", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f620173cf50b0f1882e064e4a3ad61f003e98450b35e0b2d0cc8aaa412d4f8a/akarras/ultros"
---

# Ultros

Ultros is a Final Fantasy XIV market board analysis tool that utilizes data sourced from Universalis. It is built with Rust for high performance and reliability.

The project is built using:
- **[Axum](https://github.com/tokio-rs/axum)**: Backend web framework
- **[Leptos](https://github.com/leptos-rs/leptos)**: Full-stack Rust web framework
- **[SeaORM](https://github.com/SeaQL/sea-orm)**: Async ORM for the database
- **[Serenity](https://github.com/serenity-rs/serenity)**: Discord bot library

The live version is hosted at [https://ultros.app](https://ultros.app).

Feature help now lives inside the app at [https://ultros.app/help](https://ultros.app/help).

## Ads

The site currently runs ads to help cover hosting expenses without relying on donations. These ads are completely optional and can be disabled via the settings page. Ad blockers will also continue to work without issue.

## Price Alerts

Logged-in users can create per-item price-threshold alerts via the UI:
1. Add an item to a List
2. Click the bell icon on the item row
3. Pick a world/DC, set a threshold, choose Discord DM or webhook delivery
4. Manage rules + view recent fires at `/alerts`

API: `GET/POST…
