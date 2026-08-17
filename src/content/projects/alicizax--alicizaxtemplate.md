---
repo: "AlicizaX/AlicizaXTemplate"
name: "AlicizaXTemplate"
description: "AlicizaX Unity Gameframework"
readmeQualityOk: true
url: "https://github.com/AlicizaX/AlicizaXTemplate"
language: "C#"
languages: ["C#"]
languagePcts: [82]
stars: 83
forks: 14
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-08T07:01:14Z"
lastCommitAt: "2026-08-17T04:19:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 32
maintainers: ["b4lie"]
openGraphImageUrl: "https://opengraph.githubassets.com/12a9ddee025dd0563f7e9b9253d2c5d39d873077e7c798db387e2c1d7bbe0f7c/AlicizaX/AlicizaXTemplate"
---

</div>

## 简介

**AlicizaX** 是一套为商业化项目打造的 **Unity 游戏框架**。

</div>

## 核心能力

| 模块 | 核心价值 | 亮点特性 |
| :--- | :--- | :--- |
| **Event**<br>事件系统 | **0 GC 高频通信** | 无堆分配设计 · 自动解绑 · 轻松应对战斗同步与万级派发 |
| **Timer**<br>时间轮 | **极致性能计时** | 四级时间轮算法 · 无全量扫描 · 精准承载技能 CD / 心跳 / 延时任务 |
| **MemoryPool**<br>内存池 | **低 GC 引用管理** | 分页 Slab 架构 · 句柄校验 · 动态容量策略 · 内存与性能平衡 |
| **ObjectPool**<br>对象池 | **全生命周期管控** | 分页槽位管理 · 支持锁定/多 Spawn · 低内存清理 · 帧预算释放 |
| **Resources**<br>资源服务 | **智能缓存策略** | 基于 YooAsset · 资源租约 · 热资源保活 · 闲置回收 · 高缓存命中率 |
| **HybridCLR**<br>热更新 | **无缝 C# 热更** | AOT / Hotfix 分层 · 内置反射调用示例 · 资源与代码一体化流程 |
| **UI**<br>界面系统 | **高效窗口管理** | 窗口栈与层级 · Holder 自动生成 · Widget / Tab 复用 · 逻辑视图分离 |
| **RecyclerView**<br>虚拟列表 | **海量数据承载** | 可见区增量刷新 · 支持循环 / 分组 / 网格 / 分页 / 圆形布局 · 惯性滚动 |
| **UI Extension**<br>UI 扩展 | **开箱即用组件** | 强封装 Button / Switch / Image · 拖拽导航 · 多端输入图标 · 减少胶水代码 |
| **Navigation**<br>导航热键 | **多设备输入** | 基于 New Input System · 自动设备识别 · 顶层焦点域 · 热键转发 |

## 新工程安装指南

### 1. 安装 Framework Installer

在 **Unity Package Manager** 中，通过 Git URL 添加安装器：

```text
https://github.com/AlicizaX/FramworkInstaller.git
```

### 2. 启动安装器

安装完成后，在顶部菜单栏点击：

> **`AlicizaX / Installer`**

**自动配置**：安装器将自动检测并补齐所需的 **OpenUPM…
