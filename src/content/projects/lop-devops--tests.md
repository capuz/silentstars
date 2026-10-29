---
repo: "lop-devops/tests"
name: "tests"
description: "Test Suite"
readmeQualityOk: true
url: "https://github.com/lop-devops/tests"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["testing", "test-automation", "test-framework", "test-runner", "linux", "kvm", "powervm", "powerpc", "opensource", "openpower"]
stars: 5
forks: 53
openIssues: 31
closedIssues: 49
watchers: 8
contributors: 37
recentReleases: 0
createdAt: "2016-06-07T14:15:33Z"
lastCommitAt: "2026-10-29T10:20:35Z"
lastReleaseAt: "2019-09-25T06:39:25Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 86
undervaluedScore: 74
maintainers: ["PraveenPenguin", "harihare", "bssrikanth"]
openGraphImageUrl: "https://opengraph.githubassets.com/0102acff267b17cded9f962113420e9641e747e965bfb60d6d29d245e94d75d7/lop-devops/tests"
---

# TestSuite Wrapper for Avocado Framework Tests

## Overview:
This repository contains a wrapper script and configuration files to allow the user to set up the Avocado Test Framework and run a suite of tests to help verify the OpenPOWER Host OS and Guest Virtual Machine (VM) stability.

The tests are integrated into the avocado framework to increase the overall ease of use and to allow the open source community to easily add and run new tests within the suite.

See the [References](#references) section below for links to the avocado framework and avocado documentation.

----

## Operating System Support:
A PowerPC bare-metal system running OpenPOWER Host OS is required to execute any test suite in this repository (Host or Guest tests).

Guest test cases were validated against the following ppc64le guests:
* RHEL 8.0+
* RHEL 7.7+
* Fedora 29+
* Ubuntu 18.04+

Any Operating System that has python3 should be able to run this suite.

-----

## Prerequisites:
Python3 is installed on the System.

>Note : If python3 bin is not pointing to python binary in the system, please create of soft link of python pointing to python3.
>
> Example:
 `ln -s /usr/bin/python3 /usr/bin/python`

The…
