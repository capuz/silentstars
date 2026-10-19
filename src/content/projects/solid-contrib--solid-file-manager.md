---
repo: "solid-contrib/solid-file-manager"
name: "solid-file-manager"
description: "This is a file manager application to manage solid resources"
readmeQualityOk: true
url: "https://github.com/solid-contrib/solid-file-manager"
homepage: "https://filemanager.solid-experiments.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 16
forks: 8
openIssues: 11
closedIssues: 27
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-11-10T09:28:38Z"
lastCommitAt: "2026-10-19T09:14:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 68
maintainers: ["PreciousOritsedere", "jeswr"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7b8a843404bd3827f6eae9fd208d5b81931ba74a6dfe64257f29119e1f106db/solid-contrib/solid-file-manager"
---

# Solid File Manager

A file manager application for managing Solid Pods, built on Solid, with Next.js, React, and TypeScript.

## Overview

This application provides a user-friendly interface for managing files and folders in Solid Pods, with features similar to Google Drive:

- **File Management**: Browse, view, and organize files and folders
- **Permission Management**: Share files with others using ACP (Access Control Policies) with a Google Drive-like interface
- **Multiple Drives**: View and manage multiple storage roots/drives
- **Grid and List Views**: Toggle between grid and list views for file browsing
- **Search**: Search functionality for finding files quickly

## Features

### Core Functionality

- **Solid Authentication (OIDC)**: Full OIDC authentication with session management and persistence
- **Storage Root Discovery**: Automatically discovers and displays all storage roots from WebID profile using `pim:storage` and `solid:storage` predicates
- **File & Folder Navigation**: Browse through folders with double-click navigation and breadcrumb support
- **Grid and List Views**: Toggle between grid and list views for file browsing
- **Breadcrumb Navigation**: Navigate…
