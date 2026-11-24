---
repo: "os-autoinst/openqa-mon"
name: "openqa-mon"
description: "Collection of terminal monitoring utilities for openQA"
readmeQualityOk: true
url: "https://github.com/os-autoinst/openqa-mon"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["openqa", "monitoring"]
stars: 16
forks: 17
openIssues: 12
closedIssues: 47
watchers: 8
contributors: 18
recentReleases: 0
createdAt: "2020-03-19T12:48:03Z"
lastCommitAt: "2026-11-24T14:04:29Z"
lastReleaseAt: "2021-05-12T06:43:25Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 65
maintainers: ["grisu48", "okurz", "pdostal"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e25ad4c2983a090958ea86e6f630a258547a41e04bd41ca208aff9fef0834ea/os-autoinst/openqa-mon"
---

Collection of CLI monitoring tools for [openQA](https://open.qa):

* [openqa-mon](#openqa-mon) - live monitoring of openQA jobs
* [openqa-mq](#openqa-mq) - Print openQA-related [RabbitMQ](https://rabbit.opensuse.org/) messages
* [openqa-revtui](#openqa-revtui) - openQA review dashboard

Those utilities are intended as realtime monitoring tools for checking on openQA jobs.
In contrast to the browser interface they are more compact, easier on your resources and allow you to monitor multiple jobs at the same time.

## Building

`openqa-mon` is written in go with minimal requirements. The `Makefile` provides rules for installing the requirements and building the binaries.

```bash
make requirements     # manually install requirements
make
sudo make install     # install the binaries to /usr/local/bin
make install ~/bin    # install the binary to bin in your home folder
```

Static builds

```bash
CGO_ENABLED=0 make -B -j4 GOARGS="-buildmode pie"
```

or

```bash
make static
```
