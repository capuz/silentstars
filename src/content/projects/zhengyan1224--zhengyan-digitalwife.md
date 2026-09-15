---
repo: "Zhengyan1224/Zhengyan.DigitalWife"
name: "Zhengyan.DigitalWife"
description: "`Zhengyan.DigitalWife` 是一个面向跨平台数字人应用的新一代 `.NET` 引擎与示例集合，聚焦语音采集、语音识别、LLM、TTS、唤醒词、MMD/PMX/VMD 运行时和 3D Demo 的统一接入、统一配置与统一构建。它提供了一套适合 Windows、Linux 和 macOS 的目录结构、命名体系和运行入口，方便你直接搭建、扩展和替换数字人交互链路。"
readmeQualityOk: true
url: "https://github.com/Zhengyan1224/Zhengyan.DigitalWife"
language: "C#"
languages: ["C#"]
languagePcts: [98]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-05-08T08:24:58Z"
lastCommitAt: "2026-09-15T08:54:55Z"
lastReleaseAt: "2026-09-03T07:24:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 50
maintainers: ["Zhengyan1224"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f7ee19df3985f3ef451b046edcd80f439fd27893d7873e22d62321dc0a2f4e4/Zhengyan1224/Zhengyan.DigitalWife"
---

# Zhengyan.DigitalWife

Android GamePlayer 的完整环境安装、编译、签名、真机部署和故障排查说明请参阅
[Android GamePlayer 说明文档](https://github.com/Zhengyan1224/Zhengyan.DigitalWife/blob/HEAD/src/Zhengyan.DigitalWife.GamePlayer.Android/README.md)。

`Zhengyan.DigitalWife` 是一个面向跨平台数字人和轻量 3D 互动应用的 `.NET` 项目。当前核心入口已经从示例升级为：

- `Zhengyan.DigitalWife.GameEditor`：可视化编辑游戏工程、场景、角色、GUI、音频、粒子、水面、脚本、碰撞体、NavMesh、发布包等内容。
- `Zhengyan.DigitalWife.GamePlayer`：加载 GameEditor 保存的工程目录或 `.dwgame` 发布包，运行 3D 场景、脚本、语音、LLM、TTS、GUI 和桌面精灵模式。

项目仍然保留语音、Realtime 服务、MMD 基础运行时和若干 samples，但 GameEditor/GamePlayer 是后续游戏化数字人能力的主要使用入口。

## 快速开始

构建解决方案：

```powershell
dotnet build Zhengyan.DigitalWife.sln
```

启动 GameEditor：

```powershell
dotnet run --project src/Zhengyan.DigitalWife.GameEditor/Zhengyan.DigitalWife.GameEditor.csproj
```

用 GamePlayer 加载一个工程目录：

```powershell
dotnet run --project src/Zhengyan.DigitalWife.GamePlayer/Zhengyan.DigitalWife.GamePlayer.csproj -- <project-directory>
```

用 GamePlayer 加载发布包：

```powershell
dotnet run --project src/Zhengyan.DigitalWife.GamePlayer/Zhengyan.DigitalWife.GamePlayer.csproj -- D:\Games\DemoGame.dwgame
```

脚本 API 文档入口：

- Markdown…
