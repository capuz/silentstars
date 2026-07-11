---
repo: "Sarthak-47/ARGUS"
name: "ARGUS"
description: "AI-powered security audit tool — point it at a repo, it reads the code, spins up the app, and actually attacks it. Static scan + live exploit swarm + LLM-explained fixes."
readmeQualityOk: true
url: "https://github.com/Sarthak-47/ARGUS"
homepage: "https://github.com/Sarthak-47/ARGUS"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["ai-security", "appsec", "cli", "dast", "devsecops", "llm", "pentesting", "python", "sast", "security"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-26T15:23:14Z"
lastCommitAt: "2026-07-11T05:59:03Z"
lastReleaseAt: "2026-07-10T08:06:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 60
maintainers: ["Sarthak-47", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/48f535f22552a3e2388c26830f86e272a5e90e1939c0451b6432cf2832007d95/Sarthak-47/ARGUS"
discussionCount: 0
---

</div>

---

**Argus** is an AI-powered security audit agent for developers. Named after **Argus Panoptes** —
the hundred-eyed giant of Greek myth who never slept and saw everything.

Static scanners tell you what *looks* wrong. Argus **proves** it: it reads your code, then spins
your app up and actually attacks it — dumping data via SQLi, forging admin JWTs, reaching cloud
metadata via SSRF — and explains every finding in plain English, tailored to your codebase.

**Built for the AI-agent era, not just the AI-code era:** shipping an MCP server or an in-app
chatbot? Argus tests those too — `MCPSecurityAgent` catches tool poisoning and dangerous
unauthenticated capabilities in exposed MCP servers, and `PromptInjectionAgent` fires a canary
token at your app's own AI features to prove whether untrusted input can override system
instructions. Same swarm, same PoC-or-it-didn't-happen standard.

<details>
<summary><b>Table of contents</b></summary>

- [See it in 30 seconds](#-see-it-in-30-seconds)
- [How it works](#how-it-works--two-phases)
- [Install & use](#install--use)
- [Works on any machine — local or BYOK](#works-on-any-machine--local-or-byok)
- [Put it in CI](#put-it-in-ci)
-…
