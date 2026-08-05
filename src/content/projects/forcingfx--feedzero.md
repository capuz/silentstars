---
repo: "forcingfx/feedzero"
name: "feedzero"
description: "Privacy-first RSS reader — local-first, encrypted, self-hostable"
readmeQualityOk: true
url: "https://github.com/forcingfx/feedzero"
homepage: "https://feedzero.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 9
forks: 2
openIssues: 4
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-09T14:08:22Z"
lastCommitAt: "2026-08-05T06:08:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 54
maintainers: ["forcingfx", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6a5819f9bcf3c90de5e9bd744050993f8db160eaee68095875c6f07ed1952c8/forcingfx/feedzero"
---

# FeedZero

A privacy-first RSS reader that runs entirely in your browser. No accounts, no tracking, no analytics — your reading habits stay yours.

- Subscribes to RSS, Atom, and JSON Feed sources
- Stores all data encrypted in your browser (AES-GCM-256)
- Optionally syncs across devices with end-to-end encryption
- Extracts full article text when feeds provide only summaries
- Works offline after first load

## Use it

**Hosted** — open **[my.feedzero.app](https://my.feedzero.app)**. Nothing to install.

**Run your own** — one Docker command:

```bash
docker run -p 3000:3000 -v feedzero:/data ghcr.io/forcingfx/feedzero:latest
```

Open <http://localhost:3000>. Data persists in the `feedzero` volume; the image is on [GitHub Packages](https://github.com/forcingfx/feedzero/pkgs/container/feedzero).

**Run it on a server** with your own domain and automatic HTTPS — see **[Self-hosting](https://github.com/forcingfx/feedzero/blob/HEAD/docs/self-hosting.md)** (a Compose stack with Caddy, three commands).

Either self-host path unlocks every Personal feature for free.

## Privacy Model

FeedZero minimizes server-side data exposure:

| Component | What the server sees |…
