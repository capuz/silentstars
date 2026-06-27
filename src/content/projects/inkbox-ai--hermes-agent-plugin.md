---
repo: "inkbox-ai/hermes-agent-plugin"
name: "hermes-agent-plugin"
description: "Inkbox platform plugin for Hermes Agent"
url: "https://github.com/inkbox-ai/hermes-agent-plugin"
homepage: "https://inkbox.ai/docs/examples/hermes-agent"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 19
forks: 0
openIssues: 7
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-01T20:17:31Z"
lastCommitAt: "2026-06-27T00:48:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 81
undervaluedScore: 28
maintainers: ["dimavrem22"]
openGraphImageUrl: "https://opengraph.githubassets.com/acc4a8b20b677a0ffe13806b218470a3d3f47c016b52f3f0c493bd893b92b196/inkbox-ai/hermes-agent-plugin"
---

<h1>Hermes Agent Inkbox Plugin</h1>

<p>
  <br><br>
  <b>Give your Hermes agent its own Inkbox identity:</b><br>
  a mailbox, iMessage, a phone number for calls and SMS, realtime phone calls, and an Inkbox tunnel.<br>
  Keep Hermes reachable from anywhere without forking Hermes.
</p>

<p>
  <code>Email</code> · <code>Calls</code> · <code>SMS / MMS</code> · <code>iMessage</code> · <code>Tunnel</code>
</p>

<br clear="left">

---

Status: gateway platform adapter, setup wizard, doctor checks, SMS/MMS batching, 1:1 and group SMS conversations, inbound email/SMS/iMessage/voice, OpenAI Realtime phone calls, post-call actions, SMS and iMessage conversation tools, and package-included skills are implemented.

## Prerequisites

- An installed Hermes Agent.
- The recommended Hermes installer for macOS, Linux, or WSL2:

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
source ~/.bashrc
hermes setup
```

- The recommended Hermes installer for Windows PowerShell:

```powershell
iex (irm https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1)
hermes setup
```

After setup, configure a model provider with…
