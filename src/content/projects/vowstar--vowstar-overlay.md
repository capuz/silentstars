---
repo: "vowstar/vowstar-overlay"
name: "vowstar-overlay"
description: "Ebuilds from vowstar's git"
readmeQualityOk: true
url: "https://github.com/vowstar/vowstar-overlay"
language: "Shell"
languages: ["Shell"]
languagePcts: [96]
stars: 23
forks: 5
openIssues: 0
closedIssues: 18
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2019-10-23T09:32:20Z"
lastCommitAt: "2026-10-03T09:21:44Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 64
maintainers: ["vowstar"]
openGraphImageUrl: "https://opengraph.githubassets.com/baa02991b4f3913756a394ee203b7df23742c8fa0ea214b4b69cb4784e4ea79d/vowstar/vowstar-overlay"
---

# The vowstar-overlay

Shared ebuild files.

## How to add using eselect/repository

[https://wiki.gentoo.org/wiki/Eselect/Repository](https://wiki.gentoo.org/wiki/Eselect/Repository)

```bash
# install app-eselect/eselect-repository
emerge --ask app-eselect/eselect-repository
mkdir -p /etc/portage/repos.conf
# enable vowstar overlay
eselect repository enable vowstar
# sync vowstar overlay
emaint sync -r vowstar
```

## How to use nvidia-docker2 under gentoo

I fixed the nvidia-container-toolkit (aka. nvidia-docker2 ) issue under gentoo and got this working.

Due to historical reasons, the software supported by nvidia's docker has gone through a very messy period. About The difference between libnvidia-container, nvidia-docker2, nvidia-container-runtime, nvidia-container-toolkit, [here is a good introduction](https://github.com/NVIDIA/nvidia-docker/issues/1268).

Here only introduces how to use the new method in the Docker version after 19.03:

```bash
docker run --gpus all nvidia/cuda:10.0-base nvidia-smi
```

### cgroup v2

By default ``libnvidia-container`` and ``nvidia-container-toolkit`` equal or above version ``1.8.0`` support cgroup v2.

Systemd v247.2-2 introduced cgroup…
