---
repo: "tiny-systems/tiny"
name: "tiny"
description: "The real Claude Code & Codex CLIs as pods on your own Kubernetes. No keys in the agent, no open ports, human-gated actions, GitHub issue to PR. MIT."
readmeQualityOk: true
url: "https://github.com/tiny-systems/tiny"
homepage: "https://tinysystems.io"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["ai-agents", "claude-code", "codex", "coding-agent", "devsecops", "golang", "kubernetes", "sandbox", "security", "self-hosted"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-14T18:51:32Z"
lastCommitAt: "2026-11-14T21:56:25Z"
lastReleaseAt: "2026-09-25T15:40:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 55
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/56d33b96be141bf2e97f846fda679ed37e5fb2755fb46cfe99c15eaf4d278ff6/tiny-systems/tiny"
---

# ◇ tiny

**A coding agent with no keys and no open ports — the real Claude Code and Codex CLIs, as pods on your own Kubernetes.**

An agent that reads issues, pulls dependencies and browses the web is an
agent that will eventually be told to do something by someone who is not
you. The question is what it is holding when that happens.

In tiny it is holding nothing it does not need. No git credentials by
default — work leaves as a `git bundle` that a courier job pushes with a
short-lived token the agent never sees. No cloud credentials, and no route to the metadata endpoint
that would mint some. Nothing listens on the pod, so there is no inbound
surface to attack: you reach a session through the Kubernetes API, not
through a port. When it needs to do something it cannot undo, it asks —
and **your answer runs with your credentials, not its**.

It runs the genuine vendor CLIs, not a copy of them, with a persistent
workspace. Close the lid and a session keeps working, through rate limits
and pod restarts. `tiny handoff` moves a session you are already in —
files, uncommitted changes and transcript — into the cluster.

```
$ tiny new "fix the flaky checkout test, open a PR"
  ◌…
