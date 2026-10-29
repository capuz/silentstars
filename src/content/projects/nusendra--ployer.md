---
repo: "nusendra/ployer"
name: "ployer"
description: "Lightweight self-hosted PaaS"
readmeQualityOk: true
url: "https://github.com/nusendra/ployer"
homepage: "https://ployer.nusendra.com"
language: "Rust"
languages: ["Rust", "Svelte"]
languagePcts: [65, 29]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-12T22:12:35Z"
lastCommitAt: "2026-10-29T05:50:13Z"
lastReleaseAt: "2026-03-15T09:57:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 39
maintainers: ["nusendra"]
openGraphImageUrl: "https://opengraph.githubassets.com/eec1cc9aebe73aed3c8d14f81337f362629a2fbac8feb736b479af9e75852084/nusendra/ployer"
---

# Ployer

A lightweight, self-hosted PaaS — deploy your apps from Git with automatic SSL, health checks, and webhooks. Built with Rust + SvelteKit, targeting **<50MB RAM** idle.

> Think Coolify, but leaner.

---

## Features

- **One-command deploy** — push to Git, Ployer builds and deploys automatically
- **Automatic SSL** — via Caddy + Let's Encrypt, zero config
- **Wildcard / multitenant domains** — serve `*.yourdomain.com` from one app for unbounded tenant subdomains, with HTTPS via Cloudflare DNS-01 ([guide](https://github.com/nusendra/ployer/blob/HEAD/docs/wildcard-domains.md))
- **Dashboard domain** — move the dashboard off the default `<ip>.nip.io` onto your own domain from Settings; with a Cloudflare token, Ployer creates the DNS record too ([guide](https://github.com/nusendra/ployer/blob/HEAD/docs/dashboard-domain.md))
- **Webhooks** — GitHub and GitLab push events trigger auto-deploys
- **Health checks** — HTTP polling with auto-restart on failure
- **Container stats** — CPU, memory, and network I/O monitoring
- **Real-time logs** — WebSocket streaming for build and runtime logs
- **Multi-server** — manage apps across multiple servers
- **Encrypted secrets** —…
