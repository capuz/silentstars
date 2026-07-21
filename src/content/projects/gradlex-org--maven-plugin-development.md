---
repo: "gradlex-org/maven-plugin-development"
name: "maven-plugin-development"
description: "Gradle plugin for building Apache Maven plugins"
readmeQualityOk: true
url: "https://github.com/gradlex-org/maven-plugin-development"
homepage: "https://gradlex.org/maven-plugin-development/"
language: "Groovy"
languages: ["Groovy", "Java", "HTML"]
languagePcts: [44, 32, 23]
topics: ["gradle-plugin", "maven"]
stars: 38
forks: 9
openIssues: 10
closedIssues: 53
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2020-03-22T11:20:16Z"
lastCommitAt: "2026-07-21T06:11:25Z"
lastReleaseAt: "2025-01-13T09:20:35Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 91
undervaluedScore: 46
maintainers: ["renovate[bot]", "britter"]
openGraphImageUrl: "https://opengraph.githubassets.com/5bb8ab9af0667c6823f092fd31cf2818b090aeef1769fdaddee91c44f0cc56e8/gradlex-org/maven-plugin-development"
---

# Maven Plugin Development Gradle Plugin

This plugin aims to fill the tiny gap for people who need to create an [Apache Maven](https://maven.apache.org) plugin from a Gradle build.
To do this the plugin wraps around the [Maven Plugin Tools API](https://maven.apache.org/plugin-tools/) and feeds it with the right inputs from the Gradle build.

Compatible with Gradle 7.5 or later.

## Features

- Automatic generation of a maven plugin descriptor containing all mojos in the selected source set (by default the plugin looks for mojo implementations in the main source set)
- Support for annotation and JavaDoc tag based mojo implementations
- Optional generation of a help mojo implementation

## Usage

Please see the [plugin documentation](https://gradlex.org/maven-plugin-development).
For a self-contained example please the [example folder](https://github.com/gradlex-org/maven-plugin-development/tree/main/sample).

## Contribution policy

Contributions via GitHub pull requests are gladly accepted from their original author. Along with any pull requests, please state that the contribution is your original work and that you license the work to the project under the project's open source…
