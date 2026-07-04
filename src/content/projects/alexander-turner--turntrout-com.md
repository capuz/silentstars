---
repo: "alexander-turner/TurnTrout.com"
name: "TurnTrout.com"
description: "A blog on AI, personal development, and living a good life."
url: "https://github.com/alexander-turner/TurnTrout.com"
homepage: "https://turntrout.com"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [61, 33]
stars: 42
forks: 11
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2024-03-30T23:26:48Z"
lastCommitAt: "2026-07-04T19:19:00Z"
status: "thriving"
tags: ["funded"]
healthScore: 100
undervaluedScore: 61
maintainers: ["claude", "alexander-turner", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/779839635/de6d56fa-5028-4a56-98ab-d229bca8736a"
fundingLinks: ["GITHUB:https://github.com/jackyzha0"]
---

100% Python line coverage and 100% TypeScript branch coverage.

# Setup

```shell
SITE_DIR=/tmp/TurnTrout.com
git clone https://github.com/alexander-turner/TurnTrout.com.git "$SITE_DIR" --depth 1
cd "$SITE_DIR"
pnpm install --frozen-lockfile
pnpm dev
```

# Cryptographic timestamp verification

To [verify that one of my commits was produced at a given date](https://turntrout.com/design#finishing-touches), you need to check out another repository:

```shell
git clone https://github.com/alexander-turner/.timestamps
cd .timestamps
ots --no-bitcoin verify "files/$full_commit_hash.txt.ots"
```

The above `ots` ([Open Timestamp](https://github.com/opentimestamps/opentimestamps-client/blob/master/README.md)) command is written assuming you don’t have a local copy of the blockchain and are instead willing to trust external calendar services. The commit times can be inspected zero-trust by downloading the blockchain and removing `--no-bitcoin`.

# Notes

- Run `git config core.hooksPath .hooks` to use the repository’s hooks.

[^python]: Python testing and type-checking run in CI (`.github/workflows/python-tests.yaml` and `python-lint.yaml`), not only locally.

`turntrout.com` © 2024–2026…
