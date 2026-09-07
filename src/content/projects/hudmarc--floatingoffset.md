---
repo: "hudmarc/FloatingOffset"
name: "FloatingOffset"
description: "Origin-shifting package that works with Unity and FishNet. Adds supports for massive server-authoritative multiplayer worlds with FishNet and Unity"
readmeQualityOk: true
url: "https://github.com/hudmarc/FloatingOffset"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 42
forks: 9
openIssues: 10
closedIssues: 7
watchers: 6
contributors: 1
recentReleases: 0
createdAt: "2022-11-23T00:13:47Z"
lastCommitAt: "2026-09-07T08:35:21Z"
lastReleaseAt: "2026-05-14T18:00:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 39
maintainers: ["hudmarc"]
openGraphImageUrl: "https://opengraph.githubassets.com/32ca209f7ba0c5563ff637a05db0c90b2696c3b22802e283d1f9ed18335ea186/hudmarc/FloatingOffset"
---

> ### A quick note...
> Client-side prediction is currently somewhat broken due to how the package handles stacked scenes interfering with FishNet's Client-Side Prediction. This is being fixed in `refactor-unity-interop`. The fixes should be drop-in-place as the API will not change significantly. A migration/best practices guide will be provided if necessary.

# Quickstart
- [Install FishNet](https://assetstore.unity.com/packages/tools/network/fishnet-networking-evolved-207815)
- Click "Add package from git URL..." in the Unity Package Manager (UPM) and paste in [https://github.com/hudmarc/FFO-FishNet-Floating-Origin.git](https://github.com/hudmarc/FFO-FishNet-Floating-Origin.git)

### Want to see this package in action?

#### Check out the [Techdemo Here](https://github.com/hudmarc/FishNet-FloatingOffset---Car-Controller-Prediction-Test/tree/master)

## What is this?
By default, Unity can handle ~20km by 20km game worlds without running into floating point precision limitations.

This package extends the possible world size to ~`2.114e+35` light years. The known universe is only `4.651e+10` light years (as of writing this README)

It does this using scene stacking (to support…
