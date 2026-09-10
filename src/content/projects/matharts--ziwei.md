---
repo: "matharts/ziwei"
name: "ziwei"
description: "MathArts 开源生态的标准驱动紫微斗数排盘引擎"
readmeQualityOk: true
url: "https://github.com/matharts/ziwei"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [71, 29]
topics: ["typescript", "ziwei", "ziweidoshu", "ziweidoushu", "matharts"]
stars: 7
forks: 3
openIssues: 3
closedIssues: 45
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-01-17T10:31:29Z"
lastCommitAt: "2026-09-10T08:20:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 80
maintainers: ["lzm0x219", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/24f4edb6f057b9552795bcc6fe6a033ce71f20b8373af600ae5f1ae4ce64b51d/matharts/ziwei"
discussionCount: 0
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/ziwei-banner-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="assets/ziwei-banner-light.png">
</picture>

  <strong>输入农历出生资料，查询宫位、星曜与四化。</strong><br>
  为 Rust 应用提供不可变的结构化命盘。
</p>

</p>

</p>

> [!NOTE]
> **开发中** · 当前通过 Git 接入开发版本，接口与功能仍可能调整。

Rust 接入从下方安装与示例开始；Node.js / TypeScript 接入见 [Node 包说明](https://github.com/matharts/ziwei/blob/HEAD/packages/ziwei/README.md)。当前实现与待交付内容见[范围](#范围)，领域、架构与开发文档见[阅读指南](#阅读指南)。

## 安装

需要 **Rust 1.98+**。在你的 Rust 项目目录执行：

```sh
cargo add ziwei --git https://github.com/matharts/ziwei.git
```

<details>
<summary>还没有项目？从这里开始</summary>

在准备存放代码的目录执行：

```sh
cargo new --bin ziwei-demo
cd ziwei-demo
cargo add ziwei --git https://github.com/matharts/ziwei.git
```

完成后留在 `ziwei-demo` 目录，继续下方示例。

</details>

<details>
<summary>使用 Cargo.toml 或固定提交</summary>

也可在 `Cargo.toml` 中直接声明：

```toml
[dependencies]
ziwei = { git = "https://github.com/matharts/ziwei.git" }
```

应用项目应保留 `Cargo.lock`，记录实际使用的提交。需要在依赖声明中固定提交时，为安装命令追加 `--rev <提交哈希>`，替换为实际提交哈希。

</details>

## 使用

**建盘 → 查询 → 输出**。将项目的 `src/main.rs` 替换为以下完整示例：

```rust
use ziwei::{Birth, BirthDay, BirthMonth, Branch,…
