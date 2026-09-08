---
repo: "shopware/translations"
name: "translations"
description: "Contains all translation files, automatically extracted from crowdin for Shopware 6"
readmeQualityOk: true
url: "https://github.com/shopware/translations"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 8
forks: 6
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 26
recentReleases: 0
createdAt: "2023-10-25T07:24:14Z"
lastCommitAt: "2026-09-08T08:17:27Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 70
maintainers: ["marcelbrode", "github-actions[bot]", "crowdin-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/845474ca44a72ae06deaa8c09d7f1ac1be7004c536ebc94e6ec3b0470fb7d221/shopware/translations"
discussionCount: 0
---

# Shopware 6 Translations

Contains all translation files, automatically extracted from [crowdin](https://translate.shopware.com/) for [Shopware 6](https://github.com/shopware/shopware).

## Schedule

The translations are updated automatically via a defined schedule containing multiple workflows. The schedule is defined as follows:
| Workflow                                                     | Frequency                 |
|:-------------------------------------------------------------|:--------------------------|
| Collect translations and push new snippets                   | Every day at 18:00 CET    |
| Upload files to Crowdin                                      | Every day at 20:00 CET    |
| Download translations from Crowdin                           | Every day at 22:00 CET    |
| Pull supported languages to SwagLanguagePack                 | Every day at 00:00 CET    |
| Release new SwagLanguagePack version, if it contains changes | Every Friday at 08:30 CET |

## Crowdin-generated pull requests

As shown above, every day at 22:00 CET, the translations are downloaded from Crowdin and pushed to this repository. This is done by a GitHub action, which creates a pull request…
