---
repo: "fearlesman/USTB-courseHelper"
name: "USTB-courseHelper"
description: "2025年针对byyt.ustb.edu.cn使用ai制作的简易抢课可视脚本，支持除了体育课之外的所有课，有用的请点个star"
readmeQualityOk: true
url: "https://github.com/fearlesman/USTB-courseHelper"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-29T11:22:20Z"
lastCommitAt: "2026-09-07T08:35:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 59
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/c31265ffba60ccbbfdeb1e579029d16e6c1761f8eb91413cdb991c2aa646db4d/fearlesman/USTB-courseHelper"
---

# USTB Course Helper

北京科技大学选课辅助桌面程序，适用于课程查询、整理待抢课程以及轮询或定时抢课。目前不支持体育课。

## 主要功能

- 使用微信扫码直接登录本研教务统一认证，无需安装 Chrome 或浏览器驱动。
- 按课程代码或课程名称查询素质扩展课、专业扩展课、MOOC 和必修课。
- 为待抢课程设置优先级，并保存当前课程草稿。
- 支持立即轮询和定时抢课，可设置选到一门后停止、满课持续重试。
- 将常用课程组合保存为带名称和备注的抢课列表。
- 支持多个账号，每个账号拥有独立的“抢课任务”页签，各账号的登录状态、课程、列表和抢课任务互相独立、互不干扰。
- 无法通过查询自动获取参数的课程，可以使用课程查询页的“高级添加”手动填写参数加入抢课。

## 运行环境

- Windows
- Python 3.12

安装依赖：

```bash
pip install orjson requests pillow beautifulsoup4
```

启动程序：

```bash
python USTB-courseHelper.py
```

## 使用流程

### 1. 扫码登录

程序启动后会直接进入扫码登录页，中央自动显示登录二维码，无需安装 Chrome 或等待浏览器驱动。使用微信扫码并确认后，会直接进入当前账号的“抢课任务”页签。

已有账号也可以在自动登录开始前选择“暂不登录，离线进入”。离线状态可以整理课程草稿和命名列表，但不能查询课程或启动抢课。二维码过期、网络异常或登录失败时，可以点击“重新生成二维码”再次尝试。

### 2. 查询课程

进入“课程查询”页，至少填写课程代码或课程名称中的一项，然后点击“查询课程”。学年学期会根据当前日期自动填写，也可以手动修改。

课程类型默认选择“所有”。程序会依次尝试查询以下类型，并汇总去重后的结果：

- 素质扩展课
- 专业扩展课
- MOOC
- 必修课

每一种类型都会自动继续翻页，直到取完该类型的结果；页面会显示各类型找到的课程数量。如果某一种类型查询失败，其他类型仍会继续查询并汇总。

### 3. 添加待抢课程

在查询结果中选择一门或多门课程，设置优先级后点击“添加选中课程”。添加成功后会继续停留在查询页，方便继续搜索和添加。

优先级规则：

- 数字越小，越先尝试。
- 优先级相同时，按照待抢列表中的顺序执行。

可以前往当前账号的“抢课任务”页签查看或删除已经添加的课程。

### 3.5 高级添加特殊课程

对于无法通过查询自动获取参数的课程，可以在“课程查询”页点击“高级添加”，在弹出的窗口中手动填写：

- 课程名称：必填。
- 授课教师、课程代码、上课安排：选填，用于页面展示。
- 优先级：1–99，数字越小越先尝试。
-…
