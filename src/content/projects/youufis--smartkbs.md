---
repo: "youufis/SmartKBS"
name: "SmartKBS"
description: "SmartKBS 智慧教学平台 - 通用学科 AI 教学管理系统（以高中信息科技、通用技术为例）。集成 AI 流式对话、资源管理、试题库、在线考试、任务管理、课堂互动（随堂测验/投票/提问/分组讨论）、课堂积分、智能点名、学情分析、成长档案等功能。基于 FastAPI + React 构建，支持 DashScope / DeepSeek 等 AI 模型接入。"
url: "https://github.com/youufis/SmartKBS"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [48, 42]
stars: 5
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-26T13:43:22Z"
lastCommitAt: "2026-06-28T03:08:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 59
maintainers: ["youufis"]
openGraphImageUrl: "https://opengraph.githubassets.com/dab42707ca9513759a09e73aeef2d15eb55461cca7a427716cb5fd491cbd0170/youufis/SmartKBS"
---

# 智慧教学平台 (SmartKBS)

> **版本 V6.7.0** | 更新于 2026-06-28
>
> 全学段全学科通用 AI 智慧教学管理平台（任何学科、任何学段均可使用）
> 集成流式 AI 对话、资源管理、试题库、在线考试、智能组卷 & Word 导出、
> 任务管理、AI 智能批改、课程大纲、课堂互动、分组讨论、知识抢答活动、积分奖励、课堂积分、
> 智能点名、考勤统计、错题巩固、智能练习、课程练习、AI 资源推荐、学情分析、成长档案、AI 学伴等功能。
> 基于 **FastAPI + React** 构建。

> **V6.7.0 更新亮点**：
> 🔄 新增在线增量升级系统 — 管理员可在系统配置中一键检测版本并增量升级；
> 🔄 增量拉取 Git 差异 → 自动数据库迁移 → pip 增量安装 → 重启服务；
> 🔄 升级前自动备份，失败自动回滚，进度实时跟踪；
> 🔄 升级历史可追溯，一键回滚到备份版本

---

## 📋 项目简介

**SmartKBS** 是一款通用学科的 AI 智能问答与教学管理平台。
系统基于 **FastAPI + React** 构建，融合云端 AI 能力（阿里云 DashScope 与 DeepSeek），
为教师和学生提供全方位教学辅助服务。

> 💡 **学科无关设计**：平台不限定任何特定学科，通过系统配置中的「课程名称列表」自由设置
> 所需学科（如数学、语文、英语、物理、生物、历史等任意学科）。AI 提示词根据学科和年级
> 信息动态生成，自动适配不同学段（小学/初中/高中）和学科的教学场景。
> 教师可根据自身教学需要自由配置，实现个性化教学支持。

---

## 🎮 演示环境

> **🌐 演示地址：** [http://youufis.oicp.net:8086](http://youufis.oicp.net:8086)
> / [https://youufis.oicp.net:8085](https://youufis.oicp.net:8085)
>
> **⏰ 开放时间：** 日间开放（晚间关机）
>
> **👤 测试账号：**
>
> | 角色 | 用户名              | 密码          |
> |------|---------------------|---------------|
> | 教师 | youufis             | ultraultra    |
> | 学生 | s11001 ~ s11009     | 123456        |
> | 学生 | s18001 ~ s19009     | 123456        |

---

## ✨ 功能总览

### 📊 首页仪表盘…
