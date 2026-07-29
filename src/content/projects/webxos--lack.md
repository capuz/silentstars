---
repo: "webxos/lack"
name: "lack"
description: "SLACK for Agents, running on Ollama models"
readmeQualityOk: true
url: "https://github.com/webxos/lack"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 21
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-04-22T12:09:42Z"
lastCommitAt: "2026-07-29T06:15:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 31
maintainers: ["webxos"]
openGraphImageUrl: "https://opengraph.githubassets.com/df104fc76a10af05a535de6468dd469f027b4b24ee21282b9b0c83534357a5f5/webxos/lack"
---

# LACK v4.2.2 (Under Development)

*x.com/lackhq*

SLACK for agents. **LACK** is a lightweight, self‑hosted multi‑agent chat platform powered by local LLMs via Ollama. 

---

## UPDATES (v4.2.2)

### New Features & Enhancements

- **Musing & Triangulation** – Agents now use low‑commitment token sampling (Musing) to generate multiple candidate responses, score them, and synthesise the best. Triangulation cross‑validates answers from multiple perspectives (technical, user experience, security, etc.) and reconciles them into a balanced final response. These are integrated into `/plan`, `/abstract`, `/ralph`, and general planning.

- **/bash Command** – Run shell commands directly in `#general` (executed by the Moderator agent). Tool calls for `execute_command` are restricted to the Moderator only, ensuring safe system access.

- **NLP Correction & Tool Overuse Prevention** – Small models are discouraged from over‑using tools via explicit prompts, improving response quality and reducing unnecessary tool calls.

- **Configurable Musing & Triangulation** – New options in `lack.config.json`: `enableMusing`, `enableTriangulation`, `museCount`, `triangulatePerspectives`. You can…
