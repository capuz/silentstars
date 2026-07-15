---
repo: "csning1998/on-premise-gitlab-deployment"
name: "on-premise-gitlab-deployment"
description: "[MVP] Multi-layer Terraform IaC for on-premise GitLab deployment on KVM/QEMU (Libvirt). HA components include Kubeadm, Patroni Postgres, Redis Sentinel, MinIO, Gitaly Praefect, Vault, Harbor, Runner, and LGTM stack. Integrates Keycloak SSO and Harbor Bootstrapper. Provisioned end-to-end via Packer, Terraform, and Ansible."
readmeQualityOk: true
url: "https://github.com/csning1998/on-premise-gitlab-deployment"
homepage: "https://gitlab.com/csning1998/on-premise-gitlab-deployment"
language: "HCL"
languages: ["HCL", "YAML"]
languagePcts: [69, 20]
topics: ["ansible", "gitlab", "hashicorp-vault", "kubeadm", "kubernetes", "microk8s", "packer", "terraform", "etcd", "haproxy"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2025-07-21T18:43:30Z"
lastCommitAt: "2026-07-15T05:54:54Z"
lastReleaseAt: "2026-05-11T08:05:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 70
maintainers: ["csning1998"]
openGraphImageUrl: "https://opengraph.githubassets.com/1615f61f1bf0158c4a237319c4c85a37b6b803532e328d1308429e395403fc19/csning1998/on-premise-gitlab-deployment"
---

# MVP: On-Premise GitLab HA on KVM/QEMU, Provisioned via Multi-Layer Terraform, Packer, and Ansible

> [!NOTE]
> Refer to [README-zh-TW.md](https://github.com/csning1998/on-premise-gitlab-deployment/blob/HEAD/README-zh-TW.md) for Traditional Chinese (Taiwan) version.
>
> The titles and tables in the Traditional Chinese version of the documentation will remain in English.

## Introduction

A Proof of Concept for Infrastructure as Code which automated deployment of High Availability Kubernetes clusters (Kubeadm / MicroK8s) in a pure on-premise QEMU-KVM environment. Developed during an internship at Cathay General Hospital. The objective is to establish an on-premise GitLab instance with a fully automated IaC pipeline reusable for legacy systems.

1. This repo has been authorized for public release by the relevant company department as part of a technical portfolio.

2. As of May 1, 2026, this repo requires Terraform 1.14 or higher due to use of the `action` block in the Ansible Provider. No equivalent exists in OpenTofu yet. Migration back to OpenTofu is planned once support is available. In the meantime, substitute `tofu` with `terraform` or configure an alias.

3. As of…
