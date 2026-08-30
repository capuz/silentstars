---
repo: "luisdavim/configmapper"
name: "configmapper"
description: "A k8s sidecar to manage files to and from ConfigMaps or Secrets"
readmeQualityOk: true
url: "https://github.com/luisdavim/configmapper"
language: "Go"
languages: ["Go"]
languagePcts: [80]
topics: ["configmaps", "k8s", "kubernetes", "kubernetes-controller", "secrets", "sidecar"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-02-19T11:04:51Z"
lastCommitAt: "2026-08-30T09:24:53Z"
lastReleaseAt: "2026-02-01T15:40:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 68
maintainers: ["dependabot[bot]", "luisdavim"]
openGraphImageUrl: "https://opengraph.githubassets.com/332d9d18b9704da05dab218dfc81daabca1d3ad7f1fcf37f9697ea61060b395c/luisdavim/configmapper"
---

# ConfigMapper

ConfigMapper is meant to be used as a sidecar in a Kubernetes `Pod` to map local files to `ConfigMaps` (or `Secrets`).
It can watch files in the local filesystem and when they change, create or update a `ConfigMap` (or `Secret`).
It can also watch `ConfigMaps` (or `Secrets`) with a specific label selector and create or update files in the local filesystem.

A pre-built docker image is available in the [packages](https://github.com/luisdavim/configmapper/pkgs/container/configmapper) page:

```sh
docker pull ghcr.io/luisdavim/configmapper:main
```

## Features

- Create or update ConfigMaps or Secrets from local files
  - Watch the local filesystem to keep ConfigMaps and Secrets up-to-date
- Create or update ConfigMaps or Secrets from URLs
  - Poll URLs and store the response in a ConfigMap or Secret
- Extract files from ConfigMaps and Secrets
- Update or delete local files when the ConfigMap or Secret changes
  - Watch ConfigMaps and Secrets to keep local files up-to-date
- Send a signal to a process when a local file is modified
  - Watch the local filesystem and reload processes
- Post the contents of a local file to a URL
  - Watch the local filesystem and make a…
