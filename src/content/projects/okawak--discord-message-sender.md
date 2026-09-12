---
repo: "okawak/discord_message_sender"
name: "discord_message_sender"
description: "Obsidian Plugin: Send messages from a Discord channel to your Vault"
readmeQualityOk: true
url: "https://github.com/okawak/discord_message_sender"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [65, 35]
stars: 6
forks: 4
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-05-24T08:43:44Z"
lastCommitAt: "2026-09-12T08:04:41Z"
lastReleaseAt: "2025-06-15T10:01:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 88
maintainers: ["okawak", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dfbff94474c9b2f6939a2cef2a38556bc97651b15ec211ad5887598fe7827893/okawak/discord_message_sender"
---

English | [日本語](https://github.com/okawak/discord_message_sender/blob/HEAD/.github/README.ja.md) | [简体中文](https://github.com/okawak/discord_message_sender/blob/HEAD/.github/README.zh-CN.md)

# discord_message_sender

## Overview

This is a Obsidian plugin that allows you to take notes in Discord and automatically sync them to Obsidian.

**Key Features:**

- Automatically converts Discord messages into Obsidian Markdown files and saves them
- Automatically clips web page contents from URLs and saves them as Markdown by using `!url` command
- Syncs multiple Discord channels and stores each channel in its own subfolder
- Stores regular messages as individual, daily, weekly, or monthly Markdown files
- Lets you disable or customize the Discord notification messages sent after sync
- Can be triggered on Obsidian desktop startup or via the command palette

## Usage Flow

1. **Prepare Your Discord Environment**
    - Create a dedicated Discord server for Obsidian integration
    - Create a bot and invite it to your server
    - Specify one or more integration channels (using their channel IDs)

2. **Message Processing**
    - When you launch Obsidian, the plugin fetches messages from…
