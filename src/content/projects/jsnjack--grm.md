---
repo: "jsnjack/grm"
name: "grm"
description: "An experimental package manager for GitHub Releases"
readmeQualityOk: true
url: "https://github.com/jsnjack/grm"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["github", "release-automation", "releases", "package-manager", "package-management", "hacktoberfest"]
stars: 22
forks: 4
openIssues: 0
closedIssues: 14
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2020-03-30T07:49:23Z"
lastCommitAt: "2026-11-06T13:19:23Z"
lastReleaseAt: "2020-04-18T18:27:39Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 48
maintainers: ["jsnjack", "patrick-5546", "tonysurfly"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d4b5d6396ab95a776dfa802c1b68e905b3e99dc2219a8417f1c11ca873a89b0/jsnjack/grm"
---

grm
====

### What is it?
`grm` is an experimental package manager for GitHub Releases. It is probably only good for installing packages which are distributed as binaries (for example the ones written in Go, Rust). The following popular packages can be installed with `grm`:
 - mozilla/geckodriver
 - gohugoio/hugo
 - go-acme/lego
 - zyedidia/micro
 - ...

`grm` installs selected release binaries to `/usr/local/bin/` by default and installs RPM/DEB assets through the system package manager. One repository can provide several binaries or a mix of binaries and system packages.

### How to use it?
```bash
$ ./grm
A package manager for GitHub releases

Usage:
  grm [command]

Available Commands:
  aliases     Print table of known package aliases
  help        Help about any command
  info        Show information about a package
  install     Install a package from GitHub releases
  list        List installed packages
  lock        Lock a package
  release     Create a release in GitHub
  remove      Remove a package
  set         Modify settings
  settings    Print settings
  unlock      Unlock a package
  update      Update installed packages
  version     Print version

Flags:
  -c,…
