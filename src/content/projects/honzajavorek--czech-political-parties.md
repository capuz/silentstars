---
repo: "honzajavorek/czech-political-parties"
name: "czech-political-parties"
description: "Tracking changes in Czech political parties"
readmeQualityOk: true
url: "https://github.com/honzajavorek/czech-political-parties"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["git-scraping", "czech", "czech-republic", "czechia", "political-parties", "parties", "registry", "scraper", "scrapy"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-11-08T11:27:12Z"
lastCommitAt: "2026-08-27T14:29:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 80
maintainers: ["honzajavorek", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/b62376a0128b31cbb2f1e6d900d8c1fc289b077fd8b1b671255ae6a6b35398fd/honzajavorek/czech-political-parties"
fundingLinks: ["GITHUB:https://github.com/honzajavorek", "CUSTOM:https://junior.guru/love/"]
---

# 🇨🇿 czech-political-parties

Tracking changes in Czech political parties:

- [History of changes](https://github.com/honzajavorek/czech-political-parties/commits/main/items.json)
- [Feed of changes](https://github.com/honzajavorek/czech-political-parties/commits/main.atom) (aka RSS)
- [Download JSON](https://raw.githubusercontent.com/honzajavorek/czech-political-parties/main/items.json)

Inspired by [@simonw](https://github.com/simonw)'s [git scraping article](https://simonwillison.net/2020/Oct/9/git-scraping/) and [this tweet](https://twitter.com/simonw/status/1324479089760104448). I noticed there is a [registry of all political parties and movements in the Czech Republic](https://mv.gov.cz/seznam-politickych-stran), and that for journalists [it's sometimes useful to monitor it for changes](https://www.seznamzpravy.cz/clanek/minar-si-zalozil-novy-spolek-pro-cr-ma-zmenit-cesko-k-lepsimu-126163#utm_content=ribbonnavignews&utm_term=milion%20chvilek&utm_medium=hint&utm_source=search.seznam.cz). Hence I decided to scrape the registry and have it as a git scraping pet project.

The scraper uses my favorite [Scrapy](https://docs.scrapy.org/) framework. So far I scrape only a few…
