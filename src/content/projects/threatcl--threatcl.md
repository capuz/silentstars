---
repo: "threatcl/threatcl"
name: "threatcl"
description: "Documenting your Threat Models with HCL"
readmeQualityOk: true
url: "https://github.com/threatcl/threatcl"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 468
forks: 26
openIssues: 16
closedIssues: 42
watchers: 9
contributors: 13
recentReleases: 0
createdAt: "2021-09-14T23:15:12Z"
lastCommitAt: "2026-10-22T08:52:01Z"
lastReleaseAt: "2024-03-03T06:08:01Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 92
undervaluedScore: 32
maintainers: ["xntrik", "dependabot[bot]", "serval-frenchie"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff3841281f635f0ea5be04eac88206efa9843418107e46163f0ad8dd6b3d9231/threatcl/threatcl"
discussionCount: 5
---

# threatcl

Threat Modeling with HCL

## What happened to hcltm?

hcltm has been renamed to `threatcl`. Welcome!

## Overview

> [!TIP]
> Want to read the new documentation? Head over to [threatcl.dev](https://threatcl.dev/)

There are many different ways in which a threat model can be documented. From a simple text file, to more in-depth word documents, to fully instrumented threat models in a centralised solution. Two of the most valuable attributes of a threat model are being able to clearly document the threats, and to be able to drive valuable change.

`threatcl` aims to provide a DevOps-first approach to documenting a [system threat model](https://owasp.org/www-community/Threat_Modeling) by focusing on the following goals:

- Simple text-file format
- Simple cli-driven user experience
- Integration into version control systems (VCS)

This repository is the home of the `threatcl` cli software. The `threatcl` [spec](https://github.com/threatcl/threatcl/blob/HEAD/spec.hcl) is based on [HCL2](https://github.com/hashicorp/hcl/tree/hcl2), HashiCorp's Configuration Language, which aims to be "_pleasant to read and write for humans, and a JSON-based variant that is easier for…
