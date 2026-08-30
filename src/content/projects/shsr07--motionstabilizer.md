---
repo: "shsr07/MotionStabilizer"
name: "MotionStabilizer"
description: "安全、零侵入的视觉稳定叠加层，缓解 3D 游戏晕动症。  A safe, zero-intrusion visual stabilization overlay for 3D game motion sickness relief."
readmeQualityOk: true
url: "https://github.com/shsr07/MotionStabilizer"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["accessibility", "csharp", "dotnet", "motion-sickness", "overlay", "windows", "wpf", "game-tool", "crosshair-overlay-fps-games-pc", "direct2d"]
stars: 151
forks: 6
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-07-14T13:37:32Z"
lastCommitAt: "2026-08-30T09:25:24Z"
lastReleaseAt: "2026-07-30T19:02:05Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 81
undervaluedScore: 28
maintainers: ["shsr07"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bcb9e1f46aec2038cfbee199fe2ade9305a02174b8fbfcc3cb8c112dd094eb5/shsr07/MotionStabilizer"
---

# Motion Stabilizer · 防晕动症叠加层

**[English](https://github.com/shsr07/MotionStabilizer/blob/HEAD/README.en.md)** | 中文

> 安全、零侵入的视觉稳定叠加层，缓解 3D 游戏晕动症。
>
> A safe, zero-intrusion visual stabilization overlay for 3D game motion sickness relief.

## 📸 界面演示 / Screenshots

<table>
  <tr>
    <td align="center"><b>边缘叠加 / Edge Overlay</b></td>
    <td align="center"><b>游戏实测 / In-Game Test</b></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/边缘叠加界面.jpg" width="480" alt="边缘叠加界面" /></td>
    <td><img src="docs/screenshots/运行测试画面.gif" width="480" alt="游戏测试截图" /></td>
  </tr>
  <tr>
    <td align="center"><b>悬浮时钟 / Floating Clock</b></td>
    <td align="center"><b>中心准星 / Crosshair</b></td>  
  </tr>
  <tr>
    <td><img src="docs/screenshots/悬浮时钟界面.png" width="480" alt="悬浮时钟界面" /></td>
    <td><img src="docs/screenshots/中心准星界面.png" width="480" alt="中心准星界面" /></td>
  </tr>
</table>

## ✨ 功能特性 / Features

- **边缘叠加 (Edge Overlay)** — 在屏幕边缘绘制参考框线（长杆 / 方框 / 圆顶 / 旗帜四种形状），为大脑提供视觉稳定锚点

> [!TIP]
> **核心功能(Core Features)：动态圆点 (Motion Dots)**
>
> 本质是极简的人工光流刺激，专门向你的周边视觉补充"身体正在运动"的视觉证据，让视觉信号与内耳前庭的平衡信号对齐，从根源缓解感官冲突。
>
> - **运动方向反转** — 可反转鼠标、键盘和手柄控制方向，适应不同游戏视角
> - **手柄控制** — XInput 手柄双摇杆（可选）：左摇杆＝WASD…
