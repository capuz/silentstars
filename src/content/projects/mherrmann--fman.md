---
repo: "mherrmann/fman"
name: "fman"
description: "A cross-platform dual-pane file manager"
readmeQualityOk: true
url: "https://github.com/mherrmann/fman"
homepage: "https://fman.io"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["fman"]
stars: 275
forks: 16
openIssues: 422
closedIssues: 474
watchers: 19
contributors: 3
recentReleases: 2
createdAt: "2017-03-21T10:47:23Z"
lastCommitAt: "2026-09-20T08:43:50Z"
lastReleaseAt: "2026-07-13T05:59:57Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 73
undervaluedScore: 28
maintainers: ["mherrmann", "usqr"]
openGraphImageUrl: "https://opengraph.githubassets.com/00bbb9ff06f6443683ef8c5db5e7d8c266233cd95211cfcb2b4921f5be8f0fb0/mherrmann/fman"
---

# fman

A cross-platform dual-pane file manager.

## Development instructions

fman currently uses Python 3.14.

Install the requirements for your operating system. For example:

    pip install -Ur requirements/mac.txt       # macOS
    pip install -Ur requirements/ubuntu.txt    # Ubuntu/Debian
    pip install -Ur requirements/arch.txt      # Arch Linux
    pip install -Ur requirements/fedora.txt    # Fedora
    pip install -Ur requirements/windows.txt   # Windows

Then you can use `python build.py` to run, compile etc. fman. For example:

    python build.py run

Call `python build.py` without arguments to see a list of available commands.
This uses [fman build system](https://build-system.fman.io/).

You can run automated tests with `python build.py test`. On Windows, this
requires Developer Mode (Settings -> System -> Advanced) to be enabled, or some
tests related to symlinks will fail.
