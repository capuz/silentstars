---
repo: "weiziqian/E-mount-impl-on-Techart-EA9"
name: "E-mount-impl-on-Techart-EA9"
description: "Sony E-mount Autofocus Protocol Implementation — for Techart LM-EA9"
readmeQualityOk: true
url: "https://github.com/weiziqian/E-mount-impl-on-Techart-EA9"
language: "C"
languages: ["C"]
languagePcts: [77]
stars: 23
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-09-26T00:39:28Z"
lastCommitAt: "2026-11-05T11:24:48Z"
lastReleaseAt: "2026-11-04T12:02:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 28
maintainers: ["weiziqian"]
openGraphImageUrl: "https://opengraph.githubassets.com/89a14c31ac8021088c1afe5dff14526abb18d7fc48d04144bdffddda8a2e67a5/weiziqian/E-mount-impl-on-Techart-EA9"
---

# E-mount AF implementation on the Techart LM-EA9

A working, readable implementation of the Sony E-mount lens protocol — including
autofocus — running on real hardware.

---

## 1. Introduction

### 1.1 Purpose

**The main goal is to provide a reference implementation of the Sony E-mount
protocol with working autofocus.**

Sony's E-mount lens protocol is undocumented. There is a good body of
reverse-engineering work on the *wire format* (see [Prior work](#13-prior-work)),
but very little on what a lens actually has to *do* to make a modern body focus:
which messages must be answered, in what order, which fields the body reads, and
what it does when a field is wrong. This project is that missing half — firmware
that completes the handshake, accepts focus commands, drives a real mechanism and
reports back, on a current body.

The protocol specification this code implements is maintained separately, one
document per message ID:

> **[Sony E-mount protocol reverse-engineering](https://github.com/weiziqian/E-mount-protocol-RE)**

The two repositories are meant to be read together. Every claim in the spec
carries a confidence label, and much of it was confirmed — or corrected — by…
