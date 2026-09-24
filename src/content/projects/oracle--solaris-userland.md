---
repo: "oracle/solaris-userland"
name: "solaris-userland"
description: "Open Source software in Solaris using gmake based build system to drive building various software components."
readmeQualityOk: true
url: "https://github.com/oracle/solaris-userland"
language: "C"
languages: ["C", "Makefile", "JavaScript"]
languagePcts: [32, 25, 22]
topics: ["solaris"]
stars: 183
forks: 69
openIssues: 7
closedIssues: 12
watchers: 48
contributors: 1526
recentReleases: 0
createdAt: "2017-03-14T22:21:25Z"
lastCommitAt: "2026-09-24T08:42:28Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 81
undervaluedScore: 40
maintainers: ["psumbera", "kulikjak", "l1gi"]
openGraphImageUrl: "https://opengraph.githubassets.com/452da80a9f0cb861d05fc165adbb60201b64ebe17402bf2ce8ecbb4e1e3c2f6d/oracle/solaris-userland"
---

# Getting started with the Userland Consolidation

This repository contains the build recipes, local modifications, and
IPS package manifests for most of the free and open source software
that is packaged for Oracle Solaris 11.4 and published in the official
Oracle Solaris package repository on pkg.oracle.com.

Some open source software in Solaris is maintained and packaged outside
of the Userland Consolidation.  Source code for those components may be
available from
<https://www.oracle.com/downloads/opensource/solaris-source-code-downloads.html>.

## Getting Started
This README provides a very brief overview of the gate (i.e., source
code repository), how to retrieve a copy, and how to build it.  Detailed
documentation about the Userland gate can be found in the `doc` directory.

## Overview
The Userland consolidation maintains a project at

     https://github.com/oracle/solaris-userland

That repo contains build recipes, patches, IPS (i.e., pkg(7)) manifests,
and other files necessary to download, prep, build, test, package and publish
open source software.  The build infrastructure makes use of hierarchical
Makefiles which provide dependency and recipe information for building…
