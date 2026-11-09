---
repo: "tynam-yang/mynatest"
name: "mynatest"
description: "MynaTest 是一款基于 Manifest V3 开发的 Chrome 浏览器扩展，专为 Web 测试人员打造，聚合一系列轻量测试辅助工具。"
readmeQualityOk: true
url: "https://github.com/tynam-yang/mynatest"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [82]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-15T03:39:09Z"
lastCommitAt: "2026-11-09T03:22:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 46
maintainers: ["TynamYang"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ef324ca824f0f02d1002de9c516082c91d99829254574e1ff5fb9fc57b8d04b/tynam-yang/mynatest"
---

# MynaTest

基于 Chrome Manifest V3 的测试辅助工具集，专为 Web 测试人员打造。可在设置页自主选择启用哪些工具，侧边栏形式随时可用。

## 快速开始

加载扩展、侧边栏使用、设置页等详见下方「操作指南」章节。

> 注意：**扩展重载后需刷新目标网页**，否则旧页面的捕获脚本已失效（会提示刷新）。

## 操作指南

### 加载扩展

1. 打开 `chrome://extensions/`
2. 右上角开启 **开发者模式**
3. 点击 **加载已解压的扩展程序**，选择本项目根目录
4. 点击扩展图标打开侧边栏

### 侧边栏使用

- 侧边栏位于浏览器右侧，点击工具图标切换当前工具
- **拖动排序**：按住图标上下拖动可调整顺序，松手后自动保存
- **悬停提示**：鼠标悬停在图标上会显示工具名称
- 底部齿轮图标打开设置页

### 设置页

- 扩展图标右键 → **选项** 进入设置页
- 勾选启用需要的工具，保存后侧边栏立即生效
- 工具按「网络工具 / 格式转换 / 开发工具 / 测试工具 / 数据工具 / 数据生成」6 组分组展示

## 项目结构

```
mynatest/
├── manifest.json                   # MV3 清单（content_scripts 声明式注入 MAIN/ISOLATED world）
├── background.js                   # Service Worker：侧栏 + Port 中转 + 截图
├── sidepanel.html/css/js           # 侧边栏 UI 框架
├── options.html/css/js             # 设置页（Tab 式，按分类管理工具）
├── core/                           # 共享核心模块（全局脚本，挂 window）
│   ├── storage.js                 # chrome.storage 封装 + 启用工具管理
│   ├── diff.js                    # diffJSON / diffLines / parseJSONRobust
│   └── utils.js                   # escapeHtml / flashMessage
├── content/                        # ⭐ Content Scripts（注入页面，manifest 声明式）
│   ├── injected.js                # MAIN world：hook…
