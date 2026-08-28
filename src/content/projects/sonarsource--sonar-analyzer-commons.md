---
repo: "SonarSource/sonar-analyzer-commons"
name: "sonar-analyzer-commons"
description: "Logic useful for a language plugin"
readmeQualityOk: true
url: "https://github.com/SonarSource/sonar-analyzer-commons"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["language-team"]
stars: 28
forks: 14
openIssues: 1
closedIssues: 75
watchers: 25
contributors: 74
recentReleases: 0
createdAt: "2017-07-17T15:32:22Z"
lastCommitAt: "2026-08-28T15:36:31Z"
lastReleaseAt: "2021-10-26T08:02:11Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 58
maintainers: ["renovate[bot]", "daniel-teuchert-sonarsource", "vdiez"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0759c68d3288e4c8ed576307f05daba7cf315b70d9402964b1b50b152776174/SonarSource/sonar-analyzer-commons"
---

# SonarSource Analyzers Commons Libraries

## Modules

* [commons](https://github.com/SonarSource/sonar-analyzer-commons/blob/HEAD/commons) Logic useful for a language plugin
* [recognizers](https://github.com/SonarSource/sonar-analyzer-commons/blob/HEAD/recognizers) Logic useful for detecting commented out code
* [test-commons](https://github.com/SonarSource/sonar-analyzer-commons/blob/HEAD/test-commons) Logic useful to test a language analyzer
* [xml-parsing](https://github.com/SonarSource/sonar-analyzer-commons/blob/HEAD/xml-parsing) Logic useful to analyze and test checks for XML file
* [test-xml-parsing](https://github.com/SonarSource/sonar-analyzer-commons/blob/HEAD/test-xml-parsing) Logic useful to test XML parsing and XML-related rules
* [regex-parsing](https://github.com/SonarSource/sonar-analyzer-commons/blob/HEAD/regex-parsing) Logic used to parse regular expressions (currently only for Java)

## Build
```
mvn clean install
```

### License
Copyright 2009-2023 SonarSource.
Licensed under the [GNU Lesser General Public License, Version 3.0](http://www.gnu.org/licenses/lgpl.txt)
