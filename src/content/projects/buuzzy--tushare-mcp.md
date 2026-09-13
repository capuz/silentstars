---
repo: "buuzzy/tushare_MCP"
name: "tushare_MCP"
description: "a finance MCP tool"
readmeQualityOk: true
url: "https://github.com/buuzzy/tushare_MCP"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 49
forks: 16
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-05-09T10:01:12Z"
lastCommitAt: "2026-09-13T08:30:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 38
maintainers: ["buuzzy"]
openGraphImageUrl: "https://opengraph.githubassets.com/bed4790e76bff5ea5d8e0dea8df526c62e4b410f7843eb131c94607c19951871/buuzzy/tushare_MCP"
---

# Tushare MCP 📈

> 基于 MCP (Model Context Protocol) 协议构建的 A 股金融数据 AI 助手扩展 (v0.1.0)

  <h3>让 AI 读懂中国股市</h3>
  <p>Claude Desktop / Cursor 无缝集成 · A 股/港股全量数据 · 财务报表 · 智能 Token 管理</p>

  <p>
  </p>

  <p>
  </p>

</div>

---

**Tushare MCP** 是一款连接 AI（Claude, Cursor）与 Tushare 金融大数据的桥梁。它实现了 Model Context Protocol (MCP) 标准，让你的 AI 助手能够直接调用 30+ 个专业金融数据接口，实时查询股票行情、财务报表、公司基本面等关键数据。

本项目采用了更为方便、平价的 tinyshare SDK，替代了官方的 tushare 库。使用下述依赖：

```
import tinyshare as ts
```

---

如果你完全不知道如何使用，请阅读下方腾讯文档：
[Tushare MCP 使用说明](https://doc.weixin.qq.com/doc/w3_AbQAFgbhALUCN01st0nWWQfyyiN0f?scode=AJEAIQdfAAoBLLzpIHAbQAFgbhALU)

如果你想通过添加 mcp server 直接使用，忽略繁琐过程，可以联系我试用：
微信：Buuzzy0603

---

试用端点，可免费体验 mcp tools，无需 token

如果不知道如何使用，把下面这两个地址发给 AI，让它添加 mcp server
```
### stock endpoint
https://stock-mcp.pricetrade.top/sse

### fund endpoint
https://fund-mcp.pricetrade.top/sse
```

---
## 2025.02.20 补齐 ETF、工具基金接口
本次更新重点补齐了公募基金及 ETF 接口。同时，针对大模型（特别是数据对比与分析场景）强烈的“多代码逗号分隔查询”倾向，而底层 Tushare API 又不原生支持的痛点，我们在所有的 Fund 模块底层植入了 **“本地请求切割与合并处理器”**。该机制能够智能拦截逗号列表，在后台循环发起多次原子请求并拼接整合数据帧。

## 2025.02.16 重构

本次迭代实现了从单文件脚本向模块化工程的重构。我们将原来的单体 server.py 拆分为 server.py (仅负责服务编排与路由)、 tools/ (按业务领域拆分的逻辑核心) 以及 utils/ (基础设施)…
