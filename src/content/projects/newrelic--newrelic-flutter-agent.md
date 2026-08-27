---
repo: "newrelic/newrelic-flutter-agent"
name: "newrelic-flutter-agent"
description: "New Relic agent SDK for Flutter hybrid mobile apps"
readmeQualityOk: true
url: "https://github.com/newrelic/newrelic-flutter-agent"
language: "Dart"
languages: ["Dart"]
languagePcts: [83]
stars: 9
forks: 25
openIssues: 9
closedIssues: 75
watchers: 9
contributors: 39
recentReleases: 0
createdAt: "2022-02-07T19:20:39Z"
lastCommitAt: "2026-08-18T19:36:31Z"
lastReleaseAt: "2023-05-17T20:42:40Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 56
maintainers: ["github-actions[bot]", "ndesai-newrelic", "diegomtz5"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea4e55485a45a6744e8c46c60c05e496645eed60004beafbdeb8f1e90259f756/newrelic/newrelic-flutter-agent"
---

# New Relic Flutter Agent 

This agent allows you to instrument Flutter apps with help of native New Relic Android and iOS
agents. The New Relic SDKs collect crashes, network traffic, and other information for hybrid apps
using native components.

## Features

* Capture Dart errors
* Network Request tracking
* Distributed Tracing
* Future errors tracking
* Capture interactions and the sequence in which they were created
* Pass user information to New Relic to track user sessions
* Screen tracking via NavigationObserver
* Capture print and debug print statement as Logs
* Capture Offline Events and Exception
* Capture Background Reporting Events

## Current Support:

- Android API 24+
- iOS:

  | Agent Version | Minimum iOS Version |
  | :--- | :--- |
  | < 1.1.17 | iOS 10+ |
  | 1.1.17 – 1.1.21 | iOS 16+ |
  | >= 1.2.0 | iOS 15+ |

- Depends on New Relic iOS/XCFramework and Android agents
- **Flutter Web**: Compiles without errors (monitoring is no-op, use New Relic Browser Agent for web monitoring)

## Requirements

- Flutter ">= 2.5.0"
- Dart ">=2.16.2 <4.0.0"
- [IOS native…
