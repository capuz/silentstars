---
repo: "6Kmfi6HP/chatgpt2api-cf"
name: "chatgpt2api-cf"
description: "OpenAI-compatible Chat Completions gateway on Cloudflare Workers using Hono & KV, reverse engineered from anonymous ChatGPT Android API"
readmeQualityOk: true
url: "https://github.com/6Kmfi6HP/chatgpt2api-cf"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 14
forks: 14
openIssues: 1
closedIssues: 18
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-03T00:34:58Z"
lastCommitAt: "2026-11-13T05:36:59Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 96
undervaluedScore: 61
maintainers: ["6Kmfi6HP", "chuanghiduoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/fcf22a48d310b804e2875e8435e60505d131eb40808316188d4dcb0fd62b94a8/6Kmfi6HP/chatgpt2api-cf"
---

# chatgpt2api-cf

  Powered by <a href="https://hono.dev">Hono</a> & Cloudflare KV, reverse engineered from the anonymous ChatGPT Android API.

---

`chatgpt2api-cf` is a Cloudflare Workers port of [chatgpt2api](https://github.com/6Kmfi6HP/chatgpt2api). It transforms the reverse-engineered **anonymous** ChatGPT Android API into an OpenAI-compatible `/v1/chat/completions` gateway that runs entirely on Cloudflare's global edge network.

**No account, no login, and no OpenAI API key required.** Identity is maintained as a pool of anonymous device UUIDs in Cloudflare KV. When upstream rate-limits an identity (HTTP 429), the gateway cools it down, auto-provisions a fresh replacement, and retries seamlessly in the same request.

---

## 🌟 Key Highlights

- **⚡️ 100% Serverless & Ultra-Fast**: Runs on Cloudflare Workers with ~5-10ms cold boot and zero server maintenance. Bundles to just ~44 KiB.
- **🔄 Cloudflare KV Device Pool & Round-Robin**: Manages a bounded pool of device identities in KV with L1 memory caching and round-robin load distribution.
- **🛡 Automated 429 Cooldown & In-Flight Retry**: Catches 429/403/401 errors, evicts burned credentials, provisions fresh UUIDs, and…
