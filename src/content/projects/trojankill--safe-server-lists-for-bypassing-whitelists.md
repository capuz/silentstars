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
languagePcts: [97]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-17T19:23:30Z"
lastCommitAt: "2026-11-11T19:45:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 37
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dfb4c27e0ea4c21ff75e40c915137963acb0078a0aafd0b036f696a2ba90242/Trojankill/Safe-server-lists-for-bypassing-whitelists"
---

# 🛡️ VPN Config Security Filter

---

### 🔬 Parsing and normalization

- ✅ **URI parser instead of regex** — vless / vmess / trojan / hysteria2 / ss / tuic are parsed into a structure
- ✅ **Double decoding** — `&amp;amp;`, `\u0026`, `%5Cu0026`, `¬`
- ✅ **Invisible characters** — zero-width, BOM, `\n`, control chars are stripped before validation
- ✅ **Parameter synonyms** — `allowlnsecure` (with a lowercase L), `skip-cert-verify`, `skip_cert_verify`, `insecure`
- ✅ **Lowercase scheme** — `VLESS://` no longer breaks parsing
- ✅ **Insecure flags** — any value other than an explicit `0/false/no/off` is treated as enabled
- ✅ **vmess `"tls":"none"`** — no longer passes as valid TLS
- ✅ **Duplicates counted before limits** — one node with different names no longer pushes out legitimate configs

### 🌐 Addresses and protocols

- ✅ **`ipaddress` instead of regex** — 169.254/16, 100.64/10, 198.18/15, multicast, ULA
- ✅ **Obfuscated IPs** — `0x7f000001`, `2130706433`, leading zeros
- ✅ **Public DNS** — 1.1.1.1, 8.8.8.8 and 10 more addresses are rejected as “server”
- ✅ **Ports < 22** — junk from subscriptions
- ✅ **UUID validation** — for vless / vmess / tuic, null and reserved UUIDs are…
