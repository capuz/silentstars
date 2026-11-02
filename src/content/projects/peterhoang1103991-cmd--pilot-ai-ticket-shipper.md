---
repo: "peterhoang1103991-cmd/pilot-ai-ticket-shipper"
name: "pilot-ai-ticket-shipper"
description: "pilot: AI That Ships Your Tickets for Automated Development"
readmeQualityOk: true
url: "https://github.com/peterhoang1103991-cmd/pilot-ai-ticket-shipper"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
topics: ["agentic", "agentic-workflow", "ai-agent", "ai-bots", "ai-tools", "autonomous-coding", "claude", "claude-code", "dev-bot", "devtools"]
stars: 58
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-22T20:09:27Z"
lastCommitAt: "2026-11-02T17:57:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 30
maintainers: ["github-actions[bot]", "peterhoang1103991-cmd"]
openGraphImageUrl: "https://opengraph.githubassets.com/6550dee66f47ef64750577526037922240123427be54bb162311b83da8dfa9e1/peterhoang1103991-cmd/pilot-ai-ticket-shipper"
---

# pilot

---

Pilot is a Python tool that turns labeled tickets from GitHub, Linear, Jira, or Asana into reviewed pull requests: it plans the implementation, writes the code, runs tests and lint, and opens a PR linking back to the issue. It's built for developers and small teams who want their backlog worked down without handing merge control to a bot — every change still goes through human review. What sets it apart is the ticket-to-PR loop as a single process, with configurable autopilot modes (dev, stage, prod) that decide how much CI gating and auto-merge happens before you ever see the diff.

## Features

**Everything below is what users get out of the box.** Features are grouped by area — skim the tables for the short version, or dive into the snippets for concrete usage.

### Core Ticketing Loop

| Feature | What it does |
|---|---|
| **Autonomous ticket pickup** | Watches GitHub, Linear, Jira, and Asana for tickets labeled `pilot` and claims them for processing |
| **Plan → code → test → PR** | Executes the full loop end-to-end without manual steps between phases |
| **Branch-per-ticket isolation** | Creates a dedicated branch (`pilot/{ticket}`) so work never collides with…
