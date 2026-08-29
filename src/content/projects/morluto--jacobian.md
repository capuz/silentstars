---
repo: "morluto/jacobian"
name: "jacobian"
description: "A universal, atomic library of mathematics and tools for agents to compose them."
readmeQualityOk: true
url: "https://github.com/morluto/jacobian"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ai-agents", "computer-algebra", "formal-methods", "mcp", "mcp-server", "theorem-proving", "lean4", "smt-solver", "sympy", "z3"]
stars: 82
forks: 9
openIssues: 251
closedIssues: 1337
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-07-23T09:08:45Z"
lastCommitAt: "2026-08-29T10:20:05Z"
lastReleaseAt: "2026-08-08T21:42:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 38
maintainers: ["morluto", "N0zoM1z0"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1309745037/c7bf1c10-f50e-49f2-b2ce-7014ec8208dc"
---

**English** · [简体中文](https://github.com/morluto/jacobian/blob/HEAD/README.zh-CN.md)

</p>

<h1 align="center">Jacobian</h1>

  <strong>An executable mathematical vocabulary for agents: discover one typed operation, run it, and compose its result.</strong>
</p>

</p>

Jacobian is an MCP server that gives AI agents a searchable vocabulary of typed
mathematical operations. `math.find` discovers an operation, and `math.run`
executes exactly one bounded mathematical contract and returns its typed
result. The same mathematical library is also available through a CLI and
native Python API.

Each operation establishes one stable, reusable mathematical postcondition
rather than prescribing a workflow or proof strategy. Results are exact where
claimed and make approximation, incompleteness, or uncertainty explicit.

**Jacobian's hypothesis is that mathematical reasoning benefits from an
executable vocabulary of semantically scoped, bounded operations.** Rather than
exposing large domain solvers or precomposed workflows, Jacobian exposes
mathematical primitives that agents can search for and compose into solutions
beyond what any individual operation was designed to solve. The library…
