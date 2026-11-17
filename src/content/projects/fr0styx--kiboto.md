---
repo: "fr0styx/kiboto"
name: "kiboto"
description: "The operating system for your home NAS: storage, apps, virtual machines, backups, remote access and hardware from one web desktop, with Kib, a private assistant that knows what's in your files."
readmeQualityOk: true
url: "https://github.com/fr0styx/kiboto"
homepage: "https://kiboto.net"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [48, 44]
topics: ["dashboard", "docker", "fan-control", "framebuffer", "hardware-monitoring", "nas", "rgb-led", "smartmontools", "unraid", "homelab"]
stars: 15
forks: 0
openIssues: 1
closedIssues: 14
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-28T18:01:31Z"
lastCommitAt: "2026-11-17T14:48:11Z"
lastReleaseAt: "2026-10-14T23:47:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 56
maintainers: ["fr0styx"]
openGraphImageUrl: "https://opengraph.githubassets.com/87123bed4e5aa7178331252ee4d1facecb0fa908a73f70c9f5c45ab94017137f/fr0styx/kiboto"
---

Kiboto is an operating system for a home NAS. Today it runs as one container on the system you already
have (Unraid, Debian, Ubuntu, TrueNAS SCALE, Proxmox, FygoOS or plain Docker); full Kiboto OS images
for NAS boxes are on the way. It works on any NAS or homelab server, and drives the front screen, the
fans and the light bar on Zettlab and Aoostar boxes.

**Meet Kib.** Ask Kib finds your documents, photos and scans by what is in them, privately and in
five languages, and answers with the files it used. Kib runs on the NAS: your files and their index stay there, and
web search is off until you turn it on. No account, no subscription. How well it finds things is
measured on a public test set ([search quality](https://github.com/fr0styx/kiboto/blob/HEAD/docs/SEARCH_QUALITY.md)); what it may and may not do
is written down and tested ([safe AI](https://github.com/fr0styx/kiboto/blob/HEAD/docs/SAFE_AI.md)).

## What you get

- **Ask Kib**: search and questions over your own files in five languages, on the NAS's own GPU or
  NPU; answers are checked against your files and cite them. Claude, Cursor and other AI clients can
  use it over MCP.
- **Files**: a File Explorer with several…
