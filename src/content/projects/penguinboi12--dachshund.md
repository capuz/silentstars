---
repo: "PenguinBoi12/dachshund"
name: "dachshund"
description: "An embedded, real-time hostable admin dashboard for any Python service"
readmeQualityOk: true
url: "https://github.com/PenguinBoi12/dachshund"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 2
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-08-11T15:25:15Z"
lastCommitAt: "2026-11-08T07:09:47Z"
lastReleaseAt: "2026-11-08T07:00:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 17
maintainers: ["PenguinBoi12"]
openGraphImageUrl: "https://opengraph.githubassets.com/75d75c174b4735a8e448d9431a88b17e46894cfe19a897aacec99eeaaac88165/PenguinBoi12/dachshund"
promoted: true
---

# Dachshund
> *A live admin dashboard for any Python service, embedded in the process itself.*

> **Beta.** Dachshund works, but its API may still change between releases. Pin a version before depending on it.

## What is Dachshund
Dachshund runs as a thread inside your web app, bot, worker or daemon. There's no router to hook into and no extra service to deploy. Declare pages and widgets in code, emit events from anywhere, and the dashboard updates live over WebSocket.

#### Key features
- **Embedded**: starts with your process, nothing else to run
- **Live**: every `emit()` reaches the open pages as it happens
- **Pages**: group widgets into pages and tabs, lay them out in rows and columns
- **Actions**: buttons that call your own Python functions
- **Authentication**: plug in your app's own auth, with public and private pages
- **Extensible**: write your own widgets in a few lines of Python and JavaScript

## Getting Started

#### 1- Install the package

**Requirements:** Python 3.12 or higher

```bash
pip install --pre dachshund
```

`--pre` is needed while dachshund is in beta; pip skips pre-releases otherwise.

#### 2- Start the dashboard

Call `init()` once, when your…
