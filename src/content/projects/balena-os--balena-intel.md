---
repo: "balena-os/balena-intel"
name: "balena-intel"
description: "Balena support for Intel boards"
readmeQualityOk: true
url: "https://github.com/balena-os/balena-intel"
homepage: "https://www.balena.io/os/"
language: "BitBake"
languages: ["BitBake"]
languagePcts: [80]
stars: 35
forks: 19
openIssues: 37
closedIssues: 85
watchers: 6
contributors: 31
recentReleases: 0
createdAt: "2016-01-25T11:08:14Z"
lastCommitAt: "2026-11-03T10:51:51Z"
lastReleaseAt: "2024-03-20T08:18:54Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 61
maintainers: ["balena-renovate[bot]", "flowzone-app[bot]", "guille-vega"]
openGraphImageUrl: "https://opengraph.githubassets.com/733744f39a5221654564eada264c74c42e9b5f520491399dec8b65fe8c2804af/balena-os/balena-intel"
---

## Clone / Initialize this repository

There are two ways of initializing this repository:
* Clone this repository with "git clone --recursive".

or

* Run "git clone" and then "git submodule update --init --recursive". This will
bring in all the needed dependencies.

## Build information

balenaOS currently only builds with cgroups v1. If your distribution defaults
to using cgroups v2, please boot with the following kernel command line
argument:
`systemd.unified_cgroup_hierarchy=0`

### Containerized build

* If you have a working docker installation, you can build in a containerized
  environment as follows:
  `./balena-yocto-scripts/build/balena-build.sh -d <device type> -s <shared directory>`

  Where:
    * Device type is one of the supported devices with a valid `<device type name>.coffee` description file.
    * Shared directory is the absolute path to the build folder

### Native build

To build all supported device types natively, please make sure your Linux
distribution is [supported](https://docs.yoctoproject.org/singleindex.html#supported-linux-distributions) by Yocto Project.

Additional host tools need to be installed for native builds to work.

* Run the barys build…
