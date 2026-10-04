---
repo: "yhArcadia/kh-plugin"
name: "kh-plugin"
description: "A Yunzai-based plugin for archiving group members' nicknames, group cards, titles, permissions, and avatar history. Effectively prevents group members from frequently changing their identities."
originalDescription: "基于Yunzai的群成员昵称、群名片、头衔、权限与头像历史记录存档插件。有效克制群友“改头换面”秽土转生。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yhArcadia/kh-plugin"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
stars: 9
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-11T12:00:56Z"
lastCommitAt: "2026-10-04T10:00:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 53
maintainers: ["yhArcadia"]
openGraphImageUrl: "https://opengraph.githubassets.com/adb6b7df8deac5873f88b1ab5724b3a7e1483d275a97cc075c8eb99f787cd382/yhArcadia/kh-plugin"
---

# Kh-Plugin

A Yunzai-based plugin for archiving group members' nicknames, group cards, titles, permissions, and avatar history. **Records every face of group members**, effectively preventing group members from frequently changing their identities.

## 🎯 Core Features

**Query group members' historical identities**

**Support active push notifications** (requires configuring target groups)

## ✨ Extended Features

Fun rankings, retrieve historical avatar files, etc. See the [📋 Command List & Instructions](https://github.com/yhArcadia/kh-plugin/blob/HEAD/README.md#指令列表说明) below.

## 📦 Installation & Upgrade

### Install using [Guoba](https://gitee.com/guoba-yunzai/guoba-plugin)

Enter the Guoba backend, click `Plugin Management` -> `Not Installed` -> Search `kh-plugin` -> `View Details` -> `Install Now`

### Or install manually

Execute in the **Yunzai root directory**:
```
git clone --depth=1 https://github.com/yhArcadia/kh-plugin ./plugins/kh-plugin
```
or
```
git clone --depth=1 https://gitee.com/yhArcadia/kh-plugin ./plugins/kh-plugin
```
Choose one based on your network conditions.

After cloning, execute in the **Yunzai root directory**:
```
pnpm install --filter…
