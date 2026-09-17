---
repo: "maksimkurb/home-ops"
name: "home-ops"
description: "My home server infrastructure as code"
readmeQualityOk: true
url: "https://github.com/maksimkurb/home-ops"
language: "Jinja"
languages: ["Jinja", "JavaScript", "Shell"]
languagePcts: [35, 26, 20]
topics: ["kubernetes", "terraform", "ansible", "iac", "infrastructure-as-code", "homelab"]
stars: 17
forks: 1
openIssues: 2
closedIssues: 31
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2022-01-03T11:04:24Z"
lastCommitAt: "2026-09-17T08:51:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 66
maintainers: ["maksimkurb", "homeops-gh-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/25025128a3d3706506080383347e7faa620480777249d79e4a2f5154cd11b37d/maksimkurb/home-ops"
---

# home-ops

Home infrastructure as code, managed with Kubernetes, Flux, SOPS, Renovate, and Ansible.

## Overview

This repository defines a K3s cluster and supporting hosts. Flux watches `cluster/` and applies the Kubernetes manifests. Ansible under `provision/ansible/` handles host setup that sits outside normal Kubernetes app changes.

Most Kubernetes services are configured in `cluster/apps/<namespace>/<app>/` and follow the local Flux `Kustomization` plus HelmRelease pattern. New app manifests should usually copy a nearby app that already uses the bjw-s `app-template` chart.

## Core Components

- K3s: Kubernetes distribution installed through Ansible.
- Flux: GitOps controller installed from `cluster/bootstrap/` and reconciled through `cluster/flux/`.
- SOPS with Age: encrypted secret handling for Flux, Ansible, and app manifests.
- ingress-nginx: public and private HTTP ingress.
- MetalLB: LoadBalancer service addresses.
- external-dns: DNS records from annotated ingresses and services.
- cert-manager: TLS certificates.
- local-path-provisioner and NFS-backed PV/PVCs: persistent app data.
- Zalando Postgres Operator: shared PostgreSQL cluster in `database`.

## Cluster…
