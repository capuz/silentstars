---
repo: "merbanan/rtl_433_tests"
name: "rtl_433_tests"
description: "This repository contains the regressions test suite for rtl_433"
readmeQualityOk: true
url: "https://github.com/merbanan/rtl_433_tests"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 112
forks: 362
openIssues: 2
closedIssues: 16
watchers: 28
contributors: 194
recentReleases: 0
createdAt: "2015-01-26T22:53:31Z"
lastCommitAt: "2026-11-08T03:00:24Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 43
maintainers: ["merbanan", "pzlabuda", "zuckschwerdt"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e8744eb2f7a5b7c424eb3e0083b9334710b01fd8e1d5e9b183710000da658fa/merbanan/rtl_433_tests"
---

# rtl_433 test samples

rtl_433_tests contains the test suite for rtl_433

This repository contains lots of signal recordings that are supported by rtl_433.

The regtest system is not developed yet, but accepting signal recordings.

## Installation instructions

Clone this repository to the root of rtl_433

## Running

Enter the directory and run `make test`. The output will tell if the tests failed or not.

## Contributing

Run rtl_433 with `rtl_433 -S unknown` and wait for you signal to be detected. When it is detected
note what gfile name it has. This file can now be run through rtl_433 offline:

    $ rtl_433 -r g001.cu8

Look at the `-A` analyze mode output and include a timing description if you like.
You can also include a flex decoder (`-X ...`), don't include raw analyzer output.

## Organization

Add signals by creating directories and then add the sample files.
We need to watch the repo size, add only about 5 interesting sample files.
If you have more interesting samples (e.g. to recover a checksum), include the bitbuffer codes in the `README.md`.

You can rename the sample files to add information, e.g. replace `g001` with `low_battery`. Do not remove the frequency and…
