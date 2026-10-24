---
repo: "crewrig/crewrig"
name: "crewrig"
description: "A layered AI assistant configuration with shared skill sandbox and built-in harness engineering loop."
readmeQualityOk: true
url: "https://github.com/crewrig/crewrig"
homepage: "https://crewrig.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 24
forks: 5
openIssues: 35
closedIssues: 604
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-05-14T19:26:05Z"
lastCommitAt: "2026-10-24T00:15:52Z"
lastReleaseAt: "2026-08-26T20:07:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 54
maintainers: ["gfourny-sfeir"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3f1ba508248dbff7f28eb319e880596b10202bb9fb3ed7107871bd15dd300cf/crewrig/crewrig"
---

# CrewRig

CrewRig is a centralized configuration framework for
[Gemini CLI](https://github.com/google-gemini/gemini-cli),
[Claude Code](https://claude.ai/code),
[GitHub Copilot CLI](https://docs.github.com/copilot/github-copilot-in-the-cli), and
[Antigravity CLI](https://antigravity.google).
It serves three complementary
purposes:

- **Personal context layer** — layered configuration files shape how AI
  assistants behave for a specific user's role, team, and seniority.
- **Shared artifact zones** — `artifacts/` is the single-source zone where
  skills, agents, and commands are authored once and compiled into outputs
  for all supported CLIs; an agent source declares what its work needs from a model as a **capability profile** ([spec 0195](https://github.com/crewrig/crewrig/blob/HEAD/specs/0195-agent-capability-profile.md)) rather than naming one — see [`docs/model-mapping-format.md`](https://github.com/crewrig/crewrig/blob/HEAD/docs/model-mapping-format.md) for what each CLI resolves it to.
- **Harness engineering** — a built-in feedback loop lets agents tag
  frictions encountered during real work; the harness curator clusters
  those frictions into actionable GitHub issues,…
