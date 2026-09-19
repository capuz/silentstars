---
repo: "Noelware/docker-manifest-action"
name: "docker-manifest-action"
description: "🐻‍❄️🐳 Simple and tiny GitHub action to link Docker manifests easily."
readmeQualityOk: true
url: "https://github.com/Noelware/docker-manifest-action"
language: "TypeScript"
languages: ["TypeScript", "Nix"]
languagePcts: [59, 27]
topics: ["docker", "docker-manifest", "github-action", "gh-action", "actions", "github-actions"]
stars: 35
forks: 11
openIssues: 2
closedIssues: 18
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2022-03-13T06:15:22Z"
lastCommitAt: "2026-09-19T02:47:38Z"
lastReleaseAt: "2024-01-06T23:02:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 60
maintainers: ["renovate[bot]", "noelbot"]
openGraphImageUrl: "https://opengraph.githubassets.com/751c7a1081303795d47ce9d1448bdd608ca126952485db79bd2b0699969d2a7a/Noelware/docker-manifest-action"
fundingLinks: ["GITHUB:https://github.com/auguwu", "GITHUB:https://github.com/Noelware", "CUSTOM:https://paypal.me/auguwu", "CUSTOM:https://noelware.org"]
discussionCount: 3
---

### 🐻‍❄️🐳 `docker-manifest-action`

#### _A tiny, simple GitHub Action to link Docker manifests easily_

**docker-manifest-action** is a simple GitHub action that combines a list of Docker manifests and merges them into one image via the [`docker buildx imagetools`] command.

As of **docker-manifest-action** v1, the API is stable enough to not break at all.

## Usage

```yaml
on:
    # ...
jobs:
    docker:
        runs-on: ubuntu-latest
        name: my ci job
        steps:
            - uses: Noelware/docker-manifest-action@v1
              with:
                  inputs: namespace/image:latest
                  images: namespace/image:latest-amd64,namespace:image/latest-arm64
                  push: true
```

## Migrating from `v0.4.x`

- `images` was changed to `tags` to better reflect `buildx imagetools create`
- `base-image` was removed, use `inputs` instead
- `extra-images` was removed, use `tags` instead
- `amend` was renamed to `append` to better reflect `buildx imagetools create`

## Inputs

### `inputs` (array of strings)

A list of Docker images thdocker buildx imagetoolsat were built from `docker build` into the merged manifests.

Optionally, it can be a…
