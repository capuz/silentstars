---
repo: "clintjedwards/gofer"
name: "gofer"
description: "Simple, opinionated, container-focused, continuous thing do-er."
readmeQualityOk: true
url: "https://github.com/clintjedwards/gofer"
homepage: "https://gofer.clintjedwards.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
topics: ["docker", "go", "golang", "cron", "ci-cd", "ci", "cd", "plugin-architecture", "continuous-integration", "continuous-delivery"]
stars: 31
forks: 1
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-07-07T00:01:45Z"
lastCommitAt: "2026-10-07T10:31:11Z"
lastReleaseAt: "2023-11-15T06:33:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 54
maintainers: ["clintjedwards"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e6d5e551747a9b09730fc5c58fe311fd34a374a8110c68176c8a70d67380b22/clintjedwards/gofer"
discussionCount: 0
---

# [Gofer](https://gofer.clintjedwards.com/docs/assets/urban_dictionary_gofer.png): Run short-lived jobs easily.

## Summary

Gofer is an opinionated, streamlined automation engine designed for the cloud-native era. It's basically remote code execution as a platform.

Gofer focuses on the "what" and "when" of your workloads, leaving the "how" and "where" to pluggable, more sophisticated container orchestrators (such as K8s or Nomad or even local Docker).

It specializes in executing your custom scripts in a containerized environment, making it versatile for both developers and operations teams. Deploy Gofer effortlessly as a single static binary, and manage it using expressive, declarative configurations written in real programming languages.

Its primary function is to execute short-term jobs like code linting, build automation, testing, port scanning, ETL operations, or any task you can containerize and trigger based on events.

## Low Priority

Previously I had discontinued Gofer, but I've been using it personally so much that I figured it would be good to keep
it un-archived to push bug fixes and with LLMs being so good now maybe start rolling new features/refactors. But it's…
