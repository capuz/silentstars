---
repo: "orhoncan/tuik-mcp"
name: "tuik-mcp"
description: "TÜİK SDMX REST APIsine erişim sağlayan bir MCP sunucusu. Türkiye'nin resmi istatistiklerine (nüfus, işgücü, enflasyon, dış ticaret, sanayi üretimi vb.) doğrudan LLM üzerinden erişim sağlar."
readmeQualityOk: true
url: "https://github.com/orhoncan/tuik-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-12T17:14:16Z"
lastCommitAt: "2026-07-15T05:54:54Z"
status: "thriving"
tags: []
healthScore: 69
undervaluedScore: 19
maintainers: ["orhoncan"]
openGraphImageUrl: "https://opengraph.githubassets.com/e84d50b51472d9b10e846df988ec1c249acd4a1ebbd400b4a3822a7582e536a1/orhoncan/tuik-mcp"
---

# TÜİK SDMX MCP Server

[TÜİK](https://www.tuik.gov.tr/) (Türkiye İstatistik Kurumu) SDMX REST API'sine erişim sağlayan bir [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) sunucusu.

362 dataflow üzerinden Türkiye'nin resmi istatistiklerine (nüfus, işgücü, enflasyon, dış ticaret, sanayi üretimi vb.)
doğrudan LLM üzerinden erişim sağlar.

Mevcut tüm dataflow'ların (SDMX üçlüsü + İngilizce başlık) güncel dökümü için: [`data/dataflows.csv`](https://github.com/orhoncan/tuik-mcp/blob/HEAD/data/dataflows.csv).

## Kimlik doğrulama (API Anahtarı gerekli)

TÜİK, SDMX servislerine erişimi TÜİK giriş sistemi üzerinden alınan kısa ömürlü (varsayılan 300 sn) Bearer token ile korur.
Sunucu bu token'ı sizin adınıza otomatik alır ve süresi dolmadan yeniler; sizden yalnızca bir **API Anahtarı** ister.

1. [Veri Portalı](https://veriportali.tuik.gov.tr/tr)'na kullanıcı adı/şifre ile girin.
2. **Kullanıcı Bilgileri** ekranından SMS ile telefon doğrulamasını tamamlayın; üretilen **API Anahtarı**'nı kopyalayın.
   (Türkiye telefon hattınız yoksa `info@tuik.gov.tr` üzerinden talep edebilirsiniz - bkz. [SDMX web servis…
