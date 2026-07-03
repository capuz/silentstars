---
repo: "telus-labs/stagecraft"
name: "stagecraft"
description: "Run your AI coding tool through a 18-stage dev pipeline. Multi-host across Claude Code, Codex, Gemini CLI and OpenAI API compatible endpoints.   Artifacts and gates on disk, not a chat log."
url: "https://github.com/telus-labs/stagecraft"
homepage: "https://github.com/telus-labs/stagecraft#first-30-minutes"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["agent-framework", "ai-coding", "claude-code", "codex", "dev-pipeline", "gemini-cli", "llm-tools", "multi-host", "orchestrator", "software-development"]
stars: 6
forks: 3
openIssues: 15
closedIssues: 49
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-05-27T07:56:46Z"
lastCommitAt: "2026-07-03T06:23:34Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 63
maintainers: ["mumit-khan", "mumit"]
openGraphImageUrl: "https://opengraph.githubassets.com/186b0a6bc5c2252d37a1d6fc1dfdb445f9c1dcd5c9cf1dce7477622f44d246ce/telus-labs/stagecraft"
---

# Stagecraft

**Stagecraft is an orchestrator that runs your AI coding tool through a structured 18-stage pipeline.** PM writes the brief. Principal designs. Specialists build their areas. Reviewers critique. QA tests. Each stage produces an artifact and a machine-readable gate. The next stage cannot start until the gate passes. The full run is on disk: auditable, resumable, not buried in a chat log.

Works across **Claude Code**, **Codex CLI**, **Gemini CLI**, **Omnigent**, an **OpenAI-compatible API host**, and a **generic** no-host mode. One project, one config, one or more hosts. Different roles can run on different models — Claude for design, Codex for backend, Gemini for QA, Omnigent for meta-harness execution, Claude for review. The gate JSON is the contract.

```bash
devteam init --host claude-code        # one-time install in your project
devteam stage requirements --feature "Add SMS notification opt-in"
# or: devteam stage requirements --feature-file ./feature-brief.md
# (model writes brief + gate; hooks validate)
devteam next                           # → "▶️ run-stage design (stage-02)"
# … 16 more stages, then "🎉 pipeline-complete"
```

> The CLI binary is `devteam`.…
