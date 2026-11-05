---
repo: "gardener/gardener-landscape-kit"
name: "gardener-landscape-kit"
description: "Source repository of the famous gardener-landscape-kit."
readmeQualityOk: true
url: "https://github.com/gardener/gardener-landscape-kit"
language: "Go"
languages: ["Go"]
languagePcts: [90]
stars: 11
forks: 12
openIssues: 11
closedIssues: 13
watchers: 2
contributors: 24
recentReleases: 5
createdAt: "2025-11-10T15:10:20Z"
lastCommitAt: "2026-11-05T14:05:00Z"
lastReleaseAt: "2026-09-25T13:47:13Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 90
undervaluedScore: 81
maintainers: ["gardener-ci-robot", "renovate[bot]", "LucaBernstein"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd5cc0d1adf280916432b7b9809376bf04cd2fe9f21f04064669896c5469b7c3/gardener/gardener-landscape-kit"
---

# gardener-landscape-kit

> [!WARNING]
> This project is under active development. Breaking changes may occur frequently. Not ready for production use.

## Getting Started

Run the installer without arguments to install the latest GLK release:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/gardener/gardener-landscape-kit/HEAD/install.sh)"
```

To install a specific release, pass its version to the installer:

```bash
GLK_VERSION=v0.6.0
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/gardener/gardener-landscape-kit/HEAD/install.sh)" -- \
  --version "${GLK_VERSION}"
```

The installer downloads the latest release's `component-descriptor.yaml` by default, or
the specified release's descriptor when `--version` is set. It determines the matching
`glk` binary version, installs it to `~/.glk/bin/`, and prints next steps. Using the latest
installer also ensures that descriptors from older releases are handled correctly.
By default, the downloaded descriptor is kept in a temporary file and removed when the
installer exits. Pass `--components-file-dir DIR` to keep it at
`DIR/component-descriptor.yaml`; the directory must already exist and an existing…
