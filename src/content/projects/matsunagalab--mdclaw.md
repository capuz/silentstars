---
repo: "matsunagalab/mdclaw"
name: "mdclaw"
description: "Molecular dynamics simulation skills for AI agents"
readmeQualityOk: true
url: "https://github.com/matsunagalab/mdclaw"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-10-18T08:46:40Z"
lastCommitAt: "2026-08-26T04:15:47Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 57
maintainers: ["ymatsunaga"]
openGraphImageUrl: "https://opengraph.githubassets.com/d96eabc2f2c485b8278d909562d6b6eeef43c8f3389bad804f4ad29c71bfc7ed/matsunagalab/mdclaw"
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
