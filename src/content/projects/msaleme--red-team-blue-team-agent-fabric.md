---
repo: "msaleme/red-team-blue-team-agent-fabric"
name: "red-team-blue-team-agent-fabric"
description: "AI agent security harness, adversarial testing: 608 executable tests in the v4.16.0 release, across MCP, A2A, x402/L402, decision governance, benchmark integrity, human-in-the-loop, skill supply chain. Three target shapes: a verdict must be able to be wrong AND to be right. OWASP Agentic v1.1 T1-T17, AIUC-1 19/20, NIST AI 800-2."
readmeQualityOk: true
url: "https://github.com/msaleme/red-team-blue-team-agent-fabric"
homepage: "https://pypi.org/project/agent-security-harness/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-security", "owasp", "red-team", "a2a-protocol", "mcp", "decision-governance", "l402", "x402", "agent-security", "ai-agents"]
stars: 28
forks: 5
openIssues: 15
closedIssues: 82
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-11-15T16:04:37Z"
lastCommitAt: "2026-08-30T00:42:44Z"
lastReleaseAt: "2026-03-29T02:16:37Z"
status: "thriving"
tags: ["hidden_gem", "community_hub"]
healthScore: 97
undervaluedScore: 54
maintainers: ["msaleme"]
openGraphImageUrl: "https://opengraph.githubassets.com/99634980ed4cccf12c83cafb30e99ea3728329236400173afd90eeec69f606e1/msaleme/red-team-blue-team-agent-fabric"
discussionCount: 42
---

# Agent Security Harness

**Even if an agent is properly authenticated and authorized, can it still be manipulated into unsafe or policy-violating behavior?**

**A test that did not reach the target is not a passing security test.**

This harness sends adversarial traffic at a live endpoint, records what the target actually
serviced, and reports PASS, FAIL or **INCONCLUSIVE**. It will not convert a request the target
never answered — or a capability the target never exposed — into evidence that a control held.
That distinction is enforced by `testing/test_serviced_guard.py` and
`testing/test_x402_capability_controls.py` rather than asserted here, and the repairs that put
it there are in [CHANGELOG.md](https://github.com/msaleme/red-team-blue-team-agent-fabric/blob/HEAD/CHANGELOG.md).

### How that is checked: three target shapes

A verdict is only worth what it does when the target changes. Three scripts point every
suite at a sentinel that differs only in how it answers, and three state files under
`testing/` pin what each one claims:

```bash
python3 scripts/dead_host_sweep.py        # a closed port: nothing answers
python3 scripts/permissive_host_sweep.py  # HTTP 200, grants…
