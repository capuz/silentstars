---
repo: "thunderz99/java-cosmos"
name: "java-cosmos"
description: "A simple java client for Azure CosmosDB 's SQL API. Which is an opinionated library aimed at ease of use for CRUD and find (aka. query) for RESTful API."
url: "https://github.com/thunderz99/java-cosmos"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 15
forks: 4
openIssues: 1
closedIssues: 3
watchers: 2
contributors: 7
recentReleases: 1
createdAt: "2020-09-12T06:16:24Z"
lastCommitAt: "2026-06-27T06:23:31Z"
lastReleaseAt: "2026-05-30T08:27:45Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 83
undervaluedScore: 58
maintainers: ["dependabot[bot]", "thunderz99"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ce25a9bc3f0f24ab71021d0147e5bba8923ddbb541c31e9e5646a936ad2f7f1/thunderz99/java-cosmos"
---

# java-cosmos: A lightweight Azure CosmosDB client for Java

java-cosmos is a client for Azure CosmosDB 's SQL API (also called documentdb formerly). Which is an opinionated library aimed at ease of use for CRUD and find (aka. query).

## Background

* Microsoft's official Java CosmosDB client is verbose to use

## Disclaimer

* This is an alpha version, and features are focused to CRUD and find at present.
* Mininum supported Java runtime: JDK 17

## Quickstart

### Add dependency

```xml

<dependency>
  <groupId>com.github.thunderz99</groupId>
    <artifactId>java-cosmos</artifactId>
    <version>0.8.30</version>
</dependency>
```

### Start programming

```java
import io.github.thunderz99.cosmos.Cosmos

import java.util.ArrayList;

public static void main(String[]args){
        var cosmosAccount =new CosmosBuilder().withConnectionString(System.getenv("YOUR_CONNECTION_STRING")).build();
        var db = cosmosAccount.getDatabase("Database1");
        db.upsert("Collection1",new User("id011","Tom","Banks"))

        var cond=Condition.filter(
        "id","id010", // id equal to 'id010'
        "lastName","Banks", // last name equal to Banks
        "firstName !=","Andy", // not…
