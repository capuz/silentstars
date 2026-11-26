---
repo: "AxGord/claude-workflow"
name: "claude-workflow"
description: "Workflows for Claude Code agents — state machines, gates, a task queue, a shared thread pool and a live map"
readmeQualityOk: true
url: "https://github.com/AxGord/claude-workflow"
homepage: "https://axgord.github.io/claude-workflow/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["ai-agents", "claude-code", "claude-code-plugin", "mcp", "state-machine", "workflow-engine"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 2
createdAt: "2026-02-26T11:51:47Z"
lastCommitAt: "2026-11-26T12:47:41Z"
lastReleaseAt: "2026-11-22T10:00:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 67
maintainers: ["AxGord"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1167530618/6e6aa195-8f9e-404b-aada-2982761fcf97"
fundingLinks: ["PATREON:https://patreon.com/axgord", "BUY_ME_A_COFFEE:https://buymeacoffee.com/axgo", "CUSTOM:https://paypal.me/axgorde"]
---

**Claude Workflow** is an independent, open-source (MIT) plugin for Claude Code that drives agents through
YAML-defined state machines. The engine tracks the state, enforces the guards and hands the agent one prompt
at a time; a web dashboard shows everything that runs. It is a plugin you install, not a feature of Claude Code,
and it is not affiliated with or endorsed by Anthropic. It has been public on GitHub and npm since 1 March 2026,
before Claude Code's built-in Workflow tool became available (v2.1.146, 20 May 2026) and was announced as
"dynamic workflows" (v2.1.154, 28 May 2026). The two work differently and their files coexist; see
[How this differs from Claude Code's built-in Workflow][vs].

## Why

- **Agents lose their step.** A long task drifts, a context is compacted, Claude Code restarts. The engine
  keeps the state, so the agent always gets the next prompt, not a guess.
- **Parallel builds choke the machine.** Four agents start a build each and the laptop stops answering.
  A machine-wide thread pool makes them queue.
- **No picture of what runs.** Sessions, branches and reviews are in flight and the only view is scrollback.
  A live map and a plan pane show them.
