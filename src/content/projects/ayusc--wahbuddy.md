---
repo: "ayusc/WahBuddy"
name: "WahBuddy"
description: "A whatsapp userbot for fun"
readmeQualityOk: true
url: "https://github.com/ayusc/WahBuddy"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
stars: 8
forks: 7
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-04-05T12:32:02Z"
lastCommitAt: "2026-08-14T05:14:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 80
maintainers: ["ayusc", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/a155b83576490c1541556943c5a948f8e79d41c257c2abeba29a23fa1de1a248/ayusc/WahBuddy"
---

# WahBuddy
Blazing fast WhatsApp userbot using [Baileys](https://github.com/WhiskeySockets/Baileys) with persistent session coupled with MongoDB

> [!WARNING]
> **It is not guaranteed you will not be blocked by using this bot. WhatsApp does not allow bots or unofficial clients on their platform, so this shouldn't be considered totally safe.<br>Use it at your own risk !!!**

# How to Deploy ?

Click on the below button to deploy WahBuddy in one click ->

## Setting the environment variables

First of all you need the MONGO_URI environment variable which is crutial for running the bot and storing the session remotely. Please follow the steps to create your MongoDB URI string:

1. Go to https://www.mongodb.com/cloud/atlas
2. Complete the sign-up/login process.
3. Choose: Deployment type: Free (Shared)
4. After that you need to create a Cluster, choose free one > Then Create Deployment
5. On next step set your password for the MongoDB connection. Don't use any special characters only use letters and numbers, otherwise you need to parse the string manually.
6. Then create the database user
7. Then under choose a connection method select Drivers. Select NodeJS (if not already selected)…
