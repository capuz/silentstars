---
repo: "bredelings/BAli-Phy"
name: "BAli-Phy"
description: "Bayesian co-estimation of phylogenies and multiple alignments via MCMC"
readmeQualityOk: true
url: "https://github.com/bredelings/BAli-Phy"
homepage: "http://www.bali-phy.org/"
language: "C++"
languages: ["C++"]
languagePcts: [84]
stars: 50
forks: 19
openIssues: 2
closedIssues: 16
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2009-11-05T19:14:26Z"
lastCommitAt: "2026-08-14T14:46:14Z"
lastReleaseAt: "2022-08-19T01:50:58Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 59
maintainers: ["bredelings"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6929dcb36ac7a236b798492561f5914cccbc946c78f6faa84092e16654050f8/bredelings/BAli-Phy"
discussionCount: 1
---

Install
-------

If you just want to install bali-phy, please visit the [release page](http://www.bali-phy.org/download.php).  If you want to compile BAli-phy from source, the quick-start instructions are below.

Compiling
---------

You will need a C++ compiler that understands C++23.
 * gcc 13 (or higher) works
 * clang 18 (or higher) works
 * XCode 15 (or higher) works

Install Prerequisites
---------------------
On Ubuntu 24.04 (or higher), or on Debian testing, you can use apt-get:
```bash
sudo apt-get install g++ libcairo2-dev meson libboost-all-dev libcli11-dev pandoc
```

On Mac (or Linux, actually) you can use homebrew:
```bash
brew install cairo meson boost cli11
```

On miniconda, you can use:
```
conda create -n devel -c conda-forge --strict-channel-priority
conda activate devel
conda install meson gxx boost-cpp cmake pkg-config cairo
export BOOST_ROOT=$CONDA_PREFIX
```

### Meson version

After installing prerequisites above, check that the meson version is at least 1.1.

    meson --version

If your version of meson is less than 1.1, you need to install the most recent version of meson into a python virtual environment:

    python3 -m venv meson_venv
    source…
