---
repo: "Open-MBEE/OpenSysML"
name: "OpenSysML"
description: "Open Source SysML v2 Implementation in Go"
readmeQualityOk: true
url: "https://github.com/Open-MBEE/OpenSysML"
homepage: "http://runtime.opensysml.org/"
language: "Go"
languages: ["Go"]
languagePcts: [84]
stars: 47
forks: 13
openIssues: 6
closedIssues: 75
watchers: 0
contributors: 13
recentReleases: 10
createdAt: "2026-08-01T03:55:33Z"
lastCommitAt: "2026-10-29T05:50:28Z"
lastReleaseAt: "2026-08-17T05:10:54Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 48
maintainers: ["devin-ai-integration[bot]", "HuiJun", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/63edc4b6478af1d967dd98df953f8821e97036b0168453555e42644158625f3e/Open-MBEE/OpenSysML"
fundingLinks: ["CUSTOM:https://numfocus.org/donate-to-openmbee"]
---

# OpenSysML MDK — Runtime Environment and Development Kit

The OpenSysML Runtime Environment and Development Kit (OpenSysML MDK) is a SysML v2 and
KerML 1.1 implementation in Go. It provides a language server, an interactive REPL, an execution
runtime, an embeddable Go API, and Python, Node/TypeScript, Java, Rust, Julia and MATLAB client libraries,
covering the lifecycle from authoring through execution with the integrated tooling systems
engineers expect from a modern language ecosystem. It is the runtime of
[OpenSysML](https://opensysml.org/), the open source SysML v2 suite of the
[OpenMBEE](https://www.openmbee.org) community; this repository is the MDK, and the pages
below use "OpenSysML" for it where no confusion with the suite is possible. The MDK is
the second generation of OpenMBEE's Model Development Kit, expanded and updated for
SysML v2; its [Cameo plugin](https://github.com/Open-MBEE/OpenSysML/blob/HEAD/editors/mdk/README.md) is Magic MDK.

**It runs the model.** A validator reads declarations; an expression evaluator computes a value
from the ones it is handed. OpenSysML materializes the instances a model describes, evaluates
their features through the whole part tree…
