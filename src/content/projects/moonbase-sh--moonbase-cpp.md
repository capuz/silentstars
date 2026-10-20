---
repo: "Moonbase-sh/moonbase-cpp"
name: "moonbase-cpp"
description: "Pure C++ Moonbase SDK"
readmeQualityOk: true
url: "https://github.com/Moonbase-sh/moonbase-cpp"
homepage: "https://moonbase.sh"
language: "C++"
languages: ["C++"]
languagePcts: [96]
stars: 6
forks: 4
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-05-08T17:06:58Z"
lastCommitAt: "2026-10-20T08:48:54Z"
lastReleaseAt: "2026-06-29T11:35:16Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 67
maintainers: ["TobbenTM", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/b27466089f6d886a0ac21e0884a6c32069309c6adee01881c049f2d6043d20ab/Moonbase-sh/moonbase-cpp"
---

# Moonbase C++ Activation SDK

License activation for desktop apps and audio plugins, in C++.

Ship a paid plugin or app and you need the same four things: let a customer unlock it,
keep it unlocked offline, tie the seat to a machine, and hand the seat back when they
move. This repo is those four things for C++, as a header-only core library and a
drop-in JUCE module that adds a finished activation UI on top of it.

       alt="Welcome screen: the product logo and name, an 'Activate Solstice' heading, the line 'Unlock the full plugin through your Helio Audio account.', an 'Activate online' button, a 'No internet? Activate offline' link, and a 'Licensing secured by moonbase' footer.">

## What's in this repo

| | What it is | Where |
| --- | --- | --- |
| **Core SDK** | Header-only C++17 library: activation, polling, local RS256 validation, offline licenses, revocation, pluggable storage and HTTP. No framework. | [`include/moonbase/`](https://github.com/Moonbase-sh/moonbase-cpp/blob/HEAD/include/moonbase/) |
| **`moonbase_licensing`** | Drop-in JUCE module. The core SDK plus a themeable activation UI, in-app updates, and zero third-party dependencies. |…
