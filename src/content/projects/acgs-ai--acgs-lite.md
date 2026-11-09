---
repo: "acgs-ai/acgs-lite"
name: "acgs-lite"
description: "Constitutional governance membrane between agent reasoning and side effects. No valid Decision Receipt, no side effect. Apache-2.0, Beta. Not an agent framework."
readmeQualityOk: true
url: "https://github.com/acgs-ai/acgs-lite"
homepage: "https://pypi.org/project/acgs-lite/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai", "governance", "constitutional-ai", "agents", "safety", "guardrails", "maci", "audit", "eu-ai-act", "python"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 11
watchers: 0
contributors: 6
recentReleases: 1
createdAt: "2026-04-05T10:41:34Z"
lastCommitAt: "2026-11-09T03:31:18Z"
lastReleaseAt: "2026-08-15T11:05:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 60
maintainers: ["dislovelhl", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bd3fbdf0cd91782b73139add12569ecb2043483ab49008cc695590a1320ec5a/acgs-ai/acgs-lite"
fundingLinks: ["CUSTOM:https://acgs.ai"]
discussionCount: 0
---

# ACGS-Lite: Constitutional Governance Membrane for Agent Execution

**Headline:** No valid receipt. No side effect.

**acgs-lite** is the constitutional governance membrane between agent reasoning
and real-world execution. It is not an agent framework. Agent frameworks keep
responsibility for planning, model calls, memory, and tool selection;
`acgs-lite` decides whether a proposed side effect may run.

Core invariant:

> No valid constitutional authorization, no side effect.

```text
LLM reasoning → constitutional check → decision receipt → governed execution
```

### Current status & non-claims

- **Public package:** v3.0.1 on PyPI. Apache-2.0. Beta.
- **Unreleased source hardening:** the production execution-grant, trusted-context,
  durable-audit, and recovery contracts described below are present in this source
  candidate. They are not present in the published v3.0.1 wheel.
- **Local proofs exist.** Receipt-gated execution, MACI role checks, and an
  in-process SHA-256 audit chain are implemented and tested.
- **No independently confirmed production users yet.**
- **Not certified. Not regulator-approved.** Production properties depend on
  *your* constitution, storage,…
