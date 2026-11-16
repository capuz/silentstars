---
repo: "AngelMunoz/DevNull.Client"
name: "DevNull.Client"
description: "A client and library for https://dev-null.sh"
readmeQualityOk: true
url: "https://github.com/AngelMunoz/DevNull.Client"
homepage: "https://angelmunoz.github.io/DevNull.Client/"
language: "F#"
languages: ["F#"]
languagePcts: [95]
topics: ["dev", "devnull", "null"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 29
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-20T05:19:05Z"
lastCommitAt: "2026-11-16T04:10:29Z"
lastReleaseAt: "2026-10-31T20:30:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 67
maintainers: ["AngelMunoz"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdeb29d4530ff95c7b058dd0c1fc0d69b7e6e8868b91025e4e54629015402f75/AngelMunoz/DevNull.Client"
---

# DevNull.Client

An unofficial desktop client for [dev-null.sh](https://dev-null.sh),
built with F# and Avalonia.

**We are not affiliated with or endorsed by /dev/null in any way.**
This is an independent project exploring their public API, with the
goal of providing a simple client for desktop platforms. The service
and its API can change at any time; expect breakage.

## Installing on Windows

With [Scoop](https://scoop.sh):

    scoop install https://github.com/AngelMunoz/DevNull.Client/releases/latest/download/devnull-client.json

That URL always serves the newest stable release's manifest. Scoop checks
the SHA-256 it carries before installing, and `scoop update` picks up each
new release from the same URL. Pre-release builds never ride the channel;
install one by its exact release URL instead. Once installed, `devnull`
starts the app from any terminal (from the next release on).

## Installing on Linux

With Flatpak:

    flatpak install --user --from https://angelmunoz.github.io/DevNull.Client/me.tunaxor.devnull.unoffclient.flatpakref

That address installs the newest stable release and registers the
project's own channel; `flatpak update --user` picks up every new
release…
