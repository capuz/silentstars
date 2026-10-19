---
repo: "murdos/easy-random-protobuf"
name: "easy-random-protobuf"
description: "Easy Random protobuf support"
readmeQualityOk: true
url: "https://github.com/murdos/easy-random-protobuf"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["easy-random", "protobuf", "java", "random", "random-generation", "object-mother"]
stars: 12
forks: 7
openIssues: 2
closedIssues: 2
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2020-12-05T23:39:55Z"
lastCommitAt: "2026-10-19T09:14:10Z"
lastReleaseAt: "2026-06-01T20:26:11Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 79
undervaluedScore: 48
maintainers: ["dependabot[bot]", "murdos", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/365aae7b01936dca099e3a3b376738980800b6718e34893e401e401927ca0e90/murdos/easy-random-protobuf"
discussionCount: 2
---

# easy-random-protobuf

Extension for [Easy Random library](https://github.com/j-easy/easy-random) adding support for [Protocol buffers](https://developers.google.com/protocol-buffers).

## Maven
```xml
<dependency>
    <groupId>io.github.murdos</groupId>
    <artifactId>easy-random-protobuf</artifactId>
    <version>1.0.0</version>
</dependency>
```

## Usage

This library declares a [SPI provider](https://github.com/j-easy/easy-random/wiki/Grouping-Randomizers), so Easy Random will detect it automatically.

If you want to explicitly use it:

```java
EasyRandomParameters parameters = new EasyRandomParameters()
        .randomizerRegistry(new ProtobufRandomizerRegistry());

EasyRandom easyRandom = new EasyRandom(parameters);

Person randomPerson = easyRandom.nextObject(Person.class); // With Person being a generated class from a .proto file
```

### Building

```
$ git clone https://github.com/murdos/easy-random-protobuf.git
$ cd easy-random-protobuf
$ mvn clean install
```
