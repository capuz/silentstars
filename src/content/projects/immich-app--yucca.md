---
repo: "immich-app/yucca"
name: "yucca"
description: "Everything yucca"
readmeQualityOk: true
url: "https://github.com/immich-app/yucca"
homepage: "https://immich.app"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [37, 31]
stars: 10
forks: 3
openIssues: 8
closedIssues: 30
watchers: 0
contributors: 16
recentReleases: 0
createdAt: "2025-10-30T12:24:08Z"
lastCommitAt: "2026-10-06T10:42:35Z"
lastReleaseAt: "2026-06-26T16:36:01Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 72
maintainers: ["renovate[bot]", "insertish", "immich-push-o-matic[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bac02a410e1326ec9570b3e098242c8a4e4f9fced17cc58449e171b3deddfc4f/immich-app/yucca"
fundingLinks: ["CUSTOM:https://buy.immich.app", "CUSTOM:https://immich.store"]
---

# Yucca

Application code lives under `packages/`. Infrastructure that operates Yucca
(Ceph storage backend, Talos K8s, deployment/state managed via
Terraform+1Password) lives at the top level in `ansible/`, `tf/`, and
`kubernetes/`.

End-user documentation is published at https://docs.futo.cloud from `packages/docs`.

## Development Guide (application)

Ensure you have prerequisites installed:

- [Docker](https://docs.docker.com/engine/install/)
- [mise](https://mise.jdx.dev/getting-started.html)
- [1password CLI](https://developer.1password.com/docs/cli/)

If necessary, copy `.env.example` to `.env` and customise.

Then use mise:

```bash
mise dev # install deps, prep environment, start servers (compose-based)

mise check # lint, format check, svelte check

mise test # unit tests
mise test:integration # integration tests
mise test:e2e # e2e tests
mise test:e2e:web # e2e web tests
```

### Running on k3d + Tilt (Kubernetes)

An alternative k8s-based dev flow mirrors the eventual prod topology (Helm charts, CloudNativePG, Rook-Ceph object storage, in-cluster service discovery). All required tools (k3d, kubectl, helm, tilt) are installed via mise.

```bash
mise k3d:up       #…
