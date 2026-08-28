---
repo: "GNOME/nautilus"
name: "nautilus"
description: "Read-only mirror of https://gitlab.gnome.org/GNOME/nautilus"
readmeQualityOk: true
url: "https://github.com/GNOME/nautilus"
homepage: "https://gitlab.gnome.org/GNOME/nautilus"
language: "C"
languages: ["C"]
languagePcts: [96]
stars: 414
forks: 131
openIssues: 0
closedIssues: 0
watchers: 19
contributors: 617
recentReleases: 0
createdAt: "2012-06-02T23:22:48Z"
lastCommitAt: "2026-08-28T12:23:26Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 80
undervaluedScore: 36
maintainers: ["AbuShawarib", "Quent-in", "yurchor"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e6b83b56fd3ab0798e7e8c41507560d24e2440cefa384f508b28f6a49e0e5d5/GNOME/nautilus"
---

# nautilus

This is the project of the [Files](https://apps.gnome.org/Nautilus/) app, a file browser for
GNOME, internally known by its historical name `nautilus`.

## Supported version
Only the latest version of Files as provided upstream is supported. Try out the [Flatpak nightly](https://welcome.gnome.org/en/app/Nautilus/#installing-a-nightly-build) installation before filling issues to ensure the installation is reproducible and doesn't have downstream changes on it. In case you cannot reproduce in the nightly installation, don't hesitate to file an issue in your distribution. This is to ensure the issue is well triaged and reaches the proper people.

## Runtime dependencies
- [Bubblewrap](https://github.com/containers/bubblewrap) installed. Used for security reasons.
- [LocalSearch](https://gitlab.gnome.org/GNOME/localsearch) properly set up and with all features enabled. Used for fast search and metadata extraction, starred files and batch renaming.
- [xdg-user-dirs-gtk](https://gitlab.gnome.org/GNOME/xdg-user-dirs-gtk) installed.  Used to create the default bookmarks and update localization.

## Discourse

For more informal discussion we use [GNOME…
