---
repo: "thomasmeadows/HiveDispatch"
name: "HiveDispatch"
description: "An Agent Orchestrating Agent for Code that uses tickets in a ticketing system to conduct agents.  This project can be used locally, or on a server so that you can remotely direct coding agents through a ticketing system such as JIRA or Github Projects.  "
readmeQualityOk: true
url: "https://github.com/thomasmeadows/HiveDispatch"
language: "Go"
languages: ["Go"]
languagePcts: [87]
stars: 29
forks: 0
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-09-19T04:29:32Z"
lastCommitAt: "2026-10-01T10:23:29Z"
lastReleaseAt: "2026-10-01T10:21:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 47
maintainers: ["thomasmeadows"]
openGraphImageUrl: "https://opengraph.githubassets.com/e46df2af61965fc488cf7bd582901adda4684f795ac88924f1a36d778c805f25/thomasmeadows/HiveDispatch"
---

# HiveDispatch

Ticket-driven orchestration for autonomous coding agents.

HiveDispatch is a code orchestration agent that lets your tickets command coding agents. Instead of sitting in a terminal driving Claude Code or Codex yourself, you write a Jira ticket or a GitHub issue, and HiveDispatch takes it from there: it picks the ticket up, works it in an isolated branch, and opens a pull request. You talk to the agents through the ticket system you already use. When an agent needs to know something, it asks in a comment and waits. You answer in the thread, and it carries on. All of that works from a phone.

**The human in the loop sits at the end, at pull request review.** Nothing merges without you. If you want an agent to change something in the PR, say so in a comment and move the ticket back to Ready. The agent picks it up again, reads your feedback, and pushes a new round to the same branch. You stay in control of what ships. The agents do the typing.

**Several agents, several steps.** A repository can have planning agents that turn a rough ticket into a plan, coding agents that implement it, and review agents that check the PR before it reaches you. Each agent can use a…
