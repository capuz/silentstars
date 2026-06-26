---
repo: "AndriyKalashnykov/docker-ubuntu"
name: "docker-ubuntu"
description: "Ubuntu dev-container images with a reproducible DevOps toolchain — kubectl, helm, k9s, kind, flux; base plus Java 25 and Go variants, every CLI mise-pinned"
url: "https://github.com/AndriyKalashnykov/docker-ubuntu"
language: "Shell"
languages: ["Shell", "Makefile", "Dockerfile"]
languagePcts: [39, 36, 24]
topics: ["dockerfile", "makefile", "ubuntu", "docker-image", "buildkit", "docker-cache", "go", "golang", "gradle", "java"]
stars: 5
forks: 4
openIssues: 1
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2021-08-03T17:28:09Z"
lastCommitAt: "2026-06-26T23:40:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 74
undervaluedScore: 71
maintainers: ["renovate[bot]", "AndriyKalashnykov"]
openGraphImageUrl: "https://opengraph.githubassets.com/3da3e0dcbe435d5ee07c876bd07f0a145660da71e886e26fbe26c1b1f47ce649/AndriyKalashnykov/docker-ubuntu"
---

# Ubuntu Dev-Container Images — Reproducible DevOps Toolchain

A layered set of Ubuntu-based development-environment Docker images. A common
**base** image ships a broad cloud-native / DevOps toolchain (kubectl, helm,
kustomize, k9s, kind, flux, conftest, opa, Docker-in-Docker, …); the **java**
and **go** variants build on it with their respective language stacks. Every
tool version is pinned and reproducible via **mise** — see [TOOLING.md](./TOOLING.md).

Images are hadolint-linted, Trivy-scanned (filesystem + image), cosign
keyless-signed with SBOM attestation, and published to GHCR through a
Renovate-managed GitHub Actions pipeline.

```text
$ make help
Usage: make COMMAND

Commands :

help                    - List available tasks on this project
check-env               - Check that docker is installed
login                   - Log in to GHCR (uses GITHUB_PAT with write:packages)
lint                    - Lint Dockerfiles (hadolint) + verify shell scripts are executable
lint-scripts-exec       - Fail if any committed shell script lacks the +x bit
ci                      - Run local CI checks (Dockerfile lint + build the base image)
renovate-validate       - Validate…
