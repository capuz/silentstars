---
repo: "zimeg/slack-sandbox"
name: "slack-sandbox"
description: "a repo for unworried experimentation"
readmeQualityOk: true
url: "https://github.com/zimeg/slack-sandbox"
homepage: "http://localhost:3000"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [41, 25]
topics: ["slack"]
stars: 9
forks: 2
openIssues: 5
closedIssues: 6
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2022-08-16T23:54:26Z"
lastCommitAt: "2026-07-05T06:31:35Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 73
maintainers: ["dependabot[bot]", "zimeg"]
openGraphImageUrl: "https://opengraph.githubassets.com/82d6a7dc957637c258299fdb2e16b498a72772777c04e0b3159d93e145ad5e44/zimeg/slack-sandbox"
---

# 🏖️ Slack sandbox

A repo for experimenting with and testing various APIs across various samples.

## 🐌 Experimental apps and such

At the moment, this is repo contains a few apps and scripts in different
languages on various frameworks or libraries or sdks or whatever else.

* [Slack Send Github Action][gh_action]: `.github/workflows`
* [Deno Slack SDK][sdk_deno]: `deno.sdk.begut`
* [Java Slack SDK][sdk_java]: `java.sdk.gibra`
* [Bolt for JavaScript][bolt_js]: `js.bolt.tails`
* [Bolt for Python][bolt_python]: `py.bolt.snaek`
* [Python Slack SDK][sdk_python]: `py.sdk.todos`

Each subdirectory will have more information on getting started and references
to related documentation. Be warned that the apps might not make much sense.

## 🔧 Local libraries and tooling

For convenient tinkering, some of the apps above rely on local copies of their
Slack dependencies. These are searched for in a supposed `../tools` directory.

Related repos can be cloned into the `../tools` directory to create a file
structure like so (with this repo being called `sandbox`):

```
 | sandbox/
 | - py.bolt.snaek/
 | - py.sdk.todos/
 | tools/
 | - bolt-python/
 | - python-slack-sdk/
```

[bolt_js]:…
