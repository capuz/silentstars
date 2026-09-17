---
repo: "bobo198504/SmoothWheelScroll-REAPER"
name: "SmoothWheelScroll-REAPER"
description: "A native REAPER extension that turns a notched mouse wheel into fine-grained, inertial scrolling — without changing what the wheel does."
readmeQualityOk: true
url: "https://github.com/bobo198504/SmoothWheelScroll-REAPER"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["cpp", "mouse-wheel", "reaper", "reaper-extension", "smooth-scrolling", "windows"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 9
createdAt: "2026-09-13T04:47:09Z"
lastCommitAt: "2026-09-17T08:52:10Z"
lastReleaseAt: "2026-09-17T08:35:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["bobo198504"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b9369445cb1ef99ad1775c48d393730525836436eab697689e72c8b70cd5e94/bobo198504/SmoothWheelScroll-REAPER"
---

# Smooth Wheel Scroll for REAPER

一个原生 REAPER 扩展：把普通鼠标滚轮驱动的滚动/缩放变成平滑动画，**不改变滚轮原本做什么**。

[English](https://github.com/bobo198504/SmoothWheelScroll-REAPER/blob/HEAD/README.en.md)

</p>

插件截住滚轮的一格，转成一段动画，再**分小份、按时间交给同一条 REAPER 动作**。
不自己移动视图、不修改 REAPER 状态：缩放锚点、滚动范围、步进大小、自定义规则全部仍由 REAPER 决定。

---

## 会缓动的

| 表面 | 方式 |
|---|---|
| 主视图（arrange）：滚动 + 缩放 | REAPER 自己的动作 |
| 主视图两条滚动条 | 竖直条滚动；`Alt`+滚轮缩放 |
| MIDI 编辑器：滚动 + 缩放 | MIDI 编辑器自己的 section 动作 |
| 轨道面板（TCP） | 遵从鼠标修饰键（`Scroll TCP` / `Adjust vertical zoom`）|
| MIDI 编辑器琴键 | 竖直滚动 |
| 调音台（MCP） | 横向滚动 |
| 名字带 `mousewheel` 的动作 | 按**动作名**匹配，含自定义 / 重绑的快捷键 |
| 自定义动作（`Custom:`） | 由上述动作组成的宏，整体缓动 |

## 不做缓动的

* **参数类滚轮** —— 推子、旋钮、速度、发送量、力度、下拉框等原样透传。
* **列表控件** —— 整行移动，原生已是瞬时。
* **触控板、触摸、触控笔** —— 原样交给 REAPER。

---

## 安装

Windows x64，REAPER 7。

1. 从 [Releases](https://github.com/bobo198504/SmoothWheelScroll-REAPER/blob/HEAD/../../releases) 下载 `reaper_smoothwheelscroll-x64.dll`。
2. 放进 `UserPlugins`：便携版 `<REAPER>/UserPlugins/`，普通安装 `%APPDATA%\REAPER\UserPlugins\`。
3. 重启 REAPER。

加载后显示为 `Smooth Wheel Scroll 1.7.1`。

### 设置面板

**Extensions 菜单** → `SmoothScroll...`；或在 **Actions 窗口**用 `Smooth Wheel Scroll: settings...`
（可绑快捷键，再按一次关闭）。改动即时生效、自动保存。

* **Glide…
