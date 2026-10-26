---
repo: "Tatsh/mpv-netrc"
name: "mpv-netrc"
description: "A Lua plugin for mpv that uses .netrc files to authenticate media URIs."
readmeQualityOk: true
url: "https://github.com/Tatsh/mpv-netrc"
homepage: "https://tatsh.github.io/mpv-netrc/"
language: "Lua"
languages: ["Lua"]
languagePcts: [81]
topics: ["mpv", "mpv-script", "netrc", "lua"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-05-09T08:23:44Z"
lastCommitAt: "2026-10-26T18:06:44Z"
lastReleaseAt: "2026-05-11T20:33:56Z"
status: "thriving"
tags: ["funded"]
healthScore: 96
undervaluedScore: 81
maintainers: ["dependabot[bot]", "Tatsh", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/490195725/7ee9ab68-c09d-417c-bdf7-2d5d6ebf1268"
fundingLinks: ["GITHUB:https://github.com/Tatsh", "KO_FI:https://ko-fi.com/tatsh2", "LIBERAPAY:https://liberapay.com/tatsh2", "PATREON:https://patreon.com/tatsh2"]
---

# mpv-netrc

An mpv plugin to read usernames and passwords from `~/.netrc`. This script only supports netrc
entries that are on a single line.

See _[The .netrc file](https://www.gnu.org/software/inetutils/manual/html_node/The-_002enetrc-file.html)_.

## Installation

Place `netrc.lua` in a place where mpv will read for scripts, such as `~/.config/mpv/scripts` on Linux.

## Configuration

If reading from `~/.netrc` (the default), configuration is unnecessary.

To read from an alternative netrc file, do one of the following:

- Create a file named `${CONFIG_DIR}/script-opts/netrc.conf` and set the `netrc-path` key:

  ```plain
  netrc-path=PATH_TO_NETRC
  ```

- Run mpv with `--script-opts=netrc=PATH_TO_NETRC`.

A full path is recommended. Using `~` or `~~` may not work.
