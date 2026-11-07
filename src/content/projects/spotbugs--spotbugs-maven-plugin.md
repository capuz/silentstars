---
repo: "spotbugs/spotbugs-maven-plugin"
name: "spotbugs-maven-plugin"
description: "Maven Mojo Plug-In to generate reports based on the SpotBugs Analyzer"
readmeQualityOk: true
url: "https://github.com/spotbugs/spotbugs-maven-plugin"
homepage: "https://spotbugs.github.io/spotbugs-maven-plugin/"
language: "Groovy"
languages: ["Groovy", "HTML"]
languagePcts: [66, 29]
topics: ["maven-plugin", "spotbugs", "spotbugs-plugin"]
stars: 112
forks: 63
openIssues: 18
closedIssues: 161
watchers: 5
contributors: 14
recentReleases: 0
createdAt: "2014-01-06T00:20:37Z"
lastCommitAt: "2026-11-07T22:52:57Z"
lastReleaseAt: "2022-04-02T20:12:31Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 96
undervaluedScore: 52
maintainers: ["hazendaz", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f1a7dcfb65bd3a7ce6889d470c627f9413492253655db2b4f1800b714de089b/spotbugs/spotbugs-maven-plugin"
fundingLinks: ["GITHUB:https://github.com/hazendaz"]
discussionCount: 9
---

# Spotbugs Maven Plugin

Maven Mojo Plug-In to generate reports based on the [SpotBugs](https://github.com/spotbugs/spotbugs) Analyzer.

## Building spotbugs-maven-plugin Requirements

* Java 21+ is required to build the spotbugs maven plugin.
* Usage allowed to currently supported jdks (ie 21, 25, and 27).
* Maven 3.9.16 is required to build the spotbugs maven plugin.

## Running spotbugs-maven-plugin Requirements

* Java 17 or better is required for spotbugs analysis.
* Maven 3.8.9 or better is required for spotbugs analysis.

## Usage

The [SpotBugs documentation](https://spotbugs.readthedocs.io/en/latest/maven.html) describes the pom.xml modifications and Maven goals.

The [SpotBugs Maven documentation](https://spotbugs.github.io/spotbugs-maven-plugin/) directly describes the pom.xml modifications and Maven goals along with project documentation.

### Latest Snapshot

Please download latest [snapshot](https://oss.sonatype.org/content/repositories/snapshots/com/github/spotbugs/spotbugs-maven-plugin/).

### Override Spotbugs Version

Spotbugs aligns with spotbugs releases but normally does not have a hard requirement on this, therefore you can override the spotbugs version as…
