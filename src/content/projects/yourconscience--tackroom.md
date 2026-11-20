---
repo: "yourconscience/tackroom"
name: "tackroom"
description: "One repo for everything your coding agents read: skills, rules, MCP servers, hooks and subagents, including the parts that never port. Written into 16 harnesses, each in its own format. Third-party skills are commit-pinned, audited and wait out a 72-hour cooldown."
readmeQualityOk: true
url: "https://github.com/yourconscience/tackroom"
homepage: "https://yourconscience.github.io/tackroom/"
language: "Go"
languages: ["Go"]
languagePcts: [83]
topics: ["agent-skills", "ai-agents", "claude-code", "codex", "dotfiles", "mcp", "opencode", "homebrew", "cli", "agent-plugins"]
stars: 10
forks: 2
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-04-06T07:37:35Z"
lastCommitAt: "2026-11-20T11:24:21Z"
lastReleaseAt: "2026-09-10T10:29:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 63
maintainers: ["yourconscience", "mxttbennett", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9de7d5b1c620c31fc1950942058f2f4d4519ab353ad88a92330e37c682d13df/yourconscience/tackroom"
---

# tackroom

One repo for everything your coding agents read, including the parts that never port: MCP servers, hooks and subagents. 16 harnesses, each in its own format.

[Website](https://yourconscience.github.io/tackroom/) · [Docs](https://yourconscience.github.io/tackroom/docs/) · [Releases](https://github.com/yourconscience/tackroom/releases)

## Install and set up

```bash
brew install yourconscience/tap/tackroom && tackroom setup
```

With npm: `npm install -g tackroom && tackroom setup`. Both install the same checksum-verified binary for macOS or Linux, arm64 or x86-64.

`setup` asks nothing. It creates `~/.agents`, finds the agents you have, copies in their skills, MCP servers and roles, runs the first sync and prints a short summary. A native file that differs from the shared copy is backed up before it is replaced. `tackroom setup --review` asks before each step instead. On another machine, run `tackroom setup --from <your config repo url>`.

After that, you work in the view; the commands do the same from a shell or a script:
