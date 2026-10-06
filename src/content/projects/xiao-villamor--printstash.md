---
repo: "xiao-villamor/PrintStash"
name: "PrintStash"
description: "Self-hosted asset management for 3D printing files, slicer metadata, and printer workflows."
readmeQualityOk: true
url: "https://github.com/xiao-villamor/PrintStash"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [75, 24]
topics: ["3d-printing", "fastapi", "gcode", "klipper", "moonraker", "orcaslicer", "self-hosted"]
stars: 217
forks: 20
openIssues: 6
closedIssues: 67
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2026-05-21T21:15:32Z"
lastCommitAt: "2026-10-06T10:41:44Z"
lastReleaseAt: "2026-06-24T13:42:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 28
maintainers: ["xiao-villamor"]
openGraphImageUrl: "https://opengraph.githubassets.com/3541137a3bb2c57655e8c4b611337238f5855a23a7c0f83e10dc48340b12b402/xiao-villamor/PrintStash"
discussionCount: 4
---

# PrintStash

### Organize your 3D models, keep the G-code that works, and manage your printers.

PrintStash is an open-source, self-hosted web app for your 3D printing library.
Bring together files from your computer, model marketplaces, and NAS; preview
them, open them in your slicer, and keep print settings and results with each
Model. Run it on your own server with SQLite and local disk to get started.

[**Quick Start**](#quick-start) · [**Features**](#features) · [**Printers**](#printer-compatibility) · [**Screenshots**](#screenshots) · [**Docs**](#documentation) · [**Limitations**](#known-limitations--beta-notes)

---

## Quick Start

> [!WARNING]
> **Run PrintStash on a trusted self-hosted network.** For remote access, use
> a reverse proxy with TLS and your own access controls. The
> [HTTPS and reverse proxy guide](https://github.com/xiao-villamor/PrintStash/blob/HEAD/docs/deployment.md#https-and-reverse-proxies)
> lists the settings to change. See [Security](#security).

Install Docker with the Compose plugin, then download the
[**Compose file**](https://github.com/xiao-villamor/PrintStash/blob/HEAD/docker-compose.yml) and start PrintStash:

```bash
mkdir -p printstash &&…
