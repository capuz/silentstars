---
repo: "F0Rextasy/bigbullapp-cs"
name: "bigbullapp-cs"
description: "bigbullapp-cs-nuvio — Cloudstream ve Nuvio için Türkçe film, dizi, anime, çizgi film ve canlı TV kaynakları. Telegram: https://t.me/bigbull_app"
readmeQualityOk: true
url: "https://github.com/F0Rextasy/bigbullapp-cs"
homepage: "https://t.me/bigbull_app"
language: "Kotlin"
languages: ["Kotlin", "JavaScript"]
languagePcts: [72, 28]
topics: ["anime", "cloudstream", "nuvio", "plugins", "streaming", "turkish"]
stars: 22
forks: 2
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-28T17:31:29Z"
lastCommitAt: "2026-11-23T13:29:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 48
maintainers: ["F0Rextasy"]
openGraphImageUrl: "https://opengraph.githubassets.com/74be1420ba4e90e8322ab90d03da81bc4f61db0e036476d35a36db1561b04b0e/F0Rextasy/bigbullapp-cs"
---

# BigBullApp — Cloudstream + Nuvio

Türkçe film, dizi, anime, çizgi film ve canlı TV kaynakları.
Cloudstream için `.cs3` eklentileri, Nuvio için plugin deposu + iki katalog addon'u.

## Hızlı kurulum

### Cloudstream (film, dizi, anime, canlı TV)

1. **Ayarlar → Eklentiler → Depo Ekle**
2. Adres: `https://raw.githubusercontent.com/F0Rextasy/bigbullapp-cs/master/repo.json`
   — ya da kısa kod: **`bigbullapp`**
3. Depoyu ekle → istediğin eklentiyi **İndir**
4. **Ayarlar → Extensions** listesinden sağlayıcıları aç

### Nuvio (film/dizi + canlı TV)

Nuvio'da plugin desteği yalnız **sideload** sürümlerde vardır (mağaza sürümünde Plugins bölümü yok).

1. **Ayarlar → Content & Discovery → Plugins → Add Repository → Refresh → Enable plugin providers globally**
2. İstediğin sağlayıcıları tek tek aç
3. **Addons → Add Addon** ile iki adresi ekle:

| Ne için | Adres |
|---|---|
| Ana sayfa film/dizi satırları | `https://raw.githubusercontent.com/F0Rextasy/bigbullapp-cs/master/nuvio/addon/manifest.json` |
| Canlı TV (8 satır, 150 kanal) | `https://raw.githubusercontent.com/F0Rextasy/bigbullapp-cs/master/nuvio/addon-live/manifest.json` |
