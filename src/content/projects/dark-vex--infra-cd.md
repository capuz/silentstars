---
repo: "dark-vex/infra-cd"
name: "infra-cd"
description: "Homelab Infrastructure as Code (IaC) and GitOps practices"
readmeQualityOk: true
url: "https://github.com/dark-vex/infra-cd"
language: "HCL"
languages: ["HCL", "Python"]
languagePcts: [58, 32]
topics: ["ansible", "fluxcd", "infrastructure-as-code", "packer", "terraform", "flux2", "flux2-gitops-toolkit", "gitops", "infrastructure-as-a-code"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 11
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-05-18T10:58:10Z"
lastCommitAt: "2026-11-04T11:28:09Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 72
maintainers: ["dark-vex", "renovate-gihub-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/38ae977dd268f72b086f4e80bde6c23edf3375ec459e4af06a66cbb2b762c25d/dark-vex/infra-cd"
---

# infra-cd

This project is a personal exercise in infrastructure-as-code. My infrastructure spans several legacy services that I'm progressively migrating to IaC on spare time — far from perfect, always evolving.

## CI/CD & Tooling

- [Ansible](https://www.ansible.com/) — OS-level configuration and patching
- [FluxCD](https://fluxcd.io/) — GitOps continuous delivery for Kubernetes
- [Packer](https://www.packer.io/) — Machine image builds
- [Terraform](https://www.terraform.io/) — Infrastructure provisioning
- [Renovate](https://github.com/renovatebot/renovate) — Automated dependency updates
- [Robot Framework](https://robotframework.org/) — E2E cluster validation tests
- [pre-commit](https://pre-commit.com/) — YAML linting and whitespace enforcement
- [Claude Code](https://claude.ai/code) — AI-assisted development

## Secret & Identity Management

- [1Password Secrets Automation](https://developer.1password.com/docs/connect/get-started/) — Secret injection for Terraform and Kubernetes via Operator
- [SOPS + age](https://github.com/mozilla/sops) — Encrypted cluster variable substitution for FluxCD

## Hardware

| Hostname | Type | Model | CPU | Memory | Storage | IPv6 | Location…
