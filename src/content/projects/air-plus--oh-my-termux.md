---
repo: "air-plus/oh-my-termux"
name: "oh-my-termux"
description: "Oh My Termux is a Termux configuration collection repository that integrates development tools such as Zsh, Neovim, Git, and Zellij. It is ready to use out of the box and brings the mobile coding experience close to that of a desktop."
originalDescription: "Oh My Termux 是一个 Termux 配置集合仓库，集成 Zsh、Neovim、Git、Zellij 等开发工具，开箱即用，让移动端编码体验接近桌面"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/air-plus/oh-my-termux"
language: "Shell"
languages: ["Shell", "Lua"]
languagePcts: [59, 37]
topics: ["dotfiles", "termux", "neovim", "neovim-config", "neovim-configuration", "neovim-dotfiles", "nvim", "nvim-config", "nvim-configs", "nvim-configuration"]
stars: 29
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-02-05T11:12:47Z"
lastCommitAt: "2026-10-18T08:15:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 15
maintainers: ["air-plus"]
openGraphImageUrl: "https://opengraph.githubassets.com/b993b12c8c6599ec63a34332bc963f58abcf535d169c0eacf4604633b266f6f0/air-plus/oh-my-termux"
---

Oh My Termux is a Termux configuration collection repository that integrates development tools such as Zsh, Neovim, Git, and Zellij. It is ready to use out of the box and brings the mobile coding experience close to that of a desktop.

[
  
](https://github.com/air-plus/oh-my-termux/stargazers)
[
  
](https://github.com/air-plus/oh-my-termux/issues)
[
  
](https://github.com/air-plus/oh-my-termux/contributors)

---

## ✨ Features
* **Shell**: Zsh + Zinit
* **Code editor**: Neovim + LazyVim
* **Version control**: Git + Lazygit + Delta
* **Prompt**: Starship
* **File manager**: Yazi
* **Terminal multiplexer**: Zellij
* **Color scheme**: Gruvbox Dark Hard
* **Font**: Maple Mono NF CN

---

## 🚀 Quick Start
## Requirements
* **A Termux environment with no prior changes**

### Full installation
Run the following commands in your Termux 👇
```bash
pkg update -y && pkg upgrade -y
pkg install -y chezmoi git
git clone https://github.com/air-plus/oh-my-termux.git
cd oh-my-termux
chmod +x setup.sh
./setup.sh
```
This triggers a semi-interactive installation script  
Then enter `nvim` to initialize the editor (you may need to pinch the screen with two fingers to zoom out the view).

###…
