---
repo: "ZhongRuoyu/gcc-ports"
name: "gcc-ports"
description: "GCC ported to all recent Debian and Ubuntu releases."
readmeQualityOk: true
url: "https://github.com/ZhongRuoyu/gcc-ports"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [100]
topics: ["backport", "docker-image", "gcc"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-09-18T03:25:25Z"
lastCommitAt: "2026-09-28T10:06:38Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 85
undervaluedScore: 48
maintainers: ["ZhongRuoyu", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7a4f906439b9857db9a7625a32ac17684732561602127b1ee814faedc5fcb45/ZhongRuoyu/gcc-ports"
fundingLinks: ["GITHUB:https://github.com/ZhongRuoyu"]
---

# GCC Ports

This project ports [GCC](https://gcc.gnu.org/), the GNU Compiler Collection, to
all recent Debian and Ubuntu releases. This enables executables that require
newer toolchains to be built on specific systems for distribution purposes.

## Images

The ports are available as Docker images at
[Docker Hub](https://hub.docker.com/r/zhongruoyu/gcc-ports) and
[GitHub Container Registry](https://ghcr.io/zhongruoyu/gcc-ports).
They are modified from, and remain compatible with, Docker's
[official images](https://github.com/docker-library/gcc) (under
[GPL-3.0 License](https://github.com/docker-library/gcc/blob/master/LICENSE)).
They also come with the latest release of
[GNU Binutils](https://www.gnu.org/software/binutils/).

The image tags are in the format of `version-codename`, where `version` is the
GCC release version, and `codename` is the codename of the Debian/Ubuntu
release. For example, tag `12.2.0-jammy` refers to the image with GCC 12.2.0 on
Ubuntu 22.04 (Jammy Jellyfish).

The following GCC releases are available:

| GCC release | versions as appeared in tags |
| ----------- | ---------------------------- |
| GCC 16.2.0  | `16`, `16.2`, `16.2.0`       |
| GCC 15.3.0…
