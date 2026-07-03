---
repo: "seaworld008/auto-install-mysql-innodb-cluster"
name: "auto-install-mysql-innodb-cluster"
description: "Ansible 自动化部署与运维 MySQL InnoDB Cluster：集成 MySQL Router、HAProxy、Keepalived、读写分离、扩缩容和可选备份。"
url: "https://github.com/seaworld008/auto-install-mysql-innodb-cluster"
homepage: "https://github.com/seaworld008/auto-install-mysql-innodb-cluster/blob/main/README.md"
language: "Shell"
languages: ["Shell"]
languagePcts: [78]
topics: ["ansible", "backup", "database-automation", "devops", "group-replication", "haproxy", "high-availability", "keepalived", "mysql", "mysql-innodb-cluster"]
stars: 8
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-07-09T02:29:28Z"
lastCommitAt: "2026-07-03T06:24:00Z"
lastReleaseAt: "2026-03-25T10:56:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 41
maintainers: ["seaworld008"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0f85c3cd3dc28e4357752164709b462392fe9d89729e997c87817c060479b8f/seaworld008/auto-install-mysql-innodb-cluster"
---

# MySQL InnoDB Cluster 自动化部署

面向运维和平台团队的 MySQL InnoDB Cluster 自动化部署与运维方案，基于 Ansible 编排 MySQL Server、MySQL Router、HAProxy、Keepalived、扩缩容、滚动配置应用和可选备份流程。

> 当前仓库以中文文档为主，适合需要快速落地 MySQL 高可用自动化主线的中文 DevOps、DBA、SRE 和后端团队。英文摘要见文末。

## 快速导航

- [Quick Start](#quick-start)
- [部署指南](DEPLOYMENT_COMPLETE_GUIDE.md)
- [部署前检查清单](PRE_DEPLOYMENT_CHECKLIST.md)
- [备份与恢复指南](docs/BACKUP_AND_RESTORE_GUIDE.md)
- [高可用部署蓝图](docs/DEPLOYMENT_HA_BLUEPRINT_ZH.md)
- [故障排查](TROUBLESHOOTING.md)
- [Release](https://github.com/seaworld008/auto-install-mysql-innodb-cluster/releases)
- [Issues](https://github.com/seaworld008/auto-install-mysql-innodb-cluster/issues)

## 项目定位

这个项目不是单次执行的安装脚本集合，而是一条可持续维护的 MySQL InnoDB Cluster 自动化主线。它把数据库层、路由层和入口层的常见部署动作收敛到同一套 Ansible inventory、group vars、playbooks 和入口脚本中，方便团队在后续扩容、缩容、配置变更和备份时继续复用。

核心目标：

- 用 Ansible 自动化部署 MySQL InnoDB Cluster。
- 通过 MySQL Router、HAProxy 和 Keepalived 提供分层接入能力。
- 支持显式读写端口、显式只读端口和单端口自动读写分离入口。
- 将扩容、缩容、滚动配置应用、内核优化和可选备份纳入统一入口。
- 让仓库成为可审计、可协作、可继续演进的运维资产。

## 适合场景

- 从零部署 3 节点 MySQL InnoDB Cluster。
- 为 MySQL Cluster 增加独立 MySQL Router 层。
- 通过 HAProxy + Keepalived 提供统一 VIP 入口。
- 将 MySQL 运维操作标准化为 Ansible playbook。
- 在测试、预生产或生产候选环境中验证 MySQL 8.0 / 8.4 高可用拓扑。
-…
