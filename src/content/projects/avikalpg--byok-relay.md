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
stars: 54
forks: 1
openIssues: 17
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-14T14:06:56Z"
lastCommitAt: "2026-08-19T04:07:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 70
undervaluedScore: 28
maintainers: ["alokit-bot", "avikalpg"]
openGraphImageUrl: "https://opengraph.githubassets.com/b99e73068abb1e99f52594404f170deb23280bb6369910a80bed3f2563782ef1/avikalpg/byok-relay"
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
