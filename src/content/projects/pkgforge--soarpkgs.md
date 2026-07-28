---
repo: "pkgforge/soarpkgs"
name: "soarpkgs"
description: "Official Soar Packages Repository"
readmeQualityOk: true
url: "https://github.com/pkgforge/soarpkgs"
homepage: "https://soarpkgs.qaidvoid.dev"
topics: ["apkbuild", "appbundle", "appimage", "appimages", "build-system", "flatimage", "package-management", "package-manager", "pkgbuild", "portable"]
stars: 134
forks: 14
openIssues: 23
closedIssues: 38
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2024-11-04T11:45:38Z"
lastCommitAt: "2026-07-28T14:57:28Z"
lastReleaseAt: "2026-02-22T04:02:39Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 90
undervaluedScore: 44
maintainers: ["github-actions[bot]", "QaidVoid"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/883107375/324e7f3b-b794-4d1b-ba79-4df25f16a3d6"
discussionCount: 5
---

[discord-shield]: https://img.shields.io/discord/1313385177703256064?logo=%235865F2&label=Discord
[discord-url]: https://discord.gg/djJUs48Zbu
[stars-shield]: https://img.shields.io/github/stars/pkgforge/soarpkgs.svg
[stars-url]: https://github.com/pkgforge/soarpkgs/stargazers
[issues-shield]: https://img.shields.io/github/issues/pkgforge/soarpkgs.svg
[issues-url]: https://github.com/pkgforge/soarpkgs/issues
[license-shield]: https://img.shields.io/github/license/pkgforge/soarpkgs.svg
[license-url]: https://github.com/pkgforge/soarpkgs/blob/main/LICENSE
[doc-shield]: https://img.shields.io/badge/docs.pkgforge.dev-blue
[doc-url]: https://docs.pkgforge.dev

</div>

    <b><strong>soarpkgs - Package Repository</strong></b>
    <br>Declarative, hash-pinned package definitions for Soar
    <br>
</p>

---

## Overview

This repository hosts declarative package definitions for [Soar](https://github.com/pkgforge/soar).

Every package pins its upstream artifact together with that artifact's hash, in
git. Nothing here is executed: a client resolves a package by parsing alone, so
the download can be verified against a hash that was reviewed in a commit
rather than measured after the fact.…
