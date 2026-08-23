---
repo: "Fallme/wowws-bot"
name: "wowws-bot"
description: "战舰世界副炮流自动化Bot - 后台截图+虚拟手柄，不影响正常操作"
readmeQualityOk: true
url: "https://github.com/Fallme/wowws-bot"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 5
forks: 1
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-19T09:05:51Z"
lastCommitAt: "2026-08-23T04:10:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 45
undervaluedScore: 9
maintainers: ["Fallme"]
openGraphImageUrl: "https://opengraph.githubassets.com/df8df76152dd9a5de06fecb4cbbb3f9738049987ab67579d93456d5502a8c664/Fallme/wowws-bot"
---

抱歉还没完全跑通 

# 战舰世界自动化实验项目

这是一个仅面向本地人机模式研究的实验项目。当前版本采用自动自检与失败即停的闭环架构：用户在网页配置后只需点击开始，系统会自动启动游戏、检查港口与输入、进入战斗并按轮次或时间连续运行。

## 当前状态

- 自动测试验证代码逻辑，但不代表游戏一定接受输入。
- 默认使用游戏原生 `W/S/A/D` 的 Windows 虚拟键输入；开始任务时自动完成港口安全自检，不再要求预先手工校准。
- 游戏画面优先通过目标窗口直采，即使网页覆盖游戏也不会把网页误当成游戏；仅在直采不可用时回退桌面捕获。
- 运行中连续画面失效、HUD 不确定或位移无反馈都会触发安全熔断。
- 已接通港口、匹配、战斗、结算和下一局的自动循环，但在完成受监督的单局、连续三局和连续五局验收前，不标记为可长期无人值守版本。
- 控制台启动任务时若游戏未运行，会通过已安装的 Steam 自动启动游戏并等待港口；“持续运行”会不断开始下一局，直到手动停止。

## 快速开始

1. 在项目虚拟环境中安装依赖：

   ```powershell
   cd E:\aimemo\wowws-bot
   .\.venv\Scripts\python.exe -m pip install -r requirements.txt
   ```

   默认键盘后端不依赖 ViGEmBus。仅当显式设置
   `WOWS_INPUT_BACKEND=vgamepad` 使用旧兼容后端时才需要 ViGEmBus。

2. 双击 `start_control_panel.bat` 打开网页控制台。
3. 在网页选择舰船、战斗模式以及轮次/时间。
4. 点击“启动任务”。系统自动启动游戏、等待港口、完成画面与输入自检、选择舰船和模式并进入战斗。
5. 正常情况下无需继续操作；只有画面、港口识别或输入闭环验证失败时，网页才显示人工介入提示。处理后点击“问题处理后重试”即可。

最近一次自动自检记录保存在 `data/input_calibration.json`。每次任务仍会重新执行实时自检，旧记录不会阻止点击开始。

每局结算后，程序会在确认完整结算页特征后点击右侧“继续战斗”直接排队下一局；按钮不可用或状态不确定时回港并走常规“加入战斗”流程。达到局数/时长限制后则返回港口，不再排队。

结算页会自动识别银币、舰船经验和指挥官经验，并按“任务 + 局数”去重写入网页收益统计。识别失败时不写入猜测值，网页会标记该局需要人工补录；OCR 与战斗距离识别共用 GPU 优先、CPU 兜底的推理策略。

## 安全链路

```text
网页点击开始
  -> 自动启动游戏并等待窗口
  -> 目标窗口直采与港口检查
  -> 输入安全释放自检
  ->…
