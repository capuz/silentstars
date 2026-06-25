---
repo: "palantir/gradle-shadow-jar"
name: "gradle-shadow-jar"
description: "Gradle plugin to precisely shadow either a dependency or its transitives"
url: "https://github.com/palantir/gradle-shadow-jar"
language: "Java"
languages: ["Java"]
languagePcts: [85]
topics: ["octo-correct-managed"]
stars: 25
forks: 3
openIssues: 6
closedIssues: 2
watchers: 254
contributors: 50
recentReleases: 0
createdAt: "2020-05-15T15:21:16Z"
lastCommitAt: "2026-06-25T01:32:35Z"
lastReleaseAt: "2021-12-12T01:44:27Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch"]
healthScore: 84
undervaluedScore: 33
maintainers: ["svc-excavator-bot", "svc-autorelease"]
openGraphImageUrl: "https://opengraph.githubassets.com/955c4bc433de9351a1ff88803a35f43c08e40e28bd9f0da57d292630fbf55515/palantir/gradle-shadow-jar"
---

</p>

# Gradle shadow jar ![Bintray](https://img.shields.io/bintray/v/palantir/releases/gradle-shadow-jar.svg) [![License](https://img.shields.io/badge/License-Apache%202.0-lightgrey.svg)](https://opensource.org/licenses/Apache-2.0)

This is a Gradle plugin that wraps the existing [`shadow`](https://github.com/GradleUp/shadow) Gradle plugin to
make producing *partially shaded jars* much easier. This means you can shade just one of your dependencies in a library or Gradle plugin to avoid dependency clashes. It is possible to produce fully shaded jars with this plugin, but it is not the aim of this plugin, and perf may be bad for shading a large dependency tree.

## Applying the plugin

To apply this plugin, *build.gradle* should look something like:

```diff
 buildscript {
     repositories {
         maven { url 'https://dl.bintray.com/palantir/releases' }
     }
 
     dependencies {
         classpath 'com.palantir.gradle.consistentversions:gradle-consistent-versions:<version>'
+        classpath 'com.palantir.gradle.shadow-jar:gradle-shadow-jar:<version>'
     }
     
     apply plugin: 'com.palantir.consistent-versions'
+    apply plugin: 'com.palantir.shadow-jar'
 }
```…
