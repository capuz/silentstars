---
repo: "GNS3/dynamips"
name: "dynamips"
description: "Dynamips development"
readmeQualityOk: true
url: "https://github.com/GNS3/dynamips"
language: "C"
languages: ["C"]
languagePcts: [99]
topics: ["emulator", "cisco"]
stars: 408
forks: 101
openIssues: 33
closedIssues: 120
watchers: 40
contributors: 22
recentReleases: 0
createdAt: "2013-06-12T03:15:26Z"
lastCommitAt: "2026-10-16T08:26:59Z"
lastReleaseAt: "2026-04-19T05:14:15Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 36
maintainers: ["grossmj", "WhatAmISupposedToPutHere", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/5cd19ac682832d808909a1540667a245ea8703d2f4c68a4d2ff95a7affff7ce7/GNS3/dynamips"
discussionCount: 0
---

# Dynamips (Cisco Router Emulator)

## Overview

Authors of this document: Fabien Devaux, Christophe Fillot, MtvE, 
Gordon Russell, Jeremy Grossmann and Flávio J. Saraiva.

Converted to markdown format by Daniel Lintott.

This is a continuation of Dynamips, based on the last development version and 
improved with patches wrote by various people from the community. This fork was
named Dynamips-community up to the 0.2.8-community release and renamed to the 
original Dynamips on the 0.2.9 release.

You can compile two different versions of Dynamips with this code.
Edit the Makefile to set the flags to suit your environment.
One of the flags, DYNAMIPS_CODE, can be "stable" or "unstable".

Unstable is the code which contains most of the development code, and is
in particular suitable for use on a 64 bit Mac. Unfortunately this has
proved to be unstable on other platforms.

Stable contains the same code as Unstable, minus some mips64 bit optimisations
and tcb code which seems to trigger instability on a number of platforms.
You should probably use stable unless you have a very good reason.

For more information on the how to use Dynamips see the README file

License: GNU GPLv2 only

###…
