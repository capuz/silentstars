---
repo: "otto-de/logsmith"
name: "logsmith"
description: "trayicon to assume your favorite aws roles"
readmeQualityOk: true
url: "https://github.com/otto-de/logsmith"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 27
forks: 8
openIssues: 1
closedIssues: 18
watchers: 6
contributors: 9
recentReleases: 0
createdAt: "2020-01-17T09:21:39Z"
lastCommitAt: "2026-10-29T10:20:20Z"
lastReleaseAt: "2024-04-05T11:40:23Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 62
undervaluedScore: 35
maintainers: ["MediaMarco", "redvox", "TomVollerthun1337"]
openGraphImageUrl: "https://opengraph.githubassets.com/7eed1bdb7f9afc1ce80ae5ec83436d77fc02eb980779b3695a4ff2f8755bcf7d/otto-de/logsmith"
---

# logsmith

Logsmith is a desktop trayicon to:

- assume your favorite aws roles, and
- login & configure your gcloud config

```
“Who are you and how did you get in here?” -
”I'm a locksmith and i'm a locksmith”

- Police Squad! (1982)
```

## What does logsmith do?

- switch profiles
- switch regions
- keeps you logged in
- removes unused profiles
- custom icon color for each profile group
- set and rotate access key
- set sso session
- fetches mfa token
- comfortably assume service roles
- copy account ids and profile names
- run a script after login
- has a graphical user interface and a cli

## Application States

**Idle:** The app is running but no profile group is logged in yet. You can open the tray menu and trigger actions like login or configuration.

**Busy:** The app is performing a background task (login, refresh, script run). Inputs are temporarily disabled to avoid conflicting actions.

**Ready:** Login completed successfully and credentials are active. The cloud icon switches to the profile group’s configured color to show it’s ready to use.

**Impaired:** One or more profiles failed verification, so only part of the profile group is usable. The context menu lists…
