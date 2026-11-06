---
repo: "jsnjack/kazy-go"
name: "kazy-go"
description: "Highlights, filters and extracts string patterns from STDIN"
readmeQualityOk: true
url: "https://github.com/jsnjack/kazy-go"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["golang", "go", "stdin", "stdout", "colorization"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2017-06-02T21:27:35Z"
lastCommitAt: "2026-11-06T13:08:39Z"
lastReleaseAt: "2026-07-21T12:55:38Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 55
undervaluedScore: 32
maintainers: ["jsnjack"]
openGraphImageUrl: "https://opengraph.githubassets.com/b23c9c495c9f44ca38b065ea0ccd17b417b50233f6ffe11cc190ace22c8bdd00/jsnjack/kazy-go"
---

kažy-go
====

### What is it?
kažy is an application that highlights, filters and extracts string patterns from STDIN

### How to use?
```
$ kazy -h
Highlights, filters and extracts string patterns from STDIN

Usage:
  kazy [<pattern>...] [flags]

Flags:
  -b, --buffer int            buffer size in KB (default 64)
  -e, --exclude stringArray   exclude from output lines which match provided patterns
  -x, --extract count         extract instead of highlighting. Can be provided multiple times to control which matched string is extracted
  -h, --help                  help for kazy
  -i, --include stringArray   only include lines which match provided patterns
  -l, --limit int             limit the length of the line, characters
  -r, --regexp                use RegExp patterns instead of string patterns
      --version               print version and exit

```
kažy is extremely useful when piping a command:
```bash
./kazy -h | ./kazy include exclude lines "match patterns" -e version
```

### How to install

```
grm install jsnjack/kazy-go
```
