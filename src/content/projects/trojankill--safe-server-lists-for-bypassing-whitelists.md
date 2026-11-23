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
languagePcts: [97]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-17T19:23:30Z"
lastCommitAt: "2026-11-23T10:30:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 38
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3ddb1435f90159d8be6327e55047d518e43d1bfe679b8eb50396d438de4e03c/Trojankill/Safe-server-lists-for-bypassing-whitelists"
---

# 🛡️ VPN Config Security Filter

---

### 🔬 Разбор и нормализация

- ✅ **URI-парсер вместо regex** — vless / vmess / trojan / hysteria2 / ss / tuic разбираются в структуру
- ✅ **Двойное декодирование** — `&amp;amp;`, `\u0026`, `%5Cu0026`, `¬`
- ✅ **Невидимые символы** — zero-width, BOM, `\n`, control chars вырезаются до проверки
- ✅ **Синонимы параметров** — `allowlnsecure` (с маленькой L), `skip-cert-verify`, `skip_cert_verify`, `insecure`
- ✅ **Схема в нижнем регистре** — `VLESS://` больше не ломает разбор
- ✅ **Флаги небезопасности** — любое значение кроме явного `0/false/no/off` считается включённым
- ✅ **vmess `"tls":"none"`** — больше не проходит как валидный TLS
- ✅ **Дубликаты до лимитов** — один узел с разными именами не выбивает честные конфиги
