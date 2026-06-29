---
repo: "sublatesublate-design/contract-review-assistant"
name: "contract-review-assistant"
description: "AI 合同审查助手 - Word 插件，支持 Anthropic/OpenAI/Ollama"
url: "https://github.com/sublatesublate-design/contract-review-assistant"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
stars: 19
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-02-27T15:12:06Z"
lastCommitAt: "2026-06-29T07:22:30Z"
lastReleaseAt: "2026-06-12T03:32:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 14
maintainers: ["sublatesublate-design"]
openGraphImageUrl: "https://opengraph.githubassets.com/23454d601ca58852b6a527992a31d04652991de612e49aa5ff3912b79cda8a7c/sublatesublate-design/contract-review-assistant"
---

# ⚖️ AI 法律写作审校助手

一款装在 Word / WPS 里的 AI 助手。打开你的合同、诉讼文书或法律意见书，点一下按钮，AI 就能逐条帮你找出问题、给出修改建议，还能一键生成标准格式的诉讼文书。

## 🆕 v3.0 更新内容

以前版本只支持合同审查，3.0 起大幅扩展了能力：

- **诉讼文书审查** -- 新增对起诉状、答辩状、上诉状、代理词、申请书等诉讼文书的专项审查，AI 会从格式规范、事实陈述、法律适用、请求事项、证据关联、对抗性分析 6 个维度逐条检查，并根据文书类型自动调整审查重点
- **法律意见书审查** -- 新增对法律意见书、尽职调查报告、合规审查意见等文稿的审查，AI 会从 6 个维度帮你把关：结论是否用了绝对化表述（如"合法""无风险"）、引用的法条是否现行有效且精确到条款项、假设前提是否完整列出并区分了已核实和未核实的信息、免责声明是否涵盖了范围限制和第三方使用限制、文书结构是否完整（背景→分析→结论→免责）、格式是否统一规范
- **要素式诉讼文书生成** -- 打开一份包含案情信息的文档，AI 自动提取当事人、诉讼请求、事实理由等要素，套用官方模板一键生成标准格式的诉讼文书（民事起诉状、答辩状、刑事自诉状等），直接在 Word / WPS 中打开，省去手动排版的麻烦
- **审查窗格体验优化** -- 审查面板改为整页统一滚动，顶部筛选区、摘要和审查结果可以一起滑动，Word / WPS 都能用，长文档查看更顺手

---

## ✨ 它能做什么

### 📋 审查文稿

打开文档，点击「开始审校」，AI 会根据文稿类型自动识别并从不同维度进行审查：

**合同审查（4 个维度）**

- **风险条款** -- 找出权利义务严重失衡、单方修改权、过度免责、无上限违约金等危险条款
- **缺失条款** -- 检查是否遗漏了付款、交付、验收、违约责任、终止、争议解决等关键条款
- **合规问题** -- 识别违反法律强制性规定、可能被认定无效或可撤销的条款
- **条款分析** -- 发现关键术语定义模糊、条款之间互相矛盾、日期金额前后不一致等问题

AI 还会根据合同类型（买卖、劳动、租赁、服务、借款、保密、建设工程等）自动调整审查重点。比如劳动合同会重点查试用期、社保、竞业限制；借款合同会重点查利率、罚息、担保、提前还款条件。

**诉讼文书审查（6 个维度）**

- **格式规范** -- 法院名称是否准确、案由是否使用官方案由、当事人信息是否齐全、必备章节是否完整
- **事实陈述** -- 时间线是否连贯、五要素（谁、何时、何地、何事、结果）是否齐全、事实与证据是否对应
- **法律适用** -- 法条引用是否完整（法律名称+条+款+项）、是否引用了已废止的法律、论证逻辑是否有跳跃
-…
