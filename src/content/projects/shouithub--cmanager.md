---
repo: "shouithub/CManager"
name: "CManager"
description: "Club Manage System (CManager) 一个低占用的社团管理系统"
readmeQualityOk: true
url: "https://github.com/shouithub/CManager"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [56, 38]
stars: 5
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-12-17T10:10:24Z"
lastCommitAt: "2026-08-03T06:43:40Z"
lastReleaseAt: "2026-03-06T17:13:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 42
maintainers: ["whtry"]
openGraphImageUrl: "https://opengraph.githubassets.com/18fb6210ffe2b951da329410fa83ec0ee31899dc7c4cd5c7e31ce248ced97e5f/shouithub/CManager"
discussionCount: 0
---

# CManager - 社团管理系统

[中文](https://github.com/shouithub/CManager/blob/HEAD/README.md) | [English](https://github.com/shouithub/CManager/blob/HEAD/README_EN.md)

## 📋 项目简介

**CManager** 是一个基于 **Django** 框架开发的现代化社团管理系统，由 **上海海洋大学社团管理服务中心** 开发。该系统旨在为高校社团提供全生命周期的数字化管理解决方案，涵盖社团注册、年审、换届、活动申请、报销管理及场地预约等核心业务流程。

系统采用 **Material Design 3 (MD3)** 设计语言，提供美观、统一且响应式的用户界面，完美适配桌面端与移动端访问。核心业务基于自研的**动态表单引擎**驱动，支持灵活配置表单字段、提交流程与审核策略，实现业务逻辑的高度解耦。

## ✨ 核心功能

### 👥 用户与权限体系
- **多角色支持**：社长、干事、管理员、社员（主分支）；老师、普通用户（v1 分支）。
- **精细化权限**：基于 RBAC 的权限控制，不同角色拥有专属工作台。
- **个人中心**：支持头像上传（自动裁剪）、个人信息管理（QQ / 微信 / 性别等）、政治面貌登记。
- **隐私保护**：用户可设置联系方式公开状态；支持"干事-社长"关联可见性逻辑（即社长可查看其负责社团对应干事的联系方式）。
- **社员管理**：支持社员加入表单、社员列表查看与批量管理。
- **扫码注册**：支持生成注册令牌（二维码），限定有效期与使用次数，方便社员快捷加入。

### ♻️ 账号生命周期
- **自动转不活跃**：非管理员账号在生命周期到期后自动转为不活跃状态。
- **延期机制**：不活跃账号可由用户主动延期，恢复活跃并顺延 1 年。
- **自动删除策略**：不活跃满 1 年后自动删除账号（管理员除外）。
- **管理员控制**：管理员可在用户管理中启用/禁用账号，并可二次确认后删除账号。

### 🏢 社团全生命周期管理
- **社团申请**：新社团成立的全流程申请与材料提交，审核通过后自动创建社团并绑定社长。
- **社团注册**：支持自定义周期（年/月/日/计数）的社团注册流程。
- **社团年审**：年度审核流程，支持多种材料（自查表、章程、财务表等）的在线提交与驳回修改。
- **社团换届**：社长换届申请与审核流程，审核通过后自动更新社团负责人信息。
- **部门管理**：动态配置社团管理中心的部门结构与职能（支持重点工作 Highlights）。

### 🧩 动态表单与业务引擎
-…
