---
repo: "morluto/jacobian"
name: "jacobian"
description: "Pure mathematics for agents: search for examples and counterexamples, compute exactly, and independently check what a result proves."
readmeQualityOk: true
url: "https://github.com/morluto/jacobian"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["ai-agents", "computer-algebra", "formal-methods", "mcp", "mcp-server", "theorem-proving", "lean4", "smt-solver", "sympy", "z3"]
stars: 16
forks: 2
openIssues: 63
closedIssues: 194
watchers: 0
contributors: 6
recentReleases: 9
createdAt: "2026-07-23T09:08:45Z"
lastCommitAt: "2026-08-08T04:34:37Z"
lastReleaseAt: "2026-08-06T13:05:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 51
maintainers: ["morluto", "yuelgrace1810-ops", "N0zoM1z0"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1309745037/4e6f5cb4-516e-4eea-b550-3a37a3df968c"
---

</p>

<h1 align="center">Jacobian</h1>

  <strong>Pure mathematics for agents: search for examples and counterexamples, compute exactly, and independently check what a result proves.</strong>
</p>

</p>

</p>

Jacobian is a collection of mathematical operations for AI agents. It runs as
an MCP server and is also available as a CLI and Python library. Agents can use
it to compute invariants, search for examples or counterexamples, work with
solver artifacts, and check formal proofs.

The important part is that Jacobian does not treat every successful computation
as a proof.

It exposes focused mathematical operations through a common interface. An
agent decides which operations to use and in what order. Results stay visible
as typed values or durable artifacts.

## A small example

Suppose an agent is testing the claim **“`F` is injective.”**

A search returns two points, `p` and `q`, with the same image. That is a
candidate counterexample, not yet a trusted conclusion.

```text
p ≠ q
F(p) - F(q) = 0
```

An independent checker confirms those relations exactly. The checked collision
can then be bound to the original claim and checker identity, producing
`FALSE · VERIFIED`.

If the…
