---
repo: "openartifact/openartifact"
name: "openartifact"
description: "Self-hosted artifact repository for 16 package formats: Maven, npm, PyPI, Docker/OCI, Helm, Debian, RPM, Go, Cargo, NuGet, RubyGems, Conda, Conan, Ivy, sbt and raw."
readmeQualityOk: true
url: "https://github.com/openartifact/openartifact"
language: "Go"
languages: ["Go"]
languagePcts: [83]
topics: ["artifact-repository", "binary-repository", "cargo", "conan", "conda", "container-registry", "debian", "go-modules", "golang", "helm"]
stars: 81
forks: 10
openIssues: 7
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-21T08:47:09Z"
lastCommitAt: "2026-10-24T00:16:09Z"
lastReleaseAt: "2026-10-22T21:24:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 36
maintainers: ["M0Rf30", "mmontesi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1216802714/b50262c3-e320-48d1-ad4c-332e25cc1f53"
---

One Go binary, embedded web UI, PostgreSQL. Hosted, proxy and group repositories with RBAC, SSO and security scanning.

OpenArtifact stores and serves npm, PyPI, Maven, Docker/OCI, Helm, Debian, RPM,
Go, Cargo, NuGet, RubyGems, Conda, Conan, Ivy, sbt and raw files behind one URL
scheme and one permission model, on your own infrastructure. Free software under
the AGPL.

## Formats

| Repository type | Formats |
|---|---|
| Hosted | all 16 (listed above) |
| Proxy (read-only mirror of an upstream) | Maven, Debian, RPM, raw |
| Group (ordered members, first hit wins) | Maven, raw |

Client URLs and setup per format: [docs/formats](https://github.com/openartifact/openartifact/blob/HEAD/docs/formats/README.md).

## Features

- Native client protocols for 16 formats; hosted, proxy (with serve-stale) and group repositories
- RBAC with users, groups, permission targets and API tokens; SSO via OIDC and SAML; projects
- SBOM (CycloneDX/SPDX), vulnerability scanning (OSV, Trivy, Grype), license compliance, secret detection
- Cleanup policies, storage quotas, artifact properties, release bundles with promotion pipelines
- Blob storage on filesystem, S3, GCS, Azure, Garage, SeaweedFS or an OCI…
