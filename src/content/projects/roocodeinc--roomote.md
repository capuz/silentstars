---
repo: "RooCodeInc/Roomote"
name: "Roomote"
description: "Your own cloud coding agent. Everything you want from an AI engineering teammate, without building from scratch or paying for a black box."
readmeQualityOk: true
url: "https://github.com/RooCodeInc/Roomote"
homepage: "https://roomote.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 244
forks: 48
openIssues: 8
closedIssues: 62
watchers: 5
contributors: 15
recentReleases: 10
createdAt: "2026-07-07T04:13:47Z"
lastCommitAt: "2026-09-17T08:51:32Z"
lastReleaseAt: "2026-07-13T22:46:56Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 96
undervaluedScore: 34
maintainers: ["roomote-roomote[bot]", "mrubens", "daniel-lxs"]
openGraphImageUrl: "https://opengraph.githubassets.com/9fbe800741d95220f966c0f0b2258efc15778ac0ba1738a4452e1bed4a314ebc/RooCodeInc/Roomote"
---

# Roomote

**A cloud coding agent you deploy in minutes and actually own.**

You give it a task in Slack (or Teams, or Telegram, or Discord). It clones your
repo into an isolated sandbox, writes the code, runs the tests, takes a
screenshot, and opens a PR. You review the diff like you would from any teammate.

No IDE plugin. No terminal session. No babysitting. It works while you do
something else, all the way.

```
"Fix the 500 on /api/billing for annual plans"

→ Roomote picks up the task
→ spins up a sandbox with your full repo
→ finds the bug, writes a fix, runs the test suite
→ opens a PR with a screenshot of the working page
→ you review, merge, done
```

Source-available. Self-hostable or our Cloud. Use your ChatGPT subscription or bring your own
API keys.

&nbsp;&nbsp;
&nbsp;&nbsp;

---

## How it works (60-second mental model)

Roomote is a full-stack application, not an extension or a wrapper. It connects
to the tools you already use and runs agents in throwaway sandboxes.

```
┌────────────────────────────────────────────────────────────────────┐
│  You (in Slack / Teams / Telegram / Discord / Web UI)              │
│  "Add dark mode to the settings page"…
