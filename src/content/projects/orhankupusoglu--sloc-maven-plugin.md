---
repo: "OrhanKupusoglu/sloc-maven-plugin"
name: "sloc-maven-plugin"
description: "Maven plugin for counting source lines of code (SLOC)"
readmeQualityOk: true
url: "https://github.com/OrhanKupusoglu/sloc-maven-plugin"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["apache-maven", "maven-plugin", "maven", "sloc", "lines-of-code"]
stars: 20
forks: 4
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 4
createdAt: "2018-11-14T20:23:12Z"
lastCommitAt: "2026-11-17T12:21:16Z"
lastReleaseAt: "2026-11-16T14:45:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 69
maintainers: ["OrhanKupusoglu", "spannm"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdf028d60730f3c7bee6d0370587ed0331bfb0bf4870dd61c03d63ebbc2a0ac5/OrhanKupusoglu/sloc-maven-plugin"
---

# Source Lines of Code Maven Plugin

This [Apache Maven](https://maven.apache.org/) plugin counts [source lines of code](https://en.wikipedia.org/wiki/Source_lines_of_code) in a given Maven project.

This plugin is available on the [Maven Central Repository](https://central.sonatype.com/artifact/io.github.orhankupusoglu/sloc-maven-plugin), and therefore can be called from the root directory of Java projects without explicit installation:
```
$ cd guava/
$ mvn io.github.orhankupusoglu:sloc-maven-plugin:sloc
```

A well-known SLOC tool is [cloc](https://github.com/AlDanial/cloc) by *Al Danial*.

## Overview

The plugin is a standard [Apache Maven plugin](https://maven.apache.org/plugin-developers/index.html), it requires Java 8 or newer and a recent Maven 3:

```
$ cd sloc-maven-plugin
$ mvn clean install
```

The plugin finds each pom.xml's source codes and reports for each source file:
- Package name
- File name
- Type: [src, test, int-test]
- Blank lines
- JavaDoc lines
- Comment lines
- Code lines
- Total lines

The output is displayed in a formatted table, similar to [MySQL Shell](https://dev.mysql.com/doc/refman/8.0/en/selecting-all.html)'s table outputs.

The package names…
