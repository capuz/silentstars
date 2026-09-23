---
repo: "jwu/configs"
name: "configs"
description: ":heartpulse: = neovim + ghostty + starship + zoxide + fzf + ripgrep ..."
readmeQualityOk: true
url: "https://github.com/jwu/configs"
language: "Lua"
languages: ["Lua"]
languagePcts: [70]
topics: ["alacritty", "console", "terminal", "neovim", "wezterm", "ghostty"]
stars: 22
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-07-25T10:11:40Z"
lastCommitAt: "2026-09-23T08:45:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 54
maintainers: ["jwu"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a307217cc2e87eb02f2e4d5a713daa1ddba9a4611ae91dfd6edf0b14c62da51/jwu/configs"
---

# Terminal Configs

开发环境配置方案 (Windows, Mac, Linux)。包含了 Alacritty, WezTerm, Neovim, Starship, Zsh 等工具的配置。

## Windows 配置方案

### 自动配置 (推荐)

此方案会自动下载便携版的工具到 `%USERPROFILE%\bin` 目录，并配置环境变量和配置文件链接。

1. 打开 CMD 或 PowerShell。
2. 克隆此仓库（建议路径）：
   ```cmd
   git clone https://github.com/jwu/configs.git %USERPROFILE%\bin\configs
   ```
3. 进入 `win` 目录：
   ```cmd
   cd %USERPROFILE%\bin\configs\win
   ```
4. 运行安装脚本（自动下载以下工具）：
   ```cmd
   install.bat
   ```

   安装的工具包括：
   - Alacritty v0.17.0 (终端模拟器)
   - Nerd Fonts (FiraMono) v3.4.0 (图标字体)
   - Clink v1.9.18 + clink-completions v0.6.8 (增强 CMD)
   - Starship v1.24.2 (终端提示符)
   - fzf 0.71.0 (模糊搜索)
   - zoxide 0.9.9 (智能目录跳转)
   - fd 10.4.2 (更快的 find)
   - bat 0.26.1 (更好的 cat)
   - delta 0.19.2 (更好的 diff)
   - ripgrep 15.1.0 (更快的 grep)
   - eza 0.23.4 (更好的 ls)
   - coreutils 0.8.0 (Unix 命令工具集)

5. 运行配置脚本（创建配置文件链接）：
   ```cmd
   config.bat
   ```

### 手动配置

如果你更喜欢手动安装工具，请参考以下步骤：

1. **安装工具**:
   - [Alacritty](https://github.com/alacritty/alacritty/releases) v0.17.0 (终端模拟器)
   - [Nerd Fonts (FiraMono)](https://www.nerdfonts.com/font-downloads) v3.4.0 (图标字体)
   - [Clink](https://github.com/chrisant996/clink) v1.9.18 (增强 CMD 体验)
   -…
