---
repo: "Tatsh/instagram-archiver"
name: "instagram-archiver"
description: "Save Instagram content you have access to."
readmeQualityOk: true
url: "https://github.com/Tatsh/instagram-archiver"
homepage: "https://tatsh.github.io/instagram-archiver/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["command-line", "instagram"]
stars: 30
forks: 2
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-06-07T17:31:21Z"
lastCommitAt: "2026-10-26T18:06:09Z"
lastReleaseAt: "2026-05-10T22:17:52Z"
status: "thriving"
tags: ["funded"]
healthScore: 98
undervaluedScore: 63
maintainers: ["dependabot[bot]", "pre-commit-ci[bot]", "Tatsh"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/500941136/af8a170b-8f82-4bef-be7b-e9368b3ca114"
fundingLinks: ["GITHUB:https://github.com/Tatsh", "KO_FI:https://ko-fi.com/tatsh2", "LIBERAPAY:https://liberapay.com/tatsh2", "PATREON:https://patreon.com/tatsh2"]
---

# instagram-archiver

Save Instagram content you have access to.

## Installation

```shell
pip install instagram-archiver
```

## Usage

```plain
Usage: instagram-archiver [OPTIONS] [USERNAME]

  Archive a profile (USERNAME) or your saved posts (--saved).

  Pass exactly one of: a USERNAME positional argument, or --saved/-s.

Options:
  -o, --output-dir DIRECTORY      Output directory. Defaults to the username
                                  (profile mode) or `.` (saved mode).
  -b, --browser [brave|chrome|chromium|edge|opera|vivaldi|firefox|safari]
                                  Browser to read cookies from.
  -p, --profile TEXT              Browser profile.
  -d, --debug                     Enable debug output.
  -q, --quiet                     Disable progress display updates.
  -S, --sleep-time INTEGER        Number of seconds yt-dlp waits between
                                  requests.
  --no-log                        Ignore log (re-fetch everything).
  -C, --include-comments          Also download all comments (extends download
                                  time significantly).
  -R, --include-child-comments    Also recursively download child (reply)…
