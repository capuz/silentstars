---
repo: "lusipad/plcopen"
name: "plcopen"
description: "一个基于 plcopen 运动控制标准实现的 C++ 库"
url: "https://github.com/lusipad/plcopen"
language: "C++"
languages: ["C++"]
languagePcts: [95]
stars: 27
forks: 18
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 3
createdAt: "2024-08-23T17:23:06Z"
lastCommitAt: "2026-07-04T18:51:26Z"
lastReleaseAt: "2026-07-04T00:59:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 85
undervaluedScore: 64
maintainers: ["lusipad"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0e55887bdcf5e480e40a0417fdcc5292ed69034719ea5a3d35e64e2ecc53f38/lusipad/plcopen"
discussionCount: 1
---

# plcopen

> **现代 C++ 的 PLCopen 运动控制内核 —— 嵌入到你的控制器里，不替代你的控制器。**
>
> *A modern C++ motion-control core for PLCopen-style function blocks and coordinated-motion foundations. Embed it in your controller, not replace your controller.*

> **项目状态**：当前进入 R4 切换收口。默认 `plcopen::plcopen` 包目标已指向新核 `core/`；旧 `src/` v0.x 线不再参与主构建，只在显式 `PLCOPEN_BUILD_LEGACY=ON` 时作为回放和迁移基线构建。在 `v1.0` 前 API 仍可能变化。
>
> **本版新增**：`v0.11.0` 增加 ACS 下的 `MC_MoveLinearAbsolute` / `MC_MoveLinearRelative`。当前代码已贯通共享组路径、2-8 轴执行、Aborting/Buffered、CommandID、GroupStop、成员限制和 CMake consumer。详见 [Part 4 linear matrix](doc/compliance/plcopen-motion-part4-linear-matrix.md)。
>
> **R4 口径**：新核 `core/` 是当前安装、FetchContent、demo 和 Python smoke 的默认入口；旧线只保留 P0-only 维护、golden replay 基线和迁移参考价值。新架构见 [core architecture](doc/design/core/architecture.md)，执行拆解见 [R0-R4 重写拆解](doc/planning/r0-r4-work-breakdown.md)。
>
> 详情见 [ROADMAP.md](ROADMAP.md)；长期方向见 [VISION.md](VISION.md)。

---

## 这是什么

plcopen 是一个 **C++17 运动控制内核**，把实时基础设施、运动规划、轴/组状态和 PLCopen 风格功能块分层放在 `core/`。它被设计成**可嵌入的库**，不是完整的 PLC 运行时。

### 适合你，如果你……

- 正在做工业机器人、自动化设备、定制控制器的 C++ 工程师
- 需要一个实现了 PLCopen 状态机 + 运动规划的库
- 希望把标准运动控制算法**嵌入到自己的系统里**，而不是部署一整套 PLC

### 不适合你，如果你……

- 需要完整的 PLC 编程 IDE（看…
