---
repo: "appleboy/drone-jenkins"
name: "drone-jenkins"
description: "Drone plugin for trigger Jenkins jobs."
readmeQualityOk: true
url: "https://github.com/appleboy/drone-jenkins"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["jenkins", "docker", "drone", "drone-plugin"]
stars: 43
forks: 19
openIssues: 0
closedIssues: 13
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2016-10-15T00:53:03Z"
lastCommitAt: "2026-08-15T04:03:01Z"
lastReleaseAt: "2024-10-06T00:36:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 92
undervaluedScore: 38
maintainers: ["appleboy"]
openGraphImageUrl: "https://opengraph.githubassets.com/ada754aa2bd87b0e1747a7e4824ff0678d0387f058d5a3dd88714902d823f0d4/appleboy/drone-jenkins"
fundingLinks: ["CUSTOM:https://www.paypal.me/appleboy46"]
---

# drone-jenkins

[English](https://github.com/appleboy/drone-jenkins/blob/HEAD/README.md) | [繁體中文](https://github.com/appleboy/drone-jenkins/blob/HEAD/README.zh-TW.md) | [简体中文](https://github.com/appleboy/drone-jenkins/blob/HEAD/README.zh-CN.md)

A CLI tool and CI/CD plugin for triggering [Jenkins](https://jenkins.io/) jobs. Works with [GitHub Actions](https://github.com/features/actions), [GitLab CI](https://docs.gitlab.com/ee/ci/), [Gitea Action](https://docs.gitea.com/usage/actions/overview), and any platform that supports Docker containers or shell commands.

## Why drone-jenkins?

In modern enterprise environments, teams often adopt different CI/CD platforms based on their specific needs, project requirements, or historical decisions. It's common to find:

- **Multiple CI platforms coexisting**: Some teams use Jenkins for its extensive plugin ecosystem, while others prefer GitHub Actions or GitLab CI for their simplicity and container-native approach.
- **Legacy systems integration**: Organizations with established Jenkins pipelines need to integrate with newer CI/CD workflows without rewriting everything.
- **Cross-team collaboration**: Different departments may standardize…
