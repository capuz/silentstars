---
repo: "aws-samples/sample-corgiro-aws-ops-skills"
name: "sample-corgiro-aws-ops-skills"
description: "Corgiro is an AI agent skill for AWS multi-account cloud operations. One command sweeps your entire AWS Organization, read-only, and returns shareable reports."
url: "https://github.com/aws-samples/sample-corgiro-aws-ops-skills"
language: "CSS"
languages: ["CSS"]
languagePcts: [100]
topics: ["agentskills", "aws", "kiro", "skills"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2026-07-01T01:44:09Z"
lastCommitAt: "2026-07-01T06:40:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 17
maintainers: ["jirach", "amazon-ospo-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/49141163d4a71269efbd6d2012fbd3f593954fa4d006933bfdcaabd13610d2a8/aws-samples/sample-corgiro-aws-ops-skills"
---

# Corgiro - AWS Cloud Operation Skills

**An AWS TAM's operational playbook, one command away.**

</div>

Corgiro is an AI agent skill for AWS multi-account cloud operations. One command sweeps your entire AWS Organization, read-only, and returns shareable reports.

Each sweep finds:

- **Account coverage gaps** - which accounts are reachable, newly added, or newly unreachable
- **AWS Health events** - org-wide risk assessment and pattern analysis
- **RDS / Aurora end-of-support** - risk-prioritized upgrade recommendations
- **Amazon EKS end-of-support** - Kubernetes version risk, upgrade paths, extended-support cost
- **EC2 compute hygiene** - instance currency, Graviton eligibility, EBS optimization, utilization

Want the deeper explanation of how it works? See [docs/what-is-corgiro.md](docs/what-is-corgiro.md).

## Quickstart

### Install the skill

```bash
npx skills@latest add aws-samples/sample-corgiro-aws-ops-skills
```

### Setup Corgiro

```bash
# One-time setup (sets up access to your AWS accounts)
/corgiro setup-corgiro

# Run a sweep
/corgiro account-coverage
```

## Modes

| Invocation                                                                      | Description…
