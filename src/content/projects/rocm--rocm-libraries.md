---
repo: "ROCm/rocm-libraries"
name: "rocm-libraries"
description: "super repo for rocm libraries"
url: "https://github.com/ROCm/rocm-libraries"
language: "Assembly"
languages: ["Assembly", "C++"]
languagePcts: [51, 41]
stars: 371
forks: 326
openIssues: 440
closedIssues: 326
watchers: 9
contributors: 2554
recentReleases: 0
createdAt: "2025-04-23T18:11:23Z"
lastCommitAt: "2026-07-03T06:25:58Z"
lastReleaseAt: "2026-03-26T17:52:27Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 87
undervaluedScore: 39
maintainers: ["bartekxk", "Alex-Vasile", "geomin12"]
openGraphImageUrl: "https://opengraph.githubassets.com/ffdbcb952709bb7f19ac2363794fdfd1d3914a8a7526365d9d9b104845a0d7c5/ROCm/rocm-libraries"
discussionCount: 9
---

# ROCm Libraries

Welcome to the ROCm Libraries super-repo. This repository consolidates multiple ROCm-related libraries and shared components into a single repository to streamline development, CI, and integration.

## Super-repo Goals

- Enable unified build and test workflows across ROCm libraries.
- Facilitate shared tooling, CI, and contributor experience.
- Improve integration, visibility, and collaboration across ROCm library teams.

## Super-repo Project Status

### TheRock CI Status

TheRock CI performs multi-component testing on top of builds leveraging [TheRock](https://github.com/ROCm/TheRock) build system.

### Component Migration and Legacy CI Status

This table provides the current status of the migration of specific components as well as a pointer to the health of their legacy CI systems.

**Key:**
- **Completed**: Fully migrated and integrated. This super-repo should be considered the source of truth for this project. The old repo may still be used for certain release activities.
- **In Progress**: Ongoing migration, tests, or integration. Please refrain from submitting new pull requests on the individual repo of the project, and develop on the super-repo.
-…
