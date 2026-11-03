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
languagePcts: [95]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-17T19:23:30Z"
lastCommitAt: "2026-11-03T11:15:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 37
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/908484d173bb5f8efdfab2b7a142b5624c9cad267e496a23aef607e4748f4a4b/Trojankill/Safe-server-lists-for-bypassing-whitelists"
---

# 🛡️ VPN Config Security Filter

---

## 🚀 What's new in v6.0

The main change: **every link is now actually parsed**, rather than checked with regexes against the raw string. Percent-encoding is decoded, `&amp;` and `\u0026` are repaired, and parameter synonyms are reduced to a single name. Everything that previously passed as "unreadable — therefore fine" is now rejected.

### 🔬 Parsing and normalization

- ✅ **URI parser instead of regex** — vless / vmess / trojan / hysteria2 / ss / tuic are parsed into a structure
- ✅ **Double decoding** — `&amp;amp;`, `\u0026`, `%5Cu0026`, `¬`
- ✅ **Invisible characters** — zero-width, BOM, `\n`, control chars are stripped before checking
- ✅ **Parameter synonyms** — `allowlnsecure` (with lowercase L), `skip-cert-verify`, `skip_cert_verify`, `insecure`
- ✅ **Lowercase scheme** — `VLESS://` no longer breaks parsing
- ✅ **Insecurity flags** — any value other than an explicit `0/false/no/off` is treated as enabled
- ✅ **vmess `"tls":"none"`** — no longer passes as valid TLS
- ✅ **Duplicates before limits** — one node with different names doesn't crowd out legitimate configs

### 🌐 Addresses and protocols

- ✅ **`ipaddress` instead of regex**…
