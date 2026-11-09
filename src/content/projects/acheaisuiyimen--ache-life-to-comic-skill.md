---
repo: "acheAIsuiyimen/ache-life-to-comic-skill"
name: "ache-life-to-comic-skill"
description: "把日常、照片、知识、会议和长文，持续收进按月成册的漫画手帐。"
readmeQualityOk: true
url: "https://github.com/acheAIsuiyimen/ache-life-to-comic-skill"
homepage: "https://ai-suiyimen-site.openai.site"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["ai-agent", "ai-skill", "chinese", "digital-journal", "journaling", "comic-journal"]
stars: 79
forks: 6
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-31T03:32:00Z"
lastCommitAt: "2026-11-09T03:30:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 14
maintainers: ["acheAIsuiyimen"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0355fdf960d16d0d86ed88580ab92ce4bc114fa55b1b15b5c607fc05b97af68/acheAIsuiyimen/ache-life-to-comic-skill"
---

# Ache life-to-comic skill

一句话、一张照片、一段会议，或者一篇不想改的长文。第一次创刊后，接下来只管发来。每次记录会拥有自己的封面和页法，再续进当月的漫画手帐。

不是把所有内容塞进同一张模板，也不要求你天天都有故事。有时是三格漫画，有时是一页照片手帐，有时只需要文字和一幅很小的图。

## 效果演示：先翻开看看

下面使用示例内容与生成画面，展示不同输入会怎样排版。

## 角色可以主导，也可以只是路过

## 最后得到的不是一叠散图

你把今天发来，内容决定页法。这一章有独立封面和正文，随后被装进当月唯一的连续阅读入口。下个月另起一本月册，三个月形成一部，年末再生成合辑索引。

> [!IMPORTANT]
> 这是一个源码可见、限非商业使用的项目，并非 OSI 定义的开源软件。未经书面许可，不得商用、售卖、代运营交付或作为付费产品的一部分。详见 [LICENSE](https://github.com/acheAIsuiyimen/ache-life-to-comic-skill/blob/HEAD/LICENSE)、[视觉资产说明](https://github.com/acheAIsuiyimen/ache-life-to-comic-skill/blob/HEAD/ASSET_LICENSE.md) 与 [商业授权](https://github.com/acheAIsuiyimen/ache-life-to-comic-skill/blob/HEAD/COMMERCIAL_LICENSING.md)。

## 30 秒开始

```bash
npx skills add https://github.com/acheAIsuiyimen/ache-life-to-comic-skill --skill ache-life-to-comic-skill
```

也可以把这句话直接发给有文件和终端能力的 Agent：

> 帮我安装 `ache-life-to-comic-skill`。从 `https://github.com/acheAIsuiyimen/ache-life-to-comic-skill` 安装后，确认根目录里有 `SKILL.md`、`assets/`、`references/` 和 `scripts/`。

装好后，不需要先学命令。直接说：

> 我想建一本漫画人生。
>
> 把今天的这句话收进去：雨停以后，我在窗边坐了很久。
>
> 这三张照片也续进这个月。
>
> 把这次会议整理进我的漫画月册，但配图简单一点。

## 它会怎么陪你记录

第一次只做四个选择，而且一题一题来：

1. 先看五款画风的同屏样张，也可以上传 1–5 张参考图。
2. 决定要不要让一个熟悉的 IP 偶尔路过。…
