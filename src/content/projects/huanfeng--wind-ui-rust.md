---
repo: "huanfeng/wind-ui-rust"
name: "wind-ui-rust"
description: "基于 Rust 的跨平台轻量级 GUI 库"
readmeQualityOk: true
url: "https://github.com/huanfeng/wind-ui-rust"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["gui", "rustui"]
stars: 15
forks: 3
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-17T01:53:11Z"
lastCommitAt: "2026-08-16T04:01:28Z"
lastReleaseAt: "2026-07-06T11:13:29Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 69
undervaluedScore: 49
maintainers: ["huanfeng"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fe355142950f7eb9f396148253e60a29cfd80d67d757a74826a1d6d38442abc/huanfeng/wind-ui-rust"
discussionCount: 0
---

# windui

**简体中文** · [English](https://github.com/huanfeng/wind-ui-rust/blob/HEAD/README.en.md)

> 轻量跨平台桌面 GUI 框架 — 用 Rust 构建内存友好的小工具。

`平台原生窗口` · `tiny-skia 矢量渲染` · `平台原生文字排版` · 无运行时 · 无 GC。

</p>

| 平台 | 窗口/呈现 | 文字 |
|------|-----------|------|
| **Windows** | Win32 + GDI（DIB 拷屏） | DirectWrite |
| **macOS** | Cocoa/AppKit + CoreGraphics（CGImage blit） | Core Text |

渲染层（`tiny-skia`）与全部控件/布局/事件逻辑平台无关；每个平台只实现「窗口+事件循环」与「文字引擎」两条缝。

## 为什么

做小工具时，Electron 动辄上百 MB，Go GUI 因 runtime/GC 也要 15–40MB。windui 没有运行时、没有垃圾回收，Windows 上的实测：

| 指标 | 实测值 |
|------|--------|
| 二进制体积（release，LTO+strip） | 最小窗口应用 **0.44 MB**；综合示例（含 SVG + 全控件）**1.07 MB** |
| 私有内存（PrivateBytes，520×560 窗口） | **3.65 MB** |
| 跨平台直接依赖 | tiny-skia（渲染）· resvg（SVG，默认开，不用则被 LTO 裁掉）· serde + toml（主题）；平台系统绑定按 target 引入 |

> 工作集约 14MB，其中大部分是 gdi32/dwrite 等**跨进程共享**的系统 DLL 映射；进程真正独占的私有内存仅约 3.6MB。

## 特性

- **命令式 Builder API** — 纯 Rust 链式构建，类型安全、零解析开销。
- **Copy 句柄状态** — 状态是 `Signal<T>`，闭包里 `move` 直接捕获、不用 `clone()` 前戏；`set()` 自动触发重绘。数据变化驱动子树重建（`list_signal`），动态列表不用手写 diff。
- **运行期换主题** — `App::theme_handle()` 拿句柄，回调里 `set(Theme::dark())` 即整树热切换；用 `Role` 表达的颜色（`fg_role`/`bg_role`）自动跟随。
- **一份代码，两个平台** — 控件树、布局、事件、动画、主题全平台无关；切换平台零改动。
-…
