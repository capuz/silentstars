---
repo: "parMaster/zoomrs"
name: "zoomrs"
description: "Save thousands of dollars on Zoom Cloud Recording Storage! Download records automatically and store locally. Provide simple but effective web frontend to watch and share meeting recordings"
readmeQualityOk: true
url: "https://github.com/parMaster/zoomrs"
language: "Go"
languages: ["Go"]
languagePcts: [91]
topics: ["storage-service", "zoom", "zoom-api", "zoom-meetings", "zoom-recorder", "zoom-cloud-recording"]
stars: 8
forks: 1
openIssues: 4
closedIssues: 20
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-04-30T04:05:51Z"
lastCommitAt: "2026-10-03T09:22:14Z"
lastReleaseAt: "2024-01-17T17:21:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 55
maintainers: ["parMaster"]
openGraphImageUrl: "https://opengraph.githubassets.com/9405304023b645185ddf7058191181d1959b720c8d3b54984324cc7879ac9d08/parMaster/zoomrs"
---

# Zoomrs - Zoom meetings recordings download service

Save thousands of dollars on Zoom Cloud Recording Storage! Download records automatically and store locally. Provide simple but effective web frontend to watch and share meeting recordings.

## Features

- Download Zoom Cloud Recordings automatically
- Delete/Trash downloaded recordings from Zoom Cloud after download
- Specify which types of recordings to download (shared screen, gallery view, active speaker) and which to ignore (audio only, chat, etc.)
- Host a simple web frontend to watch and share recordings
- Run multiple instances of the service for redundancy

## Installation
Zoomrs can be installed as a systemd service or run from the console as a persistent process or a set of CLI tools. It can be run as a Docker container as well.

## Prerequisites
### Zoom API credentials
Zoom API credentials are required to download recordings. You can get them at https://marketplace.zoom.us/develop/create. You need to create JWT app and copy API key and secret to the configuration file.

Add the following scopes to the App:

- `/recording:master`
- `/recording:read:admin`
- `/recording:write:admin`
- `/report:read:admin`

### Google…
