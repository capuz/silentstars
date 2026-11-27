---
repo: "dmgrok/agent-plugins"
name: "agent-plugins"
description: "Discover and install plugins and skills for AI coding agents, with a searchable catalog and automated provider updates."
readmeQualityOk: true
url: "https://github.com/dmgrok/agent-plugins"
homepage: "https://dmgrok.github.io/agent-plugins/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["agent", "mcp-server", "skills", "agent-skills", "ai-agents", "claude-code", "developer-tools"]
stars: 21
forks: 3
openIssues: 26
closedIssues: 72
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-01-08T22:50:15Z"
lastCommitAt: "2026-11-27T16:30:24Z"
lastReleaseAt: "2026-01-17T06:38:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 59
maintainers: ["github-actions[bot]", "dmgrok", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8bfd6994479f72297ea2b9220ca273ba2a4df4eda3097647952db54ad8a0aa2/dmgrok/agent-plugins"
---

# Agent Plugins

**Web-based discovery for AI agent plugins.** Browse curated plugins from official and community providers, build your stack, and install it with one script. The badges below show the live counts from the daily catalog build.

**[Browse all plugins →](https://dmgrok.github.io/agent-plugins/)**

---

## How It Works

Plugins already live on marketplaces — you just need to find the right ones. This site organizes them around your role and real activities so you can see exactly what coverage you'd get.

1. **Pick your persona** — Web Dev, DevOps, Data Scientist, Security Engineer, and more
2. **Build a stack** — see which of your activities have plugin coverage (Capability Map), add plugins to your stack
3. **Install** — copy the install script and paste it into your terminal

### Install a single plugin

Add this catalog as a Claude Code marketplace once:

```bash
claude plugin marketplace add https://cdn.jsdelivr.net/gh/dmgrok/agent-plugins@main/catalog.json
```

Then every plugin has a copy button. The command is:

```bash
claude plugin install <plugin-name>
```
