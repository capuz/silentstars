---
repo: "martinschaible/rspamd-rules"
name: "rspamd-rules"
description: "Curated Multimaps and Rules for Rspamd"
readmeQualityOk: true
url: "https://github.com/martinschaible/rspamd-rules"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [98]
topics: ["multimap", "rspamd", "spam-detection", "spam-filtering", "regex"]
stars: 53
forks: 7
openIssues: 12
closedIssues: 56
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2023-08-16T14:23:06Z"
lastCommitAt: "2026-10-15T08:32:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 52
maintainers: ["martinschaible"]
openGraphImageUrl: "https://opengraph.githubassets.com/164da9c94947e023332b98a4a0ab46c94196fa568a425aab97a74525452d24ba/martinschaible/rspamd-rules"
discussionCount: 6
---

# Curated Multimaps for Rspamd, second edition

**Rspamd** offers so-called **multimaps** and their maps. With them you can create rules with or without regular expressions.

I started developing the rules in early 2024 and i am now working on an improved second version.

Before Rspamd, I used an older product called **Declude** as a spam filtering system for our server as well as for customers. Declude also offered a rule system based on regular expressions. This experience is very useful to me here.

:bulb: The rules are updated at least once, but usually several times a day and are therefore sure to be accurate.

📢 If you have any questions or feedback drop me line at the [discussions](https://github.com/martinschaible/rspamd-rules/discussions).

🐛 Bugs and problems can be reported here: [Issues](https://github.com/martinschaible/rspamd-rules/issues).

🍀 Feel free to use these maps on your Rspamd server.

## Installation
The base is the file *multimap.conf* in the folder `/etc/rspamd/local.d`. This file includes all configuration files of the map files. These files are located in the same folder and must also be copied to the server.

The map files of the first generation…
