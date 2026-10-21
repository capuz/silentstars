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
stars: 450
forks: 30
openIssues: 39
closedIssues: 4
watchers: 2
contributors: 23
recentReleases: 1
createdAt: "2026-10-02T20:34:08Z"
lastCommitAt: "2026-10-21T23:36:49Z"
lastReleaseAt: "2026-10-07T17:24:27Z"
status: "newborn"
tags: []
healthScore: 71
undervaluedScore: 19
maintainers: ["kevin-orellana", "abhisheksp", "ferdingler"]
openGraphImageUrl: "https://opengraph.githubassets.com/b85bac999b095032c42c7630d7eb76563291b8d2b97fc01cb6392477969ec0eb/strands-agents/box"
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
