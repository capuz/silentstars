---
repo: "GNOME/vte"
name: "vte"
description: "Read-only mirror of https://gitlab.gnome.org/GNOME/vte"
readmeQualityOk: true
url: "https://github.com/GNOME/vte"
homepage: "https://gitlab.gnome.org/GNOME/vte"
language: "C++"
languages: ["C++"]
languagePcts: [88]
stars: 206
forks: 78
openIssues: 0
closedIssues: 0
watchers: 10
contributors: 221
recentReleases: 0
createdAt: "2012-06-03T02:57:48Z"
lastCommitAt: "2026-10-21T19:59:00Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 67
undervaluedScore: 34
maintainers: ["egmontkob", "prosthetiknow", "chergert"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5b6d7b767c6f858a290aa1158e4446c5662e2136dad77f6ee02f3abc098a0aa/GNOME/vte"
---

Virtual TErminal
================

VTE provides a virtual terminal widget for GTK applications.

CI status
---------

Releases
--------

[Releases](https://gitlab.gnome.org/GNOME/vte/-/releases)

Tarballs for newer releases are available from the
[package registry](https://gitlab.gnome.org/GNOME/vte/-/packages)
and new and old release are also available on
[download.gnome.org](https://download.gnome.org/sources/vte/).

Source code
-----------

To get the source code, use
```
$ git clone https://gitlab.gnome.org/GNOME/vte
```

Installation
------------

```
$ git clone https://gitlab.gnome.org/GNOME/vte  # Get the source code of VTE
$ cd vte                                        # Change to the toplevel directory
$ meson _build                                  # Run the configure script
$ ninja -C _build                               # Build VTE
[ Optional ]
$ ninja -C _build install                       # Install VTE to default `/usr/local`
```

* By default, VTE will install under `/usr/local`. You can customize the
prefix directory by `--prefix` option, e.g. If you want to install VTE under
`~/foobar`, you should run `meson _build --prefix=~/foobar`. If you already
run the…
