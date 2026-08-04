---
repo: "Vincent-hechuan/codex-quota-band"
name: "codex-quota-band"
description: "Privacy-first Codex quota monitor for Xiaomi Smart Band 10, verified with Android and iPhone via AstroBox"
readmeQualityOk: true
url: "https://github.com/Vincent-hechuan/codex-quota-band"
language: "Rust"
languages: ["Rust", "Kotlin", "JavaScript"]
languagePcts: [40, 37, 20]
topics: ["astrobox", "codex", "electron", "vela", "xiaomi-smart-band"]
stars: 31
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-07-19T15:55:34Z"
lastCommitAt: "2026-08-04T06:11:06Z"
lastReleaseAt: "2026-08-04T06:13:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 20
maintainers: ["Vincent-hechuan"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7c1644f3b72b126e9901a5c8c4c4c95d3cbc24711295273790664e1c6c62fb1/Vincent-hechuan/codex-quota-band"
---

# 小米手环 10 Codex 额度

在电脑、安卓手机和小米手环 10 上查看 **Codex 5 小时额度、周额度、重置时间和当前任务状态**。

</p>

  <strong>当前版本：0.6.2</strong>
</p>

## 它能做什么

- 在手机和手环上查看 Codex 5 小时额度、周额度和重置时间。
- 查看 ChatGPT Windows 客户端中的任务状态：
  `处理中`、`需要授权`、`等待查看`。
- 在任务需要授权或等待查看时向手机、手环发送提醒。
- 数据只在你的电脑、手机和手环之间传输，不经过本项目的云服务器。

<table>
  <tr>
    <th align="center">手机首页</th>
    <th align="center">手环首页</th>
  </tr>
  <tr>
    <td align="center"><img src="docs/band-ui-preview/phone-home-real.jpg" alt="手机额度首页" width="240"></td>
    <td align="center"><img src="docs/band-ui-preview/five-hour-primary-band.png" alt="手环额度首页" width="180"></td>
  </tr>
</table>

## 使用前准备

你需要：

- 一台 Windows 10 或 Windows 11 电脑；
- 已登录并正常使用的 ChatGPT Windows 客户端；
- 一台安卓 8.0 或更高版本的手机；
- 小米手环 10；
- 其他版本的小米手环暂未完成真机验证，可能出现页面错位或显示异常，请等待后续版本更新；
- 手机中已安装「小米运动健康」，并已连接手环；
- 手机和电脑连接同一个局域网。

## 下载

请从 [GitHub Releases](https://github.com/Vincent-hechuan/codex-quota-band/releases) 下载同一版本的三个文件。以下为 `0.6.2`：

| 安装位置 | 文件 |
| --- | --- |
| Windows 电脑 | `Codex-Quota-Setup-0.6.2.exe` |
| 安卓手机 | `CodexQuota-0.6.2.apk` |
| 小米手环 10 | `com.codex.quota.android.release.0.6.2.rpk` |

三个文件的版本号必须一致。不要从不明网站下载安装包。

## 安装和连接

### 第一步：安装 Windows 程序

1. 双击 `Codex-Quota-Setup-0.6.2.exe`。
2.…
