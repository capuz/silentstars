---
repo: "Routstr/routstr-core"
name: "routstr-core"
description: "Routstr is a decentralized protocol for permissionless, private, and censorship-resistant AI inference."
readmeQualityOk: true
url: "https://github.com/Routstr/routstr-core"
homepage: "http://docs.routstr.com/"
language: "Python"
languages: ["Python"]
languagePcts: [84]
topics: ["ai", "cashu-payment", "decentralized", "nostr", "openai-api", "reverse-proxy", "gateway", "open-protocol"]
stars: 85
forks: 18
openIssues: 64
closedIssues: 111
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2025-04-08T13:42:31Z"
lastCommitAt: "2026-11-11T19:45:55Z"
lastReleaseAt: "2026-03-27T21:26:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 49
maintainers: ["9qeklajc", "ashen0x", "sh1ftred"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9c125c76bda929957bc26d5934b7cb3aaeb765e2aba5651408628753d6607b6/Routstr/routstr-core"
---

# Routstr Payment Proxy

Routstr is a decentralized protocol for permissionless, private, and censorship-resistant AI inference. It combines Nostr for discovery and Cashu for private Bitcoin micropayments.

This repo contains Routstr Core: a FastAPI-based reverse proxy that sits in front of OpenAI-compatible APIs and handles pay-per-request billing.

## Start Here

- **Overview**: <https://docs.routstr.com/overview/>
- **Provider Guide**: <https://docs.routstr.com/provider/quickstart/>
- **Client Guide**: <https://docs.routstr.com/client/introduction/>
- **Browse providers and models**: <https://routstr.com/providers>

## Basic Usage

If you are a user/developer, you just point an OpenAI-compatible SDK at a Routstr node and pay with a Cashu token.

### OpenAI SDK

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.routstr.com/v1",
    api_key="cashuBo2FteCJodHRwczovL21...",
)

response = client.chat.completions.create(
    model="gpt-5-nano",
    messages=[{"role": "user", "content": "hello"}],
)

print(response.choices[0].message.content)
```

### cURL

```bash
curl https://api.routstr.com/v1/chat/completions \
  -H "Content-Type: application/json" \…
