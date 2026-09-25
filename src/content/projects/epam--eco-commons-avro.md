---
repo: "epam/eco-commons-avro"
name: "eco-commons-avro"
description: "Eco Commons Avro"
readmeQualityOk: true
url: "https://github.com/epam/eco-commons-avro"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 10
recentReleases: 0
createdAt: "2019-09-17T14:25:54Z"
lastCommitAt: "2026-09-25T09:02:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 70
undervaluedScore: 38
maintainers: ["qurs1ve", "siarhei-halavach"]
openGraphImageUrl: "https://opengraph.githubassets.com/144adcef69f5fea5ab22a66c54d9dded3b8dede6d6e440d0baef13642846b2ce/epam/eco-commons-avro"
---

# Eco Commons Avro

It's a library of utilities, helpers and higher-level APIs for the [Avro](https://avro.apache.org/) serialization system.

The library can be obtained from the Maven by adding the following dependency in the pom.xml:

```
<dependency>
    <groupId>com.epam.eco</groupId>
    <artifactId>commons-avro</artifactId>
    <version>${project.version}</version>
</dependency>
```

## Features

* XPath like DSL to query and manipulate entries of an Avro documents
* Traverse/modify/generate Avro schemas
* Convert/cast Avro documents
* Get detailed results of an Avro schema compatibility checks

## Build

```
git clone git@github.com:epam/eco-commons-avro.git
cd eco-commons-avro
mvn clean package
```

## License

Licensed under the [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0)
