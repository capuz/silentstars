---
repo: "ShangYJQ/nvim.config"
name: "nvim.config"
description: "my neovim config"
readmeQualityOk: true
url: "https://github.com/ShangYJQ/nvim.config"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-02-14T16:44:35Z"
lastCommitAt: "2026-08-12T05:14:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 69
maintainers: ["ShangYJQ"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f045f24777830b07b9ae472ce2e997d44428d5ea16219e05d9d618c99bccee1/ShangYJQ/nvim.config"
---

## 由 `Neovim` v0.12 & `vim.pack` 驱动. 为速度和美观而生.

## 环境依赖

1. `Neovim` v0.12+
2. 编译器: `gcc`, `g++`
3. Rust 工具链: `rustc`, `cargo`
4. Node 环境: `bun` （推荐）
5. `tree-sitter-cli`: 确保语法高亮解析正常

# 安装指南

```bash
# 导入配置
git clone https://github.com/ShangYJQ/nvim.config.git ~/.config/nvim

git clone git@github.com:ShangYJQ/nvim.config.git ~/.config/nvim

# 编译安装最新 neovim
make CMAKE_BUILD_TYPE=Release CMAKE_EXTRA_FLAGS="-DCMAKE_INSTALL_PREFIX=$HOME/.local/opt/neovim"
make install

mkdir -p ~/.local/bin
ln -sf ~/.local/opt/neovim/bin/nvim ~/.local/bin/nvim

# bash
export PATH="$HOME/.local/bin:$PATH"
# fish
fish_add_path -m ~/.local/bin

# 安装必须依赖
bun i -g tree-sitter-cli
export PATH="$HOME/.bun/bin:$PATH"
```

## 安装语言支持(lsp formatter)

### Arch Linux

#### Lua

```bash
sudo pacman -S lua-language-server stylua
```

#### Rust

```bash
# sudo pacman -S rust-analyzer rust
rustup component add rust-analyzer
```

#### C/C++

```bash
sudo pacman -S clang
```

#### Python

```bash
sudo pacman -S python-ruff
brew install basedpyright
```

#### Bash

```bash
sudo pacman -S bash-language-server shfmt
```

#### Fish

```bash
sudo pacman -S fish-lsp
sudo pacman -S shfmt
```

#### Go

```bash
sudo pacman -S…
