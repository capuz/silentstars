---
repo: "focus-shift/jollyday"
name: "jollyday"
description: "Jollyday - A worldwide public holidays library"
readmeQualityOk: true
url: "https://github.com/focus-shift/jollyday"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["java", "public-holiday-calender", "public-holidays", "bank-holidays", "holidays", "publicholidays", "calculate-holidays", "calendar", "holiday", "holiday-api"]
stars: 143
forks: 45
openIssues: 45
closedIssues: 465
watchers: 4
contributors: 74
recentReleases: 0
createdAt: "2022-03-30T09:15:20Z"
lastCommitAt: "2026-11-03T12:48:03Z"
lastReleaseAt: "2023-03-21T14:20:57Z"
status: "thriving"
tags: ["funded"]
healthScore: 97
undervaluedScore: 45
maintainers: ["derTobsch", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d030be128b84ea443da60141602e227ada732a11ca9d5d35ac1289fdfc2756c/focus-shift/jollyday"
fundingLinks: ["GITHUB:https://github.com/focus-shift"]
discussionCount: 11
---

# Jollyday [](https://github.com/focus-shift/jollyday/actions/workflows/build.yml) [](https://sonarcloud.io/summary/overall?id=focus-shift_jollyday) [](https://central.sonatype.com/artifact/de.focus-shift/jollyday-core/) [](https://www.javadoc.io/doc/de.focus-shift/jollyday-core)

Jollyday is a Java library to query public holidays. Currently, we support **over 230 countries**.

## How to use it

**Jollyday** is based on **Java 17** and can be used directly as dependency via maven or Gradle e.g.
The calculation basis of the public holidays for each country is based on an XML file and will be mapped via Jakarta XML Binding or Jackson.
If you already use one of these libraries in your project than just use the specific jollyday dependency.

  You need the core library, that defines all functionality and the api for you as developer.

  ```xml
  <dependency>
    <groupId>de.focus-shift</groupId>
    <artifactId>jollyday-core</artifactId>
    <version>${version}</version>
  </dependency>
  ```

  ### XML-Binding libraries

  Additionally, the XML-Binding library of your choice. At the moment we do support JAXB and Jackson,
  but in the future there could be more that these.…
