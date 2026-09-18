---
repo: "singularityos-lab/singularity-desktop"
name: "singularity-desktop"
description: "The Singularity Desktop Environment (meta repository)."
readmeQualityOk: true
url: "https://github.com/singularityos-lab/singularity-desktop"
language: "Shell"
languages: ["Shell", "C"]
languagePcts: [57, 25]
stars: 95
forks: 4
openIssues: 12
closedIssues: 231
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-06-02T17:59:19Z"
lastCommitAt: "2026-09-18T08:28:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 32
maintainers: ["mirkobrombin", "github-actions[bot]", "perlowja"]
openGraphImageUrl: "https://opengraph.githubassets.com/37212a27473b5af2c57ccf63db55fa523090eca84b95803522e0980fd588f655/singularityos-lab/singularity-desktop"
---

# Singularity Desktop Environment

A Wayland desktop environment built on GTK4 and the labwc compositor. It
provides the shell (panel, dock, overview, workspaces, notifications, settings,
spotlight, lock screen and greeter) and a first-party set of applications, all
sharing the [libsingularity](https://github.com/singularityos-lab/singularity-desktop/blob/HEAD/subprojects/libsingularity) toolkit.

## Requirements

- [Meson](https://mesonbuild.com/) >= 0.59
- [Vala](https://vala.dev/) compiler
- GTK4 >= 4.6 and gtk4-layer-shell
- libdecor (runtime, client-side window decorations for GTK and Qt apps)
- Qt 6 xdgdesktopportal platform theme plugin (runtime, so Qt apps follow the
  dark/light and accent settings via the XDG settings portal). Fedora:
  `qt6-qtbase-gui`; Arch: `qt6-base`; Debian/Ubuntu:
  `qt6-xdgdesktopportal-platformtheme`
- `appmenu-gtk-module` (runtime, optional) so third-party GTK apps publish their
  menu bar to the panel global menu. Debian/Ubuntu `appmenu-gtk3-module` (plus
  `appmenu-gtk2-module` for GTK 2), Arch `appmenu-gtk-module` (AUR); on Fedora it
  is only in COPR. First-party Singularity apps do not need it. Firefox exports
  its menu over X11 only, so…
