---
repo: "hermes-labs-ai/hermeneutic"
name: "hermeneutic"
description: "Turn corrections from AI agent logs into guidance for similar tasks. Local memory with semantic retrieval, prompt-context hooks, and response checks."
readmeQualityOk: true
url: "https://github.com/hermes-labs-ai/hermeneutic"
homepage: "https://hermes-labs.ai/hermeneutic"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["llm-evaluation", "ai-overclaim", "hermes-labs", "ai-audit", "ai-reliability", "ai-agents", "claude-code", "drift-detection", "guardrails", "llm-ops"]
stars: 9
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-04-27T04:08:28Z"
lastCommitAt: "2026-10-20T08:50:05Z"
lastReleaseAt: "2026-10-09T05:01:21Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 87
undervaluedScore: 56
maintainers: ["roli-lpci", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/d742ea972b20f2e92365ca0e3d5c0cc9b2aa980c6eae15921137fd378d351310/hermes-labs-ai/hermeneutic"
fundingLinks: ["GITHUB:https://github.com/hermes-labs-ai"]
---

# Hermeneutic

**Stop correcting the same agent mistake twice.**

Mine corrections from your AI work logs, bring relevant lessons into the next task, and check outgoing claims before they ship.

by [Hermes Labs](https://hermes-labs.ai)

[PyPI](https://pypi.org/project/hermeneutic/) · [Try the gate](#try-the-gate) · [Use your corrections](#use-your-corrections) · [Integrations](https://github.com/hermes-labs-ai/hermeneutic/blob/HEAD/integrations/README.md)

Your agent says a feature is done before it has checked the work. You correct it. A week later, another session makes the same claim. Hermeneutic gives you two ways to close that loop: a **fixed, fast draft gate** for risky wording, and **personal correction memory** that retrieves past guidance when a similar task comes up. Either part can be used on its own.

## Try the gate

Requires Python 3.10+. This first check needs no account, model, logs, or configuration:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install hermeneutic==0.1.13
printf '%s\n' 'Done — shipped 14 files, all tests pass.' | hermeneutic gate
```

The gate reports `RISK` for the precise completion and “all tests” claims and exits `1`.…
