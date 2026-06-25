---
repo: "Jackarain/autogit"
name: "autogit"
description: "用于自动提交某个目录下所有文件到 git 仓库，实现自动目录备份到 git 仓库的功能。（This is an automated program for backing up directories. Its main function is to automatically commit and push a Git repository directory to a Git backup server.）"
url: "https://github.com/Jackarain/autogit"
language: "C++"
languages: ["C++"]
languagePcts: [90]
topics: ["autobackups", "gitbackup", "gitwatch", "dir-monitor", "watchdir", "directory-monitoring", "filesystemwatcher"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-05-11T02:12:02Z"
lastCommitAt: "2026-06-25T02:06:10Z"
lastReleaseAt: "2023-11-12T13:07:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 58
maintainers: ["Jackarain"]
openGraphImageUrl: "https://opengraph.githubassets.com/019b4cce4335551aa78d3caedca2e87e3f72461bbdb1b87fe4f00628960b2a66/Jackarain/autogit"
---

# autogit

中文 | [English](README_EN.md)

**autogit** 是一个基于 C++20 协程的高性能 Git 仓库自动备份守护进程。它实时监控指定目录的文件变化，自动将更改提交并推送到远程 Git 服务器，实现无人值守的持续备份。

---

## 功能特性

### 🔄 自动提交与推送
- 自动检测仓库中的文件变更（新增、修改、删除、重命名、类型变更）
- 自动 `git add` 所有变更文件
- 自动创建提交并将更改推送到远程 Git 服务器
- 支持强制推送（force push）模式

### 👁️ 实时文件监控
- 基于操作系统的原生文件系统事件通知：
  - **Linux**: inotify
  - **macOS**: FSEvents
  - **Windows**: ReadDirectoryChangesW
- 无需轮询，即时响应文件变化
- 可配置的轮询回退间隔作为补充

### 🔐 多种认证方式
- **SSH 密钥认证**: 支持自定义公钥/私钥路径及密码短语
- **HTTP/HTTPS 认证**: 支持用户名/密码认证
- 自动适配远程仓库的认证方式

### 🏗️ 自动仓库初始化
- 如果目标目录尚未初始化 Git 仓库，自动创建并初始化
- 自动配置远程仓库地址
- 支持空仓库首次提交（Initial Commit）

### ⚙️ 灵活配置
- 支持命令行参数和配置文件（`autogit.conf`）两种方式
- 自定义提交信息
- 自定义 Git 作者名称和邮箱
- 可配置的检查间隔
- 静默模式（关闭日志输出）
- 日志文件目录可配置

### 🐳 Docker 支持
- 提供 Alpine 和 Ubuntu 两种基础镜像的 Dockerfile
- 静态编译，镜像体积小
- 开箱即用的容器化部署

### 🖥️ 跨平台支持
- Linux、macOS、Windows 全平台兼容
- 使用 CMake 构建系统，支持 Ninja 加速编译
- 支持 GCC、Clang、MSVC 编译器
- 支持 ccache 编译缓存加速

---

## 快速开始

### 编译

```bash
git clone https://github.com/jackarain/autogit.git
cd autogit
mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release -G Ninja
ninja
```

编译完成后，可执行文件位于 `build/bin/autogit`。

### 基本用法

监控一个已存在的 Git 仓库并自动备份：

```bash
autogit --repository…
