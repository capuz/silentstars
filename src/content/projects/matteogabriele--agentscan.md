---
repo: "MatteoGabriele/agentscan"
name: "agentscan"
description: "An open experiment in detecting automation patterns on GitHub"
url: "https://github.com/MatteoGabriele/agentscan"
homepage: "https://agentscan.tools"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [50, 49]
stars: 72
forks: 14
openIssues: 13
closedIssues: 86
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-02-14T21:51:29Z"
lastCommitAt: "2026-06-24T00:24:00Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 97
undervaluedScore: 37
maintainers: ["MatteoGabriele", "actions-user", "graphieros"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e99878635bf30259778db9441cd3f0c7edd483281727692e2fe3bc0e7d4a6d0/MatteoGabriele/agentscan"
discussionCount: 0
---

# AgentScan

An open experiment in detecting automation patterns on GitHub.

## Why this?

I didn't expect to build this website, but ended up creating it after reading multiple articles and seeing open source maintainers struggling with AI agents targeting their projects.

- https://socket.dev/blog/ai-agent-lands-prs-in-major-oss-projects-targets-maintainers-via-cold-outreach
- https://tylur.blog/harmful-prs/
- https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/

AgentScan uses an opinionated scoring system to analyze public GitHub events and classify accounts based on their latest activity. The results are indicators, not verdicts. There's no AI involved — just event analysis looking for patterns that feel automated.

The scoring is not bulletproof. Sophisticated automated accounts can pass undetected, and legitimate developers can occasionally trigger false positives. That's why AgentScan also maintains a curated list of manually verified accounts — submitted by the community, reviewed by maintainers, and merged via pull request. No account is added without human verification.

**This is an ongoing experiment.** Scores may be inaccurate. Use them as a starting…
