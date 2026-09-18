---
repo: "buildbuddy-io/buildbuddy-foss"
name: "buildbuddy-foss"
description: "BuildBuddy FOSS is a read-only mirror of BuildBuddy, with all proprietary code removed. NOTE: This repo is synced automatically from the main BuildBuddy repo. Please raise any issues and PRs there."
readmeQualityOk: true
url: "https://github.com/buildbuddy-io/buildbuddy-foss"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [64, 25]
stars: 12
forks: 3
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 63
recentReleases: 0
createdAt: "2021-06-10T17:34:31Z"
lastCommitAt: "2026-09-18T14:03:25Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 64
maintainers: ["maggie-lou", "bduffany", "vanja-p"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d732153424fc653a6e59736521d2c1205fbc910550f88c3dc81b6c551c99a48/buildbuddy-io/buildbuddy-foss"
---

</p>

# Intro

BuildBuddy is an open source Bazel build event viewer, result store, and remote cache. It helps you collect, view, share and debug build events in a user-friendly web UI.

It's written in Golang and React and can be deployed as a Docker image. It's run both as a [cloud hosted service](https://buildbuddy.io) and can be deployed to your cloud provider or run on-prem. BuildBuddy's core is open sourced in this repo under the [MIT License](https://github.com/buildbuddy-io/buildbuddy/blob/master/LICENSE).

# Get started

Getting started with BuildBuddy is simple. Just add these **two lines** to your `.bazelrc` file.

**.bazelrc**

```
build --bes_results_url=https://app.buildbuddy.io/invocation/
build --bes_backend=grpcs://remote.buildbuddy.io
```

This will print a **BuildBuddy URL** containing your build results at the beginning and end of every Bazel invocation. You can command click / double click on these to open the results in a browser.

**Want more?** Get up and running quickly with our fully managed [BuildBuddy Cloud](https://buildbuddy.io) service. It's free for individuals, open source projects, and teams of up to 3.

If you'd like to host your own instance…
