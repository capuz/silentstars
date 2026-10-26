---
repo: "Tatsh/patreon-archiver"
name: "patreon-archiver"
description: "Save Patreon content you have access to."
readmeQualityOk: true
url: "https://github.com/Tatsh/patreon-archiver"
homepage: "https://tatsh.github.io/patreon-archiver/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["patreon", "command-line"]
stars: 41
forks: 5
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 6
recentReleases: 1
createdAt: "2022-01-24T23:26:41Z"
lastCommitAt: "2026-10-26T18:06:56Z"
lastReleaseAt: "2026-09-21T03:16:48Z"
status: "thriving"
tags: ["funded"]
healthScore: 98
undervaluedScore: 62
maintainers: ["dependabot[bot]", "pre-commit-ci[bot]", "Tatsh"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/451668095/56f16e31-150c-439f-b98a-bbb2a0094574"
fundingLinks: ["GITHUB:https://github.com/Tatsh", "KO_FI:https://ko-fi.com/tatsh2", "LIBERAPAY:https://liberapay.com/tatsh2", "PATREON:https://patreon.com/tatsh2"]
---

# patreon-archiver

Save Patreon content you have access to.

## Installation

```shell
pip install patreon-archiver
```

## Configuration

Video content will be saved using yt-dlp. You should ensure that you are logged into Patreon in the
appropriate browser profile.

Recommendations in `~/.config/yt-dlp/config` or equivalent file:

```plain
--cookies-from-browser chrome:Default

--add-metadata
--all-subs
--convert-subs srt
--embed-chapters
--embed-metadata
--embed-subs
--embed-thumbnail
--geo-bypass
--merge-output-format mkv
--no-overwrites
--sub-langs all
--write-info-json
--write-subs

--download-archive ~/somewhere-safe
```

## Usage

Run `patreon-archiver`. At minimum, campaign ID of the Patreon content creator is required. See help
with `--help`.

```plain
Usage: patreon-archiver [OPTIONS] CAMPAIGN_ID

Options:
  -o, --output-dir TEXT           Output directory
  -b, --browser TEXT              Browser to read cookies from
  -p, --profile TEXT              Browser profile
  -x, --fail                      Do not continue processing after a failed
                                  yt-dlp command.
  -P, --use-yt-dlp-for-podcasts   Use yt-dlp to download podcasts.
  -S,…
