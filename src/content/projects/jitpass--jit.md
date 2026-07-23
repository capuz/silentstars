---
repo: "jitpass/jit"
name: "jit"
description: "Find the plaintext secrets on your Mac and move them behind Touch ID, injected just in time without breaking the tools that read them. Free and local-first."
readmeQualityOk: true
url: "https://github.com/jitpass/jit"
homepage: "https://jitpass.com"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["cli", "developer-tools", "dotenv", "macos", "secrets", "secrets-management", "security", "devsecops", "information-security", "password-manager"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-07-13T03:58:28Z"
lastCommitAt: "2026-07-23T06:15:22Z"
lastReleaseAt: "2026-07-16T11:38:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 64
maintainers: ["bukershok"]
openGraphImageUrl: "https://opengraph.githubassets.com/dda554cfa811ce32106138b0dbe4e0a0902c55f897b671d4b0480f20fd9a799d/jitpass/jit"
discussionCount: 0
---

# jitpass: the `jit` CLI

**Just-in-time credentials for your dev machine.**

Your `.env` files, `~/.aws/credentials`, shell exports, `.npmrc` tokens, and MCP
configs are full of secrets sitting in plaintext, readable by anything running
as you: an infostealer from one bad `curl | sh`, a malicious `npm install`, or
one of the AI agents now running in your editor with your full permissions.
`jit` moves each secret into a local vault gated by Touch ID and rewrites the
files so everything keeps working. The result is a biometric prompt between your
tools (and your agents) and your credentials, and a decoy on disk the rest of
the time.

**[Documentation](https://github.com/jitpass/jit/blob/HEAD/docs/index.md)** ·
[Quickstart](https://github.com/jitpass/jit/blob/HEAD/docs/getting-started/quickstart.md) ·
[Supported tools](https://github.com/jitpass/jit/blob/HEAD/docs/wrap/index.md) ·
[Command reference](https://github.com/jitpass/jit/blob/HEAD/docs/reference/commands/jit.md) ·
[Security](https://github.com/jitpass/jit/blob/HEAD/docs/security/architecture.md)

> **Status:** early development, macOS-only, Apple Silicon. Builds from source
> today; code signing and a Homebrew tap are what…
