---
repo: "yunhuantian/dsh-plugin-hub"
name: "dsh-plugin-hub"
description: "Plugin Store for DeepSeek Harness (DSH): a graphical app-store inside the Harness Web UI — browse, search and one-click install GitHub dsh-plugins (topic:dsh-plugin / #dsh-plugin repos), with local ratings, dependency impact graphs, audit logging and a plugin scaffold guide."
readmeQualityOk: true
url: "https://github.com/yunhuantian/dsh-plugin-hub"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [66, 32]
topics: ["deepseek-harness", "dsh-plugin", "plugin-hub"]
stars: 8
forks: 4
openIssues: 1
closedIssues: 13
watchers: 0
contributors: 4
recentReleases: 4
createdAt: "2026-08-14T11:25:41Z"
lastCommitAt: "2026-11-09T00:52:59Z"
lastReleaseAt: "2026-11-07T14:40:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 67
maintainers: ["yunhuantian", "cuiyi126", "OonatestResult"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d6bf3510b8f267ef61edf96afeee9fa7ecde27ae5a0608164f406e6fe10715d/yunhuantian/dsh-plugin-hub"
---

# dsh-plugin-hub — DSH 插件商店

> DeepSeek Harness 里的图形化插件商店，嵌在**官方「插件」页**里：自动识别、认证列表、
> 整合包、一键安装、健康度、发布与审计。一个 npm 包带 **20 个可单独开关的内部插件**，
> 另随包预置 16 个离线条目，装好即有内容。
>
> 商店自己的认证索引同时以**官方 format 1** 发布（当前 121 条），可以直接配进
> 官方「插件 → 发现」页。

支持 **DSH `0.1.x` 与 `0.2.x`** 两条版本线 · MIT · 当前 **0.2.8**（2026-10-31）

---

## 当前状态

### 一、已停用 / 默认关闭

| 功能 | 开关 | 现在的状态 | 想用时怎么恢复 |
|---|---|---|---|
| 插件百科 | `baike` | **默认关**，并且入口、详情 tab、数据接口三处一起关 | 「内置扩展」里打开百科；外部目录还需 `meta external_sync=1` |
| 外部目录同步 | 元数据 `external_sync` | **默认关**（Blue-Whale 等外部仓库） | 写 `external_sync=1` 后再同步 |
| 信任徽章同步 | — | **已移除**（0.2.6 起 `trust` 子插件并入质量门禁） | 无需恢复 |
| 更新日志生成 | `changelog` | 默认关 | 「内置扩展」里打开 |
| 技能商店 | `skill-store` | 默认关 | 「内置扩展」里打开 |
| 诊断报告导出 | `diagnostics` | 插件默认关，但**导出入口常驻**「内置扩展」页 | 需要时直接点导出（走 Remote，不依赖该插件开关） |

两件事值得单独说明：

- **百科是「真关」了，不是只关了个壳。** 0.2.6 只把 `defaultEnabled` 设成 `false`，
  但顶部导航是硬编码数组、host 的 `wikiHub` / `wiki` 直接读库 —— 结果插件看着关了，
  百科条目照样出得来。0.2.7 把门控补到三处：顶部标签不显示、详情页不显示百科 tab、
  接口直接返回空 / 明确报错。数据仍在库里，重新打开开关即可恢复，不删库。
- **外部目录为什么关。** 百科原本依赖 Blue-Whale-Harness 的外部目录，数据质量不可控；
  目录内容随时会被上游改掉，而这又直接影响商店里看到的东西。现在整条链路由
  `external_sync` 元数据门控，默认不碰外部文件。

### 二、这轮改进了什么

| 改进 | 之前 | 现在 |
|---|---|---|
| 商店外壳 | 左侧…
