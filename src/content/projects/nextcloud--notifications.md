---
repo: "nextcloud/notifications"
name: "notifications"
description: "🔔 Notifications app for Nextcloud"
readmeQualityOk: true
url: "https://github.com/nextcloud/notifications"
language: "JavaScript"
languages: ["JavaScript", "PHP"]
languagePcts: [75, 21]
topics: ["nextcloud", "nextcloud-app", "notifications", "open-source", "hacktoberfest"]
stars: 156
forks: 69
openIssues: 41
closedIssues: 238
watchers: 10
contributors: 270
recentReleases: 0
createdAt: "2016-07-01T09:12:17Z"
lastCommitAt: "2026-10-25T08:40:39Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 97
undervaluedScore: 45
maintainers: ["github-actions[bot]", "nextcloud-command", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/85a19ed75a9bdcc57454edbb511ea89ada5c7e57bc65c0013ff91061dd8ff287/nextcloud/notifications"
---

# Notifications

This app provides a backend and frontend for the notification API available in [Nextcloud](https://github.com/nextcloud/server/).
The API is used by other apps to notify users in the web UI and sync clients about various things. Some examples are:

* 📬 [Federated file sharing](https://github.com/nextcloud/server/tree/master/apps/federatedfilesharing): You received a new remote share
* 📑 [Comments](https://github.com/nextcloud/server/tree/master/apps/comments): Another user mentioned you in a comment on a file
* 🚢 [Update notification](https://github.com/nextcloud/server/tree/master/apps/updatenotification): Available update for an app or nextcloud itself
* 📣 [Announcement center](https://github.com/nextcloud/announcementcenter): An announcement was posted by an admin

## Screenshot

## Developers

### Install and enable the notifications app

- Clone this app into the "apps" folder of your nextcloud instance.
```bash
git clone https://github.com/nextcloud/notifications.git
```

- Enable the app (Log in as the admin into your nextcloud, go to "+ Apps" and search for the "notifications" app to
 enable it).

- When you modified the code make sure to execute `make…
