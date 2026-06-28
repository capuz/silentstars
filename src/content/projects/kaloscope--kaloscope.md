---
repo: "kaloscope/kaloscope"
name: "kaloscope"
description: "A workflow-powered local media manager"
url: "https://github.com/kaloscope/kaloscope"
homepage: "https://kaloscope.org"
language: "Python"
languages: ["Python", "Svelte"]
languagePcts: [42, 42]
topics: ["anime", "danmaku", "media", "python", "svelte", "workflow"]
stars: 250
forks: 11
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2024-11-20T09:11:22Z"
lastCommitAt: "2026-06-28T03:07:27Z"
lastReleaseAt: "2026-05-07T16:17:47Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 46
maintainers: ["C5H12O5"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b49d1eab15a77f8e3e68da4a56da2420f9056bda2947357e630aa2994ca97f8/kaloscope/kaloscope"
---

[演示站点](https://demo.kaloscope.org/login?username=kaloscope&password=kaloscope)
|
[使用文档](https://kaloscope.org/docs/introduction)
|
[部署指南](https://kaloscope.org/docs/deployment)
|
[常见问题](https://kaloscope.org/docs/faq)
|
[参与开发](https://kaloscope.org/docs/development)
|
[工作流模板](https://github.com/kaloscope/workflows)
|
[TG 群组](https://t.me/kaloscope_official)

| <img align="center" src="screenshots/danmaku-settings.png" /> | <img align="center" src="screenshots/image-viewer.png" /> | <img align="center" src="screenshots/text-viewer.png" /> |
| ------------------------------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------- |

</div>

## 项目简介

Kaloscope 是一款基于可视化工作流引擎的本地媒体库管理工具。其资源搜索与元数据刮削等能力均由可编辑的工作流来驱动，可灵活对接任意资源站点与元数据来源。

## 快速开始

通过 Docker 命令行直接拉取并运行单个 Kaloscope 容器的示例：

```bash
docker run -d \
  --name kaloscope \
  --add-host=host.docker.internal:host-gateway \
  -e PUID=1026 \
  -e PGID=100 \
  -e UMASK=022 \
  -e TZ=Asia/Shanghai \
  -e AUTO_TLS=true \
  -e TLS_HOSTNAME=192.168.31.2 \
  -e ENABLE_ARIA2=true \
  -v /volume1/kaloscope/workspace:/workspace \
  -v…
