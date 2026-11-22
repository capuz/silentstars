---
repo: "MakarMS/text-probe"
name: "text-probe"
description: "Simple and extensible PHP library for text analysis and pattern matching, designed to help developers probe, parse, and manipulate text efficiently."
readmeQualityOk: true
url: "https://github.com/MakarMS/text-probe"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["addresses-parsing", "contributions-welcome", "datetime", "discord", "email", "good-first-contribution", "good-first-issue", "good-first-pr", "help-wanted", "mbstring"]
stars: 13
forks: 4
openIssues: 0
closedIssues: 29
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-07-23T22:08:45Z"
lastCommitAt: "2026-11-21T23:21:01Z"
lastReleaseAt: "2025-09-10T23:00:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 42
maintainers: ["MakarMS"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5d3a61159d193f0fb39716d6fb084443cd7024df6a7abcb16e2a74ceee19163/MakarMS/text-probe"
discussionCount: 0
---

# TextProbe

**TextProbe** is a simple and extensible PHP library for text analysis and pattern matching. Designed to help
developers probe, parse, and manipulate text efficiently using customizable rules and matchers.

## Features

- 🧠 Easy-to-use API for text matching and parsing
- 🔧 Extensible architecture — write your own matchers and rules
- 💡 Suitable for parsing logs, user input, or any structured text

## Installation

TextProbe supports PHP 8.1 through PHP 8.6 and requires the `mbstring` extension.
CI runs static analysis on PHP 8.6 and PHP CS Fixer on PHP 8.5.

You can install the library via [Composer](https://getcomposer.org/):

```bash
composer require makarms/text-probe
```

## Available Probes

TextProbe includes a wide range of built-in probes. Probes are fully extensible and support custom validation via the `IProbe` and `IValidator` interfaces.
See the [Probe Index](https://github.com/MakarMS/text-probe/blob/HEAD/docs/probes.md) for the full categorized list.
