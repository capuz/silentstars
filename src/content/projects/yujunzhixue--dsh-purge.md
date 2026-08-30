---
repo: "YuJunZhiXue/dsh-purge"
name: "dsh-purge"
description: "no more refusals, do everything."
readmeQualityOk: true
url: "https://github.com/YuJunZhiXue/dsh-purge"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 189
forks: 41
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-19T07:41:12Z"
lastCommitAt: "2026-08-30T00:44:59Z"
status: "newborn"
tags: []
healthScore: 83
undervaluedScore: 10
maintainers: ["YuJunZhiXue", "TLcmmmm"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e696d135e1e79116f1d92811ac1765e8f44911c6fff2039cf0f5a9a240cf936/YuJunZhiXue/dsh-purge"
---

</p>

<h1 align="center">dsh-purge</h1>

  <em>DSH Web UI plugin · 指令权威性清除——强制读取设置的规则，四层清除 25 patch（含引擎级审批/沙箱绕过与工具层限制清洗），npm 升级后自动重清。</em>
</p>

  <br>
</p>

</p>

为 [DeepSeek Harness](https://www.deepseek.com/harness/) 打造的**指令权威性清除插件**：把 dsh 渲染时注入的"可选参考 / 免责声明 / 拒绝限制"等削弱文案，整体替换为**必须执行的强指令**，让本地规则（AGENTS.md 等）重新获得最高权威。

不需要改一行 dsh 框架代码，安装即生效，npm 升级后**自动重清**。

---

## 界面预览

> 「规则设定」卡片出现在 **dsh web 设置页**，一眼看清清除状态，一键应用/回滚。

| 区域 | 说明 |
|---|---|
| 补丁进度 | 8/8 已清除，实时显示每个 patch 状态 |
| shim 状态 | dsh.cmd / dsh.ps1 启动注入是否生效 |
| **应用 / 回滚** | 一键执行三层清除，或还原到备份原件 |
| 全局提示词 | 可编辑注入文件，**默认空**，填什么注入什么 |

---

## 核心思路

dsh 在渲染本地指令时会注入一层**削弱文案**，让模型把 AGENTS.md 当成"可选参考 / 不可信内容"，甚至主动拒绝执行。清除的思路不是删除指令，而是**重建指令的权威性**——把"可选"改成"必须"。

| Layer | Target | Method |
|---|---|---|
| 1. Prompt | rendered disclaimers / weakening / refusal copy | long-text replacement with `ACTIVE and MANDATORY` directives |
| 2. Code defaults | sandbox deny, default mode, approval gate | default `danger-full-access`, `allow file-write*` |
| 3. Shim | launch-time env injection | prepend to `dsh.cmd` / `dsh.ps1` |
| 4. File | fallback instruction override | `prompt-inject.md` (empty by default, injected per session) |
| 5. **Engine…
