---
repo: "seL4/sel4-tutorials"
name: "sel4-tutorials"
description: "Tutorials for working with seL4 and/or CAmkES."
readmeQualityOk: true
url: "https://github.com/seL4/sel4-tutorials"
homepage: "https://docs.sel4.systems/Tutorials"
language: "Python"
languages: ["Python", "CMake"]
languagePcts: [55, 33]
stars: 60
forks: 58
openIssues: 7
closedIssues: 43
watchers: 23
contributors: 56
recentReleases: 0
createdAt: "2015-08-07T02:23:59Z"
lastCommitAt: "2026-07-22T06:10:17Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 77
undervaluedScore: 49
maintainers: ["lsf37", "vjackson725", "daniel-ac-martin"]
openGraphImageUrl: "https://opengraph.githubassets.com/61ffea25e6566c2dd0e4ad85c1765a583a5e23b17894e4465a02b48a1585bd88/seL4/sel4-tutorials"
---

# seL4 Tutorials

Various tutorials for using seL4, its libraries, and CAmkES.

## Prerequisites

Follow the instructions for setting up your host environment on the [seL4
docsite](https://docs.sel4.systems/Tutorials/setting-up.html).

## Starting a tutorial

This tutorial repository is part of a larger collection of repositories, which
are required to run the tutorial and are coordinated in a manifest file. After
the setup steps above, see [this
guide](https://docs.sel4.systems/Tutorials/get-the-tutorials.html) on how to
check out a consistent set.

Once you have that, a tutorial is started through the use of the `init` script
that is provided in the root directory. Using this script you can specify a
tutorial and target machine and it will create a copy of the tutorial for you to
work on.

Example:

```sh
mkdir build_hello_world
cd build_hello_world
../init --plat pc99 --tut hello-world
```

The `init` script will initialize a build directory in the current directory and at the end
it will print out a list of files that need to be modified to complete the tutorial. Building
is performed simply be invoking `ninja`, and once the tutorial compiles it can be tested
in Qemu by using…
