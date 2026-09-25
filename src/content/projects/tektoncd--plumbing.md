---
repo: "tektoncd/plumbing"
name: "plumbing"
description: "This repo holds configuration for infrastructure used across the tektoncd org 🏗️"
readmeQualityOk: true
url: "https://github.com/tektoncd/plumbing"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [47, 29]
topics: ["tekton", "pipeline", "plumbing", "infrastructure", "test-infrastructure", "test-infra", "hacktoberfest"]
stars: 66
forks: 128
openIssues: 69
closedIssues: 299
watchers: 7
contributors: 84
recentReleases: 0
createdAt: "2019-04-11T21:20:08Z"
lastCommitAt: "2026-09-25T09:02:52Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 58
maintainers: ["dependabot[bot]", "vdemeester", "waveywaves"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f84e12ec68378014a601aff46e74bf5170460330eb34c80fd3f839cbfd5f237/tektoncd/plumbing"
---

# Plumbing

This repo holds configuration for infrastructure used across the tektoncd org 🏗️:

- [Tekton](https://github.com/tektoncd/plumbing/blob/HEAD/tekton/README.md) resources for:
  - [Continuous Delivery](https://github.com/tektoncd/plumbing/blob/HEAD/tekton/README.md): release projects, build docker images and other periodic jobs
  - [Continuous Integration](https://github.com/tektoncd/plumbing/blob/HEAD/tekton/ci/README.md): run CI jobs for the various Tekton Projects. *NOTE* this responsibility is used shared with [Prow](https://github.com/tektoncd/plumbing/blob/HEAD/prow/README.md)
- [Prow](https://github.com/tektoncd/plumbing/blob/HEAD/prow/README.md) manifests and configuration for:
  - Continuous Integration: run CI jobs, merge approved changes (via Tide)
  - Support functionality via various [plugins](https://github.com/tektoncd/plumbing/blob/HEAD/prow/plugins.yaml)
- [Ingress](https://github.com/tektoncd/plumbing/blob/HEAD/prow/README.md#ingress) configuration for access via `tekton.dev`
- [Peribolos](https://github.com/tektoncd/plumbing/blob/HEAD/tekton/resources/org-permissions/README.md) is used to control org and repo permissions
-…
