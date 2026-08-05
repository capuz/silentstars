---
repo: "bbs1org/bbs1org"
name: "bbs1org"
description: "一个极简 PHP 论坛。由一个仅100多KB大小的PHP文件构建。纯原生、无框架、无依赖，支持 SQLite、MySQL 和 PostgreSQL。适合社区站点、低成本部署和 AI 二次开发。"
readmeQualityOk: true
url: "https://github.com/bbs1org/bbs1org"
homepage: "https://bbs1.org"
language: "PHP"
languages: ["PHP"]
languagePcts: [80]
stars: 367
forks: 50
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 1
createdAt: "2025-06-20T13:58:59Z"
lastCommitAt: "2026-08-05T06:07:46Z"
lastReleaseAt: "2026-08-03T07:31:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 37
maintainers: ["bbs1org"]
openGraphImageUrl: "https://opengraph.githubassets.com/c82d0234873ad7437b540929da7e1706ecf7dd42cb60fafa502a617c82808cb6/bbs1org/bbs1org"
---

# bbs1org

一个极简 PHP 论坛。由一个仅100多KB大小的PHP文件构建。纯原生、无框架、无依赖，支持 SQLite、MySQL 和 PostgreSQL。适合社区站点、低成本部署和 AI 二次开发。

## 特点

- 纯原生 PHP，单核心代码文件，无框架和 Composer 依赖，部署与维护简单
- 支持 SQLite、MySQL 和 PostgreSQL，数据库结构和搜索能力保持跨引擎兼容
- 包含首页、版块、主题、回帖、收藏、个人主页和后台管理等完整论坛功能
- 支持用户组、版块权限、站点设置、注册控制、发帖限制和附件管理
- 插件机制支持 Hook、路由、后台页面、资源合并、在线安装更新和统一计划任务
- 站点设置、版块和用户组按需懒加载，数据库结构简单，负载能力强
- 支持 AJAX 交互和响应式布局，兼顾 PC 与移动端使用体验

## 环境

- PHP 8.1+
- PDO SQLite、PDO MySQL 或 PDO PostgreSQL 扩展

## 演示

https://bbs1.org

## Docker 源码部署

服务器需先安装 Docker `curl -fsSL https://get.docker.com -o install-docker.sh && sudo sh install-docker.sh`

源码仓库和 Docker 配置仓库应放在同一目录下。

```bash
git clone https://github.com/bbs1org/bbs1org.git
git clone https://github.com/bbs1org/bbs1org_docker.git
cd bbs1org_docker
cp .env.example .env
# 如需修改端口或数据库模式，请先编辑 .env
docker compose up -d
```

容器启动后访问默认8080端口：

```text
http://服务器地址:8080
```

首次访问会进入网页安装程序，请在页面中设置站点、默认版块和管理员账号。使用 MySQL 或 PostgreSQL 时，先通过 `docker compose ps` 确认数据库状态为 `healthy`。

默认使用 `SQLite`。如需修改 `8080` 端口，或者启用 `MySQL`、`PostgreSQL`，请在启动前修改 `.env`。数据库容器会按 `.env` 中的 `DB_NAME`、`DB_USER`、`DB_PASSWORD` 初始化；网页安装时填写同样的数据库名、用户名和密码。

| 数据库 | `COMPOSE_PROFILES` | 数据库地址 | 端口 |
| --- | --- | --- | --- |
|…
