---
repo: "SAP/cf-java-logging-support"
name: "cf-java-logging-support"
description: "The Java Logging Support for Cloud Foundry supports the creation of structured log messages and the collection of request metrics"
readmeQualityOk: true
url: "https://github.com/SAP/cf-java-logging-support"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 82
forks: 51
openIssues: 6
closedIssues: 78
watchers: 17
contributors: 675
recentReleases: 0
createdAt: "2016-03-01T00:20:35Z"
lastCommitAt: "2026-09-08T08:16:25Z"
lastReleaseAt: "2019-03-28T08:48:23Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 48
maintainers: ["dependabot[bot]", "KarstenSchnitter"]
openGraphImageUrl: "https://opengraph.githubassets.com/76dab73f041bdfaa36c781eef590b188e9ae4057f697c934878afdf6a6818702/SAP/cf-java-logging-support"
---

# Java Logging Support for Cloud Foundry

**Warning: The `main` branch was force-pushed on October 30th, 2025.**

If you cloned or checked out this repository before that date, you may encounter issues when pulling new changes. To
resolve this, reset your local `main` branch to match the remote:

```shell
git fetch origin
git checkout main git reset --hard origin/main
```

**Caution:** This will discard any local changes on your `main` branch.

## Summary

This is a collection of support libraries for Java applications (Java 11 and above) that serves three main purposes:

1. Provide means to emit *structured application log messages*
2. Instrument parts of your application stack to *collect request metrics*
3. Allow auto-configuration of OpenTelemetry exporters.

The libraries started out to support applications running on Cloud Foundry.
This integration has become optional.
The library can be used in any runtime environment such as Kubernetes or Kyma.

When we say structured, we actually mean in JSON format.
In that sense, it shares ideas with [logstash-logback-encoder](https://github.com/logstash/logstash-logback-encoder),
but takes a simpler approach as we want to ensure that…
