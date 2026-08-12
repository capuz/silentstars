---
repo: "cayu-dev/cayu"
name: "cayu"
description: "Cayu is the open runtime for production agents when you need explicit environments, durable sessions, controlled tools, secrets boundaries, evals, and replay"
readmeQualityOk: true
url: "https://github.com/cayu-dev/cayu"
homepage: "https://cayu.dev/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["agent", "harness", "runtime"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-07-16T07:19:58Z"
lastCommitAt: "2026-08-12T04:50:33Z"
lastReleaseAt: "2026-08-10T00:33:37Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 54
maintainers: ["talgat0528", "nurazem", "AknazarA"]
openGraphImageUrl: "https://opengraph.githubassets.com/aad865cab8dc03fcb8de9a551e5987d7ca37f46b1dc52a641d326b67b568e74a/cayu-dev/cayu"
---

# Cayu

Cayu is a production agent runtime for building and operating AI agents in
Python.

A harness turns a model into an agent by supplying its context, tools,
permissions, and execution logic. Cayu gives applications control of the full
agent execution lifecycle: how context is assembled, models and tools are
invoked, where agent code runs, how state is persisted, authority is governed,
failures are recovered, and behavior is observed and evaluated.

Cayu provides durable agent-runtime primitives including sessions, task
dispatch, leased workers, resumable workflow steps, approvals, and recovery.
Applications can use them directly without a separate workflow engine.

Applications retain control of their UI, authentication, domain logic, and
business workflows.

Cayu is designed for agents that do consequential or long-running work. You
compose its runtime primitives directly in your application.

## Why we built Cayu

Cayu was extracted from the production runtime behind an agent-operated
software factory that built and deployed thousands of business applications.
Specialized agents worked together as the AI SRE, AI product manager, AI coder,
and FDE assistant behind that…
