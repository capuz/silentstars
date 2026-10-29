---
repo: "knowprasad/YourTomo"
name: "YourTomo"
description: "A pixel cat that lives on my GitHub profile and reacts to my public activity — zero-dependency Python state machine rendered to animated SVG by a GitHub Action"
readmeQualityOk: true
url: "https://github.com/knowprasad/YourTomo"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["contribution-graph", "contribution-graph-github", "github-actions", "github-profile", "github-profile-badges", "github-profile-card", "github-profile-readme", "github-profile-readme-md", "github-profiles", "github-widget"]
stars: 16
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-08-05T17:43:16Z"
lastCommitAt: "2026-10-29T05:50:49Z"
lastReleaseAt: "2026-08-07T14:36:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/651b4175a4c943256b79ab42338c50b4e3731cb71d2795b9a1f3bff8f320d610/knowprasad/YourTomo"
discussionCount: 2
---

# 🐱 YourTomo

**A pixel cat that lives on your GitHub profile and reacts to what you actually do.**

No JavaScript. No hosting. No dependencies at runtime — a deterministic
state machine, rendered to animated SVG by a GitHub Action that lives in
*your* repo.

---

## Quick start (5 minutes)

**Try it first** — see the cat on *your own* profile before installing
anything → **[prsdx.yourtomo.workers.dev](https://prsdx.yourtomo.workers.dev)**
(read-only, nothing is stored).

**1.** Add this workflow to your profile repo (`your-username/your-username`)
as `.github/workflows/pet.yml`:

```yaml
name: My YourTomo cat
on:
  schedule:
    - cron: '23 */6 * * *'   # every 6h - pick your own minute
  workflow_dispatch:

permissions:
  contents: write

jobs:
  pet:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: prsdx/github-pet@v1
        with:
          username: your-username        # change me
          timezone-offset-minutes: "330" # your UTC offset in minutes
```

**2.** Embed the cat in your `README.md`:

```html
<picture>
  <source media="(prefers-color-scheme: dark)"…
