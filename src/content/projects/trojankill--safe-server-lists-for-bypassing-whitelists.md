---
repo: "Trojankill/Safe-server-lists-for-bypassing-whitelists"
name: "Safe-server-lists-for-bypassing-whitelists"
description: "Фильтрация небезопасных серверов в публичных подписках"
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
lastCommitAt: "2026-11-09T03:30:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 37
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdf870a5a1b19c5f9e6ba519ad7f61814482b1b364f086dfe3756f044da7c172/Trojankill/Safe-server-lists-for-bypassing-whitelists"
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

### 🌐 Адреса и протоколы

- ✅ **`ipaddress` вместо regex** — 169.254/16, 100.64/10, 198.18/15, мультикаст, ULA
- ✅ **Обфусцированные IP** — `0x7f000001`, `2130706433`, ведущие нули
- ✅ **Публичные DNS** — 1.1.1.1, 8.8.8.8 и ещё 10 адресов как «сервер» отбраковываются
- ✅ **Порты < 22** — мусор из подписок
- ✅ **UUID-валидация** — у vless / vmess / tuic, нулевые и служебные отбрасываются
- ✅ **Reality** — `pbk` строго 43…
