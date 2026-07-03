---
repo: "HaolemeApp/Haoleme"
name: "Haoleme"
description: "在手机上监控电脑和服务器里的命令运行状态。用 hao 启动命令，App 实时查看输出、设备状态和结束通知。"
url: "https://github.com/HaolemeApp/Haoleme"
homepage: "https://pypi.org/project/haoleme/"
language: "Java"
languages: ["Java", "Python"]
languagePcts: [56, 44]
topics: ["android", "cli", "python", "remote-monitoring", "terminal", "command-monitor"]
stars: 20
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-07-02T04:21:42Z"
lastCommitAt: "2026-07-03T12:22:11Z"
lastReleaseAt: "2026-07-02T04:29:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 13
maintainers: ["hushuguo"]
openGraphImageUrl: "https://opengraph.githubassets.com/468d9c8597931db3930e03d6688c5dcb5fdea20caeeea7cbaa4ad8dccc2ffc16/HaolemeApp/Haoleme"
---

</p>

<h1 align="center">好了么</h1>

  在手机上查看电脑和服务器里的命令运行状态。
</p>

  ·
  ·
</p>

  </a>
</p>

## 这是什么

好了么是一个命令运行监控工具。

在电脑或服务器上用 `hao` 启动命令，手机 App 就能看到运行状态、终端输出、设备在线状态和运行结束通知。它适合训练任务、远程脚本、批处理、爬虫、长时间 SSH 任务，以及任何“不想一直盯着终端”的场景。

## 界面预览

首页集中展示正在运行和已经结束的命令；设置页提供配对、共享空间、外观和安全选项。

<table>
  <tr>
    <td align="center" valign="top"><img src="docs/assets/screenshots/home-runs.jpg" width="320" height="711" alt="首页运行记录"></td>
    <td align="center" valign="top"><img src="docs/assets/screenshots/settings-pairing.jpg" width="320" height="711" alt="设置和配对"></td>
  </tr>
</table>

## 下载

- Android App：[GitHub Releases](https://github.com/HaolemeApp/Haoleme/releases/latest)

## 快速开始

安装命令行工具：

```bash
pip install -U haoleme
```

在电脑或服务器上配对：

```bash
hao login
```

打开 App，扫码或输入 6 位配对码。

以后直接在命令前加 `hao`：

```bash
hao python train.py
hao bash script.sh
hao echo hello
```

命令运行后，App 会自动显示状态和控制台输出。

## 功能

- 运行状态：running / succeeded / failed
- 控制台输出和搜索
- 运行结束通知
- 多设备切换和在线状态
- 设备重命名
- 项目分组
- GPU / CPU 监控
- 二维码和 6 位配对码
- 端到端加密传输敏感运行内容

## 源码

- CLI 和云端协议：`src/haoleme`
- Android App：`android-core`

## 安全

公开源码不包含官方签名密钥、生产服务器私密配置、个人收款码或访问令牌。

App 和 CLI 采用端对端加密，保证用户数据安全。

## 开源协议

本项目使用…
