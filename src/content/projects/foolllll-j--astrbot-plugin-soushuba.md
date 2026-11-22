---
repo: "Foolllll-J/astrbot_plugin_soushuba"
name: "astrbot_plugin_soushuba"
description: "An adapter plugin for AstrBot designed for 搜书吧."
originalDescription: "一款为 AstrBot 设计的搜书吧适配插件。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Foolllll-J/astrbot_plugin_soushuba"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-06-27T06:55:31Z"
lastCommitAt: "2026-11-19T16:55:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 43
maintainers: ["Foolllll-J"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a537280c037a90c7980cd42c60ce693913a904f50a439ee0fad87aba5222c2e/Foolllll-J/astrbot_plugin_soushuba"
---

# 📚 搜书吧助手

## ✨ Introduction

An adapter plugin for [**AstrBot**](https://github.com/AstrBotDevs/AstrBot) designed for 搜书吧. It helps users quickly get the latest usable links for 搜书吧 and similar sites, and supports keyword search, downloads, and monitoring of forum availability.

---

## 🚀 Features

- **Multi-site support**: 搜书吧, SXSY, 第一会所, 第一版主, 有爱爱.
- **Smart navigation**: automatically parses usable real URLs from navigation entries and randomly returns one of several candidates.
- **In-site search**: supports keyword search on 搜书吧 and SXSY.
- **Direct download**: supports starting an attachment download directly by passing a post number as a parameter.
- **Automatic re-archiving**: if sending a file fails, it is automatically packed into a ZIP and resent. An encryption password can be configured.
- **Quota control**: supports daily limits on the coin quota per user or globally (admins are not restricted).
- **Status monitoring**: supports per-session subscriptions to monitoring notifications. Successes send no notification, failures trigger an alert, and recovery sends a notification.

---

## 📖 Usage

After the plugin is loaded, the following commands are available:
