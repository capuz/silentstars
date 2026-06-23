---
repo: "ROCm/rocm-systems"
name: "rocm-systems"
description: "super repo for rocm systems projects"
url: "https://github.com/ROCm/rocm-systems"
language: "C++"
languages: ["C++", "C"]
languagePcts: [61, 30]
stars: 413
forks: 279
openIssues: 312
closedIssues: 199
watchers: 4
contributors: 2686
recentReleases: 4
createdAt: "2025-04-07T16:23:38Z"
lastCommitAt: "2026-06-23T23:18:17Z"
lastReleaseAt: "2026-05-15T15:53:45Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 85
undervaluedScore: 40
maintainers: ["derobins", "amd-eochoalo", "kurtmcmillan"]
openGraphImageUrl: "https://opengraph.githubassets.com/59a4afadbf21a3cb477320454c5f5d31ffa2c3dd39f53d8c75296ea490fe2327/ROCm/rocm-systems"
discussionCount: 7
---

# ROCm Systems

Welcome to the ROCm Systems super-repo. This repository consolidates multiple ROCm systems projects into a single repository to streamline development, CI, and integration. The first set of projects focuses on requirements for building PyTorch.

# Super-repo Status and CI Health

This table provides the current status of the migration of specific ROCm systems projects as well as a pointer to their current CI health.

**Key:**
- **Completed**: Fully migrated and integrated. This super-repo should be considered the source of truth for this project. The old repo may still be used for release activities.
- **In Progress**: Ongoing migration, tests, or integration. Please refrain from submitting new pull requests on the individual repo of the project, and develop on the super-repo.
- **Pending**: Not yet started or in the early planning stages. The individual repo should be considered the source of truth for this project.

| Component              | Source of Truth | Migration Status | Component CI Status                   |
|------------------------|-----------------|------------------|---------------------------------------|
| `amdsmi`               | Public…
