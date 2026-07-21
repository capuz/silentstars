---
repo: "cucumber/cucumber-jvm-starter-maven-java"
name: "cucumber-jvm-starter-maven-java"
description: "This is the simplest possible setup for Cucumber-JVM using Java with Maven."
readmeQualityOk: true
url: "https://github.com/cucumber/cucumber-jvm-starter-maven-java"
language: "Java"
languages: ["Java"]
languagePcts: [89]
stars: 499
forks: 642
openIssues: 3
closedIssues: 27
watchers: 98
contributors: 53
recentReleases: 0
createdAt: "2014-03-12T10:06:15Z"
lastCommitAt: "2026-07-20T23:57:07Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 93
undervaluedScore: 35
maintainers: ["renovate[bot]", "mpkorstanje", "IshaParihariya"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f70cd462d73e3d9585816e2235fe27654338ad9edcb72ef1f851295af71cc9a/cucumber/cucumber-jvm-starter-maven-java"
fundingLinks: ["GITHUB:https://github.com/cucumber", "OPEN_COLLECTIVE:https://opencollective.com/cucumber"]
---

# Cucumber-JVM Starter: Java with Maven

This is the simplest possible setup for Cucumber-JVM using Java with Maven.
There is nothing fancy like a webapp or browser testing. All this does is to
show you how to set up and run Cucumber! If this is your first time using
Cucumber have a look at the [10-minute tutorial](https://cucumber.io/docs/guides/10-minute-tutorial)
first. 

To write assertions the project comes with [AssertJ](https://assertj.github.io/doc/#assertj-core-assertions-guide)
included.

## Get the code

Git:

    git clone https://github.com/cucumber/cucumber-jvm-starter-maven-java.git
    cd cucumber-jvm-starter-maven-java

Or [download a zip](https://github.com/cucumber/cucumber-jvm-starter-maven-java/archive/main.zip) file.

## Run the tests

Open a command window and run:

On macOS/Linux:

```shell
./mvnw test
```

On Windows PowerShell:

```powershell
.\mvnw.cmd test
```

This runs Cucumber features using Cucumber's JUnit Platform Engine. The `Suite`
annotation on the `RunCucumberTest` class tells JUnit to kick off Cucumber.

```text
[INFO] Running com.example.project.RunCucumberTest

Scenario: a few cukes                 #…
