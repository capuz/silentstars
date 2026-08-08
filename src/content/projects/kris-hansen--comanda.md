---
repo: "kris-hansen/comanda"
name: "comanda"
description: "The CLI-native orchestrator for AI agent workflows. Run Claude Code, Codex, Gemini CLI & Kimi Code from declarative YAML. Because the terminal is where real work happens."
readmeQualityOk: true
url: "https://github.com/kris-hansen/comanda"
homepage: "https://comanda.sh"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["agents", "ai", "ai-agents", "anthropic", "automation", "claude", "cli", "codex", "command-line", "devops"]
stars: 318
forks: 26
openIssues: 3
closedIssues: 0
watchers: 5
contributors: 7
recentReleases: 0
createdAt: "2024-10-23T10:55:08Z"
lastCommitAt: "2026-08-08T04:33:29Z"
lastReleaseAt: "2024-12-29T19:20:53Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 77
undervaluedScore: 32
maintainers: ["kris-hansen", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/405f09f9bb5ae95e51ce1fa54cd759fc3e8b770f5f2871906fcfea21dc5bab68/kris-hansen/comanda"
discussionCount: 0
---

# comanda

> **Make coding agents earn their exit.**
>
> Comanda is the terminal-native runtime for durable, self-improving agent work in a repository. Describe a workflow in English, inspect the generated program, run the coding agents you already use, and stop only when your own quality gates say the work is done.

## From an idea to a governed workflow

Comanda starts with English, but ends with a YAML program you can inspect, version, and improve.

```bash
# Describe the outcome
comanda generate feature-loop.yaml \
  "Implement this feature until tests and security checks pass"

# Inspect the generated workflow as a graph
comanda chart feature-loop.yaml --format mermaid

# Run it in your repository
comanda process feature-loop.yaml

# Evolve the program with plain-English feedback
comanda improve feature-loop.yaml \
  "Add a Codex reviewer and require typecheck before completion"
```

**Describe it. Inspect it. Run it. Improve it. Commit it.**

## A loop does not finish because an agent says “DONE”

Long-running work needs an observable exit criterion. Comanda's agentic loops persist state, refine subsequent prompts from prior results, and run automated quality gates after…
