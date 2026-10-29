---
repo: "flatpark/flatpark"
name: "flatpark"
description: "Yet another Flatpak hub."
readmeQualityOk: true
url: "https://github.com/flatpark/flatpark"
homepage: "https://flatpark.org"
language: "Shell"
languages: ["Shell"]
languagePcts: [81]
topics: ["flatpak", "flatpak-apps", "flatpak-repository"]
stars: 94
forks: 36
openIssues: 19
closedIssues: 87
watchers: 1
contributors: 29
recentReleases: 0
createdAt: "2026-06-20T04:56:47Z"
lastCommitAt: "2026-10-29T05:50:12Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 37
maintainers: ["jing2uo", "github-actions[bot]", "rhgKc2yp"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcc6f004df404a90943ccd692692947e0b0387948f92b75f1f8fe7f32b14a2f0/flatpark/flatpark"
fundingLinks: ["GITHUB:https://github.com/jing2uo"]
---

# Yet another Flatpak hub

FlatPark is a community Flatpak remote for Linux desktop apps that ship an
official download: a `.deb`, a tarball or an AppImage at a stable release URL.
Every app is the developer's own release, fetched from their servers at install
time and run in a sandbox. FlatPark doesn't build apps from source.

The goal is a remote that runs efficiently and is easy to take part in. Speed
matters most: apps often land minutes after an upstream release, and a fix
reaches users just as fast. Packaging, review, publishing and upgrades are
built to be driven by AI agents. See [About FlatPark](https://github.com/flatpark/flatpark/blob/HEAD/docs/project/about.md) and
the [principles](https://github.com/flatpark/flatpark/blob/HEAD/docs/project/principles.md).

## Install

```sh
flatpak --user remote-add --if-not-exists flatpark https://dl.flatpark.org/flatpark.flatpakrepo
flatpak --user install flatpark <app-id>
```

`--user` installs into your home (no admin); drop it from both commands for a
system-wide install. Browse the catalog at <https://flatpark.org>.

## For developers

- **AI is welcome.** An app is judged by what it does and how it's packaged,
  not by whether…
