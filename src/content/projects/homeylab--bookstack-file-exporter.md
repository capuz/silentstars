---
repo: "homeylab/bookstack-file-exporter"
name: "bookstack-file-exporter"
description: "This tool provides a way to export bookstack pages in a folder-tree layout into object storage or locally."
url: "https://github.com/homeylab/bookstack-file-exporter"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "bookstack", "docker"]
stars: 45
forks: 5
openIssues: 3
closedIssues: 15
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-09-10T07:28:43Z"
lastCommitAt: "2026-06-25T06:42:20Z"
lastReleaseAt: "2024-11-06T11:02:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 54
maintainers: ["pchang388", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c789e20fda78c58f56277a18c48bb9aad4e817ad8c4afcda04633b3fa4c3ba57/homeylab/bookstack-file-exporter"
---

# bookstack-file-exporter

> [!NOTE]
> This documentation tracks the `main` branch and may describe unreleased changes.
> For docs matching your installed version, use the branch/tag dropdown to switch to your release tag. See [Releases](https://github.com/homeylab/bookstack-file-exporter/releases) for the list of published versions.

Table of Contents
- [bookstack-file-exporter](#bookstack-file-exporter)
  - [Background](#background)
    - [Features](#features)
    - [Use Case](#use-case)
  - [Using This Application](#using-this-application)
    - [Run via Pip](#run-via-pip)
    - [Log Format](#log-format)
    - [Run via Docker](#run-via-docker)
    - [Run via Helm](#run-via-helm)
    - [Authentication and Permissions](#authentication-and-permissions)
    - [Configuration](#configuration)
  - [Export Level](#export-level)
  - [Parallel Export](#parallel-export)
  - [Filters](#filters)
  - [Backup Behavior](#backup-behavior)
    - [General](#general)
    - [Images](#images)
    - [Attachments](#attachments)
    - [Modify Links](#modify-links)
  - [Object Storage](#object-storage)
    - [Minio Backups](#minio-backups)
  - [Notifications](#notifications)
    - [apprise](#apprise)…
