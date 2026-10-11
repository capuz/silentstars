---
repo: "Trojankill/Safe-server-lists-for-bypassing-whitelists"
name: "Safe-server-lists-for-bypassing-whitelists"
description: "Filtering insecure servers in public subscriptions"
originalDescription: "Фильтрация небезопасных серверов в публичных подписках"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/Trojankill/Safe-server-lists-for-bypassing-whitelists"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-17T19:23:30Z"
lastCommitAt: "2026-10-11T10:15:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 37
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfbda3bb45c014e9278d769e94724e04f595bb25a9310abffecb143906f52fb6/Trojankill/Safe-server-lists-for-bypassing-whitelists"
---

# 🛡️ VPN Config Security Filter

---

## 🚀 What's new in v5.1

### 🛡️ Security improvements

- ✅ **Thread safety** — `threading.Lock` on health-tracking, correct operation with 5 parallel workers
- ✅ **Port validation** — ports 1–65535 are checked on all protocols
- ✅ **Exact domain match** — `.cf` no longer matches `cfire.ru`, only the TLD `*.cf`
- ✅ **Fail-closed SSR** — broken encoding = reject, not a silent pass
- ✅ **VMess format-2 `alterId`** — replay-attack protection for the new format
- ✅ **`pbk` validation** — length exactly 43 characters (X25519 public key)
- ✅ **SS 2022 fail-closed** — invalid base64 key = reject
- ✅ **Post-quantum cryptography** — validation of ML-KEM-768 + X25519 hybrids

### ⚡ Performance and UX

- ✅ **LRU caching** — `@lru_cache` for frequently used checks
- ✅ **Parallel loading** — `ThreadPoolExecutor` for sources
- ✅ **URL Health tracking** — automatic skipping of dead sources (3+ consecutive failures)
- ✅ **Base64 round-trip** — decode → filter → encode
- ✅ **QR codes with HTML index** — convenient on mobile
- ✅ **Multi-protocol per endpoint** — `host:port:proto` triple, does not cut valid combinations
- ✅ **`RAW_BASE`…
