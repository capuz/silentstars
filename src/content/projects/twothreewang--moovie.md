---
repo: "TwoThreeWang/Moovie"
name: "Moovie"
description: "聚合影视搜索工具，通过整合多源搜索、智能推荐和极致的响应式设计，为你提供一个干净、高效的观影入口"
readmeQualityOk: true
url: "https://github.com/TwoThreeWang/Moovie"
homepage: "https://moovie.c2v2.com/"
language: "Go"
languages: ["Go", "HTML"]
languagePcts: [68, 21]
stars: 55
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-01-14T09:33:56Z"
lastCommitAt: "2026-08-29T10:21:57Z"
lastReleaseAt: "2026-08-16T05:10:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 37
maintainers: ["TwoThreeWang"]
openGraphImageUrl: "https://opengraph.githubassets.com/189fb722b04327c9107831bbc496b10878e6b57692b29cf61a0d4e9b79fddc40/TwoThreeWang/Moovie"
---

# Moovie New

`new/` 是 Moovie 的重构系统。它不是只替换页面样式，而是把搜索、影视资料、播放、用户、观影记录、社区和后台能力重新整理成一套可以独立运行、测试和发布的 Go Web 应用。Web 端使用 Gin、Go HTML Template、HTMX 和浏览器端 JavaScript；新系统上线后直接使用最终数据模型，不在运行时读取旧表、双写旧表或保留已废弃的客户端 API。

这份 README 主要写给第一次接触本项目、Go Web 或分层架构的开发者。建议先阅读“系统如何运行”和“推荐的代码阅读顺序”，再启动程序。

## 当前代码提供的能力

从 `cmd/web/main.go` 的路由装配和 `web/templates/pages` 的页面模板可以看到，当前实现包括：

- 公开页面：首页、统一搜索、趋势、发现、影视详情、播放、观看记录、推荐、相似内容、片场、用户公开片单、IPTV 和 TVBox。
- 用户能力：注册、登录、登出、设置、头像、想看/看过、短评、回复、点赞、播放进度同步和月度观影报告。
- 播放能力：HLS/M3U8、FLV、MP4、倍速、全屏、画中画、弹幕、手动换源，以及限定在同一媒体单元和同一集内的自动故障切换。
- 追剧更新时间：未完结剧集在详情页和播放页展示下一集播出日期，首页展示在看剧集的今日更新。
- 资料与推荐：豆瓣资料和短评、TMDB 剧照与季集、媒体身份和外部 ID、向量、相似内容、个性化推荐和热门快照。
- 管理与运维：资源站和过滤规则管理、媒体匹配复核、版权/分类管理、反馈处理、数据生命周期操作和 `/api/v2/admin/metrics` 指标接口。

这些是代码已提供的能力清单，不代表每项都已完成生产验收；生产准入仍按发布清单逐项留证。

## 先理解这个系统解决什么问题

Moovie 需要同时处理四类工作：

1. 接收浏览器或 TVBox 的请求，返回 HTML、JSON 或静态文件。
2. 从 PostgreSQL 读取用户、影视、资源、播放候选和任务数据。
3. 访问 AppleCMS、豆瓣、TMDB、Ollama、弹幕接口等外部服务。
4. 在后台执行同步、向量生成、热门快照和运维检查。

旧式实现容易把这些工作全部塞进一个 Web 进程。一旦大量用户同时进入，Web 请求、外部抓取和后台任务就会争抢 CPU、内存、网络连接和数据库连接，最终可能触发 OOM 或健康检查失败，导致容器反复重启。

新系统的核心改进是：

- Web 和 Worker 分离，用户请求不再与大部分后台任务运行在同一进程。
- 每类资源都有明确上限，例如 HTTP 在途请求、重请求、图片代理、数据库连接和外部主机连接。
-…
