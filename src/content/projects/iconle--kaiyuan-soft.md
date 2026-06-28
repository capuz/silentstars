---
repo: "iconle/kaiyuan_soft"
name: "kaiyuan_soft"
description: "开源软件通识"
url: "https://github.com/iconle/kaiyuan_soft"
language: "Java"
languages: ["Java", "Vue"]
languagePcts: [58, 35]
stars: 6
forks: 0
openIssues: 4
closedIssues: 109
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-05-13T12:47:14Z"
lastCommitAt: "2026-06-28T02:03:37Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 53
maintainers: ["iconle", "huangchong-yan", "wisstudy"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f10360ea66e9da65a5fc477bcdfb358309a8a94a737f6f6d94c5765b07975ef/iconle/kaiyuan_soft"
discussionCount: 0
---

# 面向专业认证的毕业要求达成度统一计算平台

> 基于 OBE（Outcome-Based Education，成果导向教育）理念，为本科专业认证提供从"底层考核点题目得分"到"顶层毕业要求达成度"的全自动化三级计算引擎。

---

## 项目简介

本平台旨在解决高校专业认证工作中毕业要求达成度计算繁杂、易错、难以追溯的痛点问题。通过构建精确的三级计算引擎，实现从课程考核得分到专业级达成度的自动化流转，彻底取代传统手工 Excel 计算模式。

### 核心价值

- **精确计算**：三级联动计算引擎，权重归一化自动校验，确保计算结果准确可靠
- **流程可控**：两阶段触发机制，成绩锁定/解锁流程，勘误工单审批，全流程可追溯
- **数据可视**：雷达图展示达成度分布，穿透式台账支持逐层溯源
- **报告一键生成**：支持 PDF/Excel 多格式导出，满足认证材料申报需求

---

## 技术架构

### 系统架构图

```
┌─────────────────────────────────────────────────────────────┐
│                         用户层                                │
│  系统管理员  |  教务管理员  |  专业负责人  |  主讲教师         │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                      接入层 (Nginx)                           │
│              反向代理 | 静态资源 | 跨域处理                   │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
┌───────────────┐   ┌────────────────┐   ┌────────────────┐
│   前端服务     │   │   后端服务     │   │   数据库服务   │
│…
