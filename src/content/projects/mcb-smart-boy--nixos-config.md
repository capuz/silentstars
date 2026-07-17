---
repo: "MCB-SMART-BOY/nixos-config"
name: "nixos-config"
description: "I have experienced nixos for a long time and the design of using configuration.nix really shocked me , thus I upload my nix document of configuration , glad to hear some comment."
readmeQualityOk: true
url: "https://github.com/MCB-SMART-BOY/nixos-config"
language: "Shell"
languages: ["Shell", "Nix"]
languagePcts: [59, 40]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-08-04T03:27:29Z"
lastCommitAt: "2026-07-17T06:03:39Z"
lastReleaseAt: "2026-02-10T15:40:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 61
maintainers: ["MCBmcbMCBmcb", "MCB-SMART-BOY"]
openGraphImageUrl: "https://opengraph.githubassets.com/a56e897d6b6ef609d7092a44bd72db38c7620c55dc6975ddb86ac03edf3e68d7/MCB-SMART-BOY/nixos-config"
discussionCount: 0
---

# NixOS 配置 — 极客工作站平台

NixOS + Home Manager 多机器配置仓库。三层架构 + 18 个软件 profile + 6 种桌面环境支持。

```bash
git clone -b solo https://github.com/MCB-SMART-BOY/nixos-config.git
cd nixos-config
sudo nixos-generate-config
```

## 快速开始

```bash
# 1. 创建机器配置（推荐）
cp machines/default/local.nix.example machines/<name>/local.nix
# 编辑 machines/<name>/local.nix —— 设置主机名、用户名、时区
sudo nixos-generate-config --show-hardware-config > machines/<name>/hardware-configuration.nix
./run.sh deploy

# 2. 部署
sudo nixos-rebuild switch --flake /etc/nixos#<name>

# 3. 更新依赖
nix flake update --flake /etc/nixos
```

## 支持的桌面环境

| 环境 | 类型 | `mcb.desktop.environment` |
|------|------|--------------------------|
| niri (默认) | Wayland 平铺，可滚动 | `"niri"` |
| Hyprland | Wayland 平铺，动画丰富 | `"hyprland"` |
| Sway | Wayland i3 兼容 | `"sway"` |
| River | Wayland 动态平铺 | `"river"` |
| GNOME | 完整桌面环境 | `"gnome"` |
| 纯终端 | 无图形 | `"none"` |

## 软件 Profile（18 个）

系统层（`modules/packages.nix`）管基础设施和通用工具，用户层（profile）管个人应用和偏好。启用 profile 自动联动对应系统包组。

| Profile | 用途 | 层 | 默认 |
|---------|------|-----|------|
| base-desktop | 终端/浏览器/文件管理/媒体播放（Wayland 工具→系统层） | 用户 | ✅ |
| cli-tools | CLI 工具链联动开关（实际包在系统层 shellTools/modernCli） | 联动 | ✅ |
| dev |…
