---
repo: "mjason/longx"
name: "longx"
description: "An agent development environment on Ash + Phoenix: codex-app-server embedded behind its own AI gateway, React SPA, tools in Elixir"
readmeQualityOk: true
url: "https://github.com/mjason/longx"
language: "Elixir"
languages: ["Elixir", "TypeScript"]
languagePcts: [46, 44]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-14T03:23:05Z"
lastCommitAt: "2026-10-11T10:15:45Z"
lastReleaseAt: "2026-09-15T02:20:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["mjason"]
openGraphImageUrl: "https://opengraph.githubassets.com/962bf66254801355ca85b50f89bea26a1c58ced0a1e53af222d49abf02331991/mjason/longx"
---

# Longx

**English** · [简体中文](https://github.com/mjason/longx/blob/HEAD/README.zh-CN.md) · [日本語](https://github.com/mjason/longx/blob/HEAD/README.ja.md)

Build agents that belong to your project.

Longx is a local-first agent workspace: conversations, files, commands, and Git in one
interface, connected to the model providers you choose. Its deeper purpose is to make
agent development a project discipline—something you can inspect, improve, version,
and share alongside the work itself.

## Install

On Linux x86_64 / arm64:

```sh
curl -fsSL https://raw.githubusercontent.com/mjason/longx/main/install.sh | sh
```

The installer checks systemd user-service, cgroup v2 and memory-controller support,
then asks whether to enable task protection (Enter defaults to yes). It configures
and starts/restarts the service; unsupported systems continue with a notice.
Re-running the command also refreshes an old service unit—finish any tasks you
need to preserve first. Unattended installs default to enabled; use
`LONGX_CGROUP=off sh install.sh` to opt out. Check Settings for detection and
actual task reports; service configuration alone does not prove protection.

Open `http://<host>:7788`,…
