---
repo: "3221675991-ops/ethan-wanwan-phone-mcp"
name: "ethan-wanwan-phone-mcp"
description: "A iPhone screen-state, screen-time, and Jomo lock control MCP co-designed by Ethan and 江暮晚."
originalDescription: "由 Ethan 与江暮晚共同设计的 iPhone 屏幕状态、使用时长与 Jomo 锁定控制 MCP。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/3221675991-ops/ethan-wanwan-phone-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 5
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-10T11:27:25Z"
lastCommitAt: "2026-11-17T14:36:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 29
maintainers: ["3221675991-ops"]
openGraphImageUrl: "https://opengraph.githubassets.com/41f2ad1bfb176d235357df23c49597b172614981d00c9a336089f7538a87c064/3221675991-ops/ethan-wanwan-phone-mcp"
---

# Phone Screen MCP

A small self-hosted service that connects iPhone Shortcuts, Jomo, Bark, and MCP clients.

This project was designed and implemented by Ethan and 江暮晚. It is intended for individual users who want to read phone status and view screenshots, and manage app usage schedules through Jomo, with explicit authorization.

## Features

- Screenshot upload and reading: an iPhone Shortcut uploads a screenshot, and MCP clients read the most recent successfully uploaded image.
- Screenshot consent before capture: `request_screenshot` only sends a Bark notification. It does not take a screenshot directly, and it does not create phone control commands. The notification automation runs the screenshot upload Shortcut only after the user explicitly confirms on the iPhone.
- App activity logging: records app open/close events and queries the current app and recent activity.
- Screen-time usage: receives and reads Jomo's daily screen-time usage.
- Full-group Jomo control: runs preconfigured `Start Session` / `Stop Session` through phone Shortcuts.
- Command confirmation and retry: commands carry a unique ID and are confirmed by the phone via ACK after execution; the server keeps a…
