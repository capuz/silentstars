---
repo: "pemsley/coot"
name: "coot"
description: "Software for macromolecular model-building"
readmeQualityOk: true
url: "https://github.com/pemsley/coot"
homepage: "http://www2.mrc-lmb.cam.ac.uk/personal/pemsley/coot/"
language: "C++"
languages: ["C++"]
languagePcts: [78]
topics: ["cryo-em", "cryoem", "crystallography", "molecular-biology", "molecular-docking", "molecular-modeling", "molecular-visualization"]
stars: 168
forks: 61
openIssues: 172
closedIssues: 136
watchers: 13
contributors: 15
recentReleases: 0
createdAt: "2015-08-24T13:03:24Z"
lastCommitAt: "2026-08-28T15:32:14Z"
lastReleaseAt: "2026-04-01T00:44:56Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 87
undervaluedScore: 42
maintainers: ["pemsley", "Dialpuri", "hgonomeg"]
openGraphImageUrl: "https://opengraph.githubassets.com/8832d9d5814044b38e443321226ed08fe3638bdf37082f3bfb709c49ab77e9e5/pemsley/coot"
---

# *Coot*

*Coot* is a toolkit for Macromolecular Crystallography and
model-building.  *Coot* uses GTK widgets
mmdb, clipper, and OpenGL to provide interactive tools for model-building,
refinement and validation.

## Installation

### APT (Debian)

Install to run using commands below.

```shell
# Add sid (Debian's unstable package repo)
echo "deb http://deb.debian.org/debian unstable main" | sudo tee -a /etc/apt/sources.list
sudo apt update
sudo apt install coot
coot
```

### Flatpak (Linux)

  </a>
</div>

After [installing Flatpak and registering Flathub](https://flatpak.org/setup/), run the commands below.

```shell
flatpak install flathub io.github.pemsley.coot

# Simply click Coot's icon in the menu, or
flatpak run io.github.pemsley.coot
```

To install the beta build (more recent but possibly less stable), [register flahub-beta repository](https://github.com/flathub/io.github.pemsley.coot?tab=readme-ov-file#beta-build) and then run the commands below.

```shell
flatpak install flathub-beta io.github.pemsley.coot

# Simply click Coot's icon in the menu, or
flatpak run io.github.pemsley.coot//beta
```

You can see the flatpak manifest…
