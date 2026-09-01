---
repo: "RadishXN/run-abroad"
name: "run-abroad"
description: "填 10 项基本信息，从 71 条签证 / 移民路径里筛出适合你的，并告诉你还差什么"
readmeQualityOk: true
url: "https://github.com/RadishXN/run-abroad"
homepage: "https://radishxn.github.io/run-abroad/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [76]
topics: ["china", "emigration", "immigration", "static-site", "vanilla-js", "visa"]
stars: 491
forks: 25
openIssues: 1
closedIssues: 2
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2026-08-12T02:54:15Z"
lastCommitAt: "2026-09-01T08:51:48Z"
status: "newborn"
tags: []
healthScore: 92
undervaluedScore: 24
maintainers: ["RadishXN", "RagnTec"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8c1cef3bb2241028528c0d7abd9fcfc9be71aacfbff171aca12653088f2d256/RadishXN/run-abroad"
---

# 润学导航

**填写少量基本信息，看清自己能走哪些出国路径 —— 以及还差什么。**

收录 71 条签证与移民路径 · 所有计算在你的浏览器里完成

## [👉 点击这里开始 👈](https://radishxn.github.io/run-abroad/)

[快速开始](#-快速开始) · [贡献数据](https://github.com/RadishXN/run-abroad/blob/HEAD/CONTRIBUTING.md) · [免责声明](#️-免责声明)

</div>

---

## 为什么做这个

想出国的人，通常最先遇到的不是「哪个国家好」，而是一个更基础的问题：

> **以我现在的条件，到底有哪些路是真的走得通的？**

网上不缺移民信息，缺的是**针对你个人情况的筛选**。你会看到几十篇「XX 国签证全解析」，每一篇都在讲政策条文，但没有一篇会告诉你：你 31 岁、双非本科、雅思 6.0、工作 6 年——**这些条件下，哪条路现在就能走，哪条路差一点，哪条路已经彻底关上了。**

于是你在几十个标签页之间反复比对，一周后仍然不知道下周该做什么。

这个项目就是来解决这一步的。它不是又一份签证清单，而是一个**决策工具**：把你的条件和 71 条路径的门槛逐项比对，输出一份排过序的、标注了具体缺口的结果。

---

## 它和其他移民信息站的区别

<table>
<tr>
<td width="50%" valign="top">

**常见的移民信息站**

- 按国家罗列签证政策
- 你需要自己对照条件
- 只告诉你「要求是什么」
- 符合 / 不符合的二元判断
- 看完仍然不知道先做什么

</td>
<td width="50%" valign="top">

**润学导航**

- 按你的条件筛选并排序
- 引擎自动逐项比对
- 明确告诉你「你还差什么」
- 四档分类，覆盖中间地带
- 直接给出优先级建议

</td>
</tr>
</table>

### 三个核心设计

#### 1️⃣ 不做二元判断

现实中很少有人是「完全符合」或「完全不符合」。大部分人都卡在中间，所以结果分成四档：

| 分档 | 含义 |
|:---|:---|
| ✅ **符合条件** | 所列硬性门槛你都过了，可以直接去研究申请材料 |
| 🟡 **差一点** | 只差一两项，且都是能补上的（语言、经验、资金、offer） |
| 🟠 **需要长期准备** | 缺口较多，但方向上并没有被堵死 |
| ⚪ **暂时走不通** | 存在短期无法改变的硬门槛 |

#### 2️⃣ 区分硬门槛与软门槛

这是整个工具最关键的判断。同样是「不符合」，性质完全不同：

```
✕ 硬缺口 —— 短期内无法改变，只能绕开…
