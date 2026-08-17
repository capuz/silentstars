---
repo: "yuanwang589-dev/deepseek-harness-quant"
name: "deepseek-harness-quant"
description: "Deepseek HARNESS Quant — A股低频量化决策系统（Pitch决策链 + 因子引擎 + 五池远期验证 + HARNESS 嵌入）"
readmeQualityOk: true
url: "https://github.com/yuanwang589-dev/deepseek-harness-quant"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [50, 45]
stars: 12
forks: 9
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-08-16T01:36:11Z"
lastCommitAt: "2026-08-17T04:19:37Z"
lastReleaseAt: "2026-08-17T04:20:25Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 26
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/de6c4b0d9d744bd88981431679d4da5028f98c413af9ee08f8038f046b2fb55e/yuanwang589-dev/deepseek-harness-quant"
---

# DeepSeek HARNESS Quant

自然语言驱动的 A 股量化系统。低频。主观决策 + 写死引擎 + 数据裁决。

AI 不预测个股。这是硬约束，不是选项。

```
驱动层  语言模型        控制 · 挖因子 · 审计 · 牛散蒸馏
执行层  写死引擎        评分 · 回测 · 风控 · 扫描（确定性 Python，可复现）
事实层  数据系统        PIT · T+1 · 覆盖率分年核查（可证伪）
```

## 开始

新用户直接走 [一键部署](https://github.com/yuanwang589-dev/deepseek-harness-quant/blob/HEAD/docs/一键部署.md)。接入 AI API 后，数据源、配置、验证全交给 AI 向导，不必读本页其余内容。

## 接入 DeepSeek API

接入 API 后，语言模型接管驱动层。控制、挖因子、审计、魔改，全部解锁。不接入，则只有写死引擎，没有 AI。

**前提**：完整包（zip）已内置 HARNESS 运行时；单文件（exe）不含 HARNESS，AI 控制台不可用。系统需 Node.js 18+（https://nodejs.org），无则 HARNESS 自动跳过、量化系统照常。

**最快方式**：双击 `接入API.cmd`，粘贴 Key，自动写入并验证。

```bash
# 1. 获取 Key
#    https://platform.deepseek.com/api_keys

# 2. 复制凭据模板，填入 Key（或直接用接入API.cmd）
copy harness\home\.credentials.yaml.example harness\home\.credentials.yaml
#    编辑 .credentials.yaml：
#    DEEPSEEK_API_KEY: sk-<your-key>

# 3. 启动（打印「启动 DeepSeek HARNESS」即集成成功）
python launcher.py
#    http://127.0.0.1:8787/control
```

接入后，直接对话：

- **控制系统**：发「1」触发自主推进（审计 / 修复 / 归档，系统自我进化）
- **挖因子**：说「研究散户情绪量化」——AI 拆假设 → 生成因子 → 九步验证 → 入池或证伪
- **审计**：让 AI 自查前视、覆盖率、共线性、过拟合
- **牛散**：7 位牛散人格对话选股，决策自动入远期池验证
- **魔改**：动态 Cordis 插件热更新，系统行为运行时改，不重编译

其余数据源（Tushare 等）接入后让 AI 指导完成。核心逻辑：先接 AI 的…
