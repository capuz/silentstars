---
repo: "Asukkaa/PMC"
name: "PMC"
description: "一个由 JavaFX 开发的自动操作工具"
readmeQualityOk: true
url: "https://github.com/Asukkaa/PMC"
language: "Java"
languages: ["Java"]
languagePcts: [95]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-03-04T09:33:10Z"
lastCommitAt: "2026-08-24T04:21:25Z"
lastReleaseAt: "2026-02-05T07:15:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 67
maintainers: ["Asukkaa"]
openGraphImageUrl: "https://opengraph.githubassets.com/a07a3261b906768fdc5e219085858181587eac9021cbd0bd9eece496d3580466/Asukkaa/PMC"
---

<h1>Perfect Mouse Control</h1>

<p>基于 JavaFX 开发的开源跨平台自动操作工具，支持键鼠自动化、图像识别、流程录制与编辑。</p>

<p>
</p>

----

## 项目简介

本项目是一个用 JavaFX 开发的自动操作工具。
可以编辑自动操作流程或录制自动操作流程，支持导入导出自动操作流程，支持循环自动操作。

本项目图像识别功能基于 JavaCV 实现的，可在自动操作流程中设置要识别的图片和终止操作图片。

自动流程文件为 .pmc 与 .pmcs 文件，本质为 json 文件，更改文件扩展名只为方便过滤可导入的文件。

.pmc 文件为包含操作流程步骤信息的文件，可直接解析并执行。

.pmcs 文件为多个 .pmc 文件的集合设置文件，用于批量执行 .pmc 文件，只记录了文件信息，不包含具体操作流程，需与 .pmc 文件配合使用。

本项目打包工具为 maven javafx:jlink 插件 + jpackage ，使用 JDK 版本为 Amazon Corretto 26 。

## 项目背景

开发这个项目主要目的是为了 ios 手游自动操作，由于 ios 没有模拟器，目前通过 macOS 的 iPhone 镜像连接手机，然后使用 macOS
的鼠标进行操作，也就可以通过自动操作工具来控制 iPhone 。
由于 macOS 上免费且容易使用的自动操作工具不是很多，所以就决定自己开发一个。

## 程序界面

## 如何打包

在 maven 依赖都下载完毕后需要对 jna-5.19.1.jar 、 jna-platform-5.19.1.jar
这几个不支持模块化的包进行模块化注入，具体方法可参考： https://blog.csdn.net/weixin_44167999/article/details/135753822

由于 jna-platform 依赖 Jna
，需要手动处理，具体方法较复杂，建议直接使用项目中提供的 [module-info.class](https://github.com/Asukkaa/PMC/blob/HEAD/appBuilder/module-info.class) ，
将 [module-info.class](https://github.com/Asukkaa/PMC/blob/HEAD/appBuilder/module-info.class) 使用任意支持向压缩包中添加文件的解压工具添加即可。

在注入模块化后即可使用 maven javafx:jlink 插件进行打包，打包后的程序文件在 [target/app](https://github.com/Asukkaa/PMC/blob/HEAD/target/app)
中，其中启动文件为…
