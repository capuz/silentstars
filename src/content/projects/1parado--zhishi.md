---
repo: "1parado/zhishi"
name: "zhishi"
description: "Browser extension for managing webpage usage time"
originalDescription: "浏览器插件——管理网页使用时长"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/1parado/zhishi"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [80]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-27T10:55:08Z"
lastCommitAt: "2026-10-08T10:52:32Z"
lastReleaseAt: "2026-10-02T11:47:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 41
maintainers: ["1parado"]
openGraphImageUrl: "https://opengraph.githubassets.com/15e492daefe6035b12107ce0092f1acd4a2051b32048ff1a238c658866cd0646/1parado/zhishi"
---

# Zhishi · Attention & Health

A quiet, restrained Chrome / Edge extension: it records usage time for each website and provides eye-care and sedentary-break reminders, website limits, and focus mode. **All data is stored only on your local machine** and is never uploaded to any server.

The visual system is ported from [@paradox/ui](https://github.com/1parado/UI_UI) (shadcn token system, light and dark themes).

## Interface overview

**Overview**: today / last 7 days statistics, three switchable charts, website ranking, and an annual heatmap (hover for details, click to open the timeline).

**Website ranking**: switchable between today / last 7 days, sorted by usage time or visit count. The top 7 are shown by default, and “View more” expands the full list. Each row **only shows the current sort basis** (time when sorted by time, count when sorted by count), while the other metric keeps being recorded in the background. **Merge by root domain** is on by default, so `linux.do` and `cdk.linux.do` are combined into one row. Turn it off to return to the full subdomain breakdown. Click any row to open that site (if it is already open, switches to it).

**Website limits**: set a daily…
