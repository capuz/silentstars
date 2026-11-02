---
repo: "voktty/voktty"
name: "voktty"
description: "Lightweight AI-native terminal workspace with native MCP client and multi-tab workflows for developers and sysadmins."
readmeQualityOk: true
url: "https://github.com/voktty/voktty"
homepage: "https://voktty.dev"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [77, 22]
topics: ["ai-coding-assistant", "ai-terminal", "code-editor", "cross-platform", "developer-productivity", "developer-productivity-tool", "developer-tools", "developer-tools-ai-agent", "mcp-client", "react"]
stars: 34
forks: 2
openIssues: 2
closedIssues: 4
watchers: 2
contributors: 4
recentReleases: 10
createdAt: "2026-08-22T09:35:51Z"
lastCommitAt: "2026-11-02T15:05:56Z"
lastReleaseAt: "2026-09-07T11:13:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 45
maintainers: ["SergeWinters"]
openGraphImageUrl: "https://opengraph.githubassets.com/015dc15af7c503b3387944faeae7a31f91b87b4e92cd2c9265b09542fa3b83ad/voktty/voktty"
---

·
    ·

---

Voktty is a lightweight open-source terminal-first AI-native development environment (ADE) built on Tauri 2, Rust, and React 19. It combines a native PTY and WebGL terminal, an IDE workbench, AI agents, Git, remote environments, infrastructure controls, and collaboration in one desktop app. About 7-8 MB on disk. No telemetry. No account.

## Screenshots

The current product captures are maintained in [`docs/images`](https://github.com/voktty/voktty/blob/HEAD/docs/images/README.md) and grouped by feature in the [official screenshot gallery](https://github.com/voktty/voktty/blob/HEAD/docs/screenshots.md).

## Features

### Terminal and workspace

- **Raw and block terminal modes:** Switch a live PTY between a conventional xterm.js surface and command-aware blocks without restarting the shell or losing foreground processes.
- **Native shells and shell integration:** PowerShell 7, Windows PowerShell, Command Prompt, Bash, Zsh, and Fish, with native cwd, prompt-boundary, command, and exit-code tracking through OSC 7 and OSC 133.
- **Fast rendering with bounded resources:** WebGL rendering, searchable scrollback, interactive links, and a renderer pool that keeps active…
