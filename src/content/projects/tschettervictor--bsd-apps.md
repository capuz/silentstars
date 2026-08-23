---
repo: "tschettervictor/bsd-apps"
name: "bsd-apps"
description: "Collection of scripts to install popular applications inside FreeBSD jails"
readmeQualityOk: true
url: "https://github.com/tschettervictor/bsd-apps"
language: "Shell"
languages: ["Shell"]
languagePcts: [97]
stars: 72
forks: 12
openIssues: 1
closedIssues: 5
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2024-09-11T22:22:30Z"
lastCommitAt: "2026-08-23T04:08:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 44
maintainers: ["tschettervictor", "f1rmb"]
openGraphImageUrl: "https://opengraph.githubassets.com/f36d334dbfeb2cdd9d8bfe3197f731ebdbbfd19c2a9878d69d4b586ed23a011d/tschettervictor/bsd-apps"
---

# bsd-apps

Collection of scripts to install popular applications inside FreeBSD jails, or FreeBSD host system.

Each application has a README file which explains some necessary steps before running the script.

# Contributing

Anyone is welcome to add additional apps to this repo. As long as the structure is readable, and the app
works, I will add it. All I ask is that you try to follow the structure of other apps as much as possible.

# Setup

These scripts are designed to work inside any jail manager or FreeBSD host system. In order to get up and running, here are the necessary steps
  1. Create a jail using your preferred jail manager
  2. Read the insructions in each apps README file to see
     - which jail properties need to be set, if any
     - which directories need to be mounted, if you so choose
     - which variables need to be set, if any
  3. Mount your directories and set your properties and variables as needed
     - the variables are set at the top of the app script
  4. Start the jail, fetch the script, set variable values inside the script, and run it

It is not necessary to do any mounting if you choose not to. It just makes it easy to rebuild jails if the…
