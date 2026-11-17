---
repo: "Vladimir-Human/ru-marketplace-mcp"
name: "ru-marketplace-mcp"
description: "MCP servers and agent skills for 12 Russian and Chinese marketplaces: WB, Ozon, Yandex Market, Avito. Price comparison."
originalDescription: "MCP-серверы и agent skills для 12 площадок РФ и Китая: WB, Ozon, Яндекс Маркет, Авито. Сравнение цен."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/Vladimir-Human/ru-marketplace-mcp"
homepage: "https://github.com/Vladimir-Human/ru-marketplace-mcp/blob/main/docs/QUICKSTART.md"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["marketplace", "mcp", "ozon", "price-comparison", "russia", "wildberries", "yandex-market", "avito", "python", "mcp-server"]
stars: 191
forks: 33
openIssues: 2
closedIssues: 15
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2026-07-26T17:56:16Z"
lastCommitAt: "2026-11-17T14:42:33Z"
lastReleaseAt: "2026-08-16T10:51:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 31
maintainers: ["Vladimir-Human", "dependabot[bot]", "Donkiton"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1313032827/eee673bd-699a-4066-aa66-f61e51e0c7c0"
discussionCount: 0
---

# ru-marketplace-mcp

**Russian** · [English](https://github.com/Vladimir-Human/ru-marketplace-mcp/blob/HEAD/README.en.md)

**MCP servers for Russian and Chinese marketplaces.** Prices, availability, ratings, reviews, and seller details from Wildberries, Ozon, Yandex Market, Detsky Mir, Avito, AliExpress, Taobao, Megamarket, Lamoda, DNS, and Citilink. Plus real estate from Cian and price comparison across all product sources in a single call.

Read-only. No API keys, tokens, or registration needed. Sites with strict anti-bot protection are read through your own Chrome. One optional exception: the optional MPStats uses a paid token (`MPSTATS_MP_AUTH`). Without it, everything else works as before.

       alt="compare_prices(&quot;men's sneakers&quot;): Wildberries and Yandex Market offers by price, cheapest is wildberries 712 ₽">

## Quick start

### Security and boundaries
- Don't connect it in the same agent session as tools that read personal data and could send it outward without your confirmation.
- Use a separate Chrome profile for scraping, without email or bank access. [Details](https://github.com/Vladimir-Human/ru-marketplace-mcp/blob/HEAD/SECURITY.md).…
