---
repo: "yourconscience/tackroom"
name: "tackroom"
description: "One repo for everything your coding agents read: skills, rules, MCP servers, hooks and subagents, including the parts that never port. Written into 16 harnesses, each in its own format. Third-party skills are commit-pinned, audited and wait out a 72-hour cooldown."
readmeQualityOk: true
url: "https://github.com/yourconscience/tackroom"
homepage: "https://yourconscience.github.io/tackroom/"
language: "Go"
languages: ["Go"]
languagePcts: [81]
topics: ["agent-skills", "ai-agents", "claude-code", "codex", "dotfiles", "mcp", "agent-plugins", "herdr-mod", "agents-md", "hooks"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-04-06T07:37:35Z"
lastCommitAt: "2026-11-22T11:52:34Z"
lastReleaseAt: "2026-09-10T10:29:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 65
maintainers: ["yourconscience", "dependabot[bot]", "mxttbennett"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8419316fe7c3f03ac1e7964ae9738d4c99ee49a1ab9e14734f1aecef3d34222/yourconscience/tackroom"
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
