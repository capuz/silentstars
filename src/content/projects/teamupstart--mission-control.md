---
repo: "teamupstart/mission-control"
name: "mission-control"
description: "Mission Control hands the reigns over to you. Build and manage your own agentic software factory. "
readmeQualityOk: true
url: "https://github.com/teamupstart/mission-control"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
stars: 5
forks: 2
openIssues: 1
closedIssues: 16
watchers: 0
contributors: 10
recentReleases: 10
createdAt: "2026-07-10T20:15:17Z"
lastCommitAt: "2026-10-29T12:26:26Z"
lastReleaseAt: "2026-09-03T18:26:24Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 70
maintainers: ["Jordan7265", "mancej", "mission-control-release[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f2e37ddb90f9ac1a0254c8089f10bb614cba77a6f3919c10c9381b946ca3ab7/teamupstart/mission-control"
---

# Mission Control

## Installation

Install the macOS app (Apple Silicon), without keeping a repository checkout:

```bash
bash -o pipefail -c 'curl -fsSL https://raw.githubusercontent.com/teamupstart/mission-control/main/scripts/install.sh | bash -s -- "$@"' --
```

Requires macOS 12+ on Apple Silicon and the native GitHub CLI (`gh auth login`). Run as
your own account, without `sudo`. The binary installer downloads a complete signed release;
it does not use host Node, npm, npx, Git or Xcode. Fresh installs use `~/Applications`;
reruns preserve the recorded destination and state home. Quit the existing app before replacing it.
Use `--scope system` for a fresh shared installation, `--apps-dir DIR` for an existing writable
custom directory, or `--ref vX.Y.Z` / `--ref FULL_SHA` to pin stable / alpha bytes.

New binaries install **Agent Mission Control.app**. Existing managed installations migrate in
the same folder, preserving their state and receipt scope. Older saved installers must be
replaced with the current command above; see [app-name migration and compatibility](https://github.com/teamupstart/mission-control/blob/HEAD/docs/app-name-migration.md).

**Release qualification is…
