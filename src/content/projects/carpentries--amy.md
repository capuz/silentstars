---
repo: "carpentries/amy"
name: "amy"
description: "A web-based workshop administration application built using Django."
readmeQualityOk: true
url: "https://github.com/carpentries/amy"
homepage: "https://amy.carpentries.org"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["django", "python", "workshops", "management-system", "carpentries"]
stars: 119
forks: 76
openIssues: 122
closedIssues: 1367
watchers: 51
contributors: 40
recentReleases: 0
createdAt: "2014-12-01T16:07:14Z"
lastCommitAt: "2026-10-24T08:08:13Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 95
undervaluedScore: 49
maintainers: ["pbanaszkiewicz", "dependabot[bot]", "maneesha"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1e623554678fd86c7dcafd2b6bde522c1d9cbb97b26b43098b8837b166fba7e/carpentries/amy"
fundingLinks: ["GITHUB:https://github.com/carpentries", "CUSTOM:https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-7497"]
---

AMY is a web-based workshop administration application for [The Carpentries][tc]
and related projects.  Its target audience is workshop
coordinators, most of whom are non-programmers, who need to keep track
of what workshops are being arranged, when they're supposed to occur,
who's teaching what, and so on.

AMY is built using [Django][django] with Python 3, with a bit of Javascript and
other things thrown in.  If you would like to help, please read:

* the setup instructions below,

* the [contributor guidelines](https://github.com/carpentries/amy/blob/HEAD/.github/CONTRIBUTING.md), and

* our [contributor code of conduct](https://github.com/carpentries/amy/blob/HEAD/.github/CODE_OF_CONDUCT.md).

Please [check with us][contact-address] or open an [issue][issues]
before starting work on new features.

## Prerequisites

You will need the python3 and libpq development header libraries installed
on your system. For an example with Debian-based (Ubuntu, etc) distributions
of Linux, you can install them with:

```shell
sudo apt-get update
sudo apt-get install python3-dev libpq-dev
```

## Getting Started

1. Clone the repository:

    ~~~
    git clone…
