---
repo: "slack-samples/bolt-java-starter-template"
name: "bolt-java-starter-template"
description: "A template for building Slack apps with Bolt for Java"
readmeQualityOk: true
url: "https://github.com/slack-samples/bolt-java-starter-template"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 26
forks: 15
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2022-07-05T19:58:55Z"
lastCommitAt: "2026-10-24T00:16:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 64
maintainers: ["dependabot[bot]", "zimeg", "slack-samples[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f34477bb7ef689254825c29efd0e5050d6a037469fb50061969c2a33f0ed570/slack-samples/bolt-java-starter-template"
---

# Bolt for Java Template App

This is a generic Bolt for Java template app used to build out Slack apps.

Before getting started, make sure you have a development workspace where you have permissions to install apps. If you don’t have one setup, go ahead and [create one](https://slack.com/create).

## Installation

#### Create a Slack App

1. Open [https://api.slack.com/apps/new](https://api.slack.com/apps/new) and choose "From an app manifest"
2. Choose the workspace you want to install the application to
3. Copy the contents of [manifest.json](https://github.com/slack-samples/bolt-java-starter-template/blob/HEAD/manifest.json) into the text box that says `*Paste your manifest code here*` (within the JSON tab) and click _Next_
4. Review the configuration and click _Create_
5. Click _Install to Workspace_ and _Allow_ on the screen that follows. You'll then be redirected to the App Configuration dashboard.

#### Environment Variables

Before you can run the app, you'll need to store some environment variables.

1. Open your app's configuration page from this list, click **OAuth & Permissions** in the left hand menu, then copy the Bot User OAuth Token. You will store this in your…
