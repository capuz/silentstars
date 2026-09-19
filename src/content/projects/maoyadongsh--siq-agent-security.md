---
repo: "maoyadongsh/siq-agent-security"
name: "siq-agent-security"
description: "Research artifacts for provenance-bound agent authorization, signed effect evidence, and reproducible security evaluation."
originalDescription: "Research artifacts for provenance-bound agent authorization, signed effect evidence, and reproducible security evaluation."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/maoyadongsh/siq-agent-security"
homepage: "https://maoyadongsh.github.io/siq-agent-security/"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [47, 42]
topics: ["agent-security", "agent-skills", "ai-agents", "prompt-injection", "provenance", "reproducible-research"]
stars: 23
forks: 3
openIssues: 14
closedIssues: 2
watchers: 1
contributors: 8
recentReleases: 3
createdAt: "2026-08-13T12:07:01Z"
lastCommitAt: "2026-09-19T02:46:08Z"
lastReleaseAt: "2026-09-08T15:12:02Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 80
undervaluedScore: 43
maintainers: ["maoyadongsh", "Luke-zzZ-0", "sunbos"]
openGraphImageUrl: "https://opengraph.githubassets.com/a75c6c0f91832de3d83fb9645cfe287dad3d222692c607152df599e764a97477/maoyadongsh/siq-agent-security"
discussionCount: 0
---

<h1 align="center">SIQ Agent Security</h1>

Trusted execution security runtime for Agent Skills

<strong>Main branch main:</strong>

CI/research badges only reflect <code>main</code> and do not represent unmerged branches or released versions.<br />
The implementation and acceptance status of personal clients can be found in the <a href="docs/personal-experience-development-progress-20260910.md">development log</a>.

<strong>Simplified Chinese</strong> · <a href="README.en.md">English</a>

---

SIQ Agent Security connects user authorization, parameter sources, tool execution, and actual effects into a verifiable evidence chain. Agents are responsible for planning tasks and selecting Skills, the SIQ runtime checks actions based on trusted authorization, and determines task completion based on independently collected effect evidence.

The project targets researchers, Agent tool and adapter developers, and platform teams evaluating agent authorization governance. First-time users can use deterministic model fixtures on regular Linux without requiring API keys, GPUs, or enterprise control planes.

**Project positioning: Research-driven, authorization-independent, and effect-verifiable…
