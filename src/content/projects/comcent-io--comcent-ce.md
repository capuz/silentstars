---
repo: "comcent-io/comcent-ce"
name: "comcent-ce"
description: "Comcent Community Edition — open-source contact center"
readmeQualityOk: true
url: "https://github.com/comcent-io/comcent-ce"
language: "Elixir"
languages: ["Elixir", "Svelte", "TypeScript"]
languagePcts: [44, 28, 22]
stars: 45
forks: 9
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-04-25T21:26:56Z"
lastCommitAt: "2026-10-06T10:42:52Z"
lastReleaseAt: "2026-10-06T09:18:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 36
maintainers: ["pavanputhra", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/69c60d0b0d676f5ff2092a6a5173124c1ad545f6b891a7c484743004ce297d2d/comcent-io/comcent-ce"
fundingLinks: ["GITHUB:https://github.com/pavanputhra"]
---

# Comcent Community Edition

Run your own voice infrastructure on a single Linux box. Bring your own SIP trunk
(Twilio, Telnyx, …), run one install script, and you get:

- Voice calls with browser-based dialers for agents
- Phone numbers, queues, call recording
- Call transcription, AI summaries, sentiment, semantic search
- A real-time AI voice bot
- Multi-tenant orgs, API keys, webhooks

🎬 **Watch the installation walkthrough — from blank server to first call:**

## Minimum requirements

- A Linux host with a public IPv4 — Ubuntu 22.04+ / Debian 12+ (a $12/mo
  DigitalOcean droplet with 2 vCPU / 4 GB RAM is plenty)
- A domain name you can point at it
- A SIP trunk (Twilio, Telnyx, Bandwidth, …) if you want to make/receive
  real phone calls

## Install

### 1. Open the firewall

| Port | Protocol | What |
| --- | --- | --- |
| 80, 443 | TCP | HTTP / HTTPS — app + Let's Encrypt cert issuance |
| 5060 | UDP + TCP | SIP signaling |
| 5063 | TCP | SIP-over-WSS (browser dialer) |
| 19000–19100 | UDP | RTP media |

### 2. Point a domain at the host

Create a DNS **A record** (e.g. `voice.yourdomain.com`) pointing at the
host's public IPv4. Verify with `dig +short…
