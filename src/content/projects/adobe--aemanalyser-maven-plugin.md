---
repo: "adobe/aemanalyser-maven-plugin"
name: "aemanalyser-maven-plugin"
description: "A Maven plugin used by developers who develop Java components for AEMaaCS (AEM as a Cloud Service) during their local Java builds to ensure that their components work correctly in when deployed to AEM as a Cloud Service."
readmeQualityOk: true
url: "https://github.com/adobe/aemanalyser-maven-plugin"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 30
forks: 26
openIssues: 22
closedIssues: 128
watchers: 12
contributors: 261
recentReleases: 0
createdAt: "2020-07-22T13:28:24Z"
lastCommitAt: "2026-10-29T10:21:14Z"
lastReleaseAt: "2022-04-13T15:43:01Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 55
maintainers: ["renovate[bot]", "cziegeler", "rombert"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6e097389b9cfe40a7b58576a099dd3d0f2896887ea42f3c550d700f4b30db91/adobe/aemanalyser-maven-plugin"
---

# AEM Analyser Maven Plugin

A Maven plugin used by developers of applications for AEM as a Cloud Service (AEMaaCS).

This plugin provides an easy way to run code quality checks. It ensures that the application works correctly when deployed to the cloud. It allows to run the same checks locally as in the Cloud Manager pipeline.

This plugin requires at least Apache Maven 3.8.1 and Java version 11 or higher. Read [this section](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/using-cloud-manager/create-application-project/build-environment-details#using-java-support) on how to change Cloud Manager's build pipeline to use Java 11.

> **_NOTE:_**  Please make sure to always use the latest version. Refrain from using any version below 1.6.4.

## Functionality

The plugin performs similar tasks as the Cloud Manager pipeline after the application is built and before it is deployed. It inspects the generated content packages and runs a set of checks (analysers) on the contents of the packages. By default it check against the latest available SDK version.

Most of the analysers are based on the [Apache Sling Feature Model Analyser…
