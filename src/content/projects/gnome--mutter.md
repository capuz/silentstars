---
repo: "GNOME/mutter"
name: "mutter"
description: "Read-only mirror of https://gitlab.gnome.org/GNOME/mutter"
url: "https://github.com/GNOME/mutter"
homepage: "https://gitlab.gnome.org/GNOME/mutter"
language: "C"
languages: ["C"]
languagePcts: [98]
stars: 242
forks: 96
openIssues: 0
closedIssues: 0
watchers: 19
contributors: 621
recentReleases: 0
createdAt: "2012-06-02T15:13:45Z"
lastCommitAt: "2026-06-30T21:54:08Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 79
undervaluedScore: 40
maintainers: ["jadahl", "bilelmoussaoui", "garnacho"]
openGraphImageUrl: "https://opengraph.githubassets.com/df92f60c1754e5b536152115d6f36206fdaa168f2cc0d38223106d37eba4e78f/GNOME/mutter"
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
