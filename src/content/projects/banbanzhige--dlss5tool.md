---
repo: "banbanzhige/DLSS5Tool"
name: "DLSS5Tool"
description: "支持视频、图片任意输入，借助 DLSS5 算法提升图像与视频渲超分染真实质感；兼容 RTX30/40/50 系列 NVIDIA 显卡，支持 HDR、队列批量处理，提供实时渲染预览与参数调节。可保留原始格式、分辨率及容器编码，也可自定义无损输出；Windows 端开箱即用，无需游戏引擎，不依赖额外组件。"
readmeQualityOk: true
url: "https://github.com/banbanzhige/DLSS5Tool"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 68
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-31T13:49:33Z"
lastCommitAt: "2026-09-12T08:04:09Z"
lastReleaseAt: "2026-09-12T05:34:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 34
maintainers: ["banbanzhige"]
openGraphImageUrl: "https://opengraph.githubassets.com/7526c8715b35f98c253697169b290a5fef249de41243766b0b24c377c90d18d3/banbanzhige/DLSS5Tool"
---

<h1 align="center">
</h1>

  用 DLSS 5 在本地重塑光影与细节，让视频和图片更有真实质感。
</p>

  <strong>简体中文</strong> ·
</p>

</p>

## 实机演示

</p>

## 功能概览

DLSS5Tool 使用 **DLSS 5 Neural Rendering** 增强本地视频与图片，无需接入游戏引擎。

- **画面增强**：默认 / 自然 / 电影三种风格，可调整强度、色调、结构与皮肤蒙版。
- **2× / 4× 超分**：先用 RTX Video 放大，再进行增强；也可保持原尺寸处理。
- **交互对比**：滑动分界、左右并排、缩放与逐帧查看，支持全屏和独立预览窗口。
- **批量导出**：图片与视频混合排队，每项独立保存参数；视频支持 MP4 / MKV / MOV，兼容的原音轨优先保留。
- **HDR 视频**：支持 HDR10 / HLG 高精度处理与 10-bit 导出，使用前请查看下方 HDR 注意事项。
- **光流引导**：模型反推帧间运动，为连续画面增强提供时序参考。更接近真实的画面稳定性和光影准确性。

界面支持简体中文 / English、浅色 / 暗色主题。通过「更多 → 语言」切换语言，重启后生效。

## 效果对比

同一张 AI 生成素材：左图未处理，右图为神经渲染结果。可用于观察材质、光影和细节的变化，不代表所有素材都能获得相同改善
<table>
  <tr>
    <th width="50%">图 1 · 原图</th>
    <th width="50%">图 2 · 神经渲染后</th>
  </tr>
  <tr>
    <td align="center">
    </td>
    <td align="center">
    </td>
  </tr>
</table>

## RAFT / NVOFA 光流对比

开启光流推理能提升视频的整体稳定，光影一致性，减少画面闪烁，黑斑黑影闪动等情况。目前有两种推理方式：RAFT / NVOFA，前者更重质量，后者更重速度。
开启流光图预览后可以直观看出模型推理情况，**颜色表示运动方向，亮度表示位移大小**

<table>
  <tr>
    <th width="33%">07 · 原图 / DLSS 分界对比</th>
    <th width="33%">08 · RAFT 光流</th>
    <th width="33%">09 · NVOFA 光流</th>
  </tr>
  <tr>
    <td align="center"><a href="img/07.png"><img src="img/07.png" alt="同一场景的原图与…
