---
repo: "podman-desktop/extension-apple-container"
name: "extension-apple-container"
description: "UI for apple containers in Podman Desktop"
url: "https://github.com/podman-desktop/extension-apple-container"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [76]
topics: ["apple-container", "apple-container-gui"]
stars: 50
forks: 5
openIssues: 6
closedIssues: 3
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2025-08-14T21:20:22Z"
lastCommitAt: "2026-06-29T07:21:26Z"
lastReleaseAt: "2025-09-12T14:17:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 41
maintainers: ["dependabot[bot]", "benoitf", "simonrey1"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1f35d3589a9f33f1853ed15989accdac1986805f9ea7a95fc479595a27099c7/podman-desktop/extension-apple-container"
---

# 🦭🍏 Podman Desktop Apple Container Extension

A **Podman Desktop extension** to manage **Apple containers** on **macOS** (ARM64 only).

---

## 🚀 Features
- View and manage Apple containers directly in Podman Desktop
- Designed specifically for macOS on ARM64
- Easy installation and updates via Podman Desktop
- Uses **[Socktainer](https://github.com/socktainer/socktainer)** under the hood to provide a Docker REST API on top of Apple containers

---

## 🔍 How It Works
This extension relies on **[Socktainer](https://github.com/socktainer/socktainer)**, a lightweight CLI/daemon that exposes a **REST API** to manage Apple containers. The API is designed to be **compatible with the Docker REST API**, enabling tools and extensions that expect Docker behavior to work with Apple containers without modification. Podman Desktop interacts with this API to provide a full-featured, user-friendly interface for container management on macOS ARM64.

---

## 📚 Topics
- [Installation](#installation)
- [Feedback](#feedback)

---

## 🛠 Installation

Install the Apple container extension directly from **Podman Desktop**:

1. Open **Podman Desktop** → `Extensions` → `Install custom...`
2. Enter…
