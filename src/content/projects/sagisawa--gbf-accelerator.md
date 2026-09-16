---
repo: "Sagisawa/GBF-Accelerator"
name: "GBF-Accelerator"
description: "碧蓝幻想（GBF）本地静态资源缓存与代理转发工具"
readmeQualityOk: true
url: "https://github.com/Sagisawa/GBF-Accelerator"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["cache", "gbf", "granblue-fantasy", "mitm", "proxy", "speed-proxy"]
stars: 62
forks: 8
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-09-12T08:53:28Z"
lastCommitAt: "2026-09-16T08:45:04Z"
lastReleaseAt: "2026-09-15T07:19:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 31
maintainers: ["Sagisawa"]
openGraphImageUrl: "https://opengraph.githubassets.com/acd2bf7658895c9bb09b4e06515f59e0a44c848d82f313be89dd8130f5e2813f/Sagisawa/GBF-Accelerator"
---

# GBF Accelerator

碧蓝幻想（Granblue Fantasy）本地静态资源缓存与加速代理工具。

通过将游戏静态资源（立绘、音频、战斗动画、脚本）本地化缓存至 SSD / 内存中，减少静态资源的跨海重复下载，降低重复加载延迟与流量消耗；同时透明联动 Clash / v2rayN 等上游代理，核心游戏 API（抽卡、编队、结算、多人战等）原样转发、不做修改。

> 📥 **下载开箱即用版**：前往 [Releases 页面](https://github.com/Sagisawa/GBF-Accelerator/releases) 下载最新绿色便携包 `GBF_Accelerator_v1.7.1_GUI.zip`，解压即用，无需配置 Python 环境。各版本改动参见 [CHANGELOG.md](https://github.com/Sagisawa/GBF-Accelerator/blob/HEAD/CHANGELOG.md)。

---

## 主要功能

- **动态 API / 静态素材双通道物理隔离 (Dual-Client)**：
  - **动态 API 通道 (`api_client`)**：针对 `game.granbluefantasy.jp` 专设独立 HTTP/1.1 连接池，避免协议降级开销与队头排队。
  - **静态素材通道 (`asset_client`)**：针对 Akamai CDN 启用 HTTP/2 多路复用并发通道。
  - **连接池互不影响**：后台 Prefetch 批量并发预加载素材时，动态 API 拥有专属长连接通道，减少与静态流量的连接排队冲突。
- **白名单只读接口失效重试 (Safe Stale-Retry)**：
  - **写请求不重试**：普攻、技能、召唤等所有 POST 请求以及未知路径不进行重试，避免重复触发。
  - **只读白名单断连重试**：仅对 `/rest/multiraid/start.json`、`/rest/raid/start.json` 等已识别的只读接口，在未收到响应且底层空闲长连接断开（`ConnectError` / `RemoteProtocolError` / `ReadError`）时，自动执行最多 1 次重新建连重发。
- **GUI 实时日志查看**：主界面底栏提供「实时日志」窗口，显示请求耗时、状态及连接是否复用（`reused` / `new`），支持关键词检索与按分类筛选。
- **API 延迟与连接复用统计**：通过底层传输流统计连接复用情况，并记录耗时分布（P50 / P95 / P99），支持在配置中开启或关闭。
- **静态资源本地加速与内存热点缓存 (RAM…
