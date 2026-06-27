---
repo: "Kame696/kame-api-engine"
name: "kame-api-engine"
description: "🐢⚡ KAME: Key-Aware Management Engine — API Rotation plugin for A0 — Rotating free LLM providers, saves you from 429 errors, rate limits cooldowns, exhausted keys and route around provider outages during long agent runs."
url: "https://github.com/Kame696/kame-api-engine"
homepage: "https://github.com/Kame696/kame-api-engine"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["agent-zero", "agent-zero-plugin", "ai-agents", "anthropic", "api-key-rotation", "api-rotation", "gemini", "kame", "litellm", "llm"]
stars: 18
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-05-10T15:08:50Z"
lastCommitAt: "2026-06-27T00:47:24Z"
lastReleaseAt: "2026-05-29T18:36:36Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 77
undervaluedScore: 30
maintainers: ["Kame696"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e23d1337dc51154e87264777678a3b84482f6f7483ef9a9a40dd344b012b269/Kame696/kame-api-engine"
---

# \\\ ~ 🐢⚡ Key-Aware Management Engine ⚡🐢 ~ // (API Rotation Plugin) for Agent Zero

### KAME API Rotation Engine — the learning carousel that keeps your AI agent alive

### *4P1 R0T4T10N — 4FRE3D0M*

</div>

---

## 🎯 What is KAME?

**KAME is what API rotation should have been.**

Round-robin libraries cycle keys blindly. They keep banging on a key that just hit a 429 because they have no memory. They have no idea which key has capacity left. They retry through dead keys and call it "resilience."

KAME does the **opposite** of every assumption round-robin makes:

<table>
<tr>
<td width="50%" valign="top">

### 🧠 Learns from every 429

Parses the provider's own `retry-delay` and respects it **to the second** on per-minute limits. On a **daily quota** it knows not to trust a misleadingly short delay — it cools that key for a real cooldown instead.

No guessing. No fixed backoff. Per-minute or daily, on any provider, KAME does the right thing.

</td>
<td width="50%" valign="top">

### 🎯 Picks the right key, every time

A 60-second sliding window tracks each key's recent activity. KAME selects the key with the **most remaining capacity**, not just the next one in line.

LRU…
