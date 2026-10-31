---
repo: "Red-Blink/dune-docker-addons"
name: "dune-docker-addons"
description: "Community addon index for Dune Docker Console. Developers can submit addon manifests by PR so server owners can discover, install, and manage trusted console extensions."
readmeQualityOk: true
url: "https://github.com/Red-Blink/dune-docker-addons"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 7
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2026-06-15T08:52:06Z"
lastCommitAt: "2026-10-31T15:58:19Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 87
undervaluedScore: 61
maintainers: ["SugarFluff-WildHeart", "Red-Blink", "jeffstokes72"]
openGraphImageUrl: "https://opengraph.githubassets.com/3826af1ff86a57ec38844dde517aad4c680d523f2364de36d0e78ffd063b71e8/Red-Blink/dune-docker-addons"
---

# Dune Docker Addons

Community addon index for Dune Docker Console.

This repository is the reviewed addon list used by Dune Docker Console. It does not host addon source code. Addon source code should live in each developer's own addon repository, while this repo points to reviewed release manifests and packages.

## Addon Authors

Start from the addon template repo:

```text
https://github.com/Red-Blink/dune-docker-addon-template
```

Build and release your addon from your own repository. To list it here, add a manifest under `addons/` and include it in `index.json`.

See `docs/addon-submission.md` and `docs/addon-manifest.md` for the expected format.

Validate changes with `python3 scripts/validate.py`. Add `--verify-packages` to
check the pinned release ZIPs and their checksums without installing anything.
GitHub Actions runs metadata, regression and package checks for contributions.

See `docs/addon-upstream-pr-workflow.md` for a reusable CI, security,
release, checksum-verification, and catalog-PR workflow, including
caveats from an existing addon's automation.

## Addon Lifecycle

The community index can mark addons as `active`, `deprecated`, `unsupported`, `removed`, or…
