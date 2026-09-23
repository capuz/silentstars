---
repo: "madarco/agentbox"
name: "agentbox"
description: "Run multiple agents in parallel sandboxed VMs, with a single command, on your PC or in the cloud"
readmeQualityOk: true
url: "https://github.com/madarco/agentbox"
homepage: "https://agent-box.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["claude", "codex", "docker", "grok-build", "sandbox", "cli", "harness", "claude-code", "coding-agents", "developer-tools"]
stars: 489
forks: 41
openIssues: 1
closedIssues: 10
watchers: 2
contributors: 6
recentReleases: 2
createdAt: "2026-05-12T11:55:31Z"
lastCommitAt: "2026-09-23T08:48:36Z"
lastReleaseAt: "2026-09-21T14:55:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 28
maintainers: ["madarco"]
openGraphImageUrl: "https://opengraph.githubassets.com/698a19bdeae15a18deaec60ee84ef0b90cfe719f58c92d6f3ea52c13ca0c918d/madarco/agentbox"
---

<h1 style="font-weight:normal">
  AgentBox&nbsp;
</h1>

Run multiple agents in parallel, with a single command, on your PC, self-hosted, or in the cloud

Works with [iterm2](https://agent-box.sh/docs/integrations-iterm2) - [cmux](https://agent-box.sh/docs/integrations-cmux) - [tmux](https://agent-box.sh/docs/integrations-tmux) - [Herdr](https://agent-box.sh/docs/integrations-herdr)
<br>

</p>

## How it works

```sh
agentbox claude # launch a new VM with claude and your project inside
```

- 📦 **Teleport** - Move your project to a dedicated VM, local or in the cloud, with a single command.
- 🤖 **Automatic** - Bring all your skills, plugins, and settings for **Claude Code**, **Codex**, **Open Code**
- 🌐 **A full Computer** — Dedicated browser, screen sharing, persistent shells and warmed up VS Code / Cursor IDE, with each box.
- 💾 **Checkpoints** — Sub <1s startup of new boxes from a previous checkpoint, auto pause to save cost/resources when not in use.
- 🔒 **Safe** - Your git credentials are kept on your local machine, with permission requests to push to the remote repository.

Full [Documentation](https://agent-box.sh/docs)

### Complete setup:

```sh
npm -g install…
