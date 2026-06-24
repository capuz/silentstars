---
repo: "BioArchLinux/Packages"
name: "Packages"
description: "Aim to be the bioinformatics repository with more and newer packages https://doi.org/10.1093/bioinformatics/btaf106"
url: "https://github.com/BioArchLinux/Packages"
homepage: "https://bioarchlinux.org/packages"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [78, 22]
topics: ["repository", "archlinux", "bioinformatics", "packages", "linux", "linux-distribution"]
stars: 102
forks: 18
openIssues: 4
closedIssues: 128
watchers: 8
contributors: 24
recentReleases: 0
createdAt: "2021-08-10T14:16:30Z"
lastCommitAt: "2026-06-24T00:23:25Z"
status: "thriving"
tags: ["funded"]
healthScore: 99
undervaluedScore: 50
maintainers: ["BioArchLinuxBot", "bshor", "sukanka"]
openGraphImageUrl: "https://opengraph.githubassets.com/2dff3dc3571a10bf3b8b98904d8787db23950b28fb73a70f414a6de1ceb054d7/BioArchLinux/Packages"
fundingLinks: ["GITHUB:https://github.com/starsareintherose"]
discussionCount: 2
---

<h3 align="center">
</p>
BioArchLinux</h3>

<h3 align="center">
</h3>

## Special sponsor

</div>

## Usage

### ArchLinux and ArchLinux based distributions

Add the following content to the `/etc/pacman.conf`
```
[bioarchlinux]
Server = https://repo.bioarchlinux.org/$arch
```
You can replace the `https://repo.bioarchlinux.org/$arch` with any mirror in [mirrorlist](https://raw.githubusercontent.com/BioArchLinux/mirror/main/mirrorlist.bio)

install GPG keyring to use bioarchlinux
```
# pacman-key --recv-keys B1F96021DB62254D
# pacman-key --finger B1F96021DB62254D
# pacman-key --lsign-key B1F96021DB62254D
```

update the database
```
# pacman -Syu
```

install any package
```
# pacman -S foo
```

### Windows

You can use [WSL](https://docs.microsoft.com/en-us/windows/wsl/install) to use our repo, see [here](https://github.com/BioArchLinux/wsl)

### Docker 
You can use [docker](https://hub.docker.com/r/bioarchlinux/bioarchlinux) to use our repo, see [here](https://github.com/BioArchLinux/docker)

### ISO
You can use ISO image via virtual machine software to use our repo, see [here](https://github.com/BioArchLinux/iso)

### non-root Linux users
You can use…
