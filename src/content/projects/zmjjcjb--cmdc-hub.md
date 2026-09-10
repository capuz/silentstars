---
repo: "zmjjcjb/cmdc-hub"
name: "cmdc-hub"
description: "Command Code 全模型网关 - 单文件可执行版"
readmeQualityOk: true
url: "https://github.com/zmjjcjb/cmdc-hub"
homepage: "https://github.com/zmjjcjb/cmdc-hub"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-09T10:20:01Z"
lastCommitAt: "2026-09-10T08:18:19Z"
lastReleaseAt: "2026-09-09T10:25:41Z"
status: "thriving"
tags: []
healthScore: 70
undervaluedScore: 10
maintainers: ["zmjjcjb"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad7a9c9e39bd6ae8af2afd86098c48e650d00a50fb9c3e72ac88c1a628b79abe/zmjjcjb/cmdc-hub"
---

# cmdc-hub

Command Code 全模型网关 — 单文件可执行版。把 OpenAI 兼容请求转换为 Command Code 专有协议，零依赖、双击即跑、自动弹浏览器面板。

## 特性

- **零依赖单文件**：打包成 45MB 的独立可执行文件，目标机器不需要装 Node.js
- **启动即开浏览器**：双击运行后自动弹出 Dashboard 面板，无需手动打开网址
- **全模型聚合**：40+ 款模型统一走 OpenAI `/v1/chat/completions` 协议
- **首字延迟优化**：自管 keepAlive 长连接池 + 启动预热 + 空闲补预热，复用连接省 ~800ms 握手
- **断流自愈**：未吐正文时内部重试（最多 3 次），已吐正文自动跨轮续传（最多 5 轮）
- **实时 Dashboard**：终端日志、首字延迟、缓存命中率、思考/正文比、续传轮次全监控
- **额度看板**：5 小时 / 周 / 月限额实时展示，全模型容量对比柱状图

## 截图

## 使用前提

使用本软件前，需先购买 **Command Code Go 订阅**，且下载后至少登录一次：

① 先安装 command code 程序：
```bash
npm i -g command-code
```

② 安装好之后登录一次：
```bash
cmdc
```

③ 登录完之后 `Ctrl+C` 退出 command code

> 登录后凭据会自动保存到 `~/.commandcode/auth.json`，本网关服务依赖该文件获取你的账号信息。

## 快速开始

### 方式一：直接下载可执行文件（推荐）

从 [Releases](https://github.com/zmjjcjb/cmdc-hub/releases) 下载对应平台的文件：

**Linux:**
```bash
chmod +x cmdc-hub
./cmdc-hub
```

**Windows:**
```
双击 cmdc-hub.exe
```

启动后浏览器自动打开 `http://127.0.0.1:8888`。

### 方式二：图形化启动（源码方式，推荐日常使用）

`launcher/` 目录下提供了带图标的桌面快捷方式启动器，点一下就拉起服务并打开 Dashboard，不用每次开命令行。

**Linux（GNOME / KDE 等）：**
```bash
# 图标已经自动生成，直接装快捷方式：
cp ~/.local/share/applications/cmdc-hub.desktop ~/桌面/
# 或者直接双击 launcher/start.sh 运行
```

**Windows：**
```
1. 进入…
