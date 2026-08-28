---
repo: "RooCodeInc/Roomote"
name: "Roomote"
description: "Your own cloud coding agent. Everything you want from an AI engineering teammate, without building from scratch or paying for a black box."
readmeQualityOk: true
url: "https://github.com/RooCodeInc/Roomote"
homepage: "https://roomote.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 212
forks: 38
openIssues: 5
closedIssues: 61
watchers: 4
contributors: 12
recentReleases: 10
createdAt: "2026-07-07T04:13:47Z"
lastCommitAt: "2026-08-28T14:28:53Z"
lastReleaseAt: "2026-07-13T22:46:56Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 97
undervaluedScore: 35
maintainers: ["roomote-roomote[bot]", "mrubens", "roomote-community[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3bd90bc2166005d395f90ea8f7be63c09600f3878cd7ee0f791c4593fd4731e/RooCodeInc/Roomote"
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
