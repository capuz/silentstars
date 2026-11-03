---
repo: "dependabot/proxy"
name: "proxy"
description: "Dependabot's HTTP proxy to authenticate requests to package registries, git servers, and the GitHub API"
readmeQualityOk: true
url: "https://github.com/dependabot/proxy"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 144
forks: 62
openIssues: 19
closedIssues: 23
watchers: 2
contributors: 60
recentReleases: 0
createdAt: "2026-01-29T22:41:02Z"
lastCommitAt: "2026-11-03T19:05:59Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 36
maintainers: ["dependabot[bot]", "v-abhishekbhaskar", "JamieMagee"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1219b8a4f486d2e16bf9a1e7562381f811bc9a607a93fbb90de18c479a9ce64/dependabot/proxy"
---

# Dependabot Proxy

The Dependabot Proxy is an HTTP and HTTPS proxy that adds authentication to requests to the GitHub API and to private package registries.
It is used by the [`dependabot-core`][dependabot-core] to handle authentication for various package managers and Git servers.

## Requirements

To build and run the proxy, you need to have the following installed:

- [Go][go] (version 1.27 or later)
- [Docker][docker]

## Image provenance

The `main` publish workflow builds `ghcr.io/dependabot/proxy` for `linux/amd64`.
The build pushes a `v2.0.YYYYMMDDHHMMSS` image tag and updates `latest`.
The workflow then publishes signed build provenance for the image digest to GitHub and GHCR.
After attestation succeeds, it creates the matching Git tag at the source commit.
If attestation fails, the image tags remain published and the workflow fails.

To verify an image, replace the placeholders with its digest and the expected source commit:

```bash
IMAGE_DIGEST='sha256:<digest>'
SOURCE_SHA='<commit>'

gh attestation verify "oci://ghcr.io/dependabot/proxy@${IMAGE_DIGEST}" \
  --repo dependabot/proxy \
  --signer-workflow dependabot/proxy/.github/workflows/ghcr.yml \
  --source-ref…
