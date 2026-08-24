---
repo: "NOVAzhe/Kaula_language_compiler"
name: "Kaula_language_compiler"
description: "Kaula语言是一款以C为基础开发的现代编程语言"
readmeQualityOk: true
url: "https://github.com/NOVAzhe/Kaula_language_compiler"
language: "Go"
languages: ["Go", "C"]
languagePcts: [49, 48]
stars: 14
forks: 2
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-03-08T12:16:07Z"
lastCommitAt: "2026-08-24T04:22:42Z"
lastReleaseAt: "2026-08-23T10:40:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 52
maintainers: ["NOVAzhe", "ClaudyFlow", "LTreeshu"]
openGraphImageUrl: "https://opengraph.githubassets.com/582e2748ffe98c1784097d1a1af2ea3aa5f48e59f97c655da8a59416017d87c1/NOVAzhe/Kaula_language_compiler"
---

# Kaula 编程语言

**更现代、更好用的 C**

</div>

> **Multi-language Support**：如需阅读英文或其他语言的文档，推荐使用 [docs/tools/translate.py](https://github.com/NOVAzhe/Kaula_language_compiler/blob/HEAD/docs/tools/translate.py) 生成本地化文档方便阅读。Supported languages: English, 日本語, 한국어, Deutsch, Français, Español, Русский.

---

## Kaula 是什么

Kaula 是一门**静态类型的系统级编程语言**，编译到 C，由 Clang 生成原生代码。

核心设计目标：**用更简单的语法，获得接近 Rust 的安全保证**——通过 SOR（Sub-structural Ownership）在编译期消除数据竞争和悬垂指针，而不引入运行时开销。

---

## 快速开始

### 安装

```bash
# 构建编译器
python toolkit_build.py

# 或手动构建
cd compiler && go build -o ../bin/kaulac ./cmd/kaulac/
```

依赖：Python 3.8+、Go 1.21+、LLVM-mingw 或 MSVC（Windows）/ Clang（Linux/macOS）

### Hello World

```kaula
import std.io

fn main() {
    println("Hello, Kaula!")
}
```

### 编译运行

```bash
# 基本编译
kaulac main.kl

# 启用调试符号
kaulac --debug main.kl

# Release 模式
kaulac --release main.kl

# 查看版本
kaulac --version
# 输出: kaulac v1.0.42 (26.8.23-master-67ffac3, sor-oxide)
```

---

## 版本号

Kaula 使用双版本号系统：

| 类型 | 格式 | 示例 | 说明 |
|------|------|------|------|
| **发布版本** | `v1.0.x` | `v1.0.42` | x = 自 v1.0 以来的提交次数 |
| **快照版本** | `YY.M.DD-branch-hash` | `26.8.23-master-67ffac3` | 构建时自动生成 |

版本号自动生成：

```bash
# 查看当前版本
python…
