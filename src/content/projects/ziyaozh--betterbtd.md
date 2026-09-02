---
repo: "ZiyaoZh/BetterBTD"
name: "BetterBTD"
description: "Automating Bloons TD 6 gameplay to save time, enhance efficiency, and empower community collaboration. 专注于自动化气球塔防6的游戏流程，节省时间，提高效率，促进社区合作。BTD6 Script | BTD6脚本 | 气球塔防6脚本 | BloonsTD6 脚本"
readmeQualityOk: true
url: "https://github.com/ZiyaoZh/BetterBTD"
language: "C#"
languages: ["C#", "Python"]
languagePcts: [79, 20]
stars: 7
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2026-04-27T08:56:05Z"
lastCommitAt: "2026-09-02T08:03:37Z"
lastReleaseAt: "2026-06-26T05:31:43Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 87
undervaluedScore: 57
maintainers: ["ZiyaoZh", "inlostsky", "lzwang2"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f2bc5a0144c36729c1bf163b10c7dc465525f91c1f25e2ba2e48475e98a7b4d/ZiyaoZh/BetterBTD"
---

<h1>BetterBTD</h1>
  <p>面向《气球塔防 6》玩家的 Windows 自动化、脚本管理与实用工具箱。</p>

  <p>
  </p>

  <p>
    ·
    ·
    ·
  </p>
</div>

> [!IMPORTANT]
> BetterBTD 仍在持续开发，BTD6 更新、窗口比例、游戏语言和热键配置都可能影响自动化稳定性。首次使用请先验证截图和单个脚本，再启动长时间自动任务。

## 功能概览

| 模块 | 能力 |
| --- | --- |
| 游戏捕获 | 自动或手动选择 BTD6 窗口，提供截图测试、遮罩和多种捕获模式 |
| 脚本编辑器 | 可视化编排放置、升级、等待、点击、技能、回合控制等指令 |
| 我的脚本 | 导入、导出、筛选、运行和管理 `.btd`、`.btd6`、`.btd6s` 脚本 |
| 自动任务 | 支持收集活动、金气球、黑框、循环刷关、竞速、奥德赛和机器人控制入口 |
| 输入模拟 | 支持 Windows `SendInput`，也可选用 Interception 硬件输入模式 |
| 实用工具 | 提供回合收益、英雄等级、模范度、模范属性和存档查看工具 |
| 桌面体验 | 深浅色主题、中英文界面、按键绑定、版本检查与自动更新 |

BetterBTD 不是简单的点击录制器。脚本包含地图、难度、模式、英雄和标签等元数据，并通过托管脚本库与自动任务建立稳定绑定。

## 快速开始

### 1. 安装

1. 从 [GitHub Releases](https://github.com/ZiyaoZh/BetterBTD/releases/latest) 下载 `BetterBTD.Install.exe`。
2. 安装 [.NET 8 Desktop Runtime x64](https://dotnet.microsoft.com/download/dotnet/8.0)；已安装可跳过。
3. 运行安装程序并启动 BetterBTD。

> [!NOTE]
> 当前发布包面向 Windows x64，依赖系统中的 .NET 8 Desktop Runtime，不支持 macOS 或 Linux。

### 2. 首次配置

1. 启动 BTD6，并将游戏窗口设置为 16:9，推荐 `1920 × 1080`。
2. 在 BetterBTD 的“设置”页确认界面语言、游戏语言和游戏热键。
3. 返回“开始”页，优先选择 `WindowsGraphicsCapture` 并执行“测试图像捕获”。
4. 如果没有找到游戏，使用“手动选择窗口”。
5. 截图正常后启动截图器，再导入并试运行一个脚本。

完整步骤见…
