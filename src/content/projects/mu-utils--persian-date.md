---
repo: "mu-utils/persian-date"
name: "persian-date"
description: "A Persian date to convert from gregorian and behavie like a date in Javascript project."
readmeQualityOk: true
url: "https://github.com/mu-utils/persian-date"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-08-15T19:19:13Z"
lastCommitAt: "2026-09-16T08:36:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 41
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/d2fc3d524169256001b7c472a7f11cbe7500957f2886aa9a95893ee47a2c34c6/mu-utils/persian-date"
---

# PersianDate

A JavaScript/TypeScript library for working with Persian (Jalali) dates, extending the native JavaScript Date object.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API](#api)
  - [Constructor](#constructor)
  - [Methods](#methods)
  - [Format Template Tokens](#format-template-tokens)
- [Algorithm](#algorithm)
- [Examples](#examples)
- [License](#license)

## Installation

```bash
npm install @mu-utils/persian-date
```

## Usage

```javascript
import PersianDate from "@mu-utils/persian-date";

const persianDate = new PersianDate();
console.log(persianDate.format("YYYY/MM/DD"));
console.log(persianDate.format("YYYY/MM/DD HH:mm:ss"));
```

## Features

- Supports both Persian (Jalali) and Gregorian calendars
- Extends the native JavaScript `Date` object seamlessly
- Flexible date formatting with escaping support (`[Text] YYYY/MM/DD`)
- Calendar-aware date arithmetic (`add`, `subtract`) supporting flexible argument orders
- Date comparison and difference calculation across units (`diff`)
- Leap year detection for both Persian (astronomical 2820-year cycle) and Gregorian calendars
- Automatic state synchronization on…
