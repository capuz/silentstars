---
repo: "Xuuyuan/gxhpy-choose-tools-frontend"
name: "gxhpy-choose-tools-frontend"
description: "个性化培养周选课工具前端实现。"
readmeQualityOk: true
url: "https://github.com/Xuuyuan/gxhpy-choose-tools-frontend"
language: "Vue"
languages: ["Vue", "JavaScript"]
languagePcts: [57, 40]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-23T16:04:17Z"
lastCommitAt: "2026-09-09T08:20:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 39
maintainers: ["Xuuyuan"]
openGraphImageUrl: "https://opengraph.githubassets.com/65025751a546b0dcf5eb054b6de37e9bb13580ab5d261b436005c3e6da3a3700/Xuuyuan/gxhpy-choose-tools-frontend"
---

# 个性化培养周选课工具

该项目为福建师范大学个性化培养周选课工具的前端实现。由于个性化培养周每学年开设一次、间隔时间较长，不保证实际使用时项目可用，可能需要自行优化改进。

部署示例&在线使用：[个性化培养周选课工具](https://oss.nekoark.com/gxhpy/index.html)

## 主要功能

本项目用于福建师范大学个性化培养周的选课部分。目前支持的功能如下：

- 自行上传课程列表数据（应用于院级开课）
- 课程多条件筛选（报录比、上课地点、上课时间、教学班容量）
- 选课方案出具（根据课时、时间、门数生成无冲突的概率最优方案）

方案生成会先尽量满足模板设置的课程门数；门数相同时，在第一轮等概率随机筛选、当前用户尚未计入已选人数的假设下，最大化所有课程预计成功率的乘积。若预计成功率相同，再优先选择总报录比更低、容量更大的组合。

## 实现原理

个性化培养周期间的第一轮选课为不限容量、随机筛选。基于此原理，学生需要在规定时间内完成选课。由于~~个性化培养周的大部分课程都没有什么用处~~、且正方教务的筛选功能不能根据教学班容量、报录比、特定课时、开课地点等进行筛查，且如何获得具体选课方案一直是大家头疼的事情——于是该项目营运而生。

该项目后端通过在 [zfn_api](https://github.com/openschoolcn/zfn_api) 项目基础上进行二开的 Python 脚本定期上报课程信息数据至阿里云OSS（相关代码的核心功能已集成在 `/public/get_classes.zip` 中），前端使用 Vue + Elements 组件库、通过纯 JavaScript 实现来获取课程信息数据，并在此基础上实现课程筛选、选课方案生成的功能。

## 备注

该项目前端部分的大量功能实现由 Gemini & ChatGPT 辅助生成。采用该项目出具的选课方案，本人与舍友在 2023-2024 学年个性化培养周全员实现线下课 8中8、在 2024-2025 学年个性化培养周全员实现线下课 9中9。
