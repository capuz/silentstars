---
repo: "xyasharx/Dendro"
name: "Dendro"
description: "🌳 Graphical Package Manager & Dependency Tree Explorer for Fedora Linux."
readmeQualityOk: true
url: "https://github.com/xyasharx/Dendro"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["appimage", "copr", "dependency-graph", "dependency-tree", "dnf", "dnf5", "fedora", "fedora-linux", "gui", "linux"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-08-19T20:24:55Z"
lastCommitAt: "2026-11-20T12:18:53Z"
lastReleaseAt: "2026-09-23T14:22:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 64
maintainers: ["xyasharx"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e156d49805e2c16d72ef2743c7ab5687912c59eae72649e3b3f1272b03ddc7d/xyasharx/Dendro"
---

# Dendro

Native graphical package manager and dependency tree explorer for Fedora Linux.

Dendro is a package manager for Fedora, built for people who want to see what
they are changing before it happens. Browse everything installed on the system,
follow a dependency down to the library it actually needs, and review the
resolved transaction plan, including its download and disk-size impact, before
anything is applied.

It reads local RPM and DNF5 metadata for inspection, and performs package
changes through Fedora's own DNF5 system daemon on `org.rpm.dnf.v0`, so the
daemon keeps ownership of RPM locking and Polkit authorization. Dendro never
builds a privileged `dnf` command line to make a transaction happen.

Flatpak apps and runtimes are managed in a separate window and never mixed into
the RPM tree. See [Flatpak](#flatpak-apps-and-runtimes).

---

## Installation

Dendro needs Fedora 43 or newer with `dnf5daemon-server` 5.2.7 or newer.

### COPR repository (recommended)

```bash
sudo dnf copr enable xyasharx/dendro -y
sudo dnf install dendro -y
dendro
```
