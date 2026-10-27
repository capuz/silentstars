---
repo: "chuyu0504/Ruvia"
name: "Ruvia"
description: "Ruvia is a C++20 HTTP/1.1 web framework with a low-overhead request path."
readmeQualityOk: true
url: "https://github.com/chuyu0504/Ruvia"
language: "C++"
languages: ["C++"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-05-31T13:51:46Z"
lastCommitAt: "2026-10-27T09:15:43Z"
lastReleaseAt: "2026-10-26T13:01:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 57
maintainers: ["chuyu0504"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a0f9f6a5d71d54f03648196a1e0e25f908e162dd46a3d28deb0e6881bc851b6/chuyu0504/Ruvia"
---

# Ruvia

Ruvia 是基于 C++20 协程的 HTTP/Web 框架，提供协程路由处理、声明式类型化模型、中间件、流式传输、WebSocket、HTTP 隧道、出站客户端，以及可选的 SQL（MariaDB / PostgreSQL）、ORM、Redis 和 JWT 支持。

| 库目录 | CMake Target | 职责与公开依赖 |
| --- | --- | --- |
| `ruvia-core` | `ruvia::core` | 协程任务、事件循环、有界通道与阻塞卸载池；依赖 standalone Asio、`Threads::Threads` 与 mimalloc。 |
| `ruvia-http` | `ruvia::http` | 独立 sans-I/O 的 HTTP/1.0、HTTP/1.1、HTTP/2、内容压缩与 WebSocket 协议层；依赖 zlib、Brotli 与 Zstandard。 |
| `ruvia-web` | `ruvia::web` | 服务端、路由、中间件、Model/ORM、TLS、出站客户端与数据接入；依赖 `ruvia::core`、`ruvia::http` 与 OpenSSL 3.0+。 |

## 构建与接入

需要 CMake 3.28+、支持 C++20 的编译器，以及已引导的 vcpkg 检出目录（设置环境变量 `VCPKG_ROOT`）。Linux 可执行文件要求 glibc；Windows 构建要求 MSVC，并使用 `x64-windows-static` triplet 与静态运行时（`MultiThreaded$<$<CONFIG:Debug>:Debug>`）。

顶层构建在未指定 `CMAKE_TOOLCHAIN_FILE` 时从 `VCPKG_ROOT` 自动选择 vcpkg 工具链，并按启用的构建选项选择 [vcpkg.json](https://github.com/chuyu0504/Ruvia/blob/HEAD/vcpkg.json) 中的依赖特性；作为子项目或外部包接入时，宿主工程自行提供工具链与依赖清单。

| CMake 选项 | 默认值 | 说明与边界 |
| --- | --- | --- |
| `RUVIA_BUILD_CORE` | `ON` | 构建 `ruvia::core`。 |
| `RUVIA_BUILD_HTTP` | `ON` | 构建 `ruvia::http`。 |
| `RUVIA_BUILD_WEB` | `ON` | 构建 `ruvia::web`（要求 `RUVIA_BUILD_CORE=ON` 且 `RUVIA_BUILD_HTTP=ON`）。 |
| `RUVIA_BUILD_EXAMPLES` |…
