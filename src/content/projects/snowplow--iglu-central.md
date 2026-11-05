---
repo: "snowplow/iglu-central"
name: "iglu-central"
description: "Contains all JSON Schemas, Avros and Thrifts for Iglu Central"
readmeQualityOk: true
url: "https://github.com/snowplow/iglu-central"
homepage: "http://iglucentral.com"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 123
forks: 109
openIssues: 156
closedIssues: 801
watchers: 21
contributors: 54
recentReleases: 0
createdAt: "2014-06-17T09:50:37Z"
lastCommitAt: "2026-11-05T11:24:38Z"
lastReleaseAt: "2014-10-30T23:55:19Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 78
undervaluedScore: 38
maintainers: ["benjben", "istreeter", "peel"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1966dfa7663b63e15556a476c530f2c3c654bb182b6b3c81827399a06c6c068/snowplow/iglu-central"
---

# Iglu Central

Iglu Central (**[website][iglucentral-website]**) is a central repository for storing JSON Schemas, Avros and Thrifts, maintained and hosted by the team at **[Snowplow][snowplow-website]**. Think of it like RubyGems.org or Maven Central but for storing data schemas instead of code.

All of the schemas for **[Snowplow][snowplow-repo]** (amongst other systems) are stored in Iglu Central.

## Dev registries

Iglu Central automatically publishes content of pull requests opened by users with write permissions to a static S3 registry.
Full path of a dev registry is:

```txt
http://iglucentral-dev.com.s3-website-us-east-1.amazonaws.com/BRANCH_NAME
```

Where `BRANCH_NAME` is the name of git branch in the PR. This registry can be used in a resolver configuration until PR is merged into master branch.

Another option for temporary registry is to use Github raw hosting:

```txt
https://raw.githubusercontent.com/snowplow/iglu-central/BRANCH_NAME
```

Where `snowplow` can be replaced with your Github username if you forked the repository.

## Find out more

| **[Technical Docs][techdocs]**     | **[Setup Guide][setup]**     | **[Roadmap][roadmap]**           |…
