---
repo: "suzuki-shunsuke/asciinema-trim"
name: "asciinema-trim"
description: "Trim and change the playback speed of asciinema's session"
url: "https://github.com/suzuki-shunsuke/asciinema-trim"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["asciinema", "cli", "oss"]
stars: 11
forks: 1
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-12-18T05:33:52Z"
lastCommitAt: "2026-06-25T02:07:55Z"
lastReleaseAt: "2025-07-17T01:49:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 57
maintainers: ["renovate[bot]", "suzuki-shunsuke"]
openGraphImageUrl: "https://opengraph.githubassets.com/43a606bcf31224a62458e9973d8124c1f5b2b5358f6f89c1740558ae00885b22/suzuki-shunsuke/asciinema-trim"
---

# asciinema-trim

Trim and change the playback speed of [asciinema](https://asciinema.org/)'s session

## Motivation

[asciinema](https://github.com/asciinema/asciinema) is an awesome project to record and share your terminal sessions.

After recoding the session, sometimes you would like to trim the session, or change the playback speed.
asciinema-trim is a CLI to trim the record file and change the playback speed.

## Install

* Homebrew
* [aqua](https://aquaproj.github.io/)
* [Download from GitHub Releases](https://github.com/suzuki-shunsuke/asciinema-trim/releases)

```console
$ brew install suzuki-shunsuke/asciinema-trim/asciinema-trim
```

## Usage

```console
$ asciinema-trim <input file>
```

The trimmed record file is outputted to the standard output.

e.g.

```console
$ asciinema-trim input.cast > output.cast
```

## Example

### Trimming

input.cast

```
[1.000000, "o", "h"]
[2.000000, "o", "e"]
[4.500000, "o", "r"]
[7.000000, "o", "o"]
```

Insert `2` to trim 2 seconds.

```
[1.000000, "o", "h"]
[2.000000, "o", "e"]
2
[4.500000, "o", "r"]
[7.000000, "o", "o"]
```

Run asciiname-trim.

```
$ asciinema-trim input.cast > output.cast
```

Result

```
[1.000000, "o", "h"]…
