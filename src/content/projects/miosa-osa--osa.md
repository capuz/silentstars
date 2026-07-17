---
repo: "Miosa-osa/OSA"
name: "OSA"
description: "OSA — a fast, long-running terminal AI coding agent you install and run with one command; the intelligence layer of the MIOSA ecosystem."
readmeQualityOk: true
url: "https://github.com/Miosa-osa/OSA"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [67]
topics: ["ai-agent", "elixir", "llm", "local-ai", "nanobot", "nanoclaw", "openclaw-alternative", "otp", "signal-theory", "anthropic"]
stars: 40
forks: 17
openIssues: 1
closedIssues: 19
watchers: 1
contributors: 6
recentReleases: 4
createdAt: "2026-02-26T14:12:01Z"
lastCommitAt: "2026-07-17T05:58:08Z"
lastReleaseAt: "2026-07-17T04:26:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 48
maintainers: ["robertohluna", "700steven-png"]
openGraphImageUrl: "https://opengraph.githubassets.com/2961b96683662b917397ca76f76a0e66fee9fa697eabc2a50653afb1b763602b/Miosa-osa/OSA"
---

# OSA — the Optimal System Agent

**A fast, reliable, long-running AI coding agent that lives in your terminal.**
One command to install and run. No toolchains. Your machine, your data, any model.

</div>

---

## Install in one command

**macOS / Linux** — paste this into a terminal:

```bash
curl -fsSL https://raw.githubusercontent.com/Miosa-osa/OSA/main/scripts/install.sh | sh
osa
```

**Windows** — paste this into PowerShell:

```powershell
irm https://raw.githubusercontent.com/Miosa-osa/OSA/main/scripts/install.ps1 | iex
osa
```

That's it. **No Elixir, Erlang, or Rust required.** The installer detects your
OS and CPU, downloads the prebuilt release from GitHub (a self-contained
Elixir/OTP release that bundles its own runtime, plus the prebuilt Rust TUI),
verifies its checksum, unpacks everything under `~/.osa` (or `%USERPROFILE%\.osa`),
and puts the `osa` command on your PATH. The first run drops you into a short
setup wizard — pick a provider, paste a key or take the local Ollama default,
done. After that, type `osa` from anywhere on disk.

Prebuilt targets: **linux-x64**, **macOS arm64**, **windows-x64**. Pin a
specific release with `OSA_VERSION=v1.0.0` (`$env:OSA_VERSION…
