---
repo: "leplusorg/docker-json"
name: "docker-json"
description: "Multi-platform Docker container with utilities to process JSON data (jq, jsonlint, prettyjson, jose, json2yaml...)."
readmeQualityOk: true
url: "https://github.com/leplusorg/docker-json"
homepage: "https://hub.docker.com/r/leplusorg/json"
language: "Dockerfile"
languages: ["Dockerfile", "JavaScript"]
languagePcts: [70, 30]
topics: ["jsonlint", "docker-container", "json", "json-schema", "jq", "docker", "dockerfile", "docker-image", "jsonwebtoken", "jwt"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-12-03T18:35:25Z"
lastCommitAt: "2026-08-29T16:10:22Z"
lastReleaseAt: "2025-01-11T01:25:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 79
maintainers: ["dependabot[bot]", "thomasleplus"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c50bcaeef1c215ad6c23c2aeb6d70f1cbf749e409e1751bb5d8e8ba4e0b7bb3/leplusorg/docker-json"
---

# JSON

Multi-platform Docker container with utilities to process JSON data (`jq`, `jsonlint`, `prettyjson`, `jose`, `json2yaml`...).

## Example without using the filesystem

Let's say that you have a file `foo.json` in your current working directory that you want to process with jq:

**Mac/Linux**

```bash
cat foo.json | docker run --rm -i --net=none leplusorg/json jq '.'
```

**Windows**

```batch
type foo.json | docker run --rm -i --net=none leplusorg/json jq '.'
```

## Example using the filesystem

Same thing, assuming that you have a file `foo.json` in your current working directory that you want to process with jq:

**Mac/Linux**

```bash
docker run --rm -t --user="$(id -u):$(id -g)" --net=none -v "$(pwd):/tmp" leplusorg/json jq '.' /tmp/foo.json
```

**Windows**

In `cmd`:

```batch
docker run --rm -t --net=none -v "%cd%:/tmp" leplusorg/json jq '.' /tmp/foo.json
```

In PowerShell:

```pwsh
docker run --rm -t --net=none -v "${PWD}:/tmp" leplusorg/json jq '.' /tmp/foo.json
```

## Help

To know more command-line options of `jq`:

```bash
docker run --rm --net=none leplusorg/json jq -h
```

## NPM Packages

Use the `npx` command to run command-line tools coming from npm…
