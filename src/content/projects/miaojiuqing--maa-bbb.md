---
repo: "miaojiuqing/Maa_bbb"
name: "Maa_bbb"
description: "崩坏三自动化小助手，基于MAA黑盒测试框架制作"
readmeQualityOk: true
url: "https://github.com/miaojiuqing/Maa_bbb"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 179
forks: 14
openIssues: 16
closedIssues: 44
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2025-10-01T18:41:52Z"
lastCommitAt: "2026-08-28T14:33:01Z"
lastReleaseAt: "2025-10-11T10:27:44Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 36
maintainers: ["miaojiuqing", "github-actions[bot]", "sgpublic"]
openGraphImageUrl: "https://opengraph.githubassets.com/815576355740b87326d21dd68e8eb903abc510365124d22e4be444a24689da17/miaojiuqing/Maa_bbb"
discussionCount: 1
---

</p>

## Maa_bbb

(识宝小助手)

基于MAA框架制作的崩坏三小助手。图像技术 + 模拟控制，解放双手！由 [MaaFramework](https://github.com/MaaXYZ/MaaFramework) 强力驱动！

[点击申请加入小助手交流群](https://github.com/miaojiuqing/Maa_bbb/blob/HEAD/<https://qm.qq.com/q/XrFQKgGvaI>)

更多功能敬请期待（提 Issue）

（自动乐土极速画饼中）

**本助手完全免费，没有任何收费的地方。如果你是买来的请举报拉黑商家，同时可以告诉作者是谁在卖。**

</div>
</p>

---

## 简介

**Maa_bbb** 是由miaojiuqing（淼九清）开发的游戏自动化工具，旨在帮助玩家完成每日任务，和以后会添加的一些小活动。

**注意：** 本项目推荐使用mumu模拟器(好用)、雷电模拟器，其他模拟器没测过。PC 请设置为16:9分辨率。

[视频链接](https://github.com/miaojiuqing/Maa_bbb/blob/HEAD/<https://www.bilibili.com/video/BV1Ld42z1ERu>)

[点击链接加入群聊](https://github.com/miaojiuqing/Maa_bbb/blob/HEAD/<https://qm.qq.com/q/XrFQKgGvaI>)

点击进入下载界面 [Releases](https://github.com/miaojiuqing/Maa_bbb/releases/)

如果你不知道你应该下载什么版本，请认准 x86_64 字样。

---

## PC端使用须知

### 游戏设定

游戏需在 设置 -> 辅助 中，关闭显示菜单提示

错误示例

正确示例

### 命令行与工作排程器

本项目目前使用 [MFW-PyQt6](https://github.com/overflow65537/MFW-PyQt6/releases) 作为前端 GUI 与可执行入口。

命令行使用请参考 MFW-PyQt6 的说明

> MFW 开关写在分隔符 `--` 之前；之后仅传给 Qt。
>
> - `--config-id <ID>`：使用指定配置 ID 启动（可用 `--config-id=<ID>`）
> - `--direct-run`：启动后直接运行任务
> - `--force-restart`：强制启动，会关闭同目录下正在运行的其他 MFW 实例
> - `--dev`：启用调试模式（显示测试页）

在本项目中， config-id 为您所创建的配置在 Maa_bbb 目录下…
