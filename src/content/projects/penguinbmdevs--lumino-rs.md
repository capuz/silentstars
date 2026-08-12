---
repo: "PenguinBMDevs/lumino-rs"
name: "lumino-rs"
description: "使用Rust开发的新一代MIDI编辑器"
readmeQualityOk: true
url: "https://github.com/PenguinBMDevs/lumino-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 9
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 5
createdAt: "2025-12-14T02:37:03Z"
lastCommitAt: "2026-08-12T05:15:36Z"
lastReleaseAt: "2026-08-03T13:19:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 66
maintainers: ["Enderman-bm", "BuickMeow"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bcf9aa1633e0c244b46fbbf9314c20a1818c0eea6eccc2c90fb892a74b121e8/PenguinBMDevs/lumino-rs"
discussionCount: 5
---

# Lumino RS

一个使用 Rust 开发的新一代 MIDI 编辑器，基于现代化技术栈构建，提供低延迟、跨平台的 MIDI 编辑体验。

## 特性

- 🎹 **专业 MIDI 编辑**：支持多轨编辑、音符绘制、力度编辑
- ⚡ **高性能渲染**：使用 wgpu 进行 GPU 加速渲染
- 🖥️ **简约外观**：基于 winit + iced，提供现代化UI体验
- 🔌 **多后端 MIDI I/O**：同时支持KDMAPI，winmm和跨平台xsynth后端，提供强劲性能
- ⚙️ **配置持久化**：窗口状态、主题设置自动保存

## 构建

### 前置要求

- 建议版本：Rust 1.94.0 或更新
- 各平台构建工具：
  - **Windows**: Visual Studio Build Tools（推荐） 或 MSVC
  - **macOS**: Xcode Command Line Tools
  - **Linux**: GCC/Clang, pkg-config （建议直接运行构建脚本）

### 编译

```bash
# 克隆仓库
git clone https://github.com/PenguinBMDevs/lumino-rs.git
cd lumino-rs

# 开发构建
cargo build

# 高性能开发构建
cargo build --profile fast-release

# 发布构建（优化）
cargo build --release
```

## 运行

```bash
# 开发模式
cargo run

# 高性能开发测试运行
cargo run --profile fast-release

# 发布模式
cargo run --release
```

首次运行会自动创建配置文件：
- **Windows**: `%APPDATA%\com.PenguinBMDevs.lumino\config.json`
- **macOS**: `~/Library/Application Support/com.PenguinBMDevs.lumino/config.json`
- **Linux**: `~/.config/com.PenguinBMDevs.lumino/config.json`

### 日志控制

通过 `RUST_LOG` 环境变量控制日志级别：

```bash
# 查看所有 lumino 日志（DEBUG 级别，但是我觉得你不需要看这么多）
RUST_LOG=debug cargo run

# 仅显示 WARN 及以上
RUST_LOG=warn cargo run
```

## 许可证…
