---
repo: "zigcc/zig-course"
name: "zig-course"
description: "Zig 语言圣经：简单、快速地学习 Zig, Zig Chinese tutorial, learn zig simply and quickly"
readmeQualityOk: true
url: "https://github.com/zigcc/zig-course"
homepage: "https://course.ziglang.cc/"
language: "Zig"
languages: ["Zig"]
languagePcts: [86]
topics: ["tutorial", "tutorials", "zig", "ziglang", "zig-lang", "zig-package"]
stars: 374
forks: 50
openIssues: 5
closedIssues: 41
watchers: 4
contributors: 35
recentReleases: 0
createdAt: "2023-09-10T13:11:28Z"
lastCommitAt: "2026-08-05T06:06:17Z"
lastReleaseAt: "2025-10-23T05:47:12Z"
status: "thriving"
tags: ["community_hub"]
healthScore: 92
undervaluedScore: 39
maintainers: ["jinzhongjia", "dependabot[bot]", "lilhammerfun"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/689642469/65015577-035b-43ee-a458-d1e284a2b82f?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260805%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260805T060948Z&X-Amz-Expires=300&X-Amz-Signature=cbc85d2acd7d8d9325f8b7b518f346baf0e2d571392d2129c247c611b4ce87a3&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTkxMDQ4OCwibmJmIjoxNzg1OTEwMTg4LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.wgbuVlx0irefJ9Vd1ZTYBAW0JRYZWhDWPFPLl7ZYyQg"
discussionCount: 37
---

# Zig 语言圣经

> Zig is a general-purpose programming language and toolchain for maintaining robust, optimal and reusable software.
>
> Zig 是一种通用的编程语言和工具链，用于维护健壮、最优和可重用的软件

</p>

**Zig 语言圣经**（The Zig Programming Bible）是一份开源的 Zig 语言综合中文教程，内容涵盖从基础语法到 `comptime`、异步、内存管理等高级特性，旨在为中文 Zig 爱好者提供一份高质量、系统化的学习资源。除在线阅读外，还提供 PDF 与 EPUB 电子书，方便离线学习。

## 📖 在线阅读

- **官方网站**: [https://course.ziglang.cc/](https://course.ziglang.cc/)
- **GitHub Pages**: [https://zigcc.github.io/zig-course/](https://zigcc.github.io/zig-course/)

## ✨ 内容特色

本教程覆盖了 Zig 学习和实践中的多个重要领域：

- **环境配置**: 指导如何安装和配置 Zig 开发环境，支持多种编辑器配置
- **基础入门**: 包括变量、类型、流程控制、错误处理等基础知识
- **高级主题**: 深入探讨 `comptime`、异步、内存管理、C 语言交互等高级特性
- **工程实践**: 涵盖构建系统、包管理、单元测试和代码风格指南
- **版本兼容**: 提供与 Zig 0.11-0.16 版本相对应的代码示例
- **实战案例**: 包含 TCP 服务器等实际项目示例

## 📁 项目结构

```
zig-course/
├── .github/                    # GitHub Actions 工作流
│   ├── workflows/              # CI/CD 配置
│   └── dependabot.yml         # 依赖更新配置
├── build/                      # 不同 Zig 版本的构建脚本
│   ├── 0.11.zig              # Zig 0.11 构建配置
│   ├── 0.12.zig              # Zig 0.12 构建配置
│   └── ...                    # 其他版本
├── course/                     # 教程主要内容
│   ├── .vitepress/            #…
