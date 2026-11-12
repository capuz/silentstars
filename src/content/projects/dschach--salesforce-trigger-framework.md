---
repo: "dschach/salesforce-trigger-framework"
name: "salesforce-trigger-framework"
description: "A new trigger handler framework based on Kevin O'Hara's version, with some performance improvements and full documentation"
readmeQualityOk: true
url: "https://github.com/dschach/salesforce-trigger-framework"
homepage: "https://davidschach.com/salesforce-trigger-framework/"
language: "Apex"
languages: ["Apex", "JavaScript"]
languagePcts: [69, 28]
topics: ["apex", "trigger", "framework", "salesforce", "salesforcedx"]
stars: 34
forks: 7
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 6
createdAt: "2022-01-03T00:30:48Z"
lastCommitAt: "2026-11-12T05:37:01Z"
lastReleaseAt: "2026-10-30T01:30:25Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 63
maintainers: ["dschach", "dependabot[bot]", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/443901303/d664e206-ec4f-4b89-ac6f-e218abf8b37d"
---

# Salesforce Trigger Framework

- [Credit](#credit)
- [Documentation](#documentation)
  - [Changelog](#changelog)
- [Overview](#overview)
- [What Is New in Version 2.0](#what-is-new-in-version-20)
- [Usage](#usage)
  - [Trigger Handler](#trigger-handler)
  - [Pass the Handler Class to super()](#pass-the-handler-class-to-super)
  - [Trigger](#trigger)
  - [Data Access](#data-access)
- [Features](#features)
  - [How run() Works](#how-run-works)
  - [Bypass API](#bypass-api)
  - [Check Bypass Status](#check-bypass-status)
  - [Global Bypass](#global-bypass)
  - [Bypass Permission](#bypass-permission)
  - [Set Bypass](#set-bypass)
  - [Max Loop Count](#max-loop-count)
  - [Debug Statements](#debug-statements)
  - [Send the Messages to Your Logging Framework](#send-the-messages-to-your-logging-framework)
  - [Universal Action](#universal-action)
- [Test a Handler Without DML](#test-a-handler-without-dml)
- [Overridable Methods](#overridable-methods)
- [Upgrade From Version 1](#upgrade-from-version-1)
  - [Changes for Handlers and Triggers](#changes-for-handlers-and-triggers)
  - [Changes for Tests](#changes-for-tests)
  - [Deprecated Members](#deprecated-members)
- [API…
