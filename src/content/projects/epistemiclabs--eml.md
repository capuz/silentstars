---
repo: "EpistemicLabs/eml"
name: "eml"
description: "EML (Engram Protocol): a typed memory store for AI agents, and the EML Cockpit — a local app that runs agent CLI sessions next to your own brain."
readmeQualityOk: true
url: "https://github.com/EpistemicLabs/eml"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["agent-memory", "ai-agents", "claude-code", "knowledge-graph", "local-first", "mcp"]
stars: 5
forks: 0
openIssues: 7
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-10-14T04:11:09Z"
lastCommitAt: "2026-11-06T02:44:01Z"
lastReleaseAt: "2026-10-19T03:55:41Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 46
maintainers: ["lasselung", "dominiktilman"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a408836ec2482a1fb1e80893595d6b287d99bf7481b24f6d40cb955b666a81b/EpistemicLabs/eml"
---

# EML — Engram Protocol

**A typed memory for AI agents, on your own machine.** EML (Epistemic Memory Layer) stores what an
agent learns while working with you as typed *engrams*: decisions, rules, tasks, status, notes,
references, events, logs and profiles. They are linked in a graph, carry their provenance and have a
lifecycle (active, superseded, resolved). An agent loads its identity, rules and open work at the
start of a session, recalls what it needs, and writes back what it decided or learned.

This repository is the local product: the **EML Cockpit**, a web app that runs isolated Claude Code
sessions next to your brain, with everything it is built from.

## Quick start

**New to the Terminal or GitHub?** Follow [INSTALL.md](https://github.com/EpistemicLabs/eml/blob/HEAD/INSTALL.md): install Node.js, paste one line,
done. No GitHub account needed.

For developers: you need macOS or Linux, Node ≥ 22 and pnpm 10 (`corepack enable`).

```bash
git clone https://github.com/EpistemicLabs/eml.git && cd eml
pnpm install
pnpm run cockpit
```

This builds everything, starts the cockpit on `127.0.0.1` and opens it in your browser. A fresh brain
is created under `~/.eml-cockpit/`.

To…
