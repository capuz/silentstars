---
repo: "GNOME/simple-scan"
name: "simple-scan"
description: "Read-only mirror of https://gitlab.gnome.org/GNOME/simple-scan"
readmeQualityOk: true
url: "https://github.com/GNOME/simple-scan"
homepage: "https://gitlab.gnome.org/GNOME/simple-scan"
language: "Vala"
languages: ["Vala"]
languagePcts: [97]
stars: 74
forks: 15
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 188
recentReleases: 0
createdAt: "2017-04-27T04:19:54Z"
lastCommitAt: "2026-10-26T09:18:08Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 73
undervaluedScore: 48
maintainers: ["kmaraas", "gaupe75", "DeepKling"]
openGraphImageUrl: "https://opengraph.githubassets.com/9fbf3b3b0dd378363411c2d3d746109d50cb69aab305705dcc10afbc8e0e1036/GNOME/simple-scan"
---

# Introduction

*Document Scanner* is a document scanning application for [GNOME](https://www.gnome.org/)
It allows you to capture images using [image scanners](https://en.wikipedia.org/wiki/Image_scanner)
(e.g. flatbed scanners) that have suitable [SANE drivers](http://sane-project.org/) installed.

# Building the flatpak with GNOME Builder

It is recommended to use the development flatpak for developing this application.
That way you won't have to download all dependencies yourself and it'll be consistent between all distros.

1. Download [GNOME Builder](https://flathub.org/apps/details/org.gnome.Builder)
2. Click the `Clone Repository` button in Builder and use https://gitlab.gnome.org/GNOME/simple-scan.git as the URL.
3. Click the Run button in the headerbar

Note that this flatpak requires access to all devices (--device=all), and so isn't made for general use.
For this reason and until a more suitable solution is found to interact with a host `saned`, please don't
try to publish it on Flathub.

# Building manually from source

Install the dependencies

For Ubuntu/Debian:

```
sudo apt install -y meson valac gcc gettext itstool libfribidi-dev libgirepository1.0-dev…
