---
repo: "autumn-foundation/autumn"
name: "autumn"
description: "Ship the App, not the Plumbing. Built on Axum."
readmeQualityOk: true
url: "https://github.com/autumn-foundation/autumn"
homepage: "https://autumn-web.app/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["rust", "web", "app", "appframework", "axum", "diesel", "htmx", "maud", "webframework"]
stars: 8
forks: 2
openIssues: 188
closedIssues: 573
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-03-21T06:58:17Z"
lastCommitAt: "2026-09-19T01:28:46Z"
lastReleaseAt: "2026-08-26T14:39:04Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 93
undervaluedScore: 61
maintainers: ["madmax983", "claude[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7b584961f8e0e5c9455fdf9a5c898b359cce0e6dd6b21b048706285ba42713d/autumn-foundation/autumn"
discussionCount: 2
---

# Autumn 🍂

> Spring Boot-style web framework for Rust, built on [Axum](https://github.com/tokio-rs/axum).

Autumn assembles proven Rust crates into a convention-over-configuration web
stack with proc-macro ergonomics, framework defaults, and customization options when
you need them. If Spring Boot, Rails, or Laravel feels familiar, Autumn aims
for that same "ship the app, not the plumbing" shape in Rust.

## Features

- **Route and app macros** - `#[get]`, `#[post]`, `#[put]`, `#[delete]`, `routes![]`, `#[autumn_web::main]`
- **Pre-rendering pages to static HTML** - `#[static_get]` + `static_routes![]` with `autumn build` pre-rendering to `dist/`
- **Application builder** - `.routes()`, `.tasks()`, `.static_routes()`, `.scoped()`, `.merge()`, and `.nest()`
- **Configuration and profiles** - defaults, `autumn.toml`, `autumn-{profile}.toml`, and `AUTUMN_*` overrides
- **Database ergonomics** - async Postgres primary/replica pools, `Db` extractor for the primary/write role, `#[model]`, `#[repository]`, hooks, and embedded migrations
- **HTML stack** - Maud templating, bundled htmx, Tailwind build pipeline, and static asset serving
- **Operations** - `/health`, `/actuator/*`,…
