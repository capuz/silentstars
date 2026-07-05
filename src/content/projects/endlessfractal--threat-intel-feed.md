---
repo: "EndlessFractal/Threat-Intel-Feed"
name: "Threat-Intel-Feed"
description: "Automated threat intel feed parsing and consolidation💻👾🤖 "
readmeQualityOk: true
url: "https://github.com/EndlessFractal/Threat-Intel-Feed"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["consolidation", "github-actions", "parsing", "python", "rss-feed", "threat-intelligence", "news", "newsletter", "rss", "security"]
stars: 42
forks: 10
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-10-07T22:17:11Z"
lastCommitAt: "2026-07-05T20:55:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 52
maintainers: ["EndlessFractal"]
openGraphImageUrl: "https://opengraph.githubassets.com/af03f147215a02d9f301020bc174da08c21f34fdd9159e9013e8ec03f04e43b5/EndlessFractal/Threat-Intel-Feed"
---

# EndlessFractal's Threat Intel Feed

An automated pipeline that aggregates 30+ cybersecurity and threat-intel RSS feeds into a single combined feed (`feed.xml`), and optionally pushes new entries to webhooks.

**Subscribe directly in your RSS reader:**
> https://endlessfractal.github.io/Threat-Intel-Feed/feed.xml

## What it aggregates

Feeds are pulled from `list.txt` and merged, deduplicated by link, and sorted by publish date. The 60 most recent entries are kept. Sources include:

- AhnLab ASEC, Bitdefender Labs, Broadcom SED, CISA Alerts, Cloudflare Security
- CrowdStrike, EclecticIQ, Fortinet Threat Research, Google Project Zero
- GovTech Cybersecurity, Graham Cluley, Infosecurity Magazine, Kaspersky Securelist
- KrebsOnSecurity, Malwarebytes, Maryland MCAC, Microsoft Security, Nao-Sec
- NIST Cybersecurity Insights, Palo Alto Unit 42, Recorded Future, SANS ISC
- Schneier on Security, Security Affairs, SensePost, SentinelOne, SOC Prime
- Sophos News, Talos Intelligence, TechRepublic Security, The Guardian Security
- The Hacker News, The Record, Threatpost, Troy Hunt

Full list with links: see…
