---
repo: "berquist/boys"
name: "boys"
description: "Multiple algorithms for calculating the Boys function"
readmeQualityOk: true
url: "https://github.com/berquist/boys"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2019-06-17T03:39:13Z"
lastCommitAt: "2026-10-29T05:50:26Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 75
maintainers: ["renovate[bot]", "berquist"]
openGraphImageUrl: "https://opengraph.githubassets.com/69db79cb7c2dcd179c8be92a58fe8d03789ab2461d5898756be45eb7f9909faa/berquist/boys"
---

# boys

A Rust library for calculation of the Boys function

via a number of methods:

- An "exact" algorithm originally from [Radovan Bast](https://github.com/bast/obara-saika/blob/52ff0fa4d470eeb7a41d932078b2e4d9a54d05e5/obara_saika.py#L371).
- A non-clean-room reimplementation of [Michael Böhme's algorithm](https://github.com/micb25/libboys).

## System dependencies

The [GNU Scientific Library](https://www.gnu.org/software/gsl/) (GSL) is used via the [`rgsl`](https://crates.io/crates/GSL) crate to provide the gamma and incomplete gamma functions for the exact implementation and the error function for Michael Böhme's algorithm.

| OS/distro              | install command                    |
|------------------------|------------------------------------|
| Debian/Ubuntu          | `sudo apt-get install libgsl0-dev` |
| Arch Linux             | `sudo pacman -S gsl`               |
| macOS (using Homebrew) | `brew install gsl`                 |

## Literature

[S. F. Boys, *Proc R. Soc. Am.* **1950**, *200*, 542.](https://doi.org/10.1098/rspa.1950.0036)
