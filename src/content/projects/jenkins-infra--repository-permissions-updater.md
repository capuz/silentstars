---
repo: "jenkins-infra/repository-permissions-updater"
name: "repository-permissions-updater"
description: "Artifactory permissions synchronization tool and data set"
readmeQualityOk: true
url: "https://github.com/jenkins-infra/repository-permissions-updater"
language: "Java"
languages: ["Java"]
languagePcts: [97]
stars: 95
forks: 1156
openIssues: 39
closedIssues: 507
watchers: 16
contributors: 1251
recentReleases: 0
createdAt: "2016-08-15T18:34:28Z"
lastCommitAt: "2026-09-08T08:16:20Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 98
undervaluedScore: 55
maintainers: ["jenkins-infra-bot", "dependabot[bot]", "mawinter69"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ea5841297bbba35628656a9dd4f396c0fd10bf5b1a72597094e6b3fa4a07960/jenkins-infra/repository-permissions-updater"
fundingLinks: ["CUSTOM:https://crowdfunding.linuxfoundation.org/initiatives/jenkins", "CUSTOM:https://www.jenkins.io/donate/#why-donate"]
---

Repository Permissions Updater
==============================

About
-----

The Jenkins project hosts Maven artifacts such as core and plugin releases on [Artifactory](https://repo.jenkins-ci.org/).

Its permissions system is independent of GitHub's, and we limit which users (identified by the Jenkins LDAP account, same as wiki and JIRA) are allowed to upload which artifacts.

This repository contains both the definitions for Artifactory upload permissions in [YAML format](https://en.wikipedia.org/wiki/YAML), as well as the tool that synchronizes them to Artifactory.

**Note:** These permissions are specifically for _uploading_ artifacts to the Jenkins project's Maven repository. It is independent of GitHub repository permissions. You may have one without the other. Typically, you'll either have both, or just the GitHub repository access.

Requesting Permissions
----------------------

**Prerequisite**: You need to have logged in once to [Artifactory](https://repo.jenkins-ci.org/) and [Jira](https://issues.jenkins.io) with your Jenkins community account (this is the same as the account you would use to login to Jira) before you can be added to a permissions target.

To request…
