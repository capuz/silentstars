---
repo: "os-autoinst/openQA"
name: "openQA"
description: "openQA web-frontend, scheduler and tools."
readmeQualityOk: true
url: "https://github.com/os-autoinst/openQA"
homepage: "http://openqa.opensuse.org/"
language: "Perl"
languages: ["Perl"]
languagePcts: [87]
topics: ["perl", "testing", "test-automation", "test-scheduling", "hacktoberfest"]
stars: 372
forks: 221
openIssues: 26
closedIssues: 114
watchers: 33
contributors: 120
recentReleases: 0
createdAt: "2014-06-16T12:23:22Z"
lastCommitAt: "2026-08-26T04:17:33Z"
lastReleaseAt: "2020-06-23T06:47:36Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 41
maintainers: ["Martchus", "mergify[bot]", "okurz"]
openGraphImageUrl: "https://opengraph.githubassets.com/c46c99e9bd5a8bee51f4a5039ddb71c54ebf1424d76e9b3c7d7b27c0b126a4bb/os-autoinst/openQA"
discussionCount: 7
---

openQA is a testing framework that allows you to test GUI applications on one
hand and bootloader and kernel on the other. In both cases, it is difficult to
script tests and verify the output. Output can be a popup window or it can be
an error in early boot even before init is executed.

Therefore openQA runs virtual machines and closely monitors their state and
runs tests on them.

The testing framework can be divided in two parts. The one that is hosted in
this repository contains the web frontend and management logic (test
scheduling, management, high-level API, …)

The other part that you need to run openQA is the OS-autoinst test engine that
is hosted in a separate [repository](https://github.com/os-autoinst/os-autoinst).

# Getting started

The project's information is organized into four basic documents. As a first
step, read the [Starter Guide](https://github.com/os-autoinst/openQA/blob/HEAD/docs/GettingStarted.md) and then, if
needed, proceed to the [Installation Guide](https://github.com/os-autoinst/openQA/blob/HEAD/docs/Installing.md).

For users of the openQA web interface or the REST API consult
[Users…
