---
repo: "OmniNode-ai/omnibase_core"
name: "omnibase_core"
description: "ONEX Core Framework - Base classes and essential implementations for the ONEX ecosystem"
url: "https://github.com/OmniNode-ai/omnibase_core"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-08-28T18:42:01Z"
lastCommitAt: "2026-06-23T23:59:12Z"
lastReleaseAt: "2026-02-27T15:30:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 71
maintainers: ["jonahgabriel"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3d81b69d57ea4c6840ecfac378f7592c20bee145581532739f5cdfb7b3d0feb/OmniNode-ai/omnibase_core"
discussionCount: 1
---

# omnibase_core

`omnibase_core` is the ONEX (OmniNode eXecution) platform kernel. It owns node execution, contracts,
core models, validation tooling, and the canonical architecture vocabulary used
by downstream OmniNode repos.

## Who Uses It

Use this repo when you need to:

- Use ONEX core types, nodes, contracts, and validation tools.
- Build a contract-driven EFFECT, COMPUTE, REDUCER, or ORCHESTRATOR node.
- Extend Core internals such as validation, contracts, node execution, handlers,
  model conventions, or runtime-development scaffolding.

Downstream runtime implementations, infrastructure clients, workflow packages,
dashboard projections, and thin wrapper tooling should link back here for Core
architecture and validation truth rather than duplicating it.

## What This Repo Owns

- ONEX node base classes and execution vocabulary.
- Contract models, handler contracts, subcontracts, and contract validation.
- Core event envelopes, error models, container patterns, and dependency
  injection conventions.
- Core documentation standards for ONEX architecture and node construction.
- Shared validation entrypoints such as `onex-validate-links`,
  `onex-validate-topics`,…
