---
repo: "matsunagalab/mdclaw"
name: "mdclaw"
description: "Molecular dynamics simulation skills for AI agents"
readmeQualityOk: true
url: "https://github.com/matsunagalab/mdclaw"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-10-18T08:46:40Z"
lastCommitAt: "2026-08-19T04:07:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 57
maintainers: ["ymatsunaga"]
openGraphImageUrl: "https://opengraph.githubassets.com/33d6060f23a4b8d28c36a2049b4b43d8ed6d0ff0882e166cdf5d6a84c899830f/matsunagalab/mdclaw"
---

</p>

# MDClaw

MDClaw provides agent skills and CLI tools for molecular dynamics (MD) and
autonomous scientific investigation in the Amber/OpenMM ecosystem. It helps an
AI agent turn scientific intent into reproducible atomistic work: plan a study,
prepare systems, run MD, analyze trajectories, branch hypotheses, and package
evidence with provenance.

MDClaw is not one hidden end-to-end planner. Its responsibilities are explicit:

- **Skills** translate scientific intent into an MD procedure.
- **CLI tools** execute concrete operations and record their outputs.
- **A durable DAG** is the source of truth for progress, artifacts, failures,
  branching, and re-entry by another agent.

## How It Works

Every run is a small study, even when it contains only one system. A study can
hold one or more job DAGs, and each job follows the same artifact handoff:

```text
source -> prep -> solv -> topo -> min -> eq -> prod -> analyze
```

The CLI manages node state and passes artifacts between stages. A later agent
can use `inspect_job` to resume from completed work, `explain_node` to validate
the next node before execution, and `trace_failure` to choose a new recovery
branch without rewriting…
