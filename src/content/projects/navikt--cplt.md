---
repo: "navikt/cplt"
name: "cplt"
description: "Sandbox for AI coding agents. Runs Copilot CLI, Claude Code, OpenCode, Gemini CLI, Antigravity, Pi, goose or a plain shell inside a kernel-level sandbox, with git and gh guards and sandbox policy committed to the repository."
readmeQualityOk: true
url: "https://github.com/navikt/cplt"
homepage: "https://ki-utvikling.nav.no/cplt"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["agentic-ai", "copilot", "gemini", "opencode", "sandbox"]
stars: 123
forks: 23
openIssues: 16
closedIssues: 207
watchers: 1
contributors: 28
recentReleases: 0
createdAt: "2026-04-09T18:53:41Z"
lastCommitAt: "2026-09-25T08:48:37Z"
lastReleaseAt: "2026-04-10T09:46:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 34
maintainers: ["Starefossen", "dependabot[bot]", "RanaPriyansh"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1206278030/5155d71a-472b-4493-8394-59b14e7763ae"
---

# cplt

**Kernel-enforced sandbox for AI coding agents.** cplt wraps GitHub Copilot CLI, OpenCode, Gemini CLI, Antigravity CLI, Pi, Claude Code, goose, DeepSeek Harness, or any shell, so the agent can write code but cannot steal credentials, push to main, merge PRs, or exfiltrate secrets.

- **macOS**: Apple Seatbelt/SBPL via `sandbox-exec`
- **Linux**: Landlock LSM + seccomp-BPF + optional Bubblewrap namespace isolation (kernel 5.13+, full network filtering on 6.7+)
- **Windows**: no native support. There is no Windows sandbox backend. Run cplt inside WSL2, where it is an ordinary Linux install and the Microsoft kernel ships Landlock. See [Windows (WSL2) setup](#windows-wsl2).

## Why cplt?

AI agents execute arbitrary code. A compromised agent, whether through prompt injection, a supply chain attack, or a malicious MCP server, can read `~/.ssh`, push to main, merge PRs, or exfiltrate your code, unless the OS itself says no.

cplt gives you kernel-level enforcement with team-configurable policy:

- Per-repo policy in `.cplt.toml`, committed to version control, so it is tamper-proof and auditable
- Deny by default for credentials, secrets, and sensitive files
- Command-level git…
