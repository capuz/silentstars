---
repo: "TSalmon3/rime.vim"
name: "rime.vim"
description: "基于 rime-ice 方案的中文输入解决方案（Rime / ㄓ），面向 Vim 与 Neovim。"
readmeQualityOk: true
url: "https://github.com/TSalmon3/rime.vim"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["neovim", "rime", "vim"]
stars: 37
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-25T12:32:37Z"
lastCommitAt: "2026-08-09T04:46:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 29
maintainers: ["TSalmon3"]
openGraphImageUrl: "https://opengraph.githubassets.com/0674fc2c8acaf18fc374ca09a09ac349c382e13968f78485d0b5e865344355af/TSalmon3/rime.vim"
---

</p>
</p>

---

## 目录

- [简介](#简介)
- [快速开始](#快速开始)
  - [环境要求](#环境要求)
  - [安装](#安装)
  - [编译后端](#编译后端)
- [配置](#配置)
  - [选项](#选项)
  - [环境变量](#环境变量)
- [使用](#使用)
  - [命令](#命令)
  - [按键映射](#按键映射)
- [集成](#集成)
  - [Autocmd](#autocmd)
  - [Statusline](#statusline)
- [高级主题](#高级主题)
  - [rime-ice 配置示例](#rime-ice-配置示例)
  - [让中文编辑更加丝滑](#让中文编辑更加丝滑)
  - [其他搭配插件](#其他搭配插件)
- [致谢](#致谢)
- [License](#license)

<detail>
<summary>写在最前面</summary>

对于常见的问题的统一回答。

- 是否会跟系统的 rime 输入法 产生冲突？

  ```answer
  会产生冲突，建议新建一个目录，存放你的拼音方案，也就是你的「用户数据目录」最好不要跟系统输入法的是同一目录。
  ```

- 这个插件在有系统输入法的情况下，存在的意义。

  ```answer
  在 vim/neovim 中编辑中文的目前的大问题是模式切换过程中，系统输入法不会根据编辑器所处模式，切换到对应的状态（比如 normal 模式下帮你切换到英文模式）。目前网络上提供的解决方案，大多都是通过拦截 <ESC> 进行切换，但 vim 中发生模式切换 不仅只有按 <ESC>，在 Command 模式，甚至是 Terminal 模式 按 <Enter> 也会进入 Normal 模式，比如在 fzf 中输入中文、搜索、替换等情况。

  我下面给出的解决方案是整合了我收集到解决方法，尽可能提高中文输入在 vim 中体验。当然，在某些情况下输入中文并不是最优解，比如文件搜索，如果能把文件名拼音化，能提高文件的搜索和切换效率。
  ```
</detail>

## 简介

Rime（中州韵）输入法在 Vim / Neovim 中的集成方案，基于 [rime-ice](https://github.com/iDvelve/rime-ice) 词库，同时支持 Vim（>= 8.2.1978）与 Neovim。

**用法**：进入插入模式后直接键入拼音，候选词浮窗出现；数字键或 `Up` / `Down` 选择候选，`Enter` / `Space` 上屏，`Esc` 取消本次组合。

主要特性：

- 支持全拼、双拼、九宫格等输入方案
- 支持简繁、中英文标点、emoji 切换
-…
