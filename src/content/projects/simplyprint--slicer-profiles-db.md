---
repo: "SimplyPrint/slicer-profiles-db"
name: "slicer-profiles-db"
description: "An open database of printer and filament profiles for various 3D printing slicers. Integrated directly with the SimplyPrint slicer, allowing you to use PrusaSlicer, BambuStudio and OrcaSlicer in the browser. Contribute by adding profiles here that everyone can benefit from - for users and brands alike."
url: "https://github.com/SimplyPrint/slicer-profiles-db"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-08-03T11:30:08Z"
lastCommitAt: "2026-06-27T00:49:01Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 61
maintainers: ["github-actions[bot]", "johanohly", "cjavad"]
openGraphImageUrl: "https://opengraph.githubassets.com/c065ba5db6773d1fe50b6c11facdabb812ee65f7a62c094acf9d52c5c7b82895/SimplyPrint/slicer-profiles-db"
---

# slicer-profiles-db
An open database of printer and filament profiles for various 3D printing slicers. Integrated directly with the SimplyPrint slicer, allowing you to use PrusaSlicer, BambuStudio and OrcaSlicer in the browser. Contribute by adding profiles here that everyone can benefit from - for users and brands alike.

## Contributing

As we are working on the process, the simplest way to add profiles is to add them as "overlays" in the `overlay/` folder, these correspond 1:1 with the format from the slicer you'd want to add the profile to, and is the simplest way to integrate the profile consistently.

The `profiles/` folder is a generated, centralized result of ingesting multiple data sources, including the overlays, while manual edits are possible, they are not intended.
