---
repo: "p32929/AndroidEasySQL-Library"
name: "AndroidEasySQL-Library"
description: "Chainable SQLite wrapper for Android (V1) — build tables and run CRUD without raw SQL. See EasiestSqlLibrary for V2"
readmeQualityOk: true
url: "https://github.com/p32929/AndroidEasySQL-Library"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [95]
topics: ["database", "android", "sqlite", "sqliteopenhelper", "sqlite-android", "android-library", "android-database", "crud", "java", "jitpack"]
stars: 32
forks: 8
openIssues: 0
closedIssues: 10
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2018-07-08T16:01:43Z"
lastCommitAt: "2026-11-17T14:37:20Z"
lastReleaseAt: "2019-03-30T14:37:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 78
undervaluedScore: 40
maintainers: ["p32929"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ed0b246aec016e5fca2d10fab8d4de5916265529ba5c96244ab5ab8975a2143/p32929/AndroidEasySQL-Library"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/p32929"]
---

# AndroidEasySQL-Library

A small SQLite library for Android. Create a table, then add, read, update and delete rows in a few chained calls, without writing SQL or a `SQLiteOpenHelper` of your own.

Version 2.0.0 is rewritten in Kotlin for modern Android, works the same from Java, and adds a few things that make it nicer to use: read every row as a simple list, count rows, and store `Long` and `Double` values.

## Screenshots

The sample app is a small notes app built with this library.

| Light | Dark |
|---|---|
|  |  |

## Why use it

1. **No SQL to write.** You describe the columns once, and the library builds the table.
2. **An `ID` column for free.** Every table gets an auto-increment primary key.
3. **Chained calls.** Add or update a whole row in one line.
4. **Works from Kotlin and Java.**
5. **Tiny.** No extra dependencies, Android 5.0 (API 21) and up.

## Install

Add JitPack to your repositories in `settings.gradle.kts`:

```kotlin
dependencyResolutionManagement {
    repositories {
        google()
        mavenCentral()
        maven("https://jitpack.io")
    }
}
```

Add the dependency:

```kotlin
dependencies {…
