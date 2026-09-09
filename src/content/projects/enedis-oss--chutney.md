---
repo: "Enedis-OSS/chutney"
name: "chutney"
description: "Automated testing tools for acceptance tests. Write scenarios with a Kotlin DSL, execute them, and monitor their execution through a web application."
readmeQualityOk: true
url: "https://github.com/Enedis-OSS/chutney"
homepage: "https://enedis-oss.github.io/chutney/"
language: "Java"
languages: ["Java"]
languagePcts: [65]
stars: 7
forks: 2
openIssues: 2
closedIssues: 21
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2024-11-20T14:43:31Z"
lastCommitAt: "2026-09-09T08:18:48Z"
lastReleaseAt: "2025-08-12T11:23:17Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 83
maintainers: ["KarimGl", "dependabot[bot]", "joelgaspard"]
openGraphImageUrl: "https://opengraph.githubassets.com/e89e08fe81012c8892744f70ecee2b509ff551385d708851c920666b89b98e96/Enedis-OSS/chutney"
---

# <img src="docs/docs/img/logo.png" width="50" style="vertical-align:bottom"/>  Chutney
## Spice up your spec , Better `taste` your app !

-------------

## Summary

* [Introduction](#introduction)
* [Demo](#demo)
* [Installation](#installation)
* [Scenario Example](#scenario_example)
* [Documentation](#documentation)
* [Contributing](#contrib)
* [Support](#support)
* [Contributors](#contributors)

-------------

## <a name="introduction"></a> Introduction
Chutney aims to **test deployed software** in order to validate functional requirements.

Chutney scenarios are **declarative** written with a **kotlin dsl**. They provide functional requirements and technical details (needed for automation) in a single view.

Chutney is also released as a standalone application including a test execution engine and a web front end to consult test reports.  

Technical details are provided by generic [Actions](https://github.com/Enedis-OSS/chutney/blob/main/chutney/action-spi/src/main/java/fr/enedis/chutney/action/spi/Action.java) (such as HTTP, AMQP, MongoDB, Kafka, Selenium, etc.)  
Those Actions are extensions, and you can easily develop yours, even proprietary or non-generic one, and include…
