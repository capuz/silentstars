---
repo: "leplusorg/docker-yaml"
name: "docker-yaml"
description: "Multi-platform Docker container with utilities to process YAML files (yamllint, yamlpath, yq, json2yaml...)."
readmeQualityOk: true
url: "https://github.com/leplusorg/docker-yaml"
homepage: "https://hub.docker.com/r/leplusorg/yaml"
language: "Dockerfile"
languages: ["Dockerfile", "JavaScript"]
languagePcts: [68, 32]
topics: ["yamllint", "docker-container", "docker", "docker-image", "dockerfile", "yaml", "yaml-parser", "yaml-validator", "yaml2json", "yaml-processor"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-12-03T23:13:42Z"
lastCommitAt: "2026-08-29T17:28:46Z"
lastReleaseAt: "2025-01-10T01:09:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 76
maintainers: ["dependabot[bot]", "thomasleplus"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f8a2e3811dab1332fbdf1a3f6f89e9f9fe1661a170524aab78fa2dd02868248/leplusorg/docker-yaml"
---

# YAML

Multi-platform Docker container with utilities to process YAML files (`yamllint`, `yamlpath`, `yq`, `json2yaml`...).

## Example not using the filesystem

Let's say that you have a file `foo.yml` in your current working directory that you want to validate:

**Mac/Linux**

```bash
cat foo.yml | docker run --rm -i --net=none leplusorg/yaml yamllint -
```

**Windows**

```batch
type foo.yml | docker run --rm -i --net=none leplusorg/yaml yamllint -
```

## Example using the filesystem

Same thing, assuming that you have a file `foo.yml` in your current working directory that you want to validate:

**Mac/Linux**

```bash
docker run --rm -t --user="$(id -u):$(id -g)" --net=none -v "$(pwd):/tmp" leplusorg/yaml yamllint /tmp/foo.yml
```

**Windows**

In `cmd`:

```batch
docker run --rm -t --net=none -v "%cd%:/tmp" leplusorg/yaml yamllint /tmp/foo.yml
```

In PowerShell:

```pwsh
docker run --rm -t --net=none -v "${PWD}:/tmp" leplusorg/yaml yamllint /tmp/foo.yml
```

## Help

To know more command-line options of `yamllint`:

```bash
docker run --rm --net=none leplusorg/yaml yamllint -h
```

## Other formats

Note that many tools included in this image can also handle other
popular…
