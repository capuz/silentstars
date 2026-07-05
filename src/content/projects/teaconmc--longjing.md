---
repo: "teaconmc/Longjing"
name: "Longjing"
description: "TeaCon Continuous Submission Delivery Service"
originalDescription: "TeaCon Continuous Submission Delivery Service"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/teaconmc/Longjing"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [55, 30]
stars: 23
forks: 5
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2020-12-13T16:39:14Z"
lastCommitAt: "2026-07-05T06:33:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 64
maintainers: ["teacon-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/01f63a98dfc0aa21ebff511cd19b0e67d6cf609cc153236f7056ff1de1ac4343/teaconmc/Longjing"
---

# Longjing - TeaCon Continuous Delivery Service

We leverage GitHub Actions to provide continuous integration and delivery of all TeaCon 2026 participant mods.

## Workflow

  1. Use GitHub Action's Cron Trigger to poll every half hour. The polling Workflow is described by `.github/workflows/query.yaml`.
  2. The polling process accesses the Biluo Spring API to obtain the current list of valid registrations. It retrieves team names, mod names, and Git Repo addresses from the registration information to generate corresponding information. For newly registered teams, a new Workflow will be created in the `.github/workflows/` directory, and a corresponding directory will be created under `mods`. For existing teams, their information in the `mods` directory (Git Repo address, HEAD shasum, etc.) will be updated.
  3. Push the newly created or updated build information back to the repository to trigger the build and release. During the build, `setup.gradle` will be injected into the build process as the [Init Script][ref-2] for the participating project.
  4. After a successful build, Longjing will identify the correct build artifacts, obtain Mod prerequisites from Biluo Spring, and…
