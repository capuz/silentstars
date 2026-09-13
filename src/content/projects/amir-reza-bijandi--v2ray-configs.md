---
repo: "amir-reza-bijandi/v2ray-configs"
name: "v2ray-configs"
description: "Auto-updates a V2Ray/Xray subscription file every 30 min by fetching configs from a Telegram channel using Bun + mtcute"
readmeQualityOk: true
url: "https://github.com/amir-reza-bijandi/v2ray-configs"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-29T19:00:05Z"
lastCommitAt: "2026-09-13T08:30:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 45
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a397af359116a855c23e8d25ea362b386390e4ed3800b73dfe0ad81fcf661728/amir-reza-bijandi/v2ray-configs"
---

# v2ray-configs

Automatically fetches the latest 100 V2Ray/Xray configs from a Telegram channel every 30 minutes and writes them to `configs.txt` and `configs.yaml` — ready to use as a subscription URL in any compatible client (v2rayNG, Nekoray, Hiddify, FLClash, Clash Party, etc.).

> [!NOTE]
> This project was built with the assistance of Claude (Anthropic). The code, structure, and documentation were generated through an AI-assisted development session and reviewed by the author.

---

## Setup

### 1 — Fork / clone this repo

```bash
git clone https://github.com/amir-reza-bijandi/v2ray-configs
cd v2ray-configs
bun install
```

### 2 — Get Telegram API credentials

1. Go to [my.telegram.org](https://my.telegram.org) → **API development tools**
2. Create an app → note your **API ID** and **API Hash**

### 3 — Generate a session string (run once, locally)

```bash
bun run gen-session
```

Follow the prompts (phone number + verification code). It will print a session string — **copy it**.

> The session string lets the GitHub Action authenticate without interactive login.  
> Keep it secret — it has full access to your Telegram account.

### 4 — Add GitHub Secrets

Go to your…
