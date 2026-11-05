---
repo: "LibreLoom/LibreServ"
name: "LibreServ"
description: "LibreServ aims to simplify self-hosting to a level as simple as plugging in and setting up a computer."
readmeQualityOk: true
url: "https://github.com/LibreLoom/LibreServ"
homepage: "https://serv.libreloom.org"
language: "JavaScript"
languages: ["JavaScript", "Go", "Rust"]
languagePcts: [39, 28, 27]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-03-19T23:01:23Z"
lastCommitAt: "2026-11-05T06:06:28Z"
lastReleaseAt: "2026-08-25T03:28:03Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 65
maintainers: ["plainskill"]
openGraphImageUrl: "https://opengraph.githubassets.com/8be4b49c3a5c8221b8ff01d0871099ab910a702925a0fee09b0b7374436a3362/LibreLoom/LibreServ"
---

# LibreServ Monorepo

This place is all code. If you're just interested in the product, and not the code, visit [the website instead](https://serv.libreloom.org).

Two products plus shared glue live here:

| Path | What it is | Stack |
|------|------------|-------|
| `sol/` | **Sol** — the home server (development currently stalled) | Go 1.27 (chi/v5) API, React 19 + Vite 7 + Tailwind 4, SQLite, Podman |
| `sol/connect/` | **Sol Connect** — cloud companion (independent Go module) | Go 1.27, chi/v5, SQLite, Stripe |
| `luna/` | **Luna** — the file box | Rust `lunad` + `luna-core`, React/Vite web, GTK 4 desktop, native Android app, Alpine OS image |
| `luna/connect/` | **Luna Connect** — cloud companion (independent Go module) | Go 1.27, SQLite, Stripe |
| `shared/ui/` | `@libreloom/ui` — shared design-system components | React 19, consumed as a `file:` dependency by both web apps |
| `infra/` | CI runner, release pipeline, repo automation bots | Go + shell |
| `keys/` | Release signing keys — minisign public keys plus the Luna Desktop Flatpak repo key (do not move) | — |

```
LibreServ/
├── sol/            # Sol + Sol Connect + installer/ISO bits
├── luna/           # Luna daemon,…
