---
repo: "mmabey/vbox_sdk"
name: "vbox_sdk"
description: "The VirtualBox Software Developer Kit as available from https://www.virtualbox.org/wiki/Downloads"
readmeQualityOk: true
url: "https://github.com/mmabey/vbox_sdk"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 4
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2015-03-19T17:31:18Z"
lastCommitAt: "2026-08-10T05:07:35Z"
lastReleaseAt: "2026-08-10T04:58:09Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine"]
healthScore: 90
undervaluedScore: 90
maintainers: ["actions-user", "mmabey"]
openGraphImageUrl: "https://opengraph.githubassets.com/03c9f3dfb5472859eed42dba317b57e4e6860dc42c5c232240b74895c050ea6b/mmabey/vbox_sdk"
---

# automation

This branch is the GitHub default branch for `vbox_sdk`, but it doesn't contain the SDK or the
Python package -- it's CI plumbing only. This is where the `check-new-release.yml` /
`backfill.yml` scheduled/manual workflows live, plus the scripts they run.

It has to be the default branch because GitHub only fires `schedule`-triggered workflows off the
workflow file version on the default branch -- keeping this cron job on `main` or `pylibsonly`
would mean those branches had to own CI concerns that aren't really theirs.

## What's here

- `scripts/check_new_versions.py` -- scrapes `download.virtualbox.org`, diffs against
  `manifest.json` to find SDK releases that haven't been published yet.
- `scripts/extract_vboxapi.py` -- pulls `installer/vboxapi/*` out of an SDK zip.
- `scripts/version.py` -- maps a VirtualBox SDK version + build number to a PEP 440 package
  version. This is also where the old versioning bug (see vbox_sdk#3) is fixed for good: the
  package version is only ever written by this script, never by hand.
- `scripts/release.py` -- orchestrates one release end to end: download the SDK zip, update
  `main` (full mirror, tagged `sdk-vX.Y.Z`), update…
