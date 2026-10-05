---
repo: "xfce-mirror/libxfce4ui"
name: "libxfce4ui"
description: "Mirror repository, PRs are not watched, please use Xfce's GitLab"
readmeQualityOk: true
url: "https://github.com/xfce-mirror/libxfce4ui"
homepage: "https://gitlab.xfce.org/xfce/libxfce4ui"
language: "C"
languages: ["C"]
languagePcts: [98]
stars: 14
forks: 12
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 171
recentReleases: 0
createdAt: "2014-12-13T17:30:19Z"
lastCommitAt: "2026-10-05T10:46:20Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 76
undervaluedScore: 64
maintainers: ["Tamaranch", "kelnos", "alexxcons"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8a851f81cebfeb7c54f88e7adca724e49faae79b74e150db913feeff4267971/xfce-mirror/libxfce4ui"
---

# libxfce4ui

The libxfce4ui library is used to share commonly used Xfce widgets among the Xfce applications.

----

### Homepage

[Libxfce4ui documentation](https://docs.xfce.org/xfce/libxfce4ui/start)

### Changelog

See [NEWS](https://gitlab.xfce.org/xfce/libxfce4ui/-/blob/master/NEWS) for details on changes and fixes made in the current release.

### Source Code Repository

[Libxfce4ui source code](https://gitlab.xfce.org/xfce/libxfce4ui)

### Download a Release Tarball

[Libxfce4ui archive](https://archive.xfce.org/src/xfce/libxfce4ui)
    or
[Libxfce4ui tags](https://gitlab.xfce.org/xfce/libxfce4ui/-/tags)

### Installation

From source: 

    % cd libxfce4ui
    % meson setup build
    % meson compile -C build
    % meson install -C build

From release tarball:

    % tar xf libxfce4ui-<version>.tar.xz
    % cd libxfce4ui-<version>
    % meson setup build
    % meson compile -C build
    % meson install -C build

### Uninstallation

    % ninja uninstall -C build

### Reporting Bugs

Visit the [reporting bugs](https://docs.xfce.org/xfce/libxfce4ui/bugs) page to view currently open bug reports and instructions on reporting new bugs or submitting bugfixes.
