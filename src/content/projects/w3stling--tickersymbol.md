---
repo: "w3stling/tickersymbol"
name: "tickersymbol"
description: "Java library for ticker symbol lookup."
readmeQualityOk: true
url: "https://github.com/w3stling/tickersymbol"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["ticker", "ticker-symbol", "isin", "api", "java-library", "cusip", "sedol", "instrument", "symbol", "bic"]
stars: 8
forks: 5
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2018-06-09T10:54:28Z"
lastCommitAt: "2026-07-23T06:17:02Z"
lastReleaseAt: "2025-01-03T07:29:23Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 83
undervaluedScore: 66
maintainers: ["w3stling", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8273384cb3d5f4aa6ef97fb23c249c95b40f52eece950cb734a00f4e9c702f92/w3stling/tickersymbol"
---

Ticker Symbol Search
====================

> **Note** - from version 3.0.0:
> * New Java package name
> * New group ID in Maven / Gradle dependency declaration
> * Moved repository from `JCenter` to `Maven Central Repository`

A ticker symbol is an arrangement of characters (usually letters) representing a particular security listed on an
exchange or otherwise traded publicly. When a company issues securities to the public marketplace, it selects an
available ticker symbol for its securities that investors use to place trade orders.

This Java library makes it easier to automate ticker symbol lookups.
Requires at minimum Java 11.

Examples
--------
### Search ticker symbol by security identifier ISIN, CUSIP, or SEDOL.
Same as example above but searching for Ericsson B with ISIN number.
```java
TickerSymbolSearch tickerSymbol = new TickerSymbolSearch();
List<TickerSymbol> symbols = tickerSymbol.searchByIdentifier("SE0000108656");
```

Download
--------

Download [the latest JAR][1] or grab via [Maven][2] or [Gradle][3].

### Maven setup
Add dependency declaration:
```xml
<project>
    ...
    <dependencies>
        <dependency>
            <groupId>com.apptasticsoftware</groupId>…
