---
repo: "GNOME/mutter"
name: "mutter"
description: "Read-only mirror of https://gitlab.gnome.org/GNOME/mutter"
readmeQualityOk: true
url: "https://github.com/GNOME/mutter"
homepage: "https://gitlab.gnome.org/GNOME/mutter"
language: "C"
languages: ["C"]
languagePcts: [98]
stars: 243
forks: 100
openIssues: 0
closedIssues: 0
watchers: 19
contributors: 626
recentReleases: 0
createdAt: "2012-06-02T15:13:45Z"
lastCommitAt: "2026-08-03T06:43:47Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 80
undervaluedScore: 40
maintainers: ["swick", "bilelmoussaoui", "jadahl"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc2000ba2a23a0fff84c56e16ac7865232cdcfd630b00574d24ab79508925db3/GNOME/mutter"
---

# Mutter

Mutter is a Wayland display server.

Mutter runs on top of KMS and libinput. It
implements the compositor side of the Wayland core protocol as well as various
protocol extensions. It also has functionality related to running X11
applications using Xwayland.

It contains functionality related to, among other things, window management,
window compositing, focus tracking, workspace management, keybindings and
monitor configuration.

Internally it uses a fork of Cogl, a hardware acceleration abstraction library
used to simplify usage of OpenGL pipelines, as well as a fork of Clutter, a
scene graph and user interface toolkit.

Mutter is used by, for example, GNOME Shell, the GNOME core user interface, and
by  Gala, elementary OS's window manager. It can also be run standalone, using
the  command "mutter", but just running plain mutter is only intended for
debugging purposes.

## Contributing

To contribute, open merge requests at https://gitlab.gnome.org/GNOME/mutter.

It can be useful to first look at the
[GNOME Handbook](https://handbook.gnome.org/development.html) and the
documentation and API references below first.

## Documentation

- [Coding style and…
