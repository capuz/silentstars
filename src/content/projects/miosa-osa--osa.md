---
repo: "Miosa-osa/OSA"
name: "OSA"
description: "An AI agent that lives on your computer and does the work you ask for, in plain words — from writing code to running your business busywork. Local, one command, any model."
readmeQualityOk: true
url: "https://github.com/Miosa-osa/OSA"
language: "Elixir"
languages: ["Elixir", "Rust"]
languagePcts: [65, 20]
topics: ["ai-agent", "elixir", "llm", "local-ai", "nanobot", "nanoclaw", "openclaw-alternative", "otp", "signal-theory", "anthropic"]
stars: 41
forks: 17
openIssues: 1
closedIssues: 19
watchers: 1
contributors: 7
recentReleases: 9
createdAt: "2026-02-26T14:12:01Z"
lastCommitAt: "2026-07-20T06:33:06Z"
lastReleaseAt: "2026-07-20T03:54:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 48
maintainers: ["robertohluna", "platform-cliniciq"]
openGraphImageUrl: "https://opengraph.githubassets.com/377dcad4dd6895c283e1f1ee0e0dc79c679d314d3cd76c5e185bed94ead2a5d5/Miosa-osa/OSA"
---

# OSA — the Optimal System Agent

**OSA finds the signal in your work.** Built on Signal Theory, it classifies
what you ask, filters the noise, and routes the work to the right model —
proactively, and on your machine.

Across your code, your ops, and the everyday busywork, OSA separates what matters
from the noise and does the work that counts. One command to install. Runs
locally. Works with any model.

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
setup wizard — pick a provider, paste a key or take the…
