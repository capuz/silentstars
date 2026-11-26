---
repo: "YaminT/Dart-Persian-Date"
name: "Dart-Persian-Date"
description: "Persian (Jalali, Shamsi, Solar Hijri) and lunar Hijri calendars for Dart and Flutter: conversion, date arithmetic, parsing, formatting with Persian names and digits; Iranian holidays."
readmeQualityOk: true
url: "https://github.com/YaminT/Dart-Persian-Date"
homepage: "https://nodets.com/jalali/"
language: "Dart"
languages: ["Dart"]
languagePcts: [87]
topics: ["calendar", "dart", "dart-package", "date", "flutter", "jalali", "persian", "shamsi"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 7
createdAt: "2018-07-10T14:29:12Z"
lastCommitAt: "2026-11-26T15:25:59Z"
lastReleaseAt: "2026-10-26T15:06:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 98
undervaluedScore: 97
maintainers: ["YaminT"]
openGraphImageUrl: "https://opengraph.githubassets.com/09ee15bf22e91cb0c64f5077866c0b7ee8d08dca7d95974bc2ff16a6db07b0bb/YaminT/Dart-Persian-Date"
---

# jalali_date

Persian (Jalali, Shamsi) calendar for Dart.
It converts between Gregorian and Jalali dates in both directions, knows leap years and month lengths, does date arithmetic, parses and formats dates with Persian month and weekday names and Persian digits, and has everything a date picker needs: Saturday-first weeks, month anchors, day ranges, and bounds.
It reads dates written with a pattern or with month names, writes relative time (`3 روز پیش`), dates in Persian words, and parts of the day (`صبح`, `عصر`), counts whole months and years, and gives the moment of Nowruz (سال تحویل).
The conversion is a port of [jalaali-js](https://github.com/jalaali/jalaali-js), so century years and leap cycles are handled correctly.
It also gives the lunar Hijri date as Iran's official calendar counts it, and writes and reads years in the Shahanshahi numbering when you ask for it.
