---
repo: "unmask-sh/unmask"
name: "unmask"
description: "Self-hosted bot challenge for stock nginx, or a gateway container in front of any HTTP server. Proof-of-work first, behavioral CAPTCHA when suspicious; search and AI crawlers pass, verified by IP range. RPM/DEB/APK + Docker."
readmeQualityOk: true
url: "https://github.com/unmask-sh/unmask"
homepage: "https://unmask.sh/"
language: "Go"
languages: ["Go"]
languagePcts: [70]
topics: ["anti-bot", "bot-detection", "bot-protection", "captcha", "golang", "ja4", "nginx", "proof-of-work", "security", "tls-fingerprinting"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-16T12:16:24Z"
lastCommitAt: "2026-10-29T14:06:42Z"
lastReleaseAt: "2026-07-23T23:39:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 50
maintainers: ["uminyaan"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1240665623/ad580ac2-8fdd-44fd-a772-2e7372803ece"
discussionCount: 0
---

# unmask

> **The bot challenge that respects search engines.**
> Proof-of-work first, a CAPTCHA only when it looks automated.

Website: **https://unmask.sh/**

**unmask** is a self-hosted bot management gateway for nginx: a dynamic
module in the nginx you already run, or a gateway container in front of any
other HTTP server.  (An Apache integration through `mod_lua` also ships.  It
is the forward-auth path, which is frozen: bug and security fixes only, no
JA4 fingerprint, and new features are not added to it.)
It layers signals (the TLS fingerprint (JA4), network (ASN), country,
request rate, honeypot paths and a shared ban list) and answers with a
challenge that grows with suspicion: a proof-of-work that runs by itself
for ordinary visitors, its own behavioral CAPTCHA when a visit looks
automated or matches a rule you set, and a block only where you choose one.
Search and AI crawlers pass by default, verified by their published IP
ranges wherever the vendor publishes them.

## Features

- **Challenges that grow with suspicion** — Ordinary visitors clear a proof-of-work in the background, with no click. A visit that looks automated, or matches a rule you set, goes on to a…
