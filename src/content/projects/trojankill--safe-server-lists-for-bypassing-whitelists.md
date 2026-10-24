---
repo: "Trojankill/Safe-server-lists-for-bypassing-whitelists"
name: "Safe-server-lists-for-bypassing-whitelists"
description: "Filtering of unsafe servers in public subscriptions"
originalDescription: "Фильтрация небезопасных серверов в публичных подписках"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/Trojankill/Safe-server-lists-for-bypassing-whitelists"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-17T19:23:30Z"
lastCommitAt: "2026-10-24T00:15:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 37
maintainers: ["github-actions[bot]", "Trojankill"]
openGraphImageUrl: "https://opengraph.githubassets.com/325e4d601eacd4ddc2491ba93eb6601ebad2c6e7c4330819a1d9e5ebb5102fc8/Trojankill/Safe-server-lists-for-bypassing-whitelists"
---

# 🛡️ VPN Config Security Filter

---

## 🚀 What's new in v6.0

The main change: **every link is now actually parsed**, rather than checked with regexes against the raw string. Percent-encoding is decoded, `&amp;` and `\u0026` are repaired, parameter synonyms are reduced to one name. Everything that previously passed as "unreadable — therefore fine" is now rejected.

### 🔬 Parsing and normalization

- ✅ **URI parser instead of regex** — vless / vmess / trojan / hysteria2 / ss / tuic are parsed into a structure
- ✅ **Double decoding** — `&amp;amp;`, `\u0026`, `%5Cu0026`, `¬`
- ✅ **Invisible characters** — zero-width, BOM, `\n`, control chars are stripped before checking
- ✅ **Parameter synonyms** — `allowlnsecure` (with a lowercase L), `skip-cert-verify`, `skip_cert_verify`, `insecure`
- ✅ **Lowercase scheme** — `VLESS://` no longer breaks parsing
- ✅ **Insecure flags** — any value other than an explicit `0/false/no/off` is treated as enabled
- ✅ **vmess `"tls":"none"`** — no longer passes as valid TLS
- ✅ **Duplicates before limits** — one node with different names no longer pushes out legitimate configs

### 🌐 Addresses and protocols

- ✅ **`ipaddress` instead of regex** —…
