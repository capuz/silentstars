---
repo: "amefys/web"
name: "web"
description: "amefys website"
readmeQualityOk: true
url: "https://github.com/amefys/web"
homepage: "http://amefys.com/"
language: "HTML"
languages: ["HTML"]
languagePcts: [96]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-17T04:42:48Z"
lastCommitAt: "2026-10-29T10:19:43Z"
lastReleaseAt: "2026-05-19T10:20:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 46
maintainers: ["amefys-ai"]
openGraphImageUrl: "https://opengraph.githubassets.com/16074a12f0e04069b8925e0701852f58b2c1e12d502d2192d4544274cad7ed20/amefys/web"
---

# amefys-web

Public-facing site + release distribution for [AMEFYS](https://amefys.com).

- **Website**: `index.html` (deployed to GitHub Pages, served at https://amefys.com).
- **Installer downloads**: GitHub Releases on this repo. The macOS DMG and
  Windows NSIS EXE are produced by the `amefys` source repository and pushed
  here automatically when a `v*` tag lands there, via a GitHub App with
  Contents write access.

## Layout

```
index.html              Site root.
CNAME                   Custom domain pin (amefys.com).
.github/workflows/
  pages.yml             Deploy index.html → GitHub Pages on push to main.
```

Releases here are populated by the upstream `amefys` repo's release workflow.
Do not push DMG / EXE assets manually — let the CI add them so the auto-
update channel (latest.yml / latest-mac.yml emitted by electron-builder)
stays consistent.

## Local preview

```sh
python3 -m http.server 8000  # then open http://localhost:8000
```

## Changelog page (`changelog.html`)

`changelog.html` is the user-facing release history. Keep it in sync with
every release cut in the `amefys` repo:

1. Stable or beta tag pushed upstream → add an `<article class="release">`
   at…
