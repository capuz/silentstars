---
repo: "Antruly/libuvcpp"
name: "libuvcpp"
description: "The core goal of libuvcpp is to improve development efficiency in C++ environments while preserving libuv's high performance and original semantics. It systematically encapsulates libuv's fundamental types into corresponding C++ classes and consolidates related methods into appropriate classes, making interfaces better conform to C++ conventions, everyday development more convenient, and code more readable. On this basis, libuvcpp extends modules such as memory pools, Net, Web, and SSL, providing commonly used tools and services in mainstream development to help developers quickly build and develop projects."
originalDescription: "libuvcpp 的核心目标是：在保留 libuv 高性能与原有语义的前提下，提高 C++ 环境下的开发效率。它将 libuv 的基本类型系统化封装为对应的 C++ 类，并把相关方法归并到合适的类中，使接口更符合 C++ 使用习惯，日常开发更便捷，代码可读性更高。在此基础上，libuvcpp 还扩展了内存池、Net、Web、SSL 等模块，提供主流开发中常用的工具服务，帮助开发者快速构建和开发项目。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Antruly/libuvcpp"
language: "C++"
languages: ["C++"]
languagePcts: [90]
topics: ["cpp", "libuv", "http-server", "http2"]
stars: 10
forks: 3
openIssues: 3
closedIssues: 11
watchers: 2
contributors: 3
recentReleases: 3
createdAt: "2026-01-27T17:58:18Z"
lastCommitAt: "2026-09-24T08:42:27Z"
lastReleaseAt: "2026-09-23T09:07:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 63
maintainers: ["Antruly", "sercebr"]
openGraphImageUrl: "https://opengraph.githubassets.com/799ec39ebc3e0112cdbaa73a04317a8a1616a8fd04b38522741ad6b2e6b91a6e/Antruly/libuvcpp"
discussionCount: 0
---

🔧 Modern C++11 wrapper for [libuv](https://github.com/libuv/libuv) — event-driven I/O with object-oriented APIs, dual-mode async/sync support, HTTP/1.1, WebSocket (RFC 6455), and SSL/TLS.

- **Version**: `1.3.8-dev` — **Author**: `zhuweiye` — **License**: `MIT`
- **Languages**: [English](https://github.com/Antruly/libuvcpp/blob/HEAD/README.md) · [中文](https://github.com/Antruly/libuvcpp/blob/HEAD/README.zh.md)

---

## Overview

libuvcpp provides a thin, idiomatic C++ layer over libuv's event loop, handles, and requests.
It preserves libuv's performance while adding RAII resource management, `std::function` callbacks,
and higher-level client/server abstractions for TCP, UDP, HTTP, and WebSocket.

The library is organized into layered modules:

```
application
┌────────────┐
│ web (HTTP/WS) │  ← uvcpp_http_client/server, uvcpp_ws_client/server
├────────────┤
│ http2        │  ← h2 session/connection layers, nghttp2 glue (`UVCPP_ENABLE_NGHTTP2=ON`)
├────────────┤
│ ssl (TLS)    │  ← uvcpp_ssl, uvcpp_ssl_context (OpenSSL wrapper)
├────────────┤
│ net          │  ← uvcpp_tcp_client/server, uvcpp_udp_client/server
├────────────┤
│ handle + req │  ← uvcpp_loop,…
```
