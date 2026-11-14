---
repo: "FirebirdSQL/jaybird"
name: "jaybird"
description: "JDBC driver for Firebird"
readmeQualityOk: true
url: "https://github.com/FirebirdSQL/jaybird"
homepage: "https://firebirdsql.org/en/jdbc-driver/"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["firebird", "java", "jaybird", "jdbc", "jdbc-driver", "firebirdsql"]
stars: 114
forks: 26
openIssues: 32
closedIssues: 895
watchers: 17
contributors: 15
recentReleases: 0
createdAt: "2015-04-25T09:06:11Z"
lastCommitAt: "2026-11-14T10:46:02Z"
lastReleaseAt: "2015-05-31T13:42:34Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 92
undervaluedScore: 42
maintainers: ["mrotteveel", "FuriousFourier"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9e843f00ee54cda18e1c5890adefc8abe2149ec02888d3ad2039a01ae2a1734/FirebirdSQL/jaybird"
fundingLinks: ["GITHUB:https://github.com/mrotteveel", "TIDELIFT:https://tidelift.com/funding/github/maven/org.firebirdsql.jdbc:jaybird", "CUSTOM:https://firebirdsql.org/en/donate/"]
---

# Jaybird
Jaybird is a JDBC driver suite to connect to [Firebird](https://firebirdsql.org/) database servers.

## Getting Jaybird

A distribution zip is available from [releases](https://github.com/FirebirdSQL/jaybird/releases) and the Firebird website: <https://firebirdsql.org/en/jdbc-driver/>.

Jaybird is also available from [Maven Central](https://central.sonatype.com/artifact/org.firebirdsql.jdbc/jaybird):

For example:

```xml
<dependency>
    <groupId>org.firebirdsql.jdbc</groupId>
    <artifactId>jaybird</artifactId>
    <version>6.0.7</version>
</dependency>
```

If you want to use native or embedded (JDBC Type 2), add `jaybird-native` as a dependency:

```xml
<dependency>
    <groupId>org.firebirdsql.jdbc</groupId>
    <artifactId>jaybird-native</artifactId>
    <version>6.0.7</version>
</dependency>
```

For Windows, Linux, and macOS, you can add the [`org.firebirdsql.jdbc:fbclient`](https://github.com/mrotteveel/jaybird-fbclient) dependency on your classpath to provide the native libraries for the `native` protocol.
This dependency does *not* support Firebird embedded.

To enable *ChaCha64* wire encryption support for pure Java connections, add `chacha64-plugin` as a…
