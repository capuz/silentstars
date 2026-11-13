---
repo: "TheArchitectit/AIGGP-Agentic-Framework"
name: "AIGGP-Agentic-Framework"
description: "Language-agnostic quality gates for AI-assisted development — regression scanner, guardrails, test isolation, deploy gates, CI workflows, and a self-hosted runner standard."
readmeQualityOk: true
url: "https://github.com/TheArchitectit/AIGGP-Agentic-Framework"
language: "Python"
languages: ["Python"]
languagePcts: [85]
stars: 7
forks: 2
openIssues: 6
closedIssues: 10
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-08-07T02:46:18Z"
lastCommitAt: "2026-11-13T18:30:08Z"
lastReleaseAt: "2026-11-05T13:37:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 60
maintainers: ["TheArchitectit", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/959938ab1f3a498c0ba6dd35c59aab0bdada428f6f210f9147518d880398c4cf/TheArchitectit/AIGGP-Agentic-Framework"
fundingLinks: ["GITHUB:https://github.com/TheArchitectit"]
---

# DevGate — AI-assisted development quality gates

DevGate is a language-agnostic quality gate for AI-assisted development. It
ships test isolation, regression scanning, deploy gates, scheduled drift scans,
CI workflow templates, a self-hosted runner standard, agent-behavior skills,
and runner-fleet monitoring.

**AIGGP (Agent Intelligence Gate Loop Guardrails Platform) names a unification
direction; the cross-product guardrails unification itself is still a
proposal.** The distinction is intentional: the gates and evidence described
below are DevGate capabilities. The one OAP-adjacent capability that ships
today is the observe-only OAP evidence v2 pipeline described under
[OAP evidence v2 pipeline](#oap-evidence-v2-pipeline-observe-only) — it is
non-authorizing by construction and is not an OAP integration.

DevGate does not rearrange your code. It imposes no directory layout, language,
package manager, or test framework. It looks at what you have and gates it.

## What ships today

DevGate catches fast problems—SQL injection, unhandled promises, committed
credentials, unvalidated input, and other known patterns—and slow problems such
as dependency rot, base-image drift, and…
