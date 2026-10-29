---
repo: "githubflyideas/fogping"
name: "fogping"
description: "A lightweight SmokePing-like tool for Linux, packaged in a single Go binary with a Web UI for target management—deployed in 30 seconds"
readmeQualityOk: true
url: "https://github.com/githubflyideas/fogping"
homepage: "https://githubflyideas.github.io/fogping/"
language: "Go"
languages: ["Go", "HTML"]
languagePcts: [63, 35]
topics: ["golang", "icmp", "latency", "monitoring", "network-monitoring", "network-quality", "observability", "ping", "self-hosted", "single-binary"]
stars: 51
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-07-18T00:57:56Z"
lastCommitAt: "2026-10-29T14:06:37Z"
lastReleaseAt: "2026-10-29T14:08:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 39
maintainers: ["githubflyideas", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f08243b9b60394351d1f4295fc95b9ad76cbc729d4fea1760ecb5f09b8bdaf4/githubflyideas/fogping"
---

> ### A SmokePing-like network latency tool.
> **One binary, embedded SQLite, Web UI — just download and run.**
>
> *🚫 No Perl. No RRDtool. No Web Server. No Config Files.*

## Quick start

One command (Linux x86-64) — downloads, unpacks and starts fogping:

```bash
mkdir -p ~/fogping && cd ~/fogping && curl -L https://github.com/githubflyideas/fogping/releases/download/v1.3.0/fogping-v1.3.0-linux-amd64.tar.gz | tar -xz && ./fogping --edit user=admin passwd=change-me
```

Or with Docker (amd64 / arm64 / armv7):

```bash
docker run -d --name fogping --restart unless-stopped -p 8518:8518 -v fogping_data:/data githubflyideas/fogping:latest --edit user=admin passwd=change-me
```

Then open <http://localhost:8518>, log in, and watch your first puff of network smoke.
A demo target (`www.google.com`) is already there; click **✎ targets** to add your own.

## Going live

`--edit` lets you add, change and delete targets in the web UI. When you are done,
press Ctrl-C and restart **without** `--edit` — the UI becomes read-only and safe to share:

```bash
./fogping user=admin passwd=change-me
```

| I want to… | Run |
|---|---|
| Try it, no login | `./fogping` |
| Require a login |…
