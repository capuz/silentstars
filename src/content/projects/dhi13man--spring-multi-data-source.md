---
repo: "Dhi13man/spring-multi-data-source"
name: "spring-multi-data-source"
description: "To mitigate Spring's limitations with multiple data sources in a single service, this library provides two custom Java annotations that automatically generate all the required bean definition configurations, and package-segregated repositories, for each data source."
readmeQualityOk: true
url: "https://github.com/Dhi13man/spring-multi-data-source"
homepage: "https://central.sonatype.com/artifact/io.github.dhi13man/spring-multi-data-source"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["annotation-processor", "annotations", "database", "java", "maven", "spring", "spring-boot"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-06-18T11:37:48Z"
lastCommitAt: "2026-09-11T08:15:29Z"
lastReleaseAt: "2023-10-06T11:42:45Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 47
maintainers: ["Dhi13man", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/71bc897063f4c63876dceb8fef08395b2232909a2ce8a300c102451a77861fa7/Dhi13man/spring-multi-data-source"
discussionCount: 1
---

# spring-multi-data-source

Spring Boot has multiple limitations when using multiple data sources in a single service. This
project aims to solve those limitations by providing custom annotations that can be used to generate
the required Bean-providing configuration classes and repositories during the build process itself,
which the service can then use.

The best part is that the entirety of the generated code is clean, human-readable, and can be
directly carried over to the relevant packages of the main code if you no longer wish to be tied
down to this library in the future.

## Table of Contents

* [spring-multi-data-source](#spring-multi-data-source)
  * [Table of Contents](#table-of-contents)
  * [Introduction](#introduction)
  * [Annotations Provided](#annotations-provided)
    * [@EnableMultiDataSourceConfig](#enablemultidatasourceconfig)
      * [@EnableMultiDataSourceConfig.DataSourceConfig](#enablemultidatasourceconfigdatasourceconfig)
    * [@TargetSecondaryDataSource](#targetsecondarydatasource)
  * [Usage](#usage)
  * [Building from Source (Maven)](#building-from-source-maven)
  * [Removing Dependency on spring-multi-data-source without Losing…
