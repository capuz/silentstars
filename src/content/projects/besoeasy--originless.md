---
repo: "besoeasy/originless"
name: "originless"
description: "One all-in-one storage backend you can drop into anything: your own apps, screenshot tools, pastebin-style pastes, Nostr clients, Reddit posts, forum embeds—anything that needs durable, anonymous file hosting. One Originless to rule them all and keep you anonymous."
readmeQualityOk: true
url: "https://github.com/besoeasy/originless"
homepage: "https://originless.space/"
language: "Go"
languages: ["Go", "HTML"]
languagePcts: [69, 27]
topics: ["file-sharing", "ipfs", "nostr", "file-upload", "image-upload", "anonymous", "decentralized", "docker", "file-hosting", "homelab"]
stars: 88
forks: 7
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-03-22T21:50:59Z"
lastCommitAt: "2026-10-29T10:36:05Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 51
maintainers: ["besoeasy"]
openGraphImageUrl: "https://opengraph.githubassets.com/3098df16302471787e1412acfbab9abfdfdde8f9d05b1d0fd9ce04e84a61c13a/besoeasy/originless"
---

# Originless

**Upload a file at home. Fetch it from anywhere in the world.**

Originless is a single-container backend for people who want to host files without internet configs. No domain to buy, no DNS records to manage, no reverse proxy to configure. A file's address is its own hash — a CID — and that CID can be fetched from any IPFS-capable node or gateway. Kubo runs inside the same container; you expose one HTTP port.

## How it works

1. Run Originless at home with one command.
2. Upload a file — it's stored on an embedded [IPFS](https://ipfs.tech) node and you get back its CID (the hash of the content).
3. Anyone, anywhere, fetches the file by its CID — through your node's `/ipfs/<cid>` route, which serves content stored on your node by default, or through any public gateway or IPFS client. The address never changes because the content never changes.

No domain, no origin server, no records to point anywhere. The file is the address — that's why it's *originless*.

## Quick start

```bash
docker run -d --name originless \
  -p 3232:3232 \
  -e STORAGE_MAX=20GB \
  ghcr.io/besoeasy/originless:latest
```

Open the built-in dashboard at…
