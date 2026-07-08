---
repo: "ROCm/rocm-systems"
name: "rocm-systems"
description: "super repo for rocm systems projects"
readmeQualityOk: true
url: "https://github.com/ROCm/rocm-systems"
language: "C++"
languages: ["C++", "C"]
languagePcts: [61, 30]
stars: 423
forks: 302
openIssues: 335
closedIssues: 217
watchers: 4
contributors: 2578
recentReleases: 3
createdAt: "2025-04-07T16:23:38Z"
lastCommitAt: "2026-07-08T05:40:27Z"
lastReleaseAt: "2026-05-15T15:53:45Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 85
undervaluedScore: 41
maintainers: ["newling", "vedithal-amd", "xuchen-amd"]
openGraphImageUrl: "https://opengraph.githubassets.com/484edacef33b4a71aad566816884dcd927c2e47be308e381b95d17e567374191/ROCm/rocm-systems"
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
