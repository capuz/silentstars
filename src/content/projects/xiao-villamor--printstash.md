---
repo: "xiao-villamor/PrintStash"
name: "PrintStash"
description: "Self-hosted asset management for 3D printing files, slicer metadata, and printer workflows."
readmeQualityOk: true
url: "https://github.com/xiao-villamor/PrintStash"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [71, 28]
topics: ["3d-printing", "fastapi", "gcode", "klipper", "moonraker", "orcaslicer", "self-hosted"]
stars: 205
forks: 19
openIssues: 10
closedIssues: 56
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2026-05-21T21:15:32Z"
lastCommitAt: "2026-09-28T10:06:37Z"
lastReleaseAt: "2026-06-24T13:42:19Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 27
maintainers: ["xiao-villamor", "jorgehermo9", "almulder"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7a4f906439b9857db9a7625a32ac17684732561602127b1ee814faedc5fcb45/xiao-villamor/PrintStash"
discussionCount: 4
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="frontend/public/logo-dark.svg" />
</picture>

# PrintStash

### Organize your 3D models, keep the G-code that works, and manage your printers.

PrintStash is an open-source, self-hosted web app for your 3D printing library.
Bring together files from your computer, model marketplaces, and NAS; preview
them, open them in your slicer, and keep print settings and results with each
Model. Run it on your own server with SQLite and local disk to get started.

[**Quick Start**](#quick-start) · [**Features**](#features) · [**Printers**](#printer-compatibility) · [**Screenshots**](#screenshots) · [**Docs**](#documentation) · [**Limitations**](#known-limitations--beta-notes)

</div>

---

## Quick Start

> [!WARNING]
> **Run PrintStash on a trusted self-hosted network.** For remote access, use
> a reverse proxy with TLS and your own access controls. The
> [HTTPS and reverse proxy guide](https://github.com/xiao-villamor/PrintStash/blob/HEAD/docs/deployment.md#https-and-reverse-proxies)
> lists the settings to change. See [Security](#security).

Install Docker with the Compose plugin, then download the
[**Compose…
