---
repo: "truss-agent/truss-harness"
name: "truss-harness"
description: "A modular coding-agent runtime for local models with a CLI, full-screen TUI, VS Code extension, and desktop app built on the same tools, safeguards, and workspace state."
readmeQualityOk: true
url: "https://github.com/truss-agent/truss-harness"
homepage: "https://truss-agent.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [71]
topics: ["agent", "agentic-ai", "agentic-workflow", "ai", "ai-agent", "ai-tools"]
stars: 10
forks: 1
openIssues: 3
closedIssues: 59
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-19T04:50:41Z"
lastCommitAt: "2026-08-03T06:42:41Z"
lastReleaseAt: "2026-07-22T05:33:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 62
maintainers: ["JRH89"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1305426955/c7002084-e80f-420f-b7fd-ed9a51a59fd4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260803%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260803T064631Z&X-Amz-Expires=300&X-Amz-Signature=7b69bffdbd96260638d34ffe83687cb9a5b42ed243ad97649506f0fc5fd8983f&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTczOTg5MSwibmJmIjoxNzg1NzM5NTkxLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.uJhdyFrWdcCz1g3bEGT3z9nvYmIhw89JWJZTh7OzEKI"
---

# Truss

Truss is a local-first, provider-neutral coding-agent platform. Use the same
models, tools, permissions, workspace memory, and plans from the command line,
terminal, Neovim, VS Code, or a dedicated desktop workspace.

Create multiple workspace-local managed-agent profiles when a task benefits
from separate models or providers. Chat and Plan agents can work concurrently;
Edit agents are serialized through a workspace write lease so they cannot
mutate the same workspace at the same time.

Bring an Ollama, LM Studio, llama.cpp, or compatible endpoint—or configure a
supported cloud provider with your own API key. Truss does not require a hosted
control plane.

## Choose a client

| Client | Best for | Install |
| --- | --- | --- |
| CLI | Scripts and focused coding tasks | npm install --global @truss-harness/cli |
| Terminal UI | Keyboard-first work in the terminal | npm install --global @truss-harness/tui |
| Neovim | Native Chat, Plan, and Edit with explicit bounded editor context | [Install truss.nvim](https://github.com/truss-agent/truss-harness/blob/HEAD/packages/neovim/README.md) |
| VS Code | Chat, file context, completions, and approvals in the editor | [Install from…
