---
repo: "nowledge-co/community"
name: "community"
description: "Community Repo for Nowledge Labs Products"
url: "https://github.com/nowledge-co/community"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [49, 33]
topics: ["agent-memory", "alma", "claude-code", "cursor-plugin", "gemini-cli-extension", "memory", "openclaw", "openclaw-memory", "nowledge-labs", "nowledge-mem"]
stars: 110
forks: 26
openIssues: 115
closedIssues: 114
watchers: 0
contributors: 19
recentReleases: 5
createdAt: "2025-08-07T07:22:05Z"
lastCommitAt: "2026-06-24T06:38:25Z"
lastReleaseAt: "2026-04-07T13:05:30Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 43
maintainers: ["wey-gu", "wxxb789", "KingBoyAndGirl"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1033678177/59bad844-c005-494c-8778-42caa8ef56ec"
---

# Nowledge Community

**Community integrations for [Nowledge Mem](https://mem.nowledge.co)**

---

</div>

## Registry

The canonical source of truth for all integrations is [`integrations.json`](integrations.json). Capabilities, install commands, transport, tool naming, thread save methods, and the user-facing autonomy contract are tracked there. Update the registry first when adding or modifying integrations.

The autonomy contract uses one shared language across integrations:

- `automatic`: the host/plugin enforces it through hooks or lifecycle wiring
- `guided`: the package/rules/skills strongly teach it, but the model still decides
- `manual`: it only happens when the user or agent asks directly

This keeps one critical distinction honest for fresh users: having tools available is not the same thing as getting autonomous memory behavior.

For behavioral guidance (when to read Context Bundle, use Working Memory fallback, search, save, and route ambient spaces), see [`shared/behavioral-guidance.md`](shared/behavioral-guidance.md). For plugin authoring rules, see [`docs/PLUGIN_DEVELOPMENT_GUIDE.md`](docs/PLUGIN_DEVELOPMENT_GUIDE.md).

For end-user customization that survives…
