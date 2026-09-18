---
repo: "MaineDSA/ActionNetworkEventSync"
name: "ActionNetworkEventSync"
description: "Sync AN events to Google Calendar, post them to Slack/Discord, and compile upcoming events emails."
readmeQualityOk: true
url: "https://github.com/MaineDSA/ActionNetworkEventSync"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [85]
topics: ["google-calendar", "google-calendar-synchronization", "action-network", "discord", "slack"]
stars: 17
forks: 5
openIssues: 4
closedIssues: 10
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-03-29T11:10:24Z"
lastCommitAt: "2026-09-18T14:03:40Z"
lastReleaseAt: "2023-07-01T10:57:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 60
maintainers: ["bmos", "dependabot[bot]", "Metbcy"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a9ac49091c0954e1d7584adf52519f34811c775dea8d6c0b3c46cf44fa938c1/MaineDSA/ActionNetworkEventSync"
---

# ActionNetworkEventScript

Automation for Action Network, Google Calendar, and Slack/Discord.

## Features

This Google Apps Script code simplifies some more labor-intensive Action Network tasks:

- **syncANtoGCal()** Retrieve a list of recently-edited Action Network events from each API key and sync them to Google Calendar.
- **draftANEventMessage()** Retrive a list of upcoming Action Network events and compile them into an HTML-formatted
email draft on the Action Network group found at the first API key.
- **postTodaysEvents()** Retrive upcoming Action Network events from each API key and send notice to Slack or Discord.

## Screenshots

### Generated Email

</a>

### New Event Notification in Slack

</a>

### New Event Notification in Discord

</a>

## Script Properties

To use these features, you must configure
[Script Properties](https://developers.google.com/apps-script/reference/properties)
in your Google Apps script.

- AN_API_KEY: Your Action Network API Key (or a comma-separated list if you have multiple groups -- with multiple groups, the first group should be the primary/parent group).
- AN_EMAIL_REPLY_TO: The email you want generated AN email drafts to use as the…
