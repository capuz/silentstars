---
repo: "flagify-com/OctoMationApps"
name: "OctoMationApps"
description: "此 Repository 为 OctoMation 的应用仓库，系统详细文档、系统安装手册请移步以下 Repository："
url: "https://github.com/flagify-com/OctoMationApps"
homepage: "https://github.com/flagify-com/OctoMation"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 15
forks: 11
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2023-10-06T02:10:57Z"
lastCommitAt: "2026-07-04T06:11:41Z"
lastReleaseAt: "2023-10-08T13:59:03Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 100
undervaluedScore: 51
maintainers: ["wzfukui"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc11ed6b93a031f5a24a17e8df360ae236ee92fd0a8abc27c0ccd7a4510520b7/flagify-com/OctoMationApps"
---

- [OctoMationApps](#octomationapps)
  - [OctoMation 介绍](#octomation-介绍)
  - [OctoMationApps](#octomationapps-1)
  - [如何使用应用APP](#如何使用应用app)
    - [Releases](#releases)
    - [应用源码包](#应用源码包)
  - [如何参与社区贡献](#如何参与社区贡献)
  - [许可](#许可)

# OctoMationApps

OctoMationApps 是 [OctoMation编排自动化产品](https://github.com/flagify-com/OctoMation) （雾帜智能HoneyGuide SOAR产品的社区免费版）的应用能力（联动网络、安全、IT和SaaS等产品的能力扩展包）的集合。

## OctoMation 介绍

OctoMation编排自动化（Octopus Orchestration & Automation）是上海雾帜智能科技有限公司HoneyGuide SOAR产品的社区免费版，是中国企业市场领先的编排和自动化（Orchestration & Automation， O&A）产品。

OctoMation 的特点包括:

- 简单且直观的图形化界面以建立自动化流程
- 支持各种产品和服务的连接集成
- 强大的自定义功能,支持 Python 脚本进行扩展
- 社区驱动,用户可以共享工作流程和APP

## OctoMationApps 

OctoMationApps 提供了一系列为 OctoMation 建立的自动化应用程序和脚本。这些应用程序可以直接导入 OctoMation 中,实现各种自动化任务。

## 如何使用应用APP

### Releases

1. 通过项目[releases](https://github.com/flagify-com/OctoMationApps/releases)列表，下载应用包zip文件
2. 如果批量下载则需要进行解压
3. 登录OctoMation后台，访问【应用管理】界面，上传zip包完成导入

### 应用源码包
1. 下载项目源码

```bash
# 下载主版本
git clone --depth 1 https://github.com/flagify-com/OctoMationApps.git

# 下载特定分支（适合开发）
git clone --depth 1 --branch dev-ce https://github.com/flagify-com/OctoMationApps.git
```

2. 创建应用包

找到你需要的应用APP文件夹，使用zip压缩该目录，如：…
