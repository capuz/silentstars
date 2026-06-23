---
repo: "delphix/appliance-build"
name: "appliance-build"
description: "This repository contains the code used to build the Ubuntu-based Delphix Appliance, leveraging open-source tools such as Debian's live-build, Docker, Ansible, OpenZFS, and others."
url: "https://github.com/delphix/appliance-build"
language: "Shell"
languages: ["Shell"]
languagePcts: [96]
topics: ["owner-platform"]
stars: 19
forks: 41
openIssues: 28
closedIssues: 52
watchers: 20
contributors: 52
recentReleases: 0
createdAt: "2018-05-02T15:49:13Z"
lastCommitAt: "2026-06-23T23:28:55Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 83
undervaluedScore: 46
maintainers: ["prakashsurya", "eyalkaspi-delphix", "mszak-perforce"]
openGraphImageUrl: "https://opengraph.githubassets.com/195035d8c858ee238863de0e998ccb5c08e9d3c006f21fcab8ae83e23474c31c/delphix/appliance-build"
---

# Delphix Appliance Build

![](https://github.com/delphix/appliance-build/workflows/.github/workflows/main.yml/badge.svg)

This repository contains the code used to build the Ubuntu-based Delphix
Appliance, leveraging open-source tools such as Debian's live-build,
Docker, Ansible, OpenZFS, and others. It is capable of producing virtual
machine images containing the Delphix Dynamic Data Platform, that are
capable of running in cloud and non-cloud hypervisors alike (e.g. Amazon
EC2, Microsoft Azure, VMware, OpenStack).

## Quickstart (for the impatient)

Run this command on "dlpxdc.co" to create the VM used to do the build:

    $ dc clone-latest --size COMPUTE_LARGE dlpx-internal-buildserver-develop $USER-bootstrap

Log into that VM using the "delphix" user, and run these commands:

    $ git clone https://github.com/delphix/appliance-build.git
    $ cd appliance-build
    $ ansible-playbook bootstrap/playbook.yml
    $ sudo ./gradlew buildInternalMinimalKvm
    $ sudo qemu-system-x86_64 -nographic -m 1G \
    > -drive file=live-build/build/artifacts/internal-minimal-kvm.qcow2

To exit "qemu", use "Ctrl-A X".

## Build Requirements

The Delphix Appliance build system has the…
