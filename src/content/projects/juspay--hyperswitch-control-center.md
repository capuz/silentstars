---
repo: "juspay/hyperswitch-control-center"
name: "hyperswitch-control-center"
description: "Open sourced control center for managing Hyperswitch - an open sourced payment switch."
readmeQualityOk: true
url: "https://github.com/juspay/hyperswitch-control-center"
homepage: "https://hyperswitch.io/"
language: "ReScript"
languages: ["ReScript"]
languagePcts: [81]
topics: ["hacktoberfest", "rescript"]
stars: 98
forks: 120
openIssues: 0
closedIssues: 0
watchers: 11
contributors: 66
recentReleases: 0
createdAt: "2023-11-20T07:47:29Z"
lastCommitAt: "2026-11-18T11:10:41Z"
lastReleaseAt: "2024-07-08T14:05:02Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 53
maintainers: ["kanikabansal08", "hyperswitch-bot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3f478dbfc8d16db424c491f9d7590c52e1caf5d61cdd14b7b73b31bc025854b/juspay/hyperswitch-control-center"
discussionCount: 1
---

# Hyperswitch Control Center

Hyperswitch control center is an open source dashboard to easily view, manage and control your payments across multiple processors through Hyperswitch - an open source payments switch.

## Features

1. Connect to multiple payment processors like Stripe, Braintree, Adyen etc. in a few clicks
2. View and manage payments (payments, refunds, disputes) processed through multiple processors
3. Easily configure routing rules (volume-based, rule-based) to intelligently route your payments
4. Advanced analytics to make sense of your payment data

---

## Standard Installation

1. You can run Hyperswitch on your system using Docker compose after cloning this repository.
   ```bash
   git clone --depth 1 --branch latest https://github.com/juspay/hyperswitch
   cd hyperswitch
   docker compose up -d
   ```

### Accessing the Application

Once the containers are up and running, you can access the application by navigating to http://localhost:9000 in your web browser.

---

## Standard Process for Local Development

### Prerequisites

1. Node.js and npm installed on your machine.
