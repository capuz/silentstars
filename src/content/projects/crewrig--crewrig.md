---
repo: "crewrig/crewrig"
name: "crewrig"
description: "A layered AI assistant configuration with shared skill sandbox and built-in harness engineering loop."
readmeQualityOk: true
url: "https://github.com/crewrig/crewrig"
homepage: "https://crewrig.org"
language: "Shell"
languages: ["Shell"]
languagePcts: [82]
stars: 22
forks: 6
openIssues: 36
closedIssues: 533
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-05-14T19:26:05Z"
lastCommitAt: "2026-10-01T10:24:21Z"
lastReleaseAt: "2026-08-26T20:07:44Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 56
maintainers: ["gfourny-sfeir", "hcross", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e73e468d2eb625a6ac1d18e0f5e8057411e5737f46add87eb6b53841357279f9/crewrig/crewrig"
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
