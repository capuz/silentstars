---
repo: "yandex/evgen"
name: "evgen"
description: "Code generation for event logging"
originalDescription: "Code generation for event logging"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/yandex/evgen"
language: "TypeScript"
languages: ["TypeScript", "Handlebars"]
languagePcts: [32, 21]
stars: 18
forks: 0
openIssues: 1
closedIssues: 0
watchers: 6
contributors: 8
recentReleases: 0
createdAt: "2022-09-14T09:27:49Z"
lastCommitAt: "2026-11-20T12:21:03Z"
lastReleaseAt: "2023-10-23T15:24:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 45
undervaluedScore: 23
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/9537857c90b5c50926c9fb1a9d5bdaee1dec8b0ea51d6f2360d0edd9319c94a2/yandex/evgen"
---

# EvGen (Event Generator)

EvGen is a tool for generating analytics event code for various platforms. It lets you create a single event description in YAML format and automatically generate code in different programming languages, as well as documentation in various formats.

## Usage

Node.js and pnpm are required.

```bash
pnpm install
pnpm evgen -e events -c evgen.yaml
```

## Supported languages

- Kotlin
- Java
- Swift
- TypeScript
- Dart
- C#

## Contents

- [Core concepts](#основные-концепции)
- [evgen.yaml configuration file](#конфигурационный-файл-evgenyaml)
- [events.yaml event file](#файл-событий-eventsyaml)
- [Data types](#типы-данных)
- [Global types (.GlobalTypes)](#глобальные-типы-globaltypes)
- [Interfaces](#интерфейсы)
- [Platform-dependent parameters](#платформозависимые-параметры)
- [Templates](#шаблоны)
- [Usage examples](#примеры-использования)
- [How it works](#логика-работы)

## Core concepts

EvGen works with two main parameters:

1. **events (or events.yaml)** - a YAML file or a folder with YAML files containing events
2. **evgen.yaml** - configuration for code and documentation generation
