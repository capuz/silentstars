---
repo: "tldr-pages/tldr-maintenance"
name: "tldr-maintenance"
description: "Calculates metrics about the current state of the tldr pages 👷."
readmeQualityOk: true
url: "https://github.com/tldr-pages/tldr-maintenance"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [60, 40]
topics: ["tldr", "tldr-pages", "maintenance", "hacktoberfest", "insights"]
stars: 21
forks: 7
openIssues: 44
closedIssues: 5
watchers: 6
contributors: 34
recentReleases: 0
createdAt: "2023-10-31T04:49:17Z"
lastCommitAt: "2026-07-14T05:53:49Z"
lastReleaseAt: "2024-09-07T21:33:55Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 82
undervaluedScore: 53
maintainers: ["actions-user", "dependabot[bot]", "ivanbaluta"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e3a9d4d5c85f0dda3a99949bc21050116bc6e13810039eb822af322056aafe1/tldr-pages/tldr-maintenance"
fundingLinks: ["LIBERAPAY:https://liberapay.com/tldr-pages"]
---

# tldr-maintenance

This repo runs a Bash script that calculates metrics about the current state of the [tldr-repo](https://github.com/tldr-pages/tldr).
These [metrics](https://github.com/tldr-pages/tldr-maintenance/issues/25) will help contributors to quickly spot whether there is still work to do to maintain and improve the quality. It also helps to detect any issues in the [tldr-repo](https://github.com/tldr-pages/tldr).

> [!NOTE]
> Running [`set-alias-page.py`](https://github.com/tldr-pages/tldr/blob/main/scripts/set-alias-page.py) and [`wrong-filename.sh`](https://github.com/tldr-pages/tldr/blob/main/scripts/wrong-filename.sh) generates false-positives.
The results need to be checked by hand. It can be used by [CODEOWNERS](https://github.com/tldr-pages/tldr/blob/main/.github/CODEOWNERS) to watch their owned language to detect if there are changes needed.

## Metrics

### English

- **Malformed more-info link page(s)**
  A page is malformed when the `> More information: <link>.` does not match the format in the [TLDR template](https://github.com/tldr-pages/tldr/blob/main/contributing-guides/translation-templates/more-info-link.md).
- **Missing TLDR page(s)**
  A page is…
