---
repo: "senbox-org/snap-gpt-tests"
name: "snap-gpt-tests"
description: "GPT tests that will be included in the SNAP testing platform."
url: "https://github.com/senbox-org/snap-gpt-tests"
language: "Python"
languages: ["Python", "Java"]
languagePcts: [53, 29]
stars: 6
forks: 5
openIssues: 2
closedIssues: 0
watchers: 20
contributors: 30
recentReleases: 0
createdAt: "2019-02-15T10:26:27Z"
lastCommitAt: "2026-06-29T07:23:48Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 73
undervaluedScore: 56
maintainers: ["lveci", "dgnistor", "TomBlock"]
openGraphImageUrl: "https://opengraph.githubassets.com/98fdf8bf004972602fddef94189dc15b78d71d7cc437673e1df4a8584a315163/senbox-org/snap-gpt-tests"
---

# snap-gpt-tests

GPT test platform, it contains both the gpt tests that will be executed on the jenkins test platform then all the utilities needed to perfrom the tests, compare the results and produce the reports.

The utilities are mostly written in Python3 a part for the output comparator that use the internal java code. 

The main functionality of the test utilities are:

- to filter the test using a `test scope`
- to execute `gpt` with the given parameters and profile the performance of the execution
- to compare the output with an expected output
- to test failing conditions both for the `gpt` process than for the expected output
- to generate HTML report containing all the important informations (results, logs and performances)
- to keep track of the evolution of the performances using an sql database

## How To Use SNAP-GPT-TESTS

If you are interested to run the GPT tests locally first you needs the following:

 - The test data
 - SNAP
 - JDK and Maven
 - python3, python3-lxml, python3-psutils, python3-matplotlib
 - Clone the repo: https://github.com/senbox-org/snap-gpt-tests

Once you have all the requirements you are ready to start.

### 0. Building the project

The…
