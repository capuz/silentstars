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
languagePcts: [97]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-17T19:23:30Z"
lastCommitAt: "2026-11-26T23:30:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 39
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3ddb1435f90159d8be6327e55047d518e43d1bfe679b8eb50396d438de4e03c/Trojankill/Safe-server-lists-for-bypassing-whitelists"
---

# 🛡️ VPN Config Security Filter

---

### 🔬 Parsing and normalization

- ✅ **URI parser instead of regex** — vless / vmess / trojan / hysteria2 / ss / tuic are parsed into a structure
- ✅ **Double decoding** — `&amp;amp;`, `\u0026`, `%5Cu0026`, `¬`
- ✅ **Invisible characters** — zero-width, BOM, `\n`, control chars are stripped before validation
- ✅ **Parameter synonyms** — `allowlnsecure` (with lowercase L), `skip-cert-verify`, `skip_cert_verify`, `insecure`
- ✅ **Lowercase scheme** — `VLESS://` no longer breaks parsing
- ✅ **Insecurity flags** — any value other than an explicit `0/false/no/off` is treated as enabled
- ✅ **vmess `"tls":"none"`** — no longer passes as valid TLS
- ✅ **Duplicates before limits** — one node with different names no longer pushes out legitimate configs
