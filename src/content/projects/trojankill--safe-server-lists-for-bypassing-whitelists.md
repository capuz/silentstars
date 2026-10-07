---
repo: "Trojankill/Safe-server-lists-for-bypassing-whitelists"
name: "Safe-server-lists-for-bypassing-whitelists"
description: "Filtering unsafe servers in public subscriptions"
originalDescription: "Фильтрация небезопасных серверов в публичных подписках"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/Trojankill/Safe-server-lists-for-bypassing-whitelists"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-17T19:23:30Z"
lastCommitAt: "2026-10-07T10:30:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 37
maintainers: ["github-actions[bot]", "Trojankill"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c6bcda095a608f59b8e204b66fa7d189df28cd37f27c5ff991c7a900cbeeadd/Trojankill/Safe-server-lists-for-bypassing-whitelists"
---

# 🛡️ VPN Config Security Filter

---

## 🚀 What's new in v5.1

### 🛡️ Security improvements

- ✅ **Thread safety** — `threading.Lock` on health-tracking, correct operation with 5 parallel workers
- ✅ **Port validation** — ports 1–65535 are checked on all protocols
- ✅ **Exact domain matching** — `.cf` no longer matches `cfire.ru`, only TLD `*.cf`
- ✅ **Fail-closed SSR** — broken encoding = reject, not silent skip
- ✅ **VMess format-2 `alterId`** — replay-attack protection for new format
- ✅ **`pbk` validation** — exactly 43 characters (X25519 public key)
- ✅ **SS 2022 fail-closed** — invalid base64-key = reject
- ✅ **Post-quantum cryptography** — validation of ML-KEM-768 + X25519 hybrids

### ⚡ Performance and UX

- ✅ **LRU-caching** — `@lru_cache` for frequently used checks
- ✅ **Parallel loading** — `ThreadPoolExecutor` for sources
- ✅ **URL Health tracking** — auto-skip dead sources (3+ failures in a row)
- ✅ **Base64 round-trip** — decoding → filtering → encoding
- ✅ **QR-codes with HTML-index** — convenient on mobile
- ✅ **Multi-protocol on endpoint** — `host:port:proto` triplet, doesn't cut valid combinations
- ✅ **`RAW_BASE`…
