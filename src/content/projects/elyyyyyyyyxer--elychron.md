---
repo: "Elyyyyyyyyxer/Elychron"
name: "Elychron"
description: "Time manager for ZJUers — 非官方改版：四种时间语义（活动/截止/提醒/备忘）、子待办行程表、专注计时与统计、AI 整理待办、局域网同步"
readmeQualityOk: true
url: "https://github.com/Elyyyyyyyyxer/Elychron"
language: "Dart"
languages: ["Dart"]
languagePcts: [95]
stars: 7
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 18
recentReleases: 1
createdAt: "2026-09-12T08:08:01Z"
lastCommitAt: "2026-09-14T09:12:41Z"
lastReleaseAt: "2026-09-13T14:03:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 60
undervaluedScore: 44
maintainers: ["Elyyyyyyyyxer"]
openGraphImageUrl: "https://opengraph.githubassets.com/8dcec89fab78646c73c579ffa1e639626bfb9c47ab453c91f1ef7e8d8d4a850f/Elyyyyyyyyxer/Elychron"
---

# Elychron —— Celechron 的非官方改版

> **这是 Celechron 的非官方修改版（fork），不是官方发布。**
>
> - 上游项目：[Celechron/Celechron](https://github.com/Celechron/Celechron)（面向浙大学生的时间管理器）
> - 原项目版权归 **nosig** 及 Celechron 全体贡献者所有，遵循 **GPLv3**
> - 本改版由 **Tixer** 维护 ｜ 本仓库：[Elyyyyyyyyxer/Elychron](https://github.com/Elyyyyyyyyxer/Elychron)
> - 基于上游版本：**v1.3.0**（commit `ceab2a4`）
> - 许可协议：**GPLv3**（继承上游，见 [LICENSE](https://github.com/Elyyyyyyyyxer/Elychron/blob/HEAD/LICENSE)）。本仓库即为对应源码，
>   只要分发本程序的二进制，你就有权获得这份源码。
> - 独立 `applicationId`（`xyz.nosig.celechron.mod`），**可与官方版共存**，装它不会覆盖官方版
>
> Elychron 不是 Celechron 官方版本，与官方项目无关。遇到问题请提到本仓库 Issues，
> **不要去打扰上游作者**。

## 下载与安装

到 [Releases](https://github.com/Elyyyyyyyyxer/Elychron/releases/latest) 下载 APK 直接安装。

- 只提供 **arm64** 包（近年的校园机型都支持）
- 与官方 Celechron **包名不同，可以共存**，装它不会覆盖官方版，两边数据互不影响
- 首次安装需要在系统里允许「安装未知来源应用」
- **校验**：每个版本的 APK SHA-256 与签名证书指纹都写在对应 Release 说明里；
  签名指纹应当是 `b2cc42560a1378b9087c7660ff9904c1cef5cb89a12f5eba68faa98a93a771c8`

## 一、为什么会有这个改版

Celechron 可以查课表、成绩、考试、作业，也允许自定义日程。v1.3 之后数据稳定性已经大幅改善，
但仍有两类问题：

1. **教务不可用时课表就没了**：本科教务在选课 / 筛课期间会「请求成功但返回空表」，
   而空结果会覆盖本地缓存 —— 刷新一下课表就空了、课时变 0；
2. **日程功能与成熟工具差距明显**：只有笼统的「任务 / DDL」，没有子任务、标签、优先级、
   专注统计；提醒只有通知一种形式。…
