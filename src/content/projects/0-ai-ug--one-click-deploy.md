---
repo: "0-AI-UG/one-click-deploy"
name: "one-click-deploy"
description: "One-click deploy Docker apps to Hetzner Cloud"
readmeQualityOk: true
url: "https://github.com/0-AI-UG/one-click-deploy"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-03-31T09:25:04Z"
lastCommitAt: "2026-07-05T20:17:42Z"
lastReleaseAt: "2026-04-07T22:11:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 57
maintainers: ["Anton-Horn"]
openGraphImageUrl: "https://opengraph.githubassets.com/31b2e496e2126c8a7475d1998eaa224bb485a0bc848e827a8e63242b67313dd7/0-AI-UG/one-click-deploy"
---

# One-Click Deploy

**Self-hosted PaaS for Hetzner Cloud. Git repo in, live HTTPS app out.**

No Kubernetes. No YAML. Just your Hetzner account.

</div>

---

A lightweight, self-hostable alternative to Heroku, Railway, and Render, built exclusively for [Hetzner Cloud](https://www.hetzner.com/cloud). Point it at a Git repo and your Hetzner account, and it provisions the server, builds your container, configures DNS, issues TLS, and serves traffic. One provider, deeply integrated: Hetzner servers, volumes, private networks, firewalls, and DNS.

## Quick Start

You'll need a [Hetzner Cloud API token](https://docs.hetzner.cloud/#getting-started) (Read & Write) from your project's **Security → API Tokens**.

```bash
docker run --rm \
  -e OCD_AUTO_DEPLOY='{"provider_token":"<hetzner_token>","domain":"panel.example.com"}' \
  ghcr.io/0-ai-ug/one-click-deploy:latest
```

Bootstrap provisions the server and prints its IP. Open `https://<domain>` and create your admin account. That's it.

### DNS

The panel needs `<domain>` to resolve to the new server so Let's Encrypt can issue a TLS certificate. You have two options:

- **Automatic** — add `"dns_zone_id":"<zone_id>"` to the config and…
