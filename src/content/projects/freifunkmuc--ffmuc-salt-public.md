---
repo: "freifunkMUC/ffmuc-salt-public"
name: "ffmuc-salt-public"
description: "Freifunk München Salt-Stack states"
readmeQualityOk: true
url: "https://github.com/freifunkMUC/ffmuc-salt-public"
language: "HTML"
languages: ["HTML", "Salt", "Jinja"]
languagePcts: [24, 20, 20]
topics: ["docker", "hacktoberfest", "saltstack", "ssh"]
stars: 32
forks: 13
openIssues: 4
closedIssues: 55
watchers: 9
contributors: 15
recentReleases: 0
createdAt: "2019-02-23T22:06:41Z"
lastCommitAt: "2026-11-18T12:06:24Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 60
maintainers: ["awlx", "GoliathLabs", "DasSkelett"]
openGraphImageUrl: "https://opengraph.githubassets.com/a052a8890a25ecb6fc2d35d332d9bf638da6f427e5ae495ba044b07802846b26/freifunkMUC/ffmuc-salt-public"
fundingLinks: ["GITHUB:https://github.com/freifunkMUC"]
---

# FFMUC-SALT-PUBLIC Repo
This is the salt repo for Freifunk Munich

## Dependencies
This repo makes heavy use of Netbox based ext-pillar information especially config_contexts, services and ip information

Netbox is a hard dependency at *render* time: `_modules/site_prefixes.py`,
`_modules/extra_dns_entries.py` and `_modules/cfssl_certs.py` are called from
Jinja while states are being rendered. They fail closed - if Netbox cannot be
reached the render aborts and the highstate goes red, rather than quietly
producing a config with no prefixes or no DNS records.
