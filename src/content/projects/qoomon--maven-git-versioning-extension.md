---
repo: "qoomon/maven-git-versioning-extension"
name: "maven-git-versioning-extension"
description: "This extension will set project version, based on current Git branch or tag."
readmeQualityOk: true
url: "https://github.com/qoomon/maven-git-versioning-extension"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["git", "versioning", "tag", "branch", "repository", "generated", "maven-plugin", "maven-extension", "maven", "gradle"]
stars: 339
forks: 97
openIssues: 18
closedIssues: 137
watchers: 7
contributors: 34
recentReleases: 0
createdAt: "2016-11-04T18:57:51Z"
lastCommitAt: "2026-10-09T10:51:23Z"
lastReleaseAt: "2019-02-27T20:37:11Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 86
undervaluedScore: 39
maintainers: ["qoomon", "dependabot[bot]", "perlan"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9cf45718e6b2ae50059e206343e57082375aabf95adaa37069495c3ad3aadc1/qoomon/maven-git-versioning-extension"
---

# Maven Git Versioning Extension [](https://github.com/qoomon/starlines)

**ℹ Also available as [Gradle Plugin](https://github.com/qoomon/gradle-git-versioning-plugin)**

This extension can virtually set project version and properties, based on current **Git status**

ℹ **No POM files will be modified, version and properties are modified in memory only**

* Get rid of…
    * Maven Release Plugin; see [Maven Release Plugin: The Final Nail in the Coffin](https://axelfontaine.com/blog/final-nail.html)
    * editing `pom.xml`
    * managing project versions within files and Git tags
    * git merge conflicts

#### Requirements
* ⚠️ minimal required java version is `11`
* ⚠️ minimal required maven version is `3.6.4`

## Usage

⚠️ If you're using **IntelliJ** have a look at [IntelliJ Setup Instructions](#intellij---multi-modules-projects)

### Add Extension to Maven Project

create or update `${rootProjectDir}/.mvn/extensions.xml` file

```xml

<extensions xmlns="http://maven.apache.org/EXTENSIONS/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://maven.apache.org/EXTENSIONS/1.0.0 http://maven.apache.org/xsd/core-extensions-1.0.0.xsd">…
