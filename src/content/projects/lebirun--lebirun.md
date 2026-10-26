---
repo: "Lebirun/Lebirun"
name: "Lebirun"
description: "A recreation of Lebirun."
readmeQualityOk: true
url: "https://github.com/Lebirun/Lebirun"
language: "C"
languages: ["C"]
languagePcts: [98]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2025-10-26T15:43:24Z"
lastCommitAt: "2026-10-26T18:06:23Z"
lastReleaseAt: "2026-09-27T18:16:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 79
undervaluedScore: 71
maintainers: ["opuadm"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b2a17f148a52e7c3043bc518ad0c3616d3c3d429c431d69505e6ec535d90284/Lebirun/Lebirun"
fundingLinks: ["GITHUB:https://github.com/Lebirun", "GITHUB:https://github.com/opuadm"]
---

# Lebirun
A hobby operating system that is the successor to Lebirun C, which is a successor to the original Lebirun which is made in C# using the Cosmos library.

### Build
On Debian or Debian-based, install the required host tools with:

```sh
sudo apt install build-essential grub-common grub-pc-bin xorriso squashfs-tools
```

To compile Lebirun, you will also need x86_64-elf-gcc (a cross-compiler for x86_64). To start building the kernel, type in `./build.sh`. If you need to launch QEMU (either before or after building), type in `./qemu.sh`.

### Configuration
The configuration of Lebirun is powered by Lebconfig, an alternative to Linux's Menuconfig made from the ground up. In order to enter the configuration user interface, simply type in "./lebconfig.sh" while being in the cloned Lebirun directory.

Lebconfig will need ncurses. Install it on Debian/Debian-based with:
```sh
sudo apt install libncurses-dev
```

### Cloning

Whenever you clone this repository, please add --recurse-submodules to the git clone command. Otherwise, the operating system will refuse to build.

### License

This project is licensed under the GNU General Public License v3. 

### Donate

If you would like…
