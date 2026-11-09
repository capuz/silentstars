---
repo: "OrzMC/OrzMC"
name: "OrzMC"
description: "OrzMC All in One Super Repo"
readmeQualityOk: true
url: "https://github.com/OrzMC/OrzMC"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [72, 27]
topics: ["minecraft", "mc", "python", "client", "server", "deploy", "personal", "macos", "launcher", "orzmc"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-07-21T16:30:07Z"
lastCommitAt: "2026-11-09T03:30:28Z"
lastReleaseAt: "2021-08-18T04:31:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 72
maintainers: ["wangzhizhou"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/141829055/277d060b-e5b4-4d9f-85fd-8886b33a05bb"
---

# OrzMC

专门对Minecraft进行Geek的工程项目，包含多个子项目。

## 目录结构

```bash
.
├── AGENTS.md                   # AI 智能体协作单一事实源（仓库性质 / 铁律 / 子模块登记表）
├── app                         # Git子模块：Swift语言开发相关库以及一个macOS/iOS应用程序
├── CONTRIBUTING.md             # 人/机贡献指南（子模块工作流 / 提交规范 / PR 流程）
├── deploy                      # Git子模块：Docker 容器化部署方案（MCSManager / EasyBot / MariaDB / Gatus）
├── docs                        # 伞级文档（文档索引 + 进行中的跨仓方案）
├── HANDOFF.md                  # 跨会话/跨设备交接文档（当前状态 / 下一步 / 会话日志）
├── images                      # README.md 引用的图片资源
├── LICENSE                     # 开源代码许可证
├── plugin                      # Git子模块：自研PaperMC插件 OrzMC
├── profile                     # Git子模块：GitHub 组织主页配置
├── proxy                       # Git子模块：FRP 跨网中转方案（解决跨运营商延迟高/拒连问题）
├── python                      # Git子模块：OrzMC CLI Python源码
├── README.md                   # README.md
├── scripts                     # Minecraft 服务器运维的一些工具脚本
├── site                        # Git子模块：运行PaperMC私服的主页
├── skins                       # Minecraft 玩家皮肤
├── tools                       # Git子模块合集：自研与上游的工具插件
│   ├── DeathChest              # 死亡掉落箱子插件
│   ├── EzShops                 # 商店插件
│   ├── GetMeHome               #…
