---
repo: "buckyos/buckyos"
name: "buckyos"
description: "BuckyOS is an open-source Personal AI OS for building your own distributed private cloud. It turns your devices into a secure Zone where apps, data, services, and AI agents run under your control—local-first, privacy-first, and ready for the next generation of AI-native applications."
readmeQualityOk: true
url: "https://github.com/buckyos/buckyos"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [70, 27]
stars: 25
forks: 16
openIssues: 136
closedIssues: 277
watchers: 1
contributors: 11
recentReleases: 0
createdAt: "2024-02-24T04:47:45Z"
lastCommitAt: "2026-09-24T08:41:19Z"
lastReleaseAt: "2026-05-01T05:16:05Z"
status: "thriving"
tags: ["solo_builder", "community_hub", "fork_magnet"]
healthScore: 93
undervaluedScore: 65
maintainers: ["streetycat", "waterflier"]
openGraphImageUrl: "https://opengraph.githubassets.com/094ad2ec1f17f239e1678a93bac131432f3e8f0ca3fe8aac0d7008e1f902db01/buckyos/buckyos"
discussionCount: 51
---

# BuckyOS Beta2.2 (0.7.0)

**English** | [简体中文](https://github.com/buckyos/buckyos/blob/HEAD/README_zhCN.md)

BuckyOS is an open-source personal AI operating system. It brings your devices, applications, data, and AI agents together in a **Zone**: a personal cloud under your control.

The current source tree targets **Beta2.2 / 0.7.0**, with the official launch planned for **October 15, 2026**. This is a breaking-change release: system configuration, identity, application packaging, and agent configuration have changed. Backward compatibility with earlier betas is not guaranteed.

## What's in Beta2.2

- **Web Desktop and Control Panel**: a shared desktop with application windows, Settings, Users & Agents, AI Center, Task Center, and application management.
- **FileBrowser and Preview**: built-in file browsing and preview interfaces. FileBrowser connects to `nfs-server` for file operations; background copy jobs use Task Manager.
- **MessageHub and Message Center**: a built-in messaging app backed by `msg-center`, with conversation history, attachments, read state, and session archive/restore/delete. The service provides DID-based mailboxes, contacts, self-hosted groups, native…
