---
repo: "HaseebKhalid1507/SynapsCLI"
name: "SynapsCLI"
description: "A terminal-native AI agent runtime built in Rust. Interactive chat, parallel agent orchestration, and autonomous supervision."
readmeQualityOk: true
url: "https://github.com/HaseebKhalid1507/SynapsCLI"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["agent", "agent-runtime", "ai", "autonomous-agents", "claude", "cli", "llm", "mcp", "rust", "terminal"]
stars: 22
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 9
createdAt: "2026-04-10T05:11:13Z"
lastCommitAt: "2026-08-04T06:11:53Z"
lastReleaseAt: "2026-06-14T02:04:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 50
maintainers: ["HaseebKhalid1507"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1206624833/ea038691-3c23-4455-8ec2-7c6d11e86d64?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260804%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260804T061321Z&X-Amz-Expires=300&X-Amz-Signature=66b0a3764b778c8e71325880d6741ae2b08f2b24f71118817b09f4515e5c2a84&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTgyNDMwMSwibmJmIjoxNzg1ODI0MDAxLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.YF6FXGKmeaJAgJ7irp8LIexmewVIL9lLBnqNVbFYD30"
discussionCount: 1
---

</p>

<h3 align="center">Lightning fast terminal native agent harness</h3>

</p>

  Run AI agents from one binary. Tools, subagents, and extensions built in.<br>
  Any model, 20MB, 2ms boot.
</p>

---

</p>

Synaps is a fast, terminal-native agent harness written in Rust. It runs AI agents with built-in tools, subagents, and extensions, and works with any model, from Claude and ChatGPT to a local Ollama. Run it as a TUI, headless in CI, a server, or a daemon. Extend it with plugins in any language, MCP, and an event bus, and adapt it to your workflow instead of the other way around.

---

## Philosophy

- **Agents are not chat.** They're autonomous programs that happen to use language models. Treat them like services.
- **Multi-agent is the default.** Single-agent is just n=1.
- **Speed is a feature.** A 2-second boot already lost the dev who wanted it in a git hook.
- **The terminal is the IDE.** If you need Electron to be productive, your tools are wrong.

---

## Install

```bash
cargo install synaps              # crates.io
```

<details>
<summary>More options (brew, AUR, .deb, shell installer, source)</summary>

```bash
brew install HaseebKhalid1507/tap/synaps    # macOS /…
