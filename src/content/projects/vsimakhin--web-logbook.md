---
repo: "vsimakhin/web-logbook"
name: "web-logbook"
description: "EASA Web Pilot Logbook"
readmeQualityOk: true
url: "https://github.com/vsimakhin/web-logbook"
language: "JavaScript"
languages: ["JavaScript", "Go"]
languagePcts: [73, 26]
topics: ["easa", "logbook", "pdf", "fcl050", "golang", "pilot", "go", "opensource", "electronic", "free"]
stars: 122
forks: 24
openIssues: 5
closedIssues: 235
watchers: 10
contributors: 6
recentReleases: 0
createdAt: "2022-01-15T17:44:01Z"
lastCommitAt: "2026-11-14T10:44:06Z"
lastReleaseAt: "2024-01-06T15:33:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 46
maintainers: ["vsimakhin", "benbox69", "blackfxx"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9789618b50e32b9c4d2a0b35ab6c9b254076334dd96c4b4be4a4486fa6ae05d/vsimakhin/web-logbook"
discussionCount: 8
---

# Web-logbook

Web-logbook is a simple, free and open-source EASA-style logbook application written in Go and React.

It lets you record and manage flight records, track licenses and certifications, visualize flights on a map, attach documents, and export a fully formatted EASA-style PDF logbook you can print, sign, and use as a regular paper logbook.

The application is a single binary and stores data locally using SQLite by default.

Why this project? Web-logbook was created to provide a simple, self-hosted logbook that follows EASA-style formatting while keeping full control of your data. Web-logbook runs locally and does not require a subscription or external services. Built by pilots for pilots.

---

## Quick Start

- Download the latest release and run the binary
- Then open your browser and type `http://localhost:4000`
- Voilà! You have your logbook ready to use!

The application will automatically create a local SQLite database on the first start.

---

# Table of Contents

- [Features](#features)
- [Changelog](#changelog)
- [Usage](#usage)
  - [Docker & Kubernetes](#docker--kubernetes)
  - [CLI options](#cli-options)
- [Supported Operating Systems and…
