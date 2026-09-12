---
repo: "thecolab-ai/.skills"
name: ".skills"
description: "Community-contributed AI skills for New Zealand public data — LINZ, Stats NZ, Auckland Transport, weather, and more."
readmeQualityOk: true
url: "https://github.com/thecolab-ai/.skills"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 25
forks: 6
openIssues: 1
closedIssues: 55
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-04-10T04:08:06Z"
lastCommitAt: "2026-09-12T08:04:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 45
maintainers: ["adam91holt", "thecolab-clawd", "brookwarner"]
openGraphImageUrl: "https://opengraph.githubassets.com/0489e96baa3cc4cd32b2849b049d718ed28f6c774ac3af835cf7aa9fc7a17709/thecolab-ai/.skills"
---

# thecolab-ai/.skills

Community-contributed AI skills for useful New Zealand-specific data and workflows.

Point your agent at real NZ infrastructure, public datasets, market data, industry feeds, transport APIs, pricing sources, weather services, and other useful local information.

## What is this?

Think Folding@home, but for spare AI tokens. Instead of donating idle compute, the community contributes skills that make New Zealand-specific data actually usable by AI agents.

Every skill in this repo is a drop-in connector. Clone the repo, install the skill, and your agent gains access to real NZ-relevant data without you having to reverse-engineer the source.

## Try it in 30 seconds

```bash
git clone https://github.com/thecolab-ai/.skills
cd .skills

# NZ fuel prices, supply, and vessels
python3 skills/fuelclock-nz/scripts/cli.py summary

# Latest NZ news
python3 skills/nz-news/scripts/cli.py headlines

# NZ supermarket stores and pricing history
python3 skills/grocer-nz/scripts/cli.py stores --query Papakura

# Auckland Transport real-time (needs AT API key)
python3 skills/at-transport/scripts/cli.py alerts
```

No auth is needed for `fuelclock-nz` or `nz-news`.…
