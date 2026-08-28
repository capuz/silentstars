---
repo: "Y1X1n/dsh-prompt-optimizer"
name: "dsh-prompt-optimizer"
description: "针对Deepseek Harness开发的提示词优化插件"
readmeQualityOk: true
url: "https://github.com/Y1X1n/dsh-prompt-optimizer"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [67, 33]
topics: ["deepseek-harness", "dsh-plugin", "dsh"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-18T16:52:14Z"
lastCommitAt: "2026-08-28T14:35:24Z"
lastReleaseAt: "2026-08-26T16:42:03Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 43
maintainers: ["Y1X1n"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b9c6f4e5990bd6e08242f388d631f434bd91b03aa222a4b589e71612f1f782b/Y1X1n/dsh-prompt-optimizer"
---

# dsh-prompt-optimizer

**中文** | [English](https://github.com/Y1X1n/dsh-prompt-optimizer/blob/HEAD/README.en.md)

DeepSeek Harness 插件:在会话输入框(发送栏)旁提供一个「优化」按钮(✨ 图标),一键分析并优化当前输入的提示词草稿,**结果经 SSE 流式逐段上屏**。优化调用默认复用当前会话的模型路由(每次点击实时读取,会话里切换模型立即生效)。

- **Host 半侧**:注册 `POST /dsh-prompt-optimizer/optimize`(SSE 流式)与 `POST /dsh-prompt-optimizer/test-model`(连通性探活)两条路由,调用 `ctx.llm` 完成「分析 + 改写」。
- **Client 半侧**:向 `conversation.input.right` 槽位注入按钮,向 `conversation.input.dock` 注入结果面板(输入卡上方整行、与 TodoDock 同族,新会话界面也渲染,且不遮挡输入框),向 `settings.plugin.item` 注入可折叠的设置卡片(设置页自动获得配置界面,无需单独开发页面)。界面文案跟随 DSH 界面语言(中文 / English)。

## 功能

- 发送栏工具行右侧新增「优化」按钮(输入为空时禁用,优化中带呼吸动画);等待期间面板实时显示当前阶段(等待模型响应 / 分析诊断 / 输出优化稿)与已用秒数,完成后模型徽章处展示总用时。
- 点击后实时读取当前会话的 provider/model 发起辅助调用;**分析与优化结果逐段流式显示**在输入卡上方的面板里,不用干等整段生成。
- **双策略优化**:无上下文(空会话/关闭携带)时按**结构模板**规范化改写(角色/任务/约束/输出格式);有上下文时自动切换为**提炼目的 + 顺势润色**——先通读会话近期对话提炼真实意图,保留草稿原始表达框架打磨,不套模板,不重复追问上下文已给出的信息,且**已否决方向不再重提**(禁入集合)。
- **保真纪律**(借鉴 Fishsb/dsh-prompt-enhancer):语义等价底线、来源可回溯(推断处以「如无特别说明/默认」标注)、输出前逐要素**保真自检**防漂移、简单任务 800 字符内的长度纪律,并带 few-shot 示例稳定输出风格。
- **轻量记忆链**:在我们产出的优化稿上继续修改后再点优化,自动携带上一轮结果作为延续参考(沿用已确认决策,只围绕变化点调整);同文重试、跨会话、上轮格式退化的结果都不带,发送或关闭面板后自然归零;跟随「携带上下文」开关,关闭后不携带。
-…
