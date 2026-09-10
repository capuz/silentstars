---
repo: "icecranberry/galgame-with-comfyUI"
name: "galgame-with-comfyUI"
description: "邻舍.EXE——类超轻量级酒馆+深度接入ComfyUI，做到角色能自主聊天、发朋友圈的同时能够配上图片，让真实感更进一步。详细说明和安装查看：https://www.bilibili.com/video/BV1uH7q6vEQ9/"
readmeQualityOk: true
url: "https://github.com/icecranberry/galgame-with-comfyUI"
language: "JavaScript"
languages: ["JavaScript", "Vue"]
languagePcts: [53, 37]
stars: 52
forks: 10
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-06-16T06:33:05Z"
lastCommitAt: "2026-09-10T08:20:03Z"
lastReleaseAt: "2026-09-02T02:40:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 37
maintainers: ["icecranberry", "moye-galaxy"]
openGraphImageUrl: "https://opengraph.githubassets.com/8564f6a89f37c12018053e6ea43b392d4d727c55034db9aea2d1405e454f39fb/icecranberry/galgame-with-comfyUI"
---

# 🎮 邻舍.EXE

[English](https://github.com/icecranberry/galgame-with-comfyUI/blob/HEAD/README_EN.md)

受 Galgame 启发的 **AI 角色陪伴应用**。与可自定义人格的角色对话，AI 根据上下文自动触发 **ComfyUI** 生图，具备三维情绪模拟、可演化的长期记忆、朋友圈动态系统和多主题界面。

欢迎在视频底下提出更好的建设性建议：
[我好像让纸片人「活」过来了【邻舍 1.0】详细演示以及安装视频](https://www.bilibili.com/video/BV1uH7q6vEQ9/)
[😈既然是在本地AI生成，那凑成什么CP可就随我说了算了【邻舍 2.0】](https://www.bilibili.com/video/BV1wsNu61EX6/)
邻舍3.0视频制作中...

---

## 💡 一句话介绍

邻舍.EXE 是一款受 Galgame 启发的 AI 角色陪伴应用。用户可以创建具有独立人格、情绪、记忆和生活节奏的角色，与她们聊天，并在朋友圈、信箱、日程、群聊和随机事件中持续互动。角色还能够根据对话和当前场景主动调用 ComfyUI 生成图片，让文字交流自然延伸成视觉体验。

它想解决的问题很简单：普通 AI 聊天机器人往往只是在“回答问题”，而邻舍.EXE 希望让角色表现得更像一个持续生活着的人。

## 🏠 项目界面概览

邻舍.EXE 将单聊、群聊、朋友圈、日程、奇遇、相册和角色管理整合在同一个界面中。用户可以像使用日常社交软件一样与不同角色保持联系，同时进入由 AI 驱动的角色世界。

| 私聊、群聊 | 朋友圈 |
|------|--------|
| [](https://github.com/user-attachments/assets/2a08cbe1-f4c8-4814-a986-fc2d47fc8e85) | [](https://github.com/user-attachments/assets/7de290fe-3eb3-4d10-a329-81993cf19c56) |

*群聊中的角色会保持各自的说话方式，并可以结合当前话题生成多人场景图片。*

*角色可以发布带图动态，其他角色和用户能够点赞、评论并继续互动。*

## ✨ 这个项目能带来什么体验？

在普通聊天软件里，用户发一句话，AI 回一句话，一段时间后对话便结束了。

在邻舍.EXE 中，角色会拥有自己的状态和生活：

- 她会记得用户提过的重要经历、偏好和约定。
- 她的心情会受到近期交流影响，而不是每轮对话都回到初始状态。
- 她可能正在上班、学习、休息或睡觉，不一定总能立即回复。
-…
