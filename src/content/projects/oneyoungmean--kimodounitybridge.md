---
repo: "OneYoungMean/KimodoUnityBridge"
name: "KimodoUnityBridge"
description: "Free Local Unity AI Motion Generate Tool.Based By Nvlab Kimodo. "
url: "https://github.com/OneYoungMean/KimodoUnityBridge"
language: "Python"
languages: ["Python", "C#"]
languagePcts: [44, 39]
topics: ["ai", "animation", "motion", "nvidia", "unity", "kimodo"]
stars: 60
forks: 12
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-05-19T09:07:32Z"
lastCommitAt: "2026-06-28T01:34:43Z"
lastReleaseAt: "2026-06-27T07:35:41Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 60
undervaluedScore: 32
maintainers: ["OneYoungMean", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/77d6e4f9e1fce3af81157bb8c935abc931e6d2b98853ccbc8f5a2b596bac9a85/OneYoungMean/KimodoUnityBridge"
---

[演示视频](https://www.bilibili.com/video/BV1HG7361Env) . [完整的Demo](https://github.com/OneYoungMean/KimodoUnityBridge_FullDemo) .[快速开始](FastBegin.md) . [使用说明](Manual/README.md)

# License
[Apache License 2.0](https://github.com/OneYoungMean/KimodoUnityBridge/blob/main/LICENSE)

# 1.2.0更新点速览    
* **支持amd显卡，xpu显卡支持（Experimental）**
* **增加Mac 平台支持，现在Linux，windows，mac 都可以正常工作了（Experimental）**
* **大幅优化服务器体积**
* **更完整的报错，更流畅的反馈机制**
* **大幅度优化Generate pipe不稳定的问题**
* **小幅度优化Quick Server性能,使用FaltPatten优化QickServer与Bridge通讯机制**
* 修复了若干前后动画不匹配的问题.
* 增加了RuntimeDemo新的api,方便用户调用.
* 完善了说明书.

## 更新注意事项
**老用户请删除项目目录\NvlabKimodoQuickServer~并重新运行，代码会自动拉取最新的包！否则运行会报错!**
***

# KimodoUnityBridge

**开箱即用，完全运行在本地的免费 AI 人形动画生成系统**[快速开始](FastBegin.md) .   
* 基于 https://github.com/nv-tlabs/kimodo 
* 基于 https://github.com/OneYoungMean/NvlabKimodoQuickServer (感谢[Aero-Ex](https://gist.github.com/Aero-Ex) 他的文档解决了我很大问题)
* CPU/GPU模式自适应（CUDA大约5秒，CPU大约1一分钟）兼容Windows/Linux平台.
* 完全本地部署，你无需为任何内容付任何费用（也不必为此感到自责）！
* 一款开源AI插件, 可以根据提示词生成你想要的人物角色动画！

## 要求
- Unity2021+（更低的平台尚未测试），Windows和Linux 平台。
- 内存>=8G,硬盘空间>=16G
- Windows,Mac,Linux平台
- 对部分平台（Nvidia10系以上， AMD7000以上，部分XPU）会启动CUDA加速

## 特性

- **即开即用的设计**…
