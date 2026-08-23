---
repo: "KunMoe/kun-galgame-infra"
name: "kun-galgame-infra"
description: "Kun Visual Novel infrastructures, oauth service, image service, moderation service, artifacts service, etc."
readmeQualityOk: true
url: "https://github.com/KunMoe/kun-galgame-infra"
homepage: "https://oauth.kungal.org"
language: "Go"
languages: ["Go"]
languagePcts: [76]
topics: ["docker", "docker-compose", "dokploy", "go-fiber", "image-processing", "infra", "moderation", "oauth", "oauth2"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 13
recentReleases: 1
createdAt: "2026-03-06T10:31:00Z"
lastCommitAt: "2026-08-23T04:09:25Z"
lastReleaseAt: "2026-08-07T03:30:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 60
maintainers: ["KunMoe"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c05e1d171ac1d9020cbb02918e9bd1d568339ac6fabea991fc6affb20cefdc9/KunMoe/kun-galgame-infra"
---

# kun-galgame-infra

> 鲲 Galgame 生态的**枢纽(hub)** —— 统一身份(OAuth)、图床(image service)、galgame-wiki,并**拥有全生态共享的基础设施**。
>
> 原名 `kun-oauth-admin`,现更名为 `kun-galgame-infra` 以反映其"生态基础设施枢纽"的定位。

## 这是什么

本仓是鲲 Galgame 生态**三仓**中的**枢纽**,对内对外提供:

- **身份中心** —— 自建 **OAuth 2.0 授权服务器**(授权码 + PKCE),生态内所有站点的统一登录与用户/积分(moemoepoint)体系。
- **图床(image service)** —— 图片上传、处理(WebP)、分发。
- **galgame-wiki** —— galgame 元数据的权威来源(VNDB 同步、标签、厂商等)。
- **共享基础设施的拥有者** —— 一套 **Postgres(5 库)/ Redis / MinIO(S3)/ Meilisearch**;下游站点按服务名连过来,不各自再起一套。

## 生态

| 仓库 | 代号 | 角色 |
|---|---|---|
| **kun-galgame-infra**(本仓) | infra / 枢纽 | 身份 + 图床 + wiki + 共享基础设施 |
| [kun-galgame-forum](https://github.com/KunMoe/kun-galgame-forum) | kungal | 论坛主站 |
| [kun-galgame-patch](https://github.com/KunMoe/kun-galgame-patch) | moyu | 补丁站 |

下游(kungal / moyu)在运行时通过容器**服务名**调用枢纽:`oauth:9277`、`catalog:9281`(galgame-wiki 面自 W3 起由 catalog 服务承载)、`image:9278`,并共用枢纽的 Postgres / Redis / MinIO / Meili。

## 架构

**可部署服务**(均无状态;Go 多阶段编译,Nuxt 出自包含 `.output`):

| 服务 | 容器端口 | 说明 |
|---|---|---|
| `oauth` | 9277 | OAuth 授权服务器 + 用户 / moemoepoint(cgo:内嵌图床 admin) |
| `image` | 9278 | 图床服务(cgo + libwebp) |
| `artifact` | 9279 | 大文件(补丁)服务(纯 Go) |
| `catalog` | 9281 |…
