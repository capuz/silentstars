---
repo: "nameczz/overseas-saas-topic-radar"
name: "overseas-saas-topic-radar"
description: "Overseas SaaS / AI / 小红书 / 公众号 topic radar, updated every 3 hours"
originalDescription: "海外 SaaS / AI / 小红书 / 公众号选题雷达，每 3 小时更新"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/nameczz/overseas-saas-topic-radar"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [56, 25]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-13T15:38:23Z"
lastCommitAt: "2026-10-21T21:15:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 46
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a11fb65d2d4de51b6908243d5f69d0b2870692d57202948a955d3e14123ddef3/nameczz/overseas-saas-topic-radar"
---

# Overseas SaaS Topic Radar

Overseas SaaS / AI tools / Mini Programs / 小红书 / 公众号 topic radar.

It collects product, technology, community, and trend signals from public sources, scores them on a composite of "viral potential, commercial value, content fit, timeliness, and actionability," and generates a real-time dashboard that can be deployed to Vercel.

## Sources

- AIHOT: `https://aihot.virxact.com/`
- Buzzing: `https://www.buzzing.cc/`
- Hacker News Algolia: keywords such as AI / SaaS / agent / indie hacker
- GitHub Search: recently fast-growing AI / SaaS / automation / agent repos
- Hugging Face Models: Trending models, Spaces, and AI capability signals
- Dev.to: articles related to AI / SaaS / startup / product
- Product Hunt RSS: new product signals (if the RSS feed is accessible)

## Running Locally

```bash
npm install
npm run refresh
npm run dev
```

Open <http://localhost:3000>.

## Update Frequency

`.github/workflows/update-radar.yml` runs every 3 hours:

1. Collect the latest signals
2. Re-score and generate `public/data/latest.json`
3. Commit and push if there are changes
4. Vercel automatically redeploys once it is connected to the repo

Manual runs are also…
