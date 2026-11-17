---
repo: "ExpediaGroup/waggle-dance"
name: "waggle-dance"
description: "Hive federation service. Enables disparate tables to be concurrently accessed across multiple Hive deployments."
readmeQualityOk: true
url: "https://github.com/ExpediaGroup/waggle-dance"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["hive", "hive-metastore", "federation", "metastore", "oss-portal-listed"]
stars: 289
forks: 79
openIssues: 13
closedIssues: 98
watchers: 18
contributors: 29
recentReleases: 0
createdAt: "2017-07-17T15:19:58Z"
lastCommitAt: "2026-11-17T14:45:29Z"
lastReleaseAt: "2022-01-19T11:55:30Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 39
maintainers: ["eg-oss-ci", "jamespfaulkner", "javsanbel2"]
openGraphImageUrl: "https://opengraph.githubassets.com/1311b4ed60ea4dcbd5f481a75fc41b9e764b4016aa965b056cdcfcb7ec8ac953/ExpediaGroup/waggle-dance"
discussionCount: 6
---

## Start using

You can obtain the Waggle Dance TGZ and RPM packages from [GitHub Releases](https://github.com/ExpediaGroup/waggle-dance/releases). From 4.2.0 they are no longer published to Maven Central; earlier versions remain available there. The Waggle Dance libraries are published to Maven Central:

 

## Overview

Waggle Dance is a request routing Hive metastore proxy that allows tables to be concurrently accessed across multiple Hive deployments. It was created to tackle the appearance of dataset silos that arose as our large organization gradually migrated from monolithic on-premises clusters to cloud based platforms.

In short, Waggle Dance provides a unified end point with which you can describe, query, and join tables that may exist in multiple distinct Hive deployments. Such deployments may exist in disparate regions, accounts, or clouds (security and network permitting). Dataset access is not limited to the Hive query engine, and should work with any Hive metastore enabled platform. We've been successfully using it with Spark for example.

We also use Waggle Dance to apply a simple security layer to cloud based platforms such as Qubole, DataBricks, and EMR. These…
