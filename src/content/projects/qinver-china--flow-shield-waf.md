---
repo: "Qinver-china/flow-shield-waf"
name: "flow-shield-waf"
description: "流盾 WAF（Flow Shield WAF）是一款面向网站、业务接口和 Web 应用的智能流量防护系统，专注于 CC 攻击防护、恶意访问识别、自动化攻击拦截和网站安全加固"
readmeQualityOk: true
url: "https://github.com/Qinver-china/flow-shield-waf"
homepage: "https://fswaf.top"
language: "Python"
languages: ["Python", "Vue"]
languagePcts: [50, 27]
stars: 18
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-17T16:06:38Z"
lastCommitAt: "2026-08-12T05:14:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 51
maintainers: ["Qinver-china"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8e4267c98561268f301c563b48ef5b0f146f2a4b38c3da16f107d02364761c4/Qinver-china/flow-shield-waf"
---

# 流盾 WAF（Flow Shield WAF）

> **流盾 WAF，守住每一次真实访问。**

**官网及详细文档：** [https://fswaf.top](https://fswaf.top)

流盾 WAF 是一款面向网站、业务接口和 Web 应用的**智能流量防护系统**，专注于 CC 攻击防护、恶意访问识别、自动化攻击拦截和网站安全加固。基于 **OpenResty 反向代理**构建：添加站点后，流量先进入流盾引擎再转发到源站；以「域名 + IP + 请求特征」为维度对每个请求做规则匹配与防护，并提供可视化管理面板。支持 Docker Compose 一键部署，兼容宝塔面板。

核心理念不是「挡住所有流量」，而是 **识别 → 拦截 → 清洗 → 守护**：

| 阶段 | 说明 |
|------|------|
| **识别** | 看清每一次访问背后的风险（IP、UA、URL、Body、Geo 等） |
| **拦截** | 阻断 CC、爬虫、扫描器、SQL 注入、恶意请求 |
| **清洗** | 过滤异常流量，保留真实用户 |
| **守护** | 持续保护网站稳定运行，支持观察模式与渐进上线 |

---

## 为什么做流盾？

我是 **[子比主题](https://www.zibll.com/)作者老唐**，在网站与建站领域深耕十多年。

这些年，为了给自己的站扛住 CC、刷量与恶意扫描，我几乎把市面上常见的 Web 防护都试过一遍——腾讯 EdgeOne、阿里云边缘 CDN、雷池、宝塔 WAF……用下来的感受很直接：要么关键能力不够用，要么价格让人犹豫很久。

靠多年运营经验，我越来越确信一件事：**CC 与 Web 防护的核心，并不是堆砌黑盒，而是找到攻击的共同特征与规律，再写成可执行的防御规则。** 道理其实很朴素；真正卡住站长的，往往是「规则匹配不够细、日志不够好查、策略不好打磨」。

于是我花了一段时间，把这套想法做成了**流盾 WAF**：希望它不只服务 [子比主题](https://www.zibll.com/) 的用户，也能帮到所有需要守护 Web 流量的朋友——让防护更懂站长、更好上手、也更敢用来打仗。

---

## 流盾核心优势

### 1. 极致性能，亚毫秒级

引擎基于 **Lua** 构建，配合 **Redis** 做规则与计数：单个请求跑完全部防护流程，通常 **不到 1 毫秒**。防护要挡得住，也要尽量不拖慢真实用户。

### 2. AI 驱动自行防护

遇到棘手攻击时，可调用 AI 辅助生成更精准的策略；也支持 **AI 自动防护**：条件触发后，后台自动分析近期日志、提炼攻击特征并创建规则，尽量做到无人值守持续防守。

### 3. 超级丰富的规则策略

不止常见的…
