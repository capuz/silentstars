---
repo: "strands-agents/box"
name: "box"
description: "Run AI agents in a sandbox that restricts what they can execute, read, write, and reach on the network. Box combines OS isolation with default-deny Dogwood policies and credential injection that keeps secrets outside the agent. Written in Rust. Supports macOS on Apple silicon, with Linux support planned."
readmeQualityOk: true
url: "https://github.com/strands-agents/box"
homepage: "https://strandsagents.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["agentic-ai", "agents", "ai", "ai-agents", "ai-safety", "containment", "egress", "harness", "linux", "llm"]
stars: 493
forks: 40
openIssues: 51
closedIssues: 7
watchers: 1
contributors: 29
recentReleases: 1
createdAt: "2026-10-02T20:34:08Z"
lastCommitAt: "2026-11-03T19:05:35Z"
lastReleaseAt: "2026-10-07T17:24:27Z"
status: "newborn"
tags: []
healthScore: 77
undervaluedScore: 21
maintainers: ["kevin-orellana", "ferdingler", "abhisheksp"]
openGraphImageUrl: "https://opengraph.githubassets.com/7274e2968010a60c026b677d2000a1176d9dcba344018c60c1893942ce9f7947/strands-agents/box"
discussionCount: 1
---

## Overview

Strands Box is an open source sandbox for AI agents.
It combines operating-system isolation with semantic policies
written in [Dogwood](https://dogwood-policy.github.io/dogwood/), so you can control
what agents can access and the conditions under which they can act.

Box is harness-agnostic. You choose the agent program or binary to run, configure
its access in `box.toml`, and write its policies in `policy.dw`.

The host OS enforces the direct access restrictions in `box.toml`. Strands Shell,
Monty for Python, the egress gateway, and the MCP broker send the operations
they handle to the embedded Dogwood Local Engine, which evaluates the rules in
`policy.dw`. Box enforces its allow or deny decisions outside the agent process.

Dogwood uses `permit` and `forbid` rules. Operations checked by the engine are
denied by default: a matching `permit` must allow the operation, and a matching
`forbid` overrides that permission.

Box's interpreters and gateways share an event history, so rules can use earlier
actions and elapsed time to decide what is allowed next. For example, a file read
through Shell or Python can cause the gateway to deny a later outbound HTTP request.…
