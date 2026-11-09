---
repo: "stephengold/Wes"
name: "Wes"
description: "An animation editing and retargeting library for jMonkeyEngine (code has New BSD license)"
readmeQualityOk: true
url: "https://github.com/stephengold/Wes"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["jme3", "jmonkeyengine3", "library", "animation", "retargeting-animations", "skeleton-map", "jmonkeyengine", "jvm-library", "java", "open-source"]
stars: 23
forks: 2
openIssues: 1
closedIssues: 3
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2019-01-16T04:45:45Z"
lastCommitAt: "2026-11-09T03:30:48Z"
lastReleaseAt: "2019-11-07T21:53:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 49
maintainers: ["stephengold"]
openGraphImageUrl: "https://opengraph.githubassets.com/d37b9a225266f47c2b9106f1566bc8703dc6b1b9dd832992ed21eebce0acb730/stephengold/Wes"
---

[The Wes Project][wes] is a software library for editing animations used in
[the jMonkeyEngine (JME) game engine][jme].

It contains 2 subprojects:

1. WesLibrary: the Wes [JVM] runtime library
2. WesExamples: demos, examples, and non-automated test software

Complete source code (in [Java]) is provided under
[a 3-clause BSD license][license].

## Contents of this document

+ [Important features](#features)
+ [How to add Wes to an existing project](#add)
+ [How to build Wes from source](#build)
+ [Downloads](#downloads)
+ [Conventions](#conventions)
+ [An overview of the demo applications](#demos)
+ [External links](#links)
+ [History](#history)
+ [Acknowledgments](#acks)

## Important features

+ extract a time-range from an animation
+ resample an animation track at a new frame rate
+ retarget animations from one model/skeleton to another
+ interpolate between keyframes using a wide assortment of algorithms
+ reverse an animation track
+ chain 2 tracks together
+ repair certain issues with animation tracks
+ convert a traveling animation to an in-place cyclic animation

Most of the features work with both the old and new animation systems.

[Jump to the table of contents](#toc)…
