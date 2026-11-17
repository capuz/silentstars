---
repo: "p32929/EasiestSqlLibrary"
name: "EasiestSqlLibrary"
description: "Lazy, no-boilerplate SQLite wrapper library for Android — CRUD without writing a single SQL query"
readmeQualityOk: true
url: "https://github.com/p32929/EasiestSqlLibrary"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["android", "android-database", "android-library", "sqlite", "sqlite-android", "database", "crud", "java", "jitpack", "no-boilerplate"]
stars: 41
forks: 7
openIssues: 1
closedIssues: 6
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2020-03-28T10:24:15Z"
lastCommitAt: "2026-11-17T14:38:41Z"
lastReleaseAt: "2020-07-15T09:19:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 84
undervaluedScore: 36
maintainers: ["p32929"]
openGraphImageUrl: "https://opengraph.githubassets.com/66776eca4d4ebaf67c650ebf607cbeb69dd8f5fee9dc2def391c92f04ea1427f/p32929/EasiestSqlLibrary"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/p32929"]
---

# EasiestSqlLibrary

A small SQLite library for Android that lets you work with several tables at once without writing SQL. Describe your tables and columns once, then add, read, search, update and delete rows with one call each. Every table gets an auto-increment `ID` column for free.

Looking for something else?

1. A single-table library that is rewritten in Kotlin (2026): [AndroidEasySQL-Library](https://github.com/p32929/AndroidEasySQL-Library).
2. The same idea for Flutter: [EasiestdbFlutter](https://github.com/p32929/EasiestdbFlutter) or [easiestdb on pub.dev](https://pub.dev/packages/easiestdb).

## Installation
Add it in your root build.gradle at the end of repositories:
```gradle
allprojects {
  repositories {
    maven { url 'https://jitpack.io' }
  }
}
```

Add the dependency
```gradle
dependencies {
     implementation 'com.github.p32929:EasiestSqlLibrary:1.0.0.2'
}
```

## Basic Usage
Steps to follow:
1. Initialize
2. Add Tables and Columns
3. Call `doneAddingTables` method

After that, you can do all kinds of CRUD ( Create, Read, Update, Delete ) operations.

## Initialize the Database and the Tables
###### EasiestDB.init(Context context)
######…
