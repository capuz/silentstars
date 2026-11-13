---
repo: "apache/pekko-quickstart-java.g8"
name: "pekko-quickstart-java.g8"
description: "A minimal seed template for an Apache Pekko in Java"
readmeQualityOk: true
url: "https://github.com/apache/pekko-quickstart-java.g8"
homepage: "https://pekko.apache.org/"
language: "Java"
languages: ["Java", "Scala"]
languagePcts: [75, 25]
topics: ["actor-model", "pekko", "reactive"]
stars: 7
forks: 4
openIssues: 0
closedIssues: 0
watchers: 10
contributors: 36
recentReleases: 0
createdAt: "2023-05-06T16:50:48Z"
lastCommitAt: "2026-11-13T11:27:19Z"
status: "thriving"
tags: ["hidden_gem", "community_watch"]
healthScore: 85
undervaluedScore: 60
maintainers: ["dependabot[bot]", "scala-steward", "pjfanning"]
openGraphImageUrl: "https://opengraph.githubassets.com/22d6d9edbb8ecacc76761fc9fef692e51cd69ad83ddc4e0b7d6e1752c6d362b3/apache/pekko-quickstart-java.g8"
---

# Apache Pekko Quickstart with Java

## Quickstart guide

The Hello World example illustrates Pekko basics. Within 30 minutes, you should be able to download and run the example and use this guide to understand how the example is constructed. This will get your feet wet, and hopefully inspire you to dive deeper into the wonderful world of Pekko!

## Giter8 template

It can also be used as a [Giter8][g8] template for Pekko with Java.

Prerequisites:
- JDK 8
- [sbt][sbt] 1.2.8 or higher ([download here][sbt_download])

Open a console and run the following command to apply this template:
 ```
sbt new apache/pekko-quickstart-java.g8
 ```

This template will prompt for the name of the project. Press `Enter` if the default values suit you.

Once inside the project folder, run the application with:
```
sbt run
```

This template also provides build descriptors for maven and gradle. You can use any of the following commands to run 
the application:
```
mvn compile exec:exec
```
or
```
gradle run
```

## Template license

Written in 2017 by Lightbend, Inc.

To the extent possible under law, the author(s) have dedicated all copyright and related
and neighboring rights to this template to…
