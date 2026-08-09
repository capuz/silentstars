---
repo: "lizi605/rushi-wowen-translator"
name: "rushi-wowen-translator"
description: "将寻常白话转为佛经体，也把佛经体解回直接人话；使用者自备 DeepSeek API Key。"
readmeQualityOk: true
url: "https://github.com/lizi605/rushi-wowen-translator"
homepage: "https://fojing-translator.1798859537.workers.dev"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [65, 24]
topics: ["byok", "chinese", "deepseek", "nextjs", "translator"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-07-19T21:21:01Z"
lastCommitAt: "2026-08-09T04:45:50Z"
lastReleaseAt: "2026-07-19T22:12:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 55
maintainers: ["github-actions[bot]", "lizi605"]
openGraphImageUrl: "https://opengraph.githubassets.com/252ef54c9c04c8aa5b8ccf9355d367827917fe9a7d5db26c898af552cb664871/lizi605/rushi-wowen-translator"
---

# 「如是我闻」翻译器

**译经 + 解经：把寻常白话写成佛经体，也把佛经体翻回直接人话。**

在线使用：<https://fojing-translator.1798859537.workers.dev>

AI 二次开发交接：[制作《圣经》文体翻译器](https://github.com/lizi605/rushi-wowen-translator/blob/HEAD/AI_HANDOFF_BIBLE_TRANSLATOR.md)

「如是我闻」翻译器是一个 Next.js 网页应用。它支持两种方向：

- 译经：把普通中文改写成近期中文互联网流行的“佛经体 / 佛说体”白话翻译腔。
- 解经：把佛经体翻回直接、清楚、正常的人话。

项目采用 BYOK（Bring Your Own Key）模式：本站不提供公共模型额度，使用者在网页中配置自己的 DeepSeek API Key 后即可译经或解经。

## 功能

| Capability | Detail |
| --- | --- |
| 双向翻译 | 译经生成佛经体，解经把佛经体翻回直接人话 |
| 译经模式 | 慈悲开示、机锋辩难、方便圆说、无常悲叹 |
| 解经模式 | 直白释义、耐心讲明、潜台词版、锐评拆穿 |
| 三档长度 | 一偈 / 一经 / 一论 与 略释 / 明释 / 详释 |
| BYOK | API Key 仅保存在使用者当前浏览器，服务端不提供公共 Key |
| Skill 分发 | 支持复制或下载 `speak-fojing` Skill |
| 图片导出 | 将译经或解经结果导出为图片卡片 |

## Examples

### 译经示例

Input:

```text
疯狂星期四，谁愿请我一斋才合乎佛理
```

Output style:

```text
如是我闻。一时，佛在舍卫城。尔时，须菩提从座而起，合掌白佛言：“世尊，今日所谓疯狂星期四者，有人欲求友人请其一斋，此念云何？”佛告须菩提：“譬如有一人，见炸鸡之食，向众友问言：‘谁愿请我一斋，方合今日佛理？’须菩提，于意云何？彼人是真求佛理，抑或求一餐之饱？”须菩提言：“世尊，实是求食，借佛理以成其趣。”佛言：“如是。能直言所求，又以诙谐使人无迫，是名方便；若以功德逼人请客，则非方便。”
```

### 解经示例

Input:

```text
如是我闻，今日我设此山门，并非拒人千里，只是怕众人一拥而入，坏了满座清净。
```

Output style:

```text
我设次数限制不是为了故意拦人，而是怕接口被刷爆，影响正常用户使用。
```

## Quick Start

Requirements:

- Node.js 20 or newer.
- A DeepSeek API key…
