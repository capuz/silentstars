---
repo: "mapstruct/mapstruct-idea"
name: "mapstruct-idea"
description: "An IntelliJ IDEA plugin for working with MapStruct"
readmeQualityOk: true
url: "https://github.com/mapstruct/mapstruct-idea"
language: "Java"
languages: ["Java"]
languagePcts: [97]
topics: ["mapstruct", "intellij", "java", "mapstruct-plugin", "mapping"]
stars: 167
forks: 40
openIssues: 34
closedIssues: 122
watchers: 10
contributors: 13
recentReleases: 0
createdAt: "2017-08-05T11:32:24Z"
lastCommitAt: "2026-07-04T22:20:48Z"
lastReleaseAt: "2021-08-22T11:46:46Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded"]
healthScore: 79
undervaluedScore: 27
maintainers: ["hduelme", "thunderhook", "filiphr"]
openGraphImageUrl: "https://opengraph.githubassets.com/91f7961b8fa458a507c690df7c1b8ef5694f4dbb4f6d8f9bd9054b8bffc2cc01/mapstruct/mapstruct-idea"
fundingLinks: ["GITHUB:https://github.com/mapstruct", "OPEN_COLLECTIVE:https://opencollective.com/mapstruct"]
---

# mapstruct-idea

An IntelliJ IDEA plugin for working with MapStruct

* [What is MapStruct?](#what-is-mapstruct)
* [Features](#features)
* [Requirements](#requirements)
* [Building from Source](#building-from-source)
* [Licensing](#licensing)

## What is MapStruct?

MapStruct is a Java [annotation processor](https://docs.oracle.com/javase/6/docs/technotes/guides/apt/index.html) for the generation of type-safe and performant mappers for Java bean classes.

To learn more about MapStruct have a look at the [mapstruct](https://github.com/mapstruct/mapstruct) repository or the [website](https://mapstruct.org/)

## Features

* Code completions
  * Completion of `target` and `source` properties in `@Mapping` annotation (nested properties also work)
  * Completion of `target` and `source` properties in `@ValueMapping` annotation
  * Completion of `componentModel` in `@Mapper` and `@MapperConfig` annotations
  * Completion of `qualifiedByName` in `@Mapping` annotation
* Go To Declaration for properties in `target` and `source` to setters / getters
* Go To Declaration for `Mapping#qualifiedByName`
* Find usages of properties in `target` and `source` and find usages of setters / getters in…
