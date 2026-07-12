---
repo: "Bad-Robots/BrowserHarness"
name: "BrowserHarness"
description: "Browser harness CLI integration for Workforce and multi-agent environments"
readmeQualityOk: true
url: "https://github.com/Bad-Robots/BrowserHarness"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 57
recentReleases: 0
createdAt: "2026-05-11T02:36:19Z"
lastCommitAt: "2026-07-12T06:18:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 73
undervaluedScore: 40
maintainers: ["sauravpanda", "Alezander9", "MHeller-Browsium"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a9e02b00c6f4478578104d3987776fc65aa49984b09f035a91aa5c8e427926b/Bad-Robots/BrowserHarness"
---

# Browser Harness ♞

Connect an LLM directly to your real browser with a thin, editable CDP harness. For browser tasks where you need **complete freedom**.

One websocket to Chrome, nothing between. The agent writes what's missing during execution. The harness improves itself every run.

```
  ● agent: wants to upload a file
  │
  ● agent-workspace/agent_helpers.py → helper missing
  │
  ● agent writes it                         agent_helpers.py
  │                                                       + custom helper
  ✓ file uploaded
```

**You will never use the browser again.**

## Setup prompt

Paste into Claude Code or Codex:

```text
Set up https://github.com/browser-use/browser-harness for me.

Read `install.md` and follow the steps to install browser-harness and connect it to my browser.
```

The agent will open `chrome://inspect/#remote-debugging`. Tick the checkbox so the agent can connect to your browser:

Click Allow when the per-attach popup appears (Chrome 144+):

See [agent-workspace/domain-skills/](https://github.com/Bad-Robots/BrowserHarness/blob/HEAD/agent-workspace/domain-skills/) for example tasks.

## Free Browser Use Cloud browsers

Stealth, sub-agents, or…
