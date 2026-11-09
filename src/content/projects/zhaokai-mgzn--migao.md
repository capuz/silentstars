---
repo: "zhaokai-mgzn/migao"
name: "migao"
description: "多租户 AI 智能客服 SaaS：双 Agent（LangGraph）+ 31 个业务工具 + SSE 流式对话，Java / Python / Next.js / Taro，阿里云 SWAS 部署"
readmeQualityOk: true
url: "https://github.com/zhaokai-mgzn/migao"
language: "Python"
languages: ["Python", "Java", "TypeScript"]
languagePcts: [43, 26, 22]
stars: 10
forks: 4
openIssues: 18
closedIssues: 4921
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-05-06T01:12:14Z"
lastCommitAt: "2026-11-09T04:34:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 56
maintainers: ["zhaokai-mgzn", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d1422bc29243d17519897895407f8b4c00721abbb40febe8af79c643d406154/zhaokai-mgzn/migao"
---

# 观星台（MIGAO）— 布艺行业 AI 经营平台

> 面向布艺 / 窗帘商家的多租户 AI 经营平台：顾客侧由 **元元** 提供 7×24 智能客服与下单；
> 经营侧由 **黄金策** 覆盖商品、订单、生产、质量、仓储、财务与供应链。
> 业务闭环 = 询价算料 → 下单 → 生产（裁床 / 车位 / 后整）→ 入库 → 发货 → 售后与对账。
>
> 智能客服是「客户服务」能力域的一部分，不再代表系统的全部定位
> （定位沿革见 issue #6463 / 品牌改名见 issue #6525）。

## 🎯 产品定位

| 维度 | 事实 |
|------|------|
| **产品名** | 观星台 |
| **定位** | 布艺 / 窗帘行业的企业级 AI 经营管理平台 |
| **使用者** | 商家管理员与员工、终端顾客、车间工人 |
| **AI 分工** | 元元（C 端顾客服务）+ 黄金策（B 端经营助手） |
| **业务纵深** | 窗帘算料报价、SKU 矩阵（颜色 × 售卖方式 × 门幅）、加工项与工序、批次库存与移动加权成本、计件工资 |
| **部署形态** | 多租户 SaaS（租户级数据隔离，商家入驻 AI 自动甄别） |

本仓**不是**「通用行业 AI 客服模板」：默认行业模型就是布艺 / 窗帘，
行业术语、算料规则与生产工序都有可执行真值源（见「文档」一节）。

## ✨ 核心亮点

- **双 Agent** — 元元（顾客侧，LangGraph）+ 黄金策（经营侧），工具与 Skill 注册表驱动
- **四端协同** — 观星台后台、顾客微信小程序、商家小程序、员工端 H5 / 安卓终端
- **全链路经营** — 从算料报价、下单、生产报工、入库过账到发货、售后与财务对账
- **行业纵深** — 窗帘算料、工序路线、批次成本、余料台账、计件工资不是外挂，是主模型
- **多租户与权限** — JWT 派生租户 → MyBatis 拦截器 → PostgreSQL RLS → 字段脱敏；岗位权限逐人可配
- **可审核的 AI** — B 端口径卡先审核再进 prompt；写操作有边界、有确认卡、有审计记录
- **CI/CD** — GitHub Actions 门禁 + 服务器侧构建部署；行为用例单一源（`.github/cases/`）

## 🧭 四端与两位 Agent

### 四端

| 端 | 代码 | 使用者 | 主要能力 |
|----|------|--------|----------|
| **观星台管理后台** | `frontend/admin-web` | 商家管理员 / 员工 | 经营概览、报表、客户服务、订单商品、生产、质量、仓储、财务、供应链、组织 |
|…
