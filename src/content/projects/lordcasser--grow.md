---
repo: "LordCasser/grow"
name: "grow"
description: "fork from grok build"
readmeQualityOk: true
url: "https://github.com/LordCasser/grow"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-02T03:14:26Z"
lastCommitAt: "2026-09-01T08:47:19Z"
lastReleaseAt: "2026-08-14T11:43:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: ["LordCasser"]
openGraphImageUrl: "https://opengraph.githubassets.com/16f343aa1bd3a917126eb8143f6a250e65c4e28f643752cbda3c8b3bfe98abfe/LordCasser/grow"
---

</p>

# Grow

Grow 是 Rust 终端 AI 编程 Agent。它提供三种交互入口：交互式 TUI、无界面的 headless 命令，以及面向编辑器和客户端的 ACP 服务。

Grow 采用 BYOK：模型、Provider、凭据和路由都由用户配置。会话与诊断默认保存在本地。Grow 不是 xAI 官方产品，也不内置模型、账号或推理端点。

[Releases](https://github.com/LordCasser/grow/releases) · [快速开始](#快速开始) ·
[User Guide](https://github.com/LordCasser/grow/blob/HEAD/crates/codegen/pager/docs/user-guide/README.md) ·
[config.example.toml](https://github.com/LordCasser/grow/blob/HEAD/config.example.toml)

## 安装

### 下载 Release

从 [Latest GitHub Release](https://github.com/LordCasser/grow/releases/latest) 下载与你的系统匹配的归档。支持 macOS、Linux、Windows 的 x86_64/arm64；Linux 另支持 riscv64，OpenHarmony 支持 arm64。

每个归档只含一个可执行文件：Unix 是 `grow`，Windows 是 `grow.exe`。解压后把它放入
`PATH` 中即可。

下面用 GitHub CLI 演示 macOS Apple Silicon；其他平台只需替换归档 pattern：

```sh
GROW_DOWNLOAD_DIR="$(mktemp -d)"
cd "$GROW_DOWNLOAD_DIR"
gh release download --repo LordCasser/grow \
  --pattern 'grow-*-macos-aarch64.tar.gz' \
  --pattern SHA256SUMS
shasum -a 256 --check SHA256SUMS --ignore-missing
tar -xzf grow-*-macos-aarch64.tar.gz
mkdir -p "$HOME/.local/bin"
install -m 0755 grow "$HOME/.local/bin/grow"
```

请在同一个 Release 中取得归档和 `SHA256SUMS`，并按实际文件名核对 SHA-256；校验用于发现
传输损坏或归档被替换，不等同于独立的发布者签名。…
