---
repo: "jenkinsci/build-with-parameters-plugin"
name: "build-with-parameters-plugin"
description: "Prompt for confirmation of job parameters provided by the user before triggering the job"
readmeQualityOk: true
url: "https://github.com/jenkinsci/build-with-parameters-plugin"
homepage: "https://plugins.jenkins.io/build-with-parameters/"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 27
forks: 41
openIssues: 20
closedIssues: 15
watchers: 100
contributors: 726
recentReleases: 0
createdAt: "2013-06-10T20:52:30Z"
lastCommitAt: "2026-10-23T12:04:08Z"
lastReleaseAt: "2025-11-16T17:12:28Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "funded", "fork_magnet"]
healthScore: 63
undervaluedScore: 32
maintainers: ["dependabot[bot]", "tzachs"]
openGraphImageUrl: "https://opengraph.githubassets.com/84193166daef3c429af3da69b9174f6c04795e08276b15bdba84aff3a96caa57/jenkinsci/build-with-parameters-plugin"
fundingLinks: ["CUSTOM:https://crowdfunding.linuxfoundation.org/initiatives/jenkins", "CUSTOM:https://www.jenkins.io/donate/#why-donate"]
---

Build with Parameters Plugin
============================

Allows the user to provide parameters for a build in the url, prompting for confirmation before triggering the job.

The plugin exposes `$JENKINS/job/$JOB/parambuild` url to trigger the build with parameter.
Unlike `$JENKINS/job/$JOB/buildWithParameters`, a human must confirm that the parameters are correct before the build is triggered.
This is useful if you want to create a list of jobs with parameters to trigger ahead of time, and execute it at some future date (e.g. a deployment plan).

An example triggering of a job with the plugin:  

## Build
Running `mvn hpi:run` will get you hpi plugin file in "./target" directory

## Changelog

The latest releases are documented in the [GitHub releases page](https://github.com/jenkinsci/build-with-parameters-plugin/releases).

### 1.7 - Mar 5, 2022

- Update to support icons removal from Jenkins Core
- Bumped parent POM and minimal Jenkins version are now 2.204

### 1.6 - Oct 13, 2021

- Move documentation to GitHub

### 1.5.1 - Mar 26, 2021

- Fix XXS vulnerability as reported in [security advisory](https://www.jenkins.io/security/advisory/2021-03-30/#SECURITY-2231).
- Fix CRSF…
