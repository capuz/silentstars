---
repo: "christopherklint97/streamvault"
name: "streamvault"
description: "IPTV streaming app for Samsung Tizen TVs built with React, TypeScript, and Zustand"
readmeQualityOk: true
url: "https://github.com/christopherklint97/streamvault"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 8
forks: 3
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-03-07T08:21:47Z"
lastCommitAt: "2026-10-30T10:22:39Z"
lastReleaseAt: "2026-10-17T20:22:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 69
maintainers: ["christopherklint97", "dependabot[bot]", "PatrickSt1991"]
openGraphImageUrl: "https://opengraph.githubassets.com/660c2253d388cb9383c42a23ba470b959e25cc7b26de437fcfd9743e3885480a/christopherklint97/streamvault"
---

# StreamVault

IPTV streaming app for Samsung Tizen smart TVs and mobile PWA. Built with Preact's React-compatible renderer, TypeScript 7, and Vite, with a Node.js backend server.

Toolchain and upgrade notes: [frontend compiler/renderer](https://github.com/christopherklint97/streamvault/blob/HEAD/docs/frontend-toolchain.md) and [production runtime, compression, and existing-volume migration](https://github.com/christopherklint97/streamvault/blob/HEAD/docs/dependency-runtime.md).

## Backend required

StreamVault is not a standalone TV player. The Tizen widget is a frontend and
requires the StreamVault backend to run on another device such as a PC, NAS,
Raspberry Pi, Proxmox guest, or server. Installing a `.wgt`, including through
Apps2Samsung, does not install that backend. The StreamVault backend URL is
separate from the Xtream server URL supplied by an IPTV provider.

Start the backend on a Docker host:

```bash
git clone https://github.com/christopherklint97/streamvault.git
cd streamvault
docker compose up -d --build
```

Verify it from another device on the same network, replacing `<backend-ip>`
with the Docker host's LAN address:

```bash
curl --fail…
