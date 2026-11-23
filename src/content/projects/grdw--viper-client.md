---
repo: "grdw/viper-client"
name: "viper-client"
description: "This code features a viper-client, which can connect to a viper-server, a custom interface made for Comelit devices."
readmeQualityOk: true
url: "https://github.com/grdw/viper-client"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 10
forks: 3
openIssues: 5
closedIssues: 10
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2023-01-21T09:45:43Z"
lastCommitAt: "2026-11-23T10:25:25Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 36
maintainers: ["grdw"]
openGraphImageUrl: "https://opengraph.githubassets.com/b60b00ac2effbdf605f52b18473689cd451cb1124094c5253eb899bda1084c2c/grdw/viper-client"
---

# This project is no longer maintained. Please fork it if you want to work on it. The reason is that I won't have access to this intercom any more. 

# Viper Client 👷 (WIP) [](https://dl.circleci.com/status-badge/redirect/gh/grdw/viper-client/tree/main)
This is code for my intercom; specifically for the Comelit Mini Wi-Fi MSFV. This features a ViperClient which can talk to the Comelit Mini Wi-fi MSFV directly; so without intermediary Cloud devices.

This code is quite experimental and not ready to be used for anything real. Eventually I'm planning to turn this into a library.

## Setup:

To test this library either use ["viper-minimal"](https://github.com/grdw/viper-client/blob/HEAD/viper-minimal) or ["viper-web"](https://github.com/grdw/viper-client/blob/HEAD/viper-web) to have an interactive demo. Please read the respective README's of the demo applications for more information.

## Missing features/docs:

- [ ] Understanding of the mystical CTPP channel
- [ ] UDP support for being able to watch the camera's
