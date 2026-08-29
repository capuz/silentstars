---
repo: "leplusorg/docker-hash"
name: "docker-hash"
description: "Multi-platform Docker container with utilities to compute hashes (CRC32, MD5, SHA-1, SHA-256, SHA-512, Argon2...)."
readmeQualityOk: true
url: "https://github.com/leplusorg/docker-hash"
homepage: "https://hub.docker.com/r/leplusorg/hash"
language: "Dockerfile"
languages: ["Dockerfile", "JavaScript"]
languagePcts: [61, 39]
topics: ["argon2", "docker-container", "docker", "dockerfile", "md5", "sha256", "sha1", "crc32", "sha-1", "sha-256"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-12-04T00:02:05Z"
lastCommitAt: "2026-08-29T16:10:22Z"
lastReleaseAt: "2025-01-11T01:18:04Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 93
maintainers: ["dependabot[bot]", "thomasleplus"]
openGraphImageUrl: "https://opengraph.githubassets.com/97b5ec4b7be68cd286d2f304afd4507b812f039ad1f927f3a4082ed49822eaa6/leplusorg/docker-hash"
---

# Hash

Multi-platform Docker container with utilities to compute hashes (CRC32, MD5, SHA-1, SHA-256, SHA-512, Argon2...).

## Example not using the filesystem

Let's say that you have a file `foo.txt` in your current working directory that you want to compute its SHA-256 hash:

**Mac/Linux**

```bash
cat foo.txt | docker run --rm -i --net=none leplusorg/hash sha256sum
```

**Windows**

```batch
type foo.txt | docker run --rm -i --net=none leplusorg/hash sha256sum
```

## Example using the filesystem

Same thing, assuming that you have a file `foo.txt` in your current working directory that you want to compute its SHA-256 hash:

**Mac/Linux**

```bash
docker run --rm -t --user="$(id -u):$(id -g)" --net=none -v "$(pwd):/tmp" leplusorg/hash sha256sum /tmp/foo.txt
```

**Windows**

In `cmd`:

```batch
docker run --rm -t --net=none -v "%cd%:/tmp" leplusorg/hash sha256sum /tmp/foo.txt
```

In PowerShell:

```pwsh
docker run --rm -t --net=none -v "${PWD}:/tmp" leplusorg/hash sha256sum /tmp/foo.txt
```

## Help

To know what are the message digest algorithms supported by `openssl`, you can run:

```bash
docker run --rm --net=none leplusorg/hash openssl help
```

## Software Bill of…
