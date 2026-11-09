---
repo: "MMonit/monit"
name: "monit"
description: "Monit is an open source utility for managing and monitoring, processes, programs, files, directories and filesystems on a UNIX system. Monit conducts automatic maintenance and repair and can execute meaningful causal actions in error situations."
readmeQualityOk: true
url: "https://github.com/MMonit/monit"
homepage: "https://mmonit.com/monit/"
language: "C"
languages: ["C"]
languagePcts: [85]
stars: 16
forks: 1
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 28
recentReleases: 0
createdAt: "2026-08-31T13:01:51Z"
lastCommitAt: "2026-11-09T00:53:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 50
maintainers: ["martinp2812", "tildeslash"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c3558ea8acdfb7ae4b1c9d7072f93062c62c61c22ecad7ea768ef99ef451dac/MMonit/monit"
---

#[Monit](https://mmonit.com/monit/) is a free open source utility for managing and monitoring, processes, programs, files, directories and filesystems on a UNIX system. Monit conducts automatic maintenance and repair and can execute meaningful causal actions in error situations.#

---

SYSTEM REQUIREMENTS
===================

__Memory and Disk space__. A minimum of 1 megabytes RAM are required and around 500KB of free disk space. You may need more RAM depending on how many services Monit should monitor.

__ANSI-C Compiler and Build System__. You will need an ANSI-C11 compiler installed to build Monit. The GNU C compiler (GCC) from the Free Software Foundation (FSF) is recommended. In addition, your PATH must contain basic build tools such as make.

GIT
===

To checkout Monit source code, use `git clone https://github.com/MMonit/monit.git`.

DEVELOPMENT ENVIRONMENT
=======================

You need to install some packages to be able to compile Monit.

Debian/Ubuntu:
```
   apt install \
      zlib1g-dev \
  	  libpam0g-dev \
	  libssl-dev \
	  libtool \
	  bison \
	  flex \
	  autoconf \
	  gcc \
	  make
```

Redhat/Centos/Fedora:
```
   yum -y install \
      zlib-devel \…
