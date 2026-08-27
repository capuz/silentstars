---
repo: "m3gnus/waveguide-generator"
name: "waveguide-generator"
description: "Parametric waveguide and horn designer with real-time 3D preview, built-in BEM simulation (Metal-accelerated), CAD round-trip, and measurement-ready exports"
readmeQualityOk: true
url: "https://github.com/m3gnus/waveguide-generator"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [56, 40]
stars: 14
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 5
createdAt: "2026-02-08T14:31:38Z"
lastCommitAt: "2026-08-27T14:26:45Z"
lastReleaseAt: "2026-08-24T18:25:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 56
maintainers: ["m3gnus"]
openGraphImageUrl: "https://opengraph.githubassets.com/d324c88ca56aae9da96b1fc97c253dfb76cb9bcdd52c188bfdd73bc04f117c1c/m3gnus/waveguide-generator"
---

# Waveguide Generator

Interactive 3D design and BEM simulation for acoustic waveguides — a
from-scratch rebuild of the Waveguide Generator application on a TypeScript/React
frontend and a FastAPI backend, with the mesher as the single geometry authority.
This is the second-generation rewrite, historically called v2, and replaces the
original application.

The [documentation index](https://github.com/m3gnus/waveguide-generator/blob/HEAD/docs/README.md) separates the user and development guides,
current contracts, accepted design gates, legacy notes, and dated validation evidence.

## Install

Clone the repository — do not download a ZIP, because the installer updates
itself with Git and the pinned HornLab modules are installed from Git too.
Then run the installer for your platform:

| | |
|---|---|
| macOS | double-click `installers/macos/install-wg.command` |
| Windows | double-click `installers\windows\install-and-update.bat` |
| Linux | `bash installers/linux/install.sh` |

For a self-contained macOS install, download the release's
**Waveguide.Generator-&lt;version&gt;-macos-arm64.dmg**, open it, and drag **Waveguide Generator** to
Applications.

**The first launch is refused,…
