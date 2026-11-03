---
repo: "openartifact/openartifact"
name: "openartifact"
description: "Self-hosted artifact repository for many package formats: Maven, npm, PyPI, Docker/OCI, Helm, Debian, RPM, Go, Cargo, NuGet, RubyGems, Conda, Conan, Ivy, sbt and more."
readmeQualityOk: true
url: "https://github.com/openartifact/openartifact"
homepage: "https://openartifact.github.io"
language: "Go"
languages: ["Go"]
languagePcts: [81]
topics: ["artifact-repository", "binary-repository", "cargo", "conan", "conda", "container-registry", "debian", "go-modules", "golang", "helm"]
stars: 115
forks: 14
openIssues: 17
closedIssues: 33
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-21T08:47:09Z"
lastCommitAt: "2026-11-03T10:51:47Z"
lastReleaseAt: "2026-10-22T21:24:16Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 37
maintainers: ["M0Rf30", "gjed", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1216802714/b50262c3-e320-48d1-ad4c-332e25cc1f53"
discussionCount: 0
---

One Go binary, embedded web UI, PostgreSQL. Hosted, proxy and group repositories with RBAC, SSO and security scanning.

OpenArtifact stores and serves Alpine (apk), Ansible collections, Arch Linux (pacman),
Cargo, Composer (PHP), Conan, Conda, Debian, Docker/OCI, Go, Helm, Hugging Face (proxy),
Ivy, Maven, Nix, npm, NuGet, PyPI, raw files, RPM, RubyGems, sbt and Terraform/OpenTofu
behind one URL scheme and one permission model, on your own infrastructure. Free software under
the AGPL.

## Formats

Hosted, proxy (read-only mirror of an upstream) and group (ordered members, first hit wins) repositories are available for 22 of the 23 formats; Hugging Face has no hosted repositories. Docker/OCI proxies and groups are served under `/v2/`. Federation between instances covers cargo, docker, go, helm, maven, npm, nuget, pypi and raw ([federation](https://github.com/openartifact/openartifact/blob/HEAD/docs/operations/federation.md)).

Client URLs and setup per format: [docs/formats](https://github.com/openartifact/openartifact/blob/HEAD/docs/formats/README.md).

## Features

- Native client protocols for Maven, npm, PyPI, Docker/OCI, Helm and more (see the [format…
