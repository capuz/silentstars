---
repo: "SolDevelo/InfraScan"
name: "InfraScan"
description: "Open-source infrastructure auditor managed by SolDevelo."
readmeQualityOk: true
url: "https://github.com/SolDevelo/InfraScan"
homepage: "https://infrascan.soldevelo.com"
language: "Python"
languages: ["Python"]
languagePcts: [59]
stars: 19
forks: 6
openIssues: 13
closedIssues: 15
watchers: 2
contributors: 9
recentReleases: 3
createdAt: "2026-02-24T14:39:05Z"
lastCommitAt: "2026-11-27T16:30:24Z"
lastReleaseAt: "2026-09-29T12:06:36Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 87
undervaluedScore: 61
maintainers: ["jkondrat", "igor-soldev", "pgesek"]
openGraphImageUrl: "https://opengraph.githubassets.com/36c5382e0a6cbe84f693c794f7dcf4d4e6c680053fa2e1ae6c9f2fc4c92ac19e/SolDevelo/InfraScan"
discussionCount: 8
---

# InfraScan

InfraScan is an open-source scanner for infrastructure code. It finds cloud cost waste, security misconfigurations and container vulnerabilities in Terraform, Kubernetes, Helm, CloudFormation, Ansible and Docker Compose projects, and reports them in CI/CD before the changes reach production.

- Scans run entirely in your environment, locally or in your pipeline; your code is not uploaded anywhere.
- Open source under Apache 2.0, with documented rules and a transparent grading formula.
- Ships as a single Docker image that bundles all scanners it uses (Checkov, Grype, Docker Scout).
- Native integrations for GitHub Actions and Bitbucket Pipelines (PR comments, inline annotations, baseline deltas); runs in GitLab CI or any other Docker-capable CI as a plain container.
