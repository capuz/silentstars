---
repo: "DayuanJiang/TechRSS"
name: "TechRSS"
description: "AI-curated daily tech digest from 94 independent blogs, scored and summarized in Chinese"
readmeQualityOk: true
url: "https://github.com/DayuanJiang/TechRSS"
homepage: "https://dayuanjiang.github.io/TechRSS/"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [53, 26]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-24T09:27:55Z"
lastCommitAt: "2026-09-18T14:02:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 61
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa77adee0a9bfca329e73430dd0fff17dc93e7e5264462c22d6648821d8f3733/DayuanJiang/TechRSS"
---

# TechRSS

AI-curated daily tech digest from 94 independent blogs, scored and summarized in Chinese.

**Live site**: https://dayuanjiang.github.io/TechRSS/

## How it works

1. **Fetch** - Pulls RSS feeds from 94 independent tech blogs (Simon Willison, Paul Graham, Troy Hunt, Krebs on Security, etc.)
2. **Score** - Each article is scored by AI (GLM-4.7 via Amazon Bedrock) on two dimensions: depth and novelty (1-10)
3. **Summarize** - Top articles get a Chinese title and 3-5 sentence Chinese summary
4. **Publish** - Static site rebuilt and deployed to GitHub Pages

Runs incrementally every 30 minutes via GitHub Actions. Only new articles trigger AI calls.

## Tech stack

- [Astro](https://astro.build/) + Tailwind CSS
- [Vercel AI SDK](https://sdk.vercel.ai/) + Amazon Bedrock
- TypeScript

## Development

```bash
npm install
npm run dev        # Dev server
npm run digest     # Run the digest pipeline (requires AWS credentials)
npm run build      # Build static site
```
