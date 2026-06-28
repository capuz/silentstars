---
repo: "hanlinwenyuan/hlwy-ai-checker"
name: "hlwy-ai-checker"
description: "检查第三方AI API是否掺假以及渠道一致"
url: "https://github.com/hanlinwenyuan/hlwy-ai-checker"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
stars: 137
forks: 8
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2026-06-24T03:33:06Z"
lastCommitAt: "2026-06-28T06:57:28Z"
lastReleaseAt: "2026-06-28T04:39:14Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 12
maintainers: ["hanlinwenyuan"]
openGraphImageUrl: "https://opengraph.githubassets.com/e75ffcd9c6a8da56dbd09e296dd2505851046815c4a510fbf00cc0c1bef409b7/hanlinwenyuan/hlwy-ai-checker"
---

# hlwy-ai-checker
检查第三方AI API是否掺假以及渠道一致

# 特色&优点

## 识别精确，区分度大

## 一致性好，较少随机因素影响

## token消耗少

## 标定后再测试，自适应性强

# 使用指南

## 1.输入官key进行模型标定（带/v1）

## 2.进行第三方渠道验证

## 3.查看测试结果

# 原理

大语言模型并非真正的随机数生成器。当被要求"随机选数字"时，不同模型由于其训练数据、架构、RLHF对齐方式、tokenization策略等差异，会产生不同的偏差。

这些差异在大量采样后就形成了统计学上可区分的指纹。

这一指纹不能轻易被系统提示词覆盖，所以可以用来检测第三方API是真的假的。

# 免责声明

测试结果仅供参考。

由于大模型本身存在随机性及网络波动，本工具的测试结果不能作为任何商业纠纷、退款索赔的绝对法律/事实依据。

本人仅作为开源代码维护者，不参与、不介入任何用户与 API 提供商之间的商业纠纷。请各方理性交流。

本项目由hanlinwenyuan开发，在Linux Do上发布。

# 友链

[LINUX DO - 新的理想型社区](https://linux.do/)
