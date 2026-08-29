---
repo: "leplusorg/docker-kali"
name: "docker-kali"
description: "Kali Linux as a multi-platform Docker container."
readmeQualityOk: true
url: "https://github.com/leplusorg/docker-kali"
homepage: "https://hub.docker.com/r/leplusorg/kali"
language: "Dockerfile"
languages: ["Dockerfile", "JavaScript"]
languagePcts: [70, 30]
topics: ["kali-linux", "docker-container", "docker", "docker-image", "infosec", "information-security", "security", "security-tools", "kali", "kalilinux"]
stars: 14
forks: 10
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2019-12-02T07:25:34Z"
lastCommitAt: "2026-08-29T17:28:14Z"
lastReleaseAt: "2026-06-09T22:32:47Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 84
maintainers: ["dependabot[bot]", "thomasleplus"]
openGraphImageUrl: "https://opengraph.githubassets.com/600da3164a08195bc8854e4adea33c03b37187701f7cbb37cb74af37d3fdd23b/leplusorg/docker-kali"
---

# Kali

Kali Linux as a multi-platform Docker container.

**Mac/Linux**

```bash
docker run -it --user="$(id -u):$(id -g)" -v "$(pwd):/tmp" leplusorg/kali
```

Add the `--rm` option if you want to discard the container when you exit it.

**Windows**

In `cmd`:

```batch
docker run -it -v "%cd%:/tmp" leplusorg/kali
```

In PowerShell:

```pwsh
docker run -it -v "${PWD}:/tmp" leplusorg/kali
```

Add the `--rm` option if you want to discard the container when you exit it.

## Software Bill of Materials (SBOM)

To get the SBOM for the latest image (in SPDX JSON format), use the
following command:

```bash
docker buildx imagetools inspect leplusorg/kali --format '{{ json (index .SBOM "linux/amd64").SPDX }}'
```

Replace `linux/amd64` by the desired platform (`linux/amd64`, `linux/arm64` etc.).

## Provenance

To get the provenance for the latest image (in JSON format), use the
following command:

```bash
docker buildx imagetools inspect leplusorg/kali --format '{{ json .Provenance }}'
```

## Sigstore

[Sigstore](https://docs.sigstore.dev) is trying to improve supply
chain security by allowing you to verify the origin of an
artifact. You can verify that the image that you use was…
