---
repo: "genn-team/genn"
name: "genn"
description: "GeNN is a GPU-enhanced Neuronal Network simulation environment based on code generation for Nvidia CUDA and AMD HIP."
url: "https://github.com/genn-team/genn"
homepage: "http://genn-team.github.io/"
language: "C++"
languages: ["C++"]
languagePcts: [77]
topics: ["computational-neuroscience", "nvidia-cuda", "spiking-neural-networks", "simulation", "hacktoberfest"]
stars: 275
forks: 76
openIssues: 41
closedIssues: 264
watchers: 17
contributors: 36
recentReleases: 0
createdAt: "2014-09-30T10:22:50Z"
lastCommitAt: "2026-07-01T07:05:30Z"
lastReleaseAt: "2018-11-06T10:46:05Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "community_hub"]
healthScore: 90
undervaluedScore: 29
maintainers: ["neworderofjamie", "Atharv-K-979", "nishantraghuvanshi"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd8510cf315b9884772fb732639460d04e99e41d54783ce53ef758c56253c2ca/genn-team/genn"
discussionCount: 39
---

# GPU-enhanced Neuronal Networks (GeNN)

GeNN is a GPU-enhanced Neuronal Network simulation environment based on code generation for NVIDIA CUDA and AMD HIP.

## Installation

### Pre-installation
#### C/C++ Compiler and system dependencies
Install the C++ compiler on the machine, if not already present.

##### Windows native
- Download Visual Studio 2019 or above. The Microsoft Visual Studio Community Edition can be downloaded from https://www.visualstudio.com/en-us/downloads/download-visual-studio-vs.aspx.
- Select the 'Desktop development with C++' configuration during the installation process.

##### Linux or Windows with WSL 2
-  On Linux, the GNU Compiler Collection (GCC) 7.5 or above is required. This can be obtained from your Linux distribution repository, for example on Ubuntu by running ``sudo apt-get install g++``
-  Install the development version of libffi. For example, on Ubuntu you can do this by running ``sudo apt-get install libffi-dev``.

#### CUDA (NVIDIA GPU only)
-  If your machine has an NVIDIA GPU and you haven't installed CUDA already, obtain a fresh installation of the NVIDIA CUDA toolkit from
    https://developer.nvidia.com/cuda-downloads
- Be sure to…
