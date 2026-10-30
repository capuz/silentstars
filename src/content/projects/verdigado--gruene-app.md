---
repo: "verdigado/gruene-app"
name: "gruene-app"
description: "B90/DIE GRÜNEN App"
readmeQualityOk: true
url: "https://github.com/verdigado/gruene-app"
language: "Dart"
languages: ["Dart"]
languagePcts: [98]
stars: 38
forks: 7
openIssues: 67
closedIssues: 656
watchers: 6
contributors: 14
recentReleases: 0
createdAt: "2023-01-26T08:24:50Z"
lastCommitAt: "2026-10-30T10:23:38Z"
lastReleaseAt: "2024-12-19T14:40:53Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 56
maintainers: ["steffenkleinle", "Stift", "verdigadobot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/659eae7d5f0c743c84caac8c45b3b1895bfca45520c3e60e5e9420b2679f4d61/verdigado/gruene-app"
discussionCount: 2
---

# B90/DIE GRÜNEN App

## Contents

- [Setup](#setup)
- [Initial Setup](#initial-setup)
- [Run the App](#run-the-app)
- [Release Workflow](https://github.com/verdigado/gruene-app/blob/HEAD/docs/release-workflow.md)
- [Conventions](https://github.com/verdigado/gruene-app/blob/HEAD/docs/conventions.md)
- [CI/CD](https://github.com/verdigado/gruene-app/blob/HEAD/docs/cicd.md)

## Setup

### Initial Setup

1. Install the Android SDK via
   the [Android plugin](https://www.jetbrains.com/help/idea/create-your-first-android-application.html#754fd) or Android
   Studio
2. Install [fvm](https://fvm.app/documentation/getting-started/installation) (flutter version manager)
3. Install flutter

``` shell
fvm install
```

4. [Optional] Open IntelliJ settings and
  - Install the Android plugin and set the Android SDK path
  - Install the Dart plugin and set the Dart SDK path
  - Install the Flutter plugin and set the Flutter SDK path

#### API Setup

There are two options to connect your app to the Grüne API for development:

- [Connect to the staging Grüne API using an access token](#staging-grüne-api-setup)
- [Connect to the locally running Grüne API](#local-grüne-api-setup)

##### Staging…
