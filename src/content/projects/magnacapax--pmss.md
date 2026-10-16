---
repo: "MagnaCapax/PMSS"
name: "PMSS"
description: "Pulsed Media Seedbox Software"
readmeQualityOk: true
url: "https://github.com/MagnaCapax/PMSS"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [71, 21]
stars: 39
forks: 15
openIssues: 237
closedIssues: 771
watchers: 2
contributors: 11
recentReleases: 2
createdAt: "2023-01-19T09:35:15Z"
lastCommitAt: "2026-10-16T08:27:03Z"
lastReleaseAt: "2026-10-14T03:45:50Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 89
undervaluedScore: 61
maintainers: ["MagnaCapax"]
openGraphImageUrl: "https://opengraph.githubassets.com/5787644580668cfe18ed6530a4c7d363753247599b418b5c3d9025c0065c1151/MagnaCapax/PMSS"
---

# Pulsed Media Seedbox Software

## Description

Pulsed Media Seedbox Software, server side code.
This builds and installs all the software and scripts to operate a seedbox server.

Works on Debian 10/11/12/13. Debian 12 (Bookworm) is the recommended
production target. Debian 13 (Trixie) support is experimental/development.
Debian 10 is upstream end-of-life, but existing installations continue to function.

This can be used standalone fully, does not require a server from Pulsed Media. You can _freely_ use this for your own self-hosted seedbox.
No commercial restrictions, you are free to provide seedbox services using this and there are even some minimalistic whitelabeling features.
Some pieces will still be fetched from Pulsed Media servers, such as the latest GUI version.

More information available at https://wiki.pulsedmedia.com/index.php/PM_Software_Stack

## Documentation

You can find information for common tasks such as adding/creating/suspending users at https://wiki.pulsedmedia.com/index.php/Category:PM_Software_Stack_Guides.

For a quick maintenance checklist covering dry-runs, structured logging and
tests, see `docs/maintenance.md`. WireGuard usage notes are available…
