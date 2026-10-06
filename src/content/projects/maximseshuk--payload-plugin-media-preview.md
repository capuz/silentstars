---
repo: "maximseshuk/payload-plugin-media-preview"
name: "payload-plugin-media-preview"
description: "Payload plugin for file previews in the admin panel: images, video, audio, PDF, text, code, CSV and Office files"
readmeQualityOk: true
url: "https://github.com/maximseshuk/payload-plugin-media-preview"
homepage: "https://www.npmjs.com/package/@seshuk/payload-plugin-media-preview"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["payload", "payload-cms", "payload-plugin", "payloadcms", "admin-panel", "code-viewer", "csv-viewer", "document-preview", "file-preview", "media-preview"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-12T23:30:30Z"
lastCommitAt: "2026-10-06T10:42:51Z"
lastReleaseAt: "2026-06-14T20:55:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 55
undervaluedScore: 10
maintainers: ["maximseshuk", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1180321335/3caf576a-85df-4130-b7b3-e68468943046"
fundingLinks: ["KO_FI:https://ko-fi.com/seshuk"]
---

## Features

- Edit view previews for files Payload can't show: text, code, CSV, Office and more
- A preview column in the list view
- Optional Microsoft and Google viewers for Office files
- Adapters for your own viewers
- No database fields

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
  - [Plugin Options](#plugin-options)
  - [Collection Options](#collection-options)
  - [Display Modes](#display-modes)
  - [Content Modes](#content-modes)
  - [Field Position](#field-position)
  - [Supported File Types](#supported-file-types)
- [Edit View](#edit-view)
- [External Viewers](#external-viewers)
- [Adapters](#adapters)
- [Standalone Field](#standalone-field)
- [Internationalization](#internationalization)
- [Telemetry](#telemetry)
- [Exports](#exports)
- [TypeScript](#typescript)
- [Migrating from 1.x](#migrating-from-1x)
- [License](#license)

## Requirements

- Payload `4.0.0-canary.37`
- Node.js `>=24.15.0`

## Installation

```bash
pnpm add @seshuk/payload-plugin-media-preview@beta
# or
npm install @seshuk/payload-plugin-media-preview@beta
# or
yarn add…
