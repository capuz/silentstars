---
repo: "yamato720/VerilogVisualization"
name: "VerilogVisualization"
description: "Verilog Visualization: generate graph form verilog file and folder, support exporting to png, svg,  html"
readmeQualityOk: true
url: "https://github.com/yamato720/VerilogVisualization"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [73]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-06T15:30:58Z"
lastCommitAt: "2026-08-01T06:12:26Z"
status: "thriving"
tags: []
healthScore: 74
undervaluedScore: 19
maintainers: ["yamato720"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ddb9f03c5db78919c1127b30b4e6cf6f06bf9b4291c0cf923c993a48b9080db/yamato720/VerilogVisualization"
---

# ⚡ VerilogVisualization  <sub>v2.2</sub>

基于浏览器的 Verilog 模块层次可视化工具。  
适用于 Chisel 生成的 RTL 和手写的 Verilog —— 解析单个 `.v` 文件或整个文件夹，探索模块树、追踪信号，并导出电路图。

---

## ✨ 功能特性

| 功能 | 说明 |
|---|---|
| 📂 **文件 / 文件夹解析** | 解析单个 `.v` 文件或整个文件夹，自动识别顶层模块 |
| 🔍 **自动兄弟文件搜索** | 解析单个文件时，所缺少的模块定义会自动在同目录下的 `.v` 文件中查找 |
| 🌲 **模块层次树** | 每个实例路径的三角按钮独立展开/收起树层级；节点文字可拖选复制，单击正文只在当前画布中定位高亮，双击正文进入该模块的独立视图 |
| 🔎 **模块搜索** | 模块树上方的搜索框，可按名称快速定位模块 |
| 📐 **交互式画布** | 拖动平移、滚轮缩放、一键适应视图；拖动标题栏移动模块 |
| **递归内联展开** | 点击模块标题栏右侧 `▶` 在当前层级展开内部实例，点击 `▼` 收起；内部实例可自由拖到任意方向，透明外框会递归自动包围而不限制移动；展开状态按实例路径保存，双击仍进入独立模块视图 |
| 🔌 **信号连线** | 单击连线可**选中并高亮**；双击添加折线中转点；右键中转点删除 |
| 🚦 **端口箭头标记** | 每个端口均有输入 / 输出箭头；低电平有效端口以圆圈标注 |
| 📦 **端口折叠** | 同名前缀的端口组默认折叠以减少杂乱，可点击展开 |
| 🕐 **时钟/复位切换** | 一键隐藏 / 显示所有时钟和复位信号及其连线 |
| 💾 **布局持久化** | 模块位置、连线中转点、平移缩放状态按设计名保存至 `localStorage` 及服务端 JSON；打开设计时检测本地未同步修改并优先恢复，手动保存或开启同步后再写回服务端；重启服务后自动恢复最近打开的设计 |
| 📤 **导出** | 将虚线框内容导出为 **SVG**、**PNG**（2× HiDPI）或 **HTML** |
| 🗂️ **多标签页** | 在独立标签页中同时打开多个设计 |
| ↔️ **侧边栏折叠** | 侧边栏可折叠以最大化画布空间；展开宽度按设计持久化；支持全屏模式 |
| ⌨️ **WASD 键盘导航** | `W/A/S/D` 平移画布；有选中模块时微调位置；`[`/`]` 缩放（默认，可重绑定） |
| 🎛️ **可配置控制** | 移动速度（5–40 px/帧）、缩放步进（3%–10%）、缩放键均可在说明弹窗中实时调整，按设计保存 |
| 🔌 **端口/寄存器查看** |…
