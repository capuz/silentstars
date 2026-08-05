---
repo: "xinghelee/Termite"
name: "Termite"
description: "Native macOS terminal in SwiftUI — sessions survive quit, deep shell integration with command-level navigation, and a built-in Git panel."
readmeQualityOk: true
url: "https://github.com/xinghelee/Termite"
homepage: "https://termite.xinghelee.com"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
stars: 23
forks: 4
openIssues: 3
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-22T13:19:53Z"
lastCommitAt: "2026-08-05T06:07:14Z"
lastReleaseAt: "2026-08-02T16:12:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 51
maintainers: ["xinghelee"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e4d793d77533c8edce06ff05372c7de5547a5aa4ea55ef916e86faacb0814ac/xinghelee/Termite"
---

# Termite

[English](https://github.com/xinghelee/Termite/blob/HEAD/README.en.md)

**为 macOS 而写的原生终端。**

界面从头用 SwiftUI 写,不是套壳;shell 集成把每条命令变成可跳转、可回看的单元;Git 面板、无限分屏、命令面板、20 套主题,开箱即用。

**[⬇️ 下载最新版](https://github.com/xinghelee/Termite/releases/latest)** — DMG 已过 Apple 公证,拖进 Applications 即用;或用 Homebrew:

```sh
brew install --cask xinghelee/tap/termite
```

- 系统要求:macOS 15.0+
- 技术栈:SwiftUI + AppKit,终端引擎 [SwiftTerm](https://github.com/migueldeicaza/SwiftTerm)(Metal GPU 渲染)
- 无沙箱、完整文件系统与进程权限,和你习惯的终端行为完全一致

## 核心特性

### 巡视模式 

- **⇧⌘\ 或双指捏合**:所有分屏等宽横排,触控板横滑逐个检阅;滑到哪个分屏,键盘焦点就在哪个,⌘←→ 键盘翻页
- **等待输入提醒**:agent 停下来等你时,pane 橙色呼吸边框、菜单栏角标、系统通知;⌘J 一键跳到等最久的
- **原地快速回复**:直接在系统通知上输入回复,或 pane 徽标右键「回车确认 / 发送 y」,不打断手头的事

### Worktree 分屏:每个 agent 一个工作树(1.15 新增)

并行 agent 共用一个工作树会把 diff 混成一锅——把 `git worktree` 做成一次右键:

- **右键 →「在新 Worktree 中分屏…」**:输入名字新建分支,或模糊搜索几千个已有分支(本地 + 远程)直接检出;已被检出的分支一键打开其现有 worktree
- 新分支基于当前分支;目录在仓库同级(`仓库名-分支名`);**分屏名自动 = 分支名**
- **右键 →「清理此 Worktree」**:未提交改动先拦截(可强制),分支保留供合并

### 会话恢复

- **多窗口完整恢复**:重新打开 App,窗口 frame、焦点、最大化状态、标签与分屏结构、scrollback 全量找回
- 新标签继承当前目录

### Shell 集成(自动注入,零配置)

zsh / bash / fish 自动挂钩 OSC 133 命令标记,带来一整套命令级能力:

- ⌘↑ / ⌘↓ 在命令之间跳转,⌘⇧C 一键复制上条命令输出
- 状态栏实时显示退出码与命令耗时…
