---
repo: "atomine-elektrine/elektrine"
name: "elektrine"
description: "Elektrine is a modular platform for operators who want to run internet services under their own control."
readmeQualityOk: true
url: "https://github.com/atomine-elektrine/elektrine"
homepage: "https://elektrine.com"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [83]
stars: 38
forks: 2
openIssues: 4
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-15T09:13:51Z"
lastCommitAt: "2026-07-07T06:37:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 36
maintainers: ["maxf1eld"]
openGraphImageUrl: "https://opengraph.githubassets.com/27733ee62a3082cf24da4812af29ff872e4fc4fbb6ae87638456044495285db7/atomine-elektrine/elektrine"
discussionCount: 1
---

# Elektrine

Elektrine is an Elixir umbrella app. Shared runtime and persistence live in
`apps/elektrine`, the Phoenix host app lives in `apps/elektrine_web`, and the
product areas are split into their own umbrella apps.

## Layout

- `apps/`: umbrella apps
- `clients/`: client-side artifacts that are not shipped with the server release
- `config/`: shared compile-time and runtime config
- `deploy/`: Docker, Caddy, onion, and VPN deploy assets
- `docs/`: architecture, protocol, and self-hosting docs
- `env/`: example environment files
- `release_builder/`: module-aware release build project
- `scripts/`: release, deploy, and ops helpers

## Main apps

- `apps/elektrine`: shared domain logic, `Repo`, supervisors, accounts, uploads, notifications, calendar, and module selection
- `apps/elektrine_web`: endpoint, router, plugs, layouts, shared components, and account/admin shell
- `apps/arblarg`: chat facade plus LiveViews, JSON APIs, and PAT APIs
- `apps/elektrine_social`: timeline, communities, federation, social controllers, and LiveViews
- `apps/elektrine_email`: mailbox, contacts, mail protocols, JMAP, WKD, and mail web routes
- `apps/elektrine_vpn`: WireGuard management and VPN…
