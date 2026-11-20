---
repo: "omacom/omarchy-local-ai"
name: "omarchy-local-ai"
description: "Local model catalog for Omarchy agent use"
readmeQualityOk: true
url: "https://github.com/omacom/omarchy-local-ai"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [46, 45]
stars: 44
forks: 12
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 11
recentReleases: 10
createdAt: "2026-11-01T14:30:24Z"
lastCommitAt: "2026-11-20T12:01:32Z"
lastReleaseAt: "2026-11-11T18:10:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 44
maintainers: ["dhh"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e18201b169f1206958d8cb339082924bf2c1216a8a49e3bc00e639eddc1422c/omacom/omarchy-local-ai"
---

# omarchy-local-ai

The local-model engine, recipe catalog and internals reference for Omarchy. The Arch package `omarchy-local-ai` installs this tree to `/usr/share/omarchy-local-ai` and symlinks `/usr/bin/omarchy-local-ai` to its executable entry script. Omarchy's thin `omarchy-agent-local` wrapper exposes it as `omarchy agent local <command>`.

The engine resolves recipes, downloads pinned weights, and manages rootless Podman model servers with an internal network, read-only root, dropped capabilities, allowlisted devices and authenticated loopback endpoints. The catalog ships with the engine; it is never fetched at runtime. See [engine contract](https://github.com/omacom/omarchy-local-ai/blob/HEAD/docs/engine.md) for the security boundary, lifecycle and state formats.

## Run from a checkout

Python 3.11 or newer is required. On Omarchy, run:

```bash
./omarchy-local-ai list
./omarchy-local-ai use best
./omarchy-local-ai validate .
./tests/engine-test.sh
```

Running models also requires Podman, crun and the Omarchy hardware helpers. Tests use a temporary home and do not start containers. If installed, the real Podman Quadlet generator checks generated units in dry-run mode.
