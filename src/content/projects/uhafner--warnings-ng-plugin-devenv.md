---
repo: "uhafner/warnings-ng-plugin-devenv"
name: "warnings-ng-plugin-devenv"
description: "Development environment for Jenkins' Warnings Next Generation Plugin"
readmeQualityOk: true
url: "https://github.com/uhafner/warnings-ng-plugin-devenv"
language: "Shell"
languages: ["Shell", "Dockerfile"]
languagePcts: [78, 20]
topics: ["jenkins", "plugins", "developer-tools", "development-environment", "static-analysis"]
stars: 22
forks: 42
openIssues: 1
closedIssues: 10
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2019-03-06T07:28:41Z"
lastCommitAt: "2026-10-29T14:06:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 82
undervaluedScore: 50
maintainers: ["uhafner"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ee2bd2799e4069993d5276c96d5368c3a5e9ce3b3339f9e377971bdace6704c/uhafner/warnings-ng-plugin-devenv"
---

# Development Environment for Jenkins Plugins 

This docker-based development environment is for new contributors of the Jenkins Warnings and Coverage Plugins to reduce the initial ramp-up time. It consists of the following parts:

- Scripts to check out all modules of these Jenkins plugins from GitHub. Depending on the part where you want to contribute to, you usually work with just one of these modules. However, it simplifies the development if all modules are already part of the workspace. Then you can switch at any time to one of the other modules.
- Docker-based Jenkins controller that has all required plugins installed to see these plugins in action. This Jenkins controller is already configured properly using [JCasC](https://github.com/jenkinsci/configuration-as-code-plugin) to build Java modules on a Linux based agent (also provided as docker container). It already contains some jobs that use all of these plugins (tests, coverage, static analysis).
- IntelliJ project that configures these plugins as Maven modules. This project contains presets of my [coding style](https://github.com/uhafner/codingstyle) and some other helpful configurations. Especially, it has runners…
