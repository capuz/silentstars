---
repo: "zopencommunity/perlport"
name: "perlport"
description: "Perl programming language"
readmeQualityOk: true
url: "https://github.com/zopencommunity/perlport"
language: "Perl"
languages: ["Perl", "C"]
languagePcts: [47, 27]
stars: 6
forks: 4
openIssues: 10
closedIssues: 22
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2021-11-12T22:51:34Z"
lastCommitAt: "2026-08-19T04:07:30Z"
lastReleaseAt: "2022-09-08T22:18:17Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 86
undervaluedScore: 69
maintainers: ["sachintu47", "HarithaIBM", "IgorTodorovskiIBM"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7f267b868901adf4216eac0071a3cb4d99b58b15670a33d091f4c00c08bac25/zopencommunity/perlport"
---

# Perl

The perl programming language

# Installation and Usage

Use the zopen package manager ([QuickStart Guide](https://zopen.community/#/Guides/QuickStart)) to install:
```bash
zopen install perl
```

# Building from Source

1. Clone the repository:
```bash
git clone https://github.com/zopencommunity/perlport.git
cd perlport
```
2. Build using zopen:
```bash
zopen build -vv
```

See the [zopen porting guide](https://zopen.community/#/Guides/Porting) for more details.

# Documentation

# Setting Up CPAN

To install Perl modules using cpan, you need to configure it to use the zopen tools.

If cpan is not properly configured, it may not function correctly. Follow these steps to set it up:

## Prerequisites
Before setting up CPAN, ensure the following tools are installed via `zopen`:

- `wget`
- `curl`
- `tar`
- `make`
- `gzip`
- `bzip2`

You can install them using:
```sh
zopen install curl wget tar make gzip bzip2
```

## Configuring CPAN

### 1. Initialize CPAN
Run the following command to enter the CPAN shell:
```sh
cpan
```
If this is the first time running CPAN, it will prompt for initial configuration. You can choose automatic configuration (press enter) unless you need…
