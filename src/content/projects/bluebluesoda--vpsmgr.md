---
repo: "bluebluesoda/vpsmgr"
name: "vpsmgr"
description: "a panel to share lxc containers"
readmeQualityOk: true
url: "https://github.com/bluebluesoda/vpsmgr"
language: "Go"
languages: ["Go"]
languagePcts: [68]
stars: 13
forks: 6
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-14T14:31:47Z"
lastCommitAt: "2026-08-30T00:44:36Z"
lastReleaseAt: "2026-08-27T14:30:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 60
undervaluedScore: 47
maintainers: ["bluebluesoda"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d06903066c472c0764ace2aebaf246ec905ff72592bcdc3fbdbb7fcf3940e1f/bluebluesoda/vpsmgr"
---

# Vpsmgr Lite

轻量级 Incus 容器托管面板，适合小型 VPS 和低配主机。

> **安全警告**：这里的“虚拟机”是 LXC 容器，不是真正的虚拟机。容器隔离性弱于 KVM/QEMU。容器逃逸或内核漏洞可能影响宿主机和其他租户。不要在共享主机上运行不受信任或高安全要求的工作负载。

[English](https://github.com/bluebluesoda/vpsmgr/blob/HEAD/README.en.md) · [文档](https://github.com/bluebluesoda/vpsmgr/blob/HEAD/docs/README.md)

## 功能细节

- 管理员面板：用户、配额、域名、IPv6 地址池、SSH 公钥与审计日志；支持"以用户身份登录"接入用户面板
- 用户面板：电源控制、自助重装 Debian 13/AlmaLinux 9/openSUSE Leap 16/Arch Linux、域名与 SSH 密钥管理、加密便签（可导出）
- 管理员可为每个用户分配专属颜色（在用户列表中点击用户名）：该用户的「登录面板」按钮与其用户面板背景会采用此颜色，方便代客登录时区分不同用户
- CPU、内存、磁盘支持超售；配额修改实时生效，无需重启容器
- 容器网络严格隔离；IPv6 前缀模式下每个容器获得独立 `/112`，可继续划分子网
- 流量按上下行合计，超额后双向限速至 1 Mbps
- 默认使用压缩 ZFS 存储池；容器数量上限为 200
- 80/443 转发到容器的 80/443；80 使用共享 HTTP 转发，443 使用共享 SNI 转发

## 安装

推荐使用 Ubuntu 24.04。Ubuntu 22+ / Debian 12+ 均可使用；Debian 需要编译内核模块，安装时间较长。

除非你明确检查过现有服务与网络配置，否则请把安装器视为“全新、专用主机”安装器，不要直接在正在运行其他业务的自用主机上执行。安装器会安装并配置 Incus、ZFS（默认）、nftables、Traefik、systemd 服务和容器网桥；启用 v4 入站转发时还要求 `80/443`、`10000-29999`、`30000-31999` 端口可用，并可能停用冲突的 UFW 配置。安装器不会卸载你的业务程序，但端口、网桥和防火墙策略可能与已有服务冲突。

最低建议：1 核、1 GB 内存、15 GB 可用磁盘空间，以及 root 权限。amd64 和 arm64 均支持，主要在 amd64 上测试。

**从预编译安装**
```bash
bash <(curl -fsSL…
