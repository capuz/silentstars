---
repo: "cssr-tools/homebrew-opm"
name: "homebrew-opm"
description: "Using brew to install ResInsight and OPM Flow with mpi support on macOS"
readmeQualityOk: true
url: "https://github.com/cssr-tools/homebrew-opm"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-12-21T16:00:32Z"
lastCommitAt: "2026-09-01T08:47:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 35
maintainers: ["daavid00"]
openGraphImageUrl: "https://opengraph.githubassets.com/984e44977ae9cf2c9e0fe21fec94120b57b3c31f86bba79539708690fc9a22c4/cssr-tools/homebrew-opm"
---

# Installing ResInsight and OPM Flow with support for mpirun in macOS using brew

This repository uses [_brew_](https://brew.sh) to build [_ResInsight_](https://resinsight.org) (v2026.09.0) and [_OPM Flow_](https://opm-project.org/?page_id=19) (interim release v2026.07) in macOS Tahoe in GitHub Actions, showing the status and details of the build in the [_Actions_](https://github.com/cssr-tools/homebrew-opm/actions).
See [_this script_](https://github.com/cssr-tools/homebrew-opm/blob/main/.github/workflows/ci_brew_opm-flow_resinsight_macos.yml) that is run in GitHub actions.

```bash
brew tap cssr-tools/opm
brew trust cssr-tools/opm
brew install cssr-tools/opm/opm-simulators -y
brew install cssr-tools/opm/resinsight -y
```

After you execute the above lines, you can check if the installation of OPM Flow succeded by typing in the terminal `flow --help`, and ResInsight is launched by typing `resinsight`.
