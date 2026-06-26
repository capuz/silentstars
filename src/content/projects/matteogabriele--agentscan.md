---
repo: "MatteoGabriele/agentscan"
name: "agentscan"
description: "An open experiment in detecting automation patterns on GitHub"
url: "https://github.com/MatteoGabriele/agentscan"
homepage: "https://agentscan.tools"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [51, 49]
stars: 73
forks: 14
openIssues: 14
closedIssues: 88
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-02-14T21:51:29Z"
lastCommitAt: "2026-06-26T06:46:37Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 97
undervaluedScore: 37
maintainers: ["MatteoGabriele", "actions-user", "graphieros"]
openGraphImageUrl: "https://opengraph.githubassets.com/693da05ea904d698b808590993dcd7ac9508ad0fdce995f6e35c4a5030e97096/MatteoGabriele/agentscan"
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
