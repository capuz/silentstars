---
repo: "f-a8bfe3fa/weread-notes"
name: "weread-notes"
description: "notion模板"
readmeQualityOk: true
url: "https://github.com/f-a8bfe3fa/weread-notes"
homepage: "https://bubble-sodium-5ed.notion.site/362e809a4d8b80f89245e3582fded80a?v=364e809a4d8b8034be53000cd463a87d&source=copy_link"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-18T04:03:11Z"
lastCommitAt: "2026-08-30T09:25:19Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 37
maintainers: ["f-a8bfe3fa", "actions-user", "y-b0f1e76a"]
openGraphImageUrl: "https://opengraph.githubassets.com/1eacac10dc3429d839d33f42af015f29c06f453a16ba8a50bee71be9de8a276d/f-a8bfe3fa/weread-notes"
---

# 📖 微信读书笔记自动同步工具 \(小白专属配置指南\)

## 🌟 **写在前面：**

这是一个专门为**完全不懂计算机的小白**准备的超详细安装指南！

原版文档有很多专业的命令行操作（比如 Git、Pip 等），在这里我们**通通不需要**！你只需要跟着下面的视频步骤，用鼠标点击、复制、粘贴，就能轻松搭建属于你自己的**微信读书 \-\> Notion \+ GitHub 个人私有笔记库**！

## 这个工具能做什么？

简单来说，它能帮你：

- **自动拉取**你在微信读书里做的划线、想法、书评

- **保存到 GitHub** 仓库，永久备份，不怕丢失

- **同步到 Notion**，方便整理、搜索、分享

- **每天自动运行**，自动同步笔记，不用你操心

---

## 🧭 准备工作

在正式开始配置之前，请先注册并登录以下三个账号：

1. **GitHub 账号**（用于存放备份文件和自动运行同步程序）

2. **微信读书账号**（用于获取你的读书笔记）

3. **Notion 账号**（用于精美展示和整理你的笔记）

    

---

## [🎬 详细配置步骤（可以跟随视频一步步来）](https://www.bilibili.com/video/BV19B4X63EcD/?share_source=copy_web&vd_source=7c6ec3f3af94f35847bcff21c07d5800)

### 第一步：创建你自己的 GitHub 私人仓库

为了保护你的阅读隐私，我们需要把代码放到你自己的“私人保险箱”（私有仓库）里。

[项目地址](https://github.com/f-a8bfe3fa/weread-notes)

1. **下载项目代码：**

    - 访问本项目主页，点击右侧绿色的 **「Code」** 按钮，然后选择 **「Download ZIP」**，将项目下载到本地电脑。

2. **本地解压与清理：**

    - 将下载好的压缩包解压。

    - **重要的一步：** 进入解压后的文件夹，把 `data` 文件夹里的文件（存放书籍数据的文件夹）和 `index.json` 测试文件删掉。因为这些是作者的测试笔记，我们不需要它们，我们要用自己的。

3. **在 GitHub 上新建私人仓库：**

    - 登录你的 GitHub，点击页面右上角的 **「\+」**，选择 **「New repository」**（新建仓库）。

    - **仓库名称（Repository name）：** 可以起一个好记的名字（例如：`weread-notes`）。

    - **可见性（Visibility）：** **一定要选择…
