---
repo: "Lake1059/LakeUI"
name: "LakeUI"
description: "LakeUI 是专为 WinForms 项目设计的一套精致交互控件，官方中文名称 “湖界”。主打简单易用、精致美观、高度定制、高效性能，新手强推。"
url: "https://github.com/Lake1059/LakeUI"
language: "Visual Basic .NET"
languages: ["Visual Basic .NET"]
languagePcts: [98]
topics: ["winform", "winforms", "winforms-controls"]
stars: 38
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 9
createdAt: "2026-02-25T01:45:53Z"
lastCommitAt: "2026-06-29T07:23:42Z"
lastReleaseAt: "2026-06-03T12:38:43Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 77
undervaluedScore: 33
maintainers: ["Lake1059"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d8399ec62a114831b631134514d4263c05c3f25cb90ff1c8f24744d42c8c6ae/Lake1059/LakeUI"
---

## 湖界 LakeUI v2

   

LakeUI 是专为 WinForms 项目设计的一套精致交互控件，以我的昵称命名，官方中文名称 “湖界”。

LakeUI v1 采用 GDI+ 绘制所有图形、文字、动画和图片，为传统需求的 WinForms 项目提供了众多的精美控件；不过随着设计需求不断提升，GDI+ 已经无法满足性能要求，但是一刻也没有为 GDI+ 的性能而感到悲伤，因为已经赶到战场的是你所熟知的游戏图形接口。

LakeUI v2 使用 Direct2D、Direct3D、DirectWrite 加速绘制，由 [Vortice](https://github.com/amerkoleci/Vortice.Windows) 提供 DirectX 支持，现在大量的绘制都由 GPU 承担，配合大量新设计带来商业级控件的体验。曾经的遥不可及现在已成现实：窗体全透毛玻璃、超容器背景映射、高精度计时器驱动的动画，以及更多意想不到的惊喜。现在你的 WinForms 已经能够与所有主流 UI 框架甚至 Web 框架坐上同一张桌子打牌，这一切的代价只是升级运行库，除此之外没有任何代价，没有内存爆炸，没有显卡起火，更没有涨价！

强烈建议通过 [NuGet](https://www.nuget.org/packages/LakeUI) 安装，包管理会自动安装所有依赖。如果你无法使用 NuGet，则需要自行想办法安装 Vortice.Direct2D1 和 Vortice.Direct3D11，要手动安装这些非常麻烦，其自身还有依赖。

NuGet：https://www.nuget.org/packages/LakeUI  
官网：https://lakeui.top  
购买许可证：[爱发电 ifdian.net](https://ifdian.net/item/15f0758814a911f1979752540025c377)  
Q群：1087964158

首发宣传视频：[BV1zeAHzEEKX](https://www.bilibili.com/video/BV1zeAHzEEKX)

> [!CAUTION]
>
> LakeUI 是在新的 .NET 框架上开发的，以前的 Framework 和 Core 框架无法使用！<br>当然如果你知道怎么搞能用的话也可以 Fork 过去自己搞，我是懒得照顾了。<br>请注意查看位于此文件末尾的收费标准！<br>不会考虑制作 DataGridView！不要来问这个！

## 扩展包

[LakeUI.Notifications](LakeUI.Notifications/README.md)

## 核心优势

只要你使用新版本的 .NET 进行 WinForms…
