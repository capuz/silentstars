---
repo: "cern-eos/eos"
name: "eos"
description: "EOS Storage"
readmeQualityOk: true
url: "https://github.com/cern-eos/eos"
language: "C++"
languages: ["C++"]
languagePcts: [84]
stars: 252
forks: 48
openIssues: 5
closedIssues: 15
watchers: 21
contributors: 58
recentReleases: 0
createdAt: "2016-04-14T13:38:11Z"
lastCommitAt: "2026-11-17T14:23:17Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 38
maintainers: ["esindril", "tavisit", "ccaffy"]
openGraphImageUrl: "https://opengraph.githubassets.com/8591633a0d1e6fea57c267632d960ae4ab8d8d25875f1705dd4148e2345ed2e0/cern-eos/eos"
discussionCount: 3
---

# EOS

## Description

**EOS** is a software solution that aims to provide fast and reliable multi-PB
disk-only storage technology for both LHC and non-LHC use-cases at CERN. The
core of the implementation is the XRootD framework which provides feature-rich
remote access protocol. The storage system is running on commodity hardware
with disks in JBOD configuration. It is written mostly in C/C++, with some of
the extra modules in Python. Files can be accessed via native **XRootD**
protocol, a **POSIX-like FUSE** client or **HTTP(S) & WebDav** protocol.

## Documentation

The most up-to-date documentation can be found at:
[eos-docs.web.cern.ch/eos-docs](http://eos-docs.web.cern.ch/eos-docs/)

You will need to install Sphinx, Doxygen and the `solar_theme` (for Sphinx) in order to
generate the docs. For up-to-date information on getting Sphinx refer to the
[Sphinx docs](https://www.sphinx-doc.org/en/master/usage/installation.html).

```bash
## RHEL instructions
# Please choose the relevant python version based on the distro
sudo yum install python-sphinx doxygen
pip install solar_theme

## Ubuntu 20.04 instructions
sudo apt install python3-sphinx doxygen
pip3 install solar_theme
```…
