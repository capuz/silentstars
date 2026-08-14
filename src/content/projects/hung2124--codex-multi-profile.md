---
repo: "Hung2124/codex-multi-profile"
name: "codex-multi-profile"
description: "Windows Codex Desktop multi-account via AuthSwap. Shared workspace, separate ChatGPT logins."
readmeQualityOk: true
url: "https://github.com/Hung2124/codex-multi-profile"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
topics: ["agent-skills", "chatgpt", "openai-codex", "powershell", "windows"]
stars: 84
forks: 81
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-08-13T08:32:21Z"
lastCommitAt: "2026-08-14T05:14:17Z"
lastReleaseAt: "2026-08-14T05:14:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 90
undervaluedScore: 43
maintainers: ["Hung2124", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f12806202652810b63959812b0ad75f7c2561cad24eae75103c2e930c87d9421/Hung2124/codex-multi-profile"
---

# Codex Multi-Profile

</p>

  <strong>Two ChatGPT logins on Codex Desktop for Windows.<br>One shared workspace.</strong>
</p>

</p>

</p>

> Unofficial helper. Not affiliated with OpenAI. Needs [Codex Desktop](https://chatgpt.com/codex) from the Microsoft Store.

---

## The problem

A second `CODEX_HOME` often **does not** switch accounts. The Desktop app-server still reads `~\.codex\auth.json`, so you land on the main ChatGPT user.

| You try… | What actually happens |
|:---|:---|
| Copy `~\.codex` + set `CODEX_HOME` | UI still shows the main account |
| `Start-Process` with `$env:CODEX_HOME` | Env is dropped → wrong account |
| Run `ChatGPT.exe` from `WindowsApps` | Access Denied |
| Launch `Codex.exe` | Process exits with code 1 |

**AuthSwap** keeps sessions, skills, MCP, and memories in `~\.codex`. Only `auth.json` moves for the profile window, then restores on close.

</p>

---

## Install

1. Install Codex Desktop and sign in once (**main** account).
2. Close every Codex window.
3. In **Windows PowerShell**:

```powershell
git clone https://github.com/Hung2124/codex-multi-profile.git
cd codex-multi-profile
powershell -NoProfile -ExecutionPolicy Bypass -File…
