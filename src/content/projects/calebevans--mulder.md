---
repo: "calebevans/mulder"
name: "mulder"
description: "Agentic DFIR"
readmeQualityOk: true
url: "https://github.com/calebevans/mulder"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["ai", "ai-agents", "claude-code", "dfir", "digital-forensics", "forensics", "incident-response", "mcp", "sans-sift", "threat-hunting"]
stars: 79
forks: 14
openIssues: 1
closedIssues: 28
watchers: 3
contributors: 5
recentReleases: 4
createdAt: "2026-04-08T00:48:50Z"
lastCommitAt: "2026-09-19T02:46:07Z"
lastReleaseAt: "2026-09-15T18:40:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 40
maintainers: ["calebevans", "elhoim"]
openGraphImageUrl: "https://opengraph.githubassets.com/869c4f6956dce45a945a358a2341630c72c46f5bfbe0e0f734511ec538e913a0/calebevans/mulder"
---

# mulder
### 🏆 1st Place - SANS Institute [Find Evil Hackathon 2026](https://www.sans.org/press/announcements/sans-names-the-five-winners-of-find-evil-2026)
</div>

Mulder takes a directory of forensic evidence (disk images, memory dumps, PCAPs, event logs) and runs a five-phase autonomous investigation with hard quality gates between each phase. It produces structured incident reports with MITRE ATT&CK mappings, IOC exports, and a full audit trail. An adversarial "Alternative Narrative" phase challenges every finding before the report is generated. All tool invocations go through typed MCP interfaces - never through a shell - and an append-only audit log validates every evidence citation at the API boundary, making findings with fabricated evidence citations structurally impossible to submit.

## Results

Four autonomous investigations against real forensic datasets, unmodified from tool output. Each case has an interactive HTML report on [GitHub Pages](https://calebevans.github.io/mulder/examples/srl-2018/SRL-2018.report.html) (sidebar navigation, dark/light theme, audit trail). See the [examples index](https://github.com/calebevans/mulder/blob/main/examples/README.md) for all…
