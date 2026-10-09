---
repo: "eclipse-enclave/enclave"
name: "enclave"
description: "Sandbox for running AI coding agents autonomously: isolated, network-restricted, host-safe"
readmeQualityOk: true
url: "https://github.com/eclipse-enclave/enclave"
homepage: "https://enclave.eclipse.dev"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["agentic-ai", "ai-agents", "claude-code", "cli", "developer-tools", "docker", "sandbox", "security"]
stars: 60
forks: 11
openIssues: 34
closedIssues: 26
watchers: 7
contributors: 14
recentReleases: 1
createdAt: "2026-07-09T08:33:37Z"
lastCommitAt: "2026-10-09T10:51:36Z"
lastReleaseAt: "2026-10-08T23:27:41Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 84
undervaluedScore: 35
maintainers: ["xai", "planger", "tortmayr"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1294906029/4b45d69b-9982-48b0-9a0f-782dd1246645"
discussionCount: 3
---

A Docker-based sandbox for running agentic coding tools — Claude, Codex, OpenCode, and others — in an isolated container while keeping your project files on the host. Network access is restricted to allowlisted domains by default, auth and history persist across sessions, and YOLO mode is on so agents can act without confirmation prompts.

## Requirements

Linux and macOS (with Docker Desktop) are supported natively. On Windows,
Enclave runs inside WSL2: the Linux instructions apply within the WSL
distribution, and `enclave.exe` is a launcher that forwards to it rather than a
native build. See [Windows](https://github.com/eclipse-enclave/enclave/blob/HEAD/docs/windows.md).

Runtime dependencies:

- Rootful Docker (CLI on `PATH`, daemon running) with the buildx plugin; the
  sandbox image build requires BuildKit. Rootless Docker is not supported.
- Alternatively, Podman (`podman` on `PATH`, rootless works). Enclave detects
  whichever engine is installed and asks once when both are; see
  [Backend detection](https://github.com/eclipse-enclave/enclave/blob/HEAD/docs/cli-reference.md#backend-detection) and
  [Podman…
