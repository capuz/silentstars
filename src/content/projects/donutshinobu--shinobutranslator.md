---
repo: "DonutShinobu/ShinobuTranslator"
name: "ShinobuTranslator"
description: "ShinobuTranslator 是一个运行在浏览器中的漫画翻译扩展，主要用于推特条漫翻译场景。"
readmeQualityOk: true
url: "https://github.com/DonutShinobu/ShinobuTranslator"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [62, 22]
stars: 35
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-02-10T13:15:04Z"
lastCommitAt: "2026-07-10T06:56:21Z"
lastReleaseAt: "2026-06-05T12:29:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 46
maintainers: ["DonutShinobu", "shinobu"]
openGraphImageUrl: "https://opengraph.githubassets.com/4af796f27d7b69102a343701c8a26fa737c3797268fcad758958c9ecc341fa70/DonutShinobu/ShinobuTranslator"
---

</p>

<h1 align="center">ShinobuTranslator</h1>

  在浏览器里直接翻译漫画图片的 Chrome / Edge 扩展。
</p>

</p>

一款漫画翻译扩展程序，识别/去字等模型仅在浏览器本地运行，无需单独服务器。主要支持日文漫画场景，自动进行识别、翻译、嵌字全流程。同时提供基于Nano Banana的翻译模式，可以利用Gemini订阅对各种类型漫画进行端到端翻译。对于 X / Pixiv / eHentai 做了专门适配，其他网站均可使用右键/键盘快捷键进行截图翻译。

## 快速开始

### Chrome Web Store

> 项目版本更新较快，Chrome Web Store 需等待审核，可能落后于最新版本。如需体验最新功能，建议使用下方的手动安装。

### 手动安装

1. 前往 [Releases](https://github.com/DonutShinobu/ShinobuTranslator/blob/HEAD/../../releases) 下载最新版 `ShinobuTranslator.zip`
2. 解压到本地文件夹
3. 打开 Chrome / Edge 的扩展管理页
4. 启用「开发者模式」
5. 点击「加载已解压的扩展程序」
6. 选择刚才解压出的文件夹

## 效果展示

<table>
<thead>
<tr>
<th align="center" width="50%">原始图片</th>
<th align="center" width="50%">翻译后图片</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center" width="50%">
  </a>
  <br>
</td>
<td align="center" width="50%">
  </a>
</td>
</tr>
<tr>
<td align="center" width="50%">
  </a>
  <br>
</td>
<td align="center" width="50%">
  </a>
</td>
</tr>
</tbody>
</table>

## 工作流程

### 本地 OCR 翻译流程

```text
图片获取 -> 文本检测 -> 气泡检测 -> OCR 识别 -> 文本翻译 -> 蒙版细化 -> 去字修复 -> 自动排版 -> 译图展示
```

本地流程适合常规漫画翻译：视觉模型在浏览器端完成检测、识别、去字和排版，只把识别出的文本交给谷歌翻译或大模型翻译。

### Nano Banana 图像翻译流程

```text
图片获取 -> 发送图片与提示词 -> 多模态理解和翻译 -> 去字重绘和嵌字 ->…
