---
repo: "merill/mc"
name: "mc"
description: "M365 Message Center Archive"
readmeQualityOk: true
url: "https://github.com/merill/mc"
homepage: "https://mc.merill.net"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
stars: 31
forks: 7
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-02-21T07:32:10Z"
lastCommitAt: "2026-07-09T20:44:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 64
maintainers: ["merill"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa5bdfb237d0a336521838acc942a8a87e4e681205fd21b86dcdb97f30d1003c/merill/mc"
---

# Microsoft 365 Message Center Archive

This site is a simple archive of the Microsoft 365 Message Center and Microsoft 365 Roadmap. It is updated daily and provides a simple way to search and view posts.

I created this site so I can link to it from my weekly newsletter [Entra.News](https://entra.news) so folks could ready the message center post without having to log into the admin center.

> [!CAUTION]  
> This site is for reference only. Always refer to your tenant's Microsoft 365 message center post for the most accurate information that is relevant to your tenant.
> * Not all posts are visible to all tenants.
> * This archive uses a tenant that has a Microsoft 365 E5 subscription. Your tenant may have different features and updates. 

## Feedback

If you have any feedback or suggestions, please feel free to reach out to me on Twitter [@merill](https://twitter.com/merill) or [LinkedIn](https://linkedin.com/in/merill).

## Agent Skill

This repo includes a skills.sh-compatible agent skill for searching and citing the archive:

```bash
npx skills add merill/mc
```

The skill teaches agents to use `https://mc.merill.net/llms.txt`, search…
