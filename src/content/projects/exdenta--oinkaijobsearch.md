---
repo: "Exdenta/OinkAIJobSearch"
name: "OinkAIJobSearch"
description: "AI job-search agent in Telegram — scrapes 25+ job boards, scores every posting against your CV with Claude, pushes real matches to your chat. Self-host free or use the hosted bot."
readmeQualityOk: true
url: "https://github.com/Exdenta/OinkAIJobSearch"
homepage: "https://oinkjobsearch.com"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-agent", "apify", "claude", "job-alerts", "job-scraper", "job-search", "llm", "python", "telegram-bot"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-24T15:42:48Z"
lastCommitAt: "2026-09-24T08:40:52Z"
status: "thriving"
tags: []
healthScore: 75
undervaluedScore: 36
maintainers: ["Exdenta"]
openGraphImageUrl: "https://opengraph.githubassets.com/837b5d883b21c58057085789106da0d184d883f4bb2ef1d6f6868852f7b874b1/Exdenta/OinkAIJobSearch"
---

# Oink — AI Job Search in Telegram

**Oink scrapes 25+ sources, scores every posting against your resume with Claude, and pushes only the real matches to your Telegram — each with a hiring contact and one-tap tracking.**

[**Try the live bot**](https://t.me/job_search_everyday_bot) ·
[Quick start](#quick-start) ·
[How it works](#how-it-works) ·
[Self-host](#setup-self-hosting) ·
[API access](#the-scrapers-as-an-api) ·
[Oink website](https://oinkjobsearch.com/) ·
[Job Atlas tools](https://jobatlas.dev/)

</div>

---

## Try it first

1. Open [**@job_search_everyday_bot**](https://t.me/job_search_everyday_bot)
2. Send `/start` and upload your CV (PDF)
3. Matching jobs will start arriving

## How it works

<table>
<tr>
<td width="320" align="center" valign="middle">
</td>
<td valign="middle">

- **Scrapes 25+ sources** — LinkedIn, HN "Who is Hiring", Wellfound, EURES, ReliefWeb, remote boards, EU tech boards, academic/research boards (full list in `skill/job-search/scripts/sources/`).
- **Builds your profile with Claude** — from your uploaded resume plus free-text preferences (`/prefs`), rebuilt by Opus on demand.
- **Scores every posting with an LLM** — no keyword filters; a scoring…
