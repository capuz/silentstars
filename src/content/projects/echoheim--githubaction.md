---
repo: "EchoHeim/GithubAction"
name: "GithubAction"
description: "🌱 Github Automated Deployment（CI/CD） 🍭 Selenium Automated Testing"
originalDescription: "🌱 Github Automated Deployment（CI/CD） 🍭 Selenium Automated Testing"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/EchoHeim/GithubAction"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["python", "selenium", "automation"]
stars: 7
forks: 5
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-08-14T04:36:20Z"
lastCommitAt: "2026-11-05T11:24:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 76
undervaluedScore: 56
maintainers: ["EchoHeim"]
openGraphImageUrl: "https://opengraph.githubassets.com/025e9d7a3c23b1659fbc1c66274c54bfdc0708a5791227a66e105ab45f0ca5ac/EchoHeim/GithubAction"
---

# GithubAction

Hosts a set of scheduled small tasks on GitHub Actions: website check-ins, weather forecasts, Futu seed watering, weekly report pushes, plus a local Selenium tool for running check-ins.

## Getting Started

- [What is GitHub Actions](https://github.com/EchoHeim/GithubAction/blob/HEAD/GitHubActions入门.md)
- [Crontab scheduled task reference settings](https://crontab.guru/)

## Directory Structure

```text
.github/workflows/     Five workflows, the scheduling entry points of the repository
Selenium/              The Selenium check-in tool itself
  CheckIN/             Check-in scripts for each site + local runner
  CleanRuns/           Bulk-delete historical workflow runs (CDP version)
  Futu/                Futu seed farm script
  base.py              Shared code for environment detection, proxy handling, image captcha recognition, etc.
Messaging/             Message notification wrappers (DingTalk / Feishu / WeCom / email)
Trending/              GitHub trending → DeepSeek writes copy → Feishu push
Weather/               wttr.in weather fetching + email sending
```

## 1. Website Check-In

Workflow: `check_in.yml` (daily at 22:22 UTC = 6:22 the next day, Beijing…
