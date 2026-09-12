---
repo: "avikalpg/byok-relay"
name: "byok-relay"
description: "Bring your own key (BYOK) relay to enable lightweight frontend-only apps to use LLMs using the user's API keys without hitting CORS."
readmeQualityOk: true
url: "https://github.com/avikalpg/byok-relay"
homepage: "https://byokrelay.com"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["ai", "byok", "llm", "relay", "anthropic", "api-proxy", "cors", "gemini", "nodejs", "openai"]
stars: 55
forks: 1
openIssues: 7
closedIssues: 11
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-04-14T14:06:56Z"
lastCommitAt: "2026-09-12T08:04:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 34
maintainers: ["alokit-bot", "avikalpg", "coderabbitai[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4e387261cf01a929712e346b188b23394926ab98ab0e778bf0d5adbed471b38/avikalpg/byok-relay"
---

# byok-relay

**Website:** [byokrelay.com](https://byokrelay.com) | **Hosted relay:** [relay.byokrelay.com](https://relay.byokrelay.com)

> **Your users bring their own AI keys. byok-relay lets them use those keys straight from the browser — CORS handled, keys never in your code, costs on their bill.**

Browser apps can't call `api.openai.com` or `api.anthropic.com` directly — CORS blocks them. The usual fix (a backend proxy) puts your users' keys — and your users' AI costs — on your tab. byok-relay flips this: each user gets a secure token; they store their own key; they pay for their own inference. You build the product.

## Get started

**Option A — Use our relay (zero setup):**

```text
https://relay.byokrelay.com
```

Free. Open CORS (any origin). [Health check →](https://relay.byokrelay.com/health)

**Option B — Self-host in 3 commands:**

```bash
git clone https://github.com/avikalpg/byok-relay.git && cd byok-relay
echo "ENCRYPTION_SECRET=$(openssl rand -hex 32)" > .env
docker compose up -d   # relay running at http://localhost:3000
```

Or without Docker: `npm install && npm start` (requires Node 18+). [Full quickstart →](#quickstart-60-seconds)

> **Trust model:** The…
