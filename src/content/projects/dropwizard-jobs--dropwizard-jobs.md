---
repo: "dropwizard-jobs/dropwizard-jobs"
name: "dropwizard-jobs"
description: "Scheduling / Quartz integration for Dropwizard"
readmeQualityOk: true
url: "https://github.com/dropwizard-jobs/dropwizard-jobs"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["quartz-scheduler", "java", "dropwizard", "cron", "annotations", "trigger", "job", "job-scheduler", "schedule"]
stars: 164
forks: 68
openIssues: 0
closedIssues: 69
watchers: 4
contributors: 27
recentReleases: 0
createdAt: "2012-11-18T22:30:19Z"
lastCommitAt: "2026-10-23T09:32:24Z"
lastReleaseAt: "2023-05-23T20:39:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 94
undervaluedScore: 43
maintainers: ["dependabot[bot]", "hakandilek"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e9bed7fb2a0de9c643d929181554069b08cb726b9160e332e0fd71c82ffebdd/dropwizard-jobs/dropwizard-jobs"
---

# dropwizard-jobs

This plugin integrates the [quartz scheduler](https://quartz-scheduler.org/) with dropwizard and allows you to easily create background jobs, which are not bound to the HTTP request-response cycle.
Quartz creates a threadpool on application startup and uses it for background jobs.

There are four different types of jobs:

- Jobs run on application start for initial setup (could also be done via a managed instance in dropwizard)
- Jobs run at application stop before the application is closed (could also be done via managed instance in dropwizard)
- Jobs which are repeated after a certain time interval
- Jobs which need to run at a specific time, via a cron-like expression

## Using maven central repository

dropwizard jobs can be used with maven.
It is located in Central Repository. <https://search.maven.org/>

Add to your pom:

```xml
<dependency>
  <groupId>io.github.dropwizard-jobs</groupId>
  <artifactId>dropwizard-jobs-core</artifactId>
  <version>7.0.0</version> 
</dependency>
```

## Installing the bundle from source code

```bash
git clone https://github.com/dropwizard-jobs/dropwizard-jobs
cd dropwizard-jobs
./mvn install
```

After installing the plugin…
