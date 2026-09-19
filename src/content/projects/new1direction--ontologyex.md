---
repo: "New1Direction/OntologyEX"
name: "OntologyEX"
description: "Agent Ontology Kit — a portable skill that makes AI agents understand a business before they act. Extracts four-layer ontologies (upper/domain/task/application) from companies, APIs, markets, and codebases."
readmeQualityOk: true
url: "https://github.com/New1Direction/OntologyEX"
homepage: "https://new1direction.github.io/OntologyEX/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [69, 31]
topics: ["ai-agents", "ai-skill", "claude", "domain-modeling", "knowledge-graph", "llm", "mcp", "ontology"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-11T22:01:04Z"
lastCommitAt: "2026-09-19T01:35:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 20
maintainers: ["New1Direction"]
openGraphImageUrl: "https://opengraph.githubassets.com/53661e0a68382de5f31583d9c2e76c50b030c130404094d39f427c20bbe2adf4/New1Direction/OntologyEX"
---

# OntologyEX — Agent Ontology Kit

**Turn unfamiliar software into a source-linked domain skill for your agent.**

Choose a workflow. Acknowledge the sources. Let your existing agent model the domain.
Get a portable skill, exact evidence, explicit unknowns, and a handoff for the next task.

**[Guided onboarding](https://github.com/New1Direction/OntologyEX/blob/HEAD/ontology-extraction/references/guided-onboarding.md) · [Real-source case](https://github.com/New1Direction/OntologyEX/blob/HEAD/examples/cachetools-domain/README.md) · [Payments report](https://new1direction.github.io/OntologyEX/docs/payments-demo.html) · [Contract](https://github.com/New1Direction/OntologyEX/blob/HEAD/ontology-extraction/references/domain-skill.md)**

## Onboard your repository from one request

Python 3.11+ is needed for the local tools. From an OntologyEX checkout:

```bash
python3 -m venv .venv
source .venv/bin/activate  # PowerShell: .venv\Scripts\Activate.ps1
python -m pip install 'PyYAML==6.0.3'
python ontology-extraction/scripts/install.py --project /path/to/your-project
```

The installer copies the complete package into the project's
`.claude/skills/ontology-extraction` directory. It refuses…
