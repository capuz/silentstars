---
repo: "Lamina-dev/Lamina"
name: "Lamina"
description: "欲了解更多，前往 www.laminasys.org"
readmeQualityOk: true
url: "https://github.com/Lamina-dev/Lamina"
homepage: "https://www.laminasys.org"
language: "C++"
languages: ["C++"]
languagePcts: [96]
stars: 405
forks: 32
openIssues: 10
closedIssues: 69
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2025-06-22T12:56:43Z"
lastCommitAt: "2026-09-06T08:04:12Z"
lastReleaseAt: "2025-08-10T18:18:08Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 38
maintainers: ["Ziyang-Bai", "geguj"]
openGraphImageUrl: "https://opengraph.githubassets.com/54795bd10a26106b33419cc4ef4b7c71879a545f8988f919195d8ca3efea3cfe/Lamina-dev/Lamina"
---

# Lamina

Lamina 是一个静态强类型、表达式导向的数学 DSL / 脚本语言，设计目标是"静态、模块化、数学"。
本仓库是 Lamina 语言的编译器前端与寄存器式虚拟机的参考实现（单仓库：`compiler/` + `runtime/`）。

语言规范由 [Lamina Standard Recommendation（LSR）](https://lsr.laminasys.org) 定义，当前核心规范为
[LSR 000 - Lamina 核心语言规范（草案）](https://lsr.laminasys.org/store/LSR-000.html)。
本实现目前覆盖 LSR 000 的核心子集，详细进度见文末 [LSR 实现进度](#lsr-实现进度)。

## 快速开始

依赖：CMake ≥ 3.26、C++23 编译器（GCC 或 Clang，MSVC 不支持）。首次配置会自动通过
FetchContent 拉取 `dyncall`（FFI）与 `LmCAS`（符号计算）。

```bash
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release
# 可按需开启汇编-DUSE_ASM=ON

cmake --build build --parallel
```

产物：

| 目标                         | 类型           | 说明                                   |
|------------------------------|----------------|----------------------------------------|
| `lamina`                     | 可执行文件     | CLI 入口，`./lamina <file.lm>`         |
| `liblamina`                  | 共享库         | 运行时 + 编译器，导出 C ABI（`lmx.h`） |
| `laminac` / `lamina_runtime` | OBJECT 库      | 编译器前端 / 虚拟机                    |
| `lmcas`                      | cas计算库      | 仓库LMCAS构建产物                      |
| `lmmp`                       | 核心数字计算库 | 仓库 LMMP 构建产物                     |
运行：

```bash
./build/lamina examples/fib.lm…
