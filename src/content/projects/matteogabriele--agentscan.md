---
repo: "MatteoGabriele/agentscan"
name: "agentscan"
description: "Automation pattern detection for open source maintainers"
readmeQualityOk: true
url: "https://github.com/MatteoGabriele/agentscan"
homepage: "https://agentscan.tools"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [53, 46]
topics: ["automation-detection", "behavior-detection", "security", "spam-detection", "ai-security", "spam-filter", "spam-prevention", "spam-protection", "ai-spam-detection"]
stars: 94
forks: 15
openIssues: 8
closedIssues: 177
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2026-02-14T21:51:29Z"
lastCommitAt: "2026-09-07T08:35:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 37
maintainers: ["MatteoGabriele", "actions-user", "graphieros"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9190726382229d9a8ba656ca65efbf580109a90fccd30d3432d576dd29dbb63/MatteoGabriele/agentscan"
discussionCount: 0
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./.github/assets/logo-dark.svg">
</picture>

# AgentScan

**Automation pattern detection for open source maintainers.**

</div>

AgentScan analyzes a GitHub account's public activity and scores it based on how much it appears to rely on automation. There's no AI involved, just event analysis, powered by [identity](https://github.com/unveil-project/identity). The results are indicators, not verdicts: a starting point for your own judgment, not a final answer.

Scores aren't bulletproof. Sophisticated automated accounts can slip through, and legitimate developers can occasionally trigger false positives. To help with that, AgentScan also maintains a curated list of manually verified accounts, submitted by the community and reviewed by maintainers before being merged in.

AgentScan is used by maintainers and teams across the open source ecosystem. See [who's using it](https://agentscan.tools/adopters).

## Use it in your own repository

The same analysis that powers the website can run directly against your repository, so you can catch automated activity on your own pull requests. You can keep it as light as just…
