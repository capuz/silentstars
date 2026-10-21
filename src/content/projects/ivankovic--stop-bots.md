---
repo: "ivankovic/stop-bots"
name: "stop-bots"
description: "Automate stopping bad bots from accessing your server"
readmeQualityOk: true
url: "https://github.com/ivankovic/stop-bots"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-17T09:03:14Z"
lastCommitAt: "2026-10-21T17:31:41Z"
lastReleaseAt: "2026-09-24T18:14:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: ["ivankovic", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4adb4be707ede1d1783a35a3f7e7ff44cfc1fc15298a4f9594120a011feaa5dd/ivankovic/stop-bots"
---

# Stop Bots

A TUI and a CLI that help you configure your server to stop bad bots without hiding behind a
CDN. It is a fancy UI for your existing web server (nginx, Apache or Traefik) and your
firewall (nftables or iptables). For those of us that don't want to hide behind Cloudflare and give
one company the keys to all kingdoms.

It protects you in two ways:

- Preventative - It downloads known bot lists and IP ranges and blocks them. I particularly
  recommend using Geo-blocking. For private servers, you can use an allowlist and block more than
  90% of all attacks.
- Responsive - It monitors access logs and detects attackers and kicks them out. Note that this
  means a few packets will reach your server before they are detected, but at least it will stop
  them from escalating.

It **tries** to keep you from doing something self-destructive. You will always see what changes
first before you apply it, and you can use the `--dry-run` flag for extra safety. But I suspect
eventually you will want to enable auto-apply, for convenience. Because of this, the app also tries
not to lock you out. IP addresses with successful SSH logins are never blocked, webserver configs
are always…
