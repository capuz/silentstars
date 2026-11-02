---
repo: "crstian19/tesdash"
name: "tesdash"
description: "Self-hosted static dashboard for Tesla's in-car browser launch streaming, music, sports and more in fullscreen with a single tap"
readmeQualityOk: true
url: "https://github.com/crstian19/tesdash"
homepage: "https://tesda.sh"
language: "Astro"
languages: ["Astro"]
languagePcts: [93]
topics: ["astro", "dashboard", "self-hosted", "svelte", "tesla", "bun", "tailwindcss", "typescript"]
stars: 8
forks: 7
openIssues: 1
closedIssues: 15
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-03-12T18:27:28Z"
lastCommitAt: "2026-11-02T17:56:48Z"
lastReleaseAt: "2026-07-05T08:30:01Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 91
undervaluedScore: 67
maintainers: ["crstian19", "renovate[bot]", "aguilera128"]
openGraphImageUrl: "https://opengraph.githubassets.com/a177da43a344bedd98c9ef9c9265b04d8ad97ac2502a5886ba338ce99ebf6524/crstian19/tesdash"
fundingLinks: ["GITHUB:https://github.com/crstian19", "KO_FI:https://ko-fi.com/crstian", "CUSTOM:https://paypal.me/CrstianG", "CUSTOM:https://blog.crstian.me/support/"]
---

A self-hosted static dashboard designed for the Tesla browser — launch all your apps in fullscreen with a single tap.

---

## How it works

Tesla's browser can open any URL fullscreen using a YouTube redirect trick. Tesdash wraps every app link with:

```
https://www.youtube.com/redirect?q=<your-url>
```

This is applied automatically at build time — you just add URLs to the config file.

## Stack

| Layer | Technology |
|---|---|
| Framework | Astro 6 (SSG) |
| Interactive islands | Svelte 5 (Clock, URL Launcher) |
| Styling | Tailwind CSS 4 + DaisyUI 5 |
| Config | YAML parsed at build time with `js-yaml` |
| Logo color extraction | `sharp` (dominant color from logo image) |
| Runtime | Bun |

## Features

- **Fullscreen launcher** — every app opens fullscreen via the Tesla YouTube redirect
- **Per-app fullscreen toggle** — set `fullscreen: false` on any app to open it in a normal tab instead
- **Glassmorphism UI** — dark theme with backdrop blur and per-app accent color extracted from the logo
- **Spotlight effect** — radial gradient follows cursor/finger across each card (disabled on touch for performance)
- **Category drag & drop** — reorder categories by dragging the…
