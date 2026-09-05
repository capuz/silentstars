---
repo: "Fidelxyz/rime-wanxiang-slim"
name: "rime-wanxiang-slim"
description: "支持直接辅助码的 Rime 拼音/双拼输入方案 – 万象拼音输入方案的精简分支"
readmeQualityOk: true
url: "https://github.com/Fidelxyz/rime-wanxiang-slim"
homepage: "http://fidel.js.org/rime-wanxiang-slim/"
language: "Lua"
languages: ["Lua"]
languagePcts: [79]
topics: ["rime", "rime-wanxiang", "rime-config", "rime-custom", "rime-schema", "chinese-input-method", "input-method"]
stars: 19
forks: 1
openIssues: 2
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-03-19T22:07:32Z"
lastCommitAt: "2026-09-05T07:48:33Z"
lastReleaseAt: "2026-05-30T14:46:09Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 90
undervaluedScore: 44
maintainers: ["Fidelxyz", "github-actions[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0cfbd09ec2926ae0baf81bc2cb2b304a01ded82fba7f3e37445a95c92855dbb/Fidelxyz/rime-wanxiang-slim"
discussionCount: 1
---

# 万象拼音输入方案精简版

[**文档**](https://fidel.js.org/rime-wanxiang-slim/getting-started/introduction) · [**安装**](https://fidel.js.org/rime-wanxiang-slim/getting-started/installation) · [**快速上手**](https://fidel.js.org/rime-wanxiang-slim/getting-started/quick-start)

</div>

---

<blockquote>

</blockquote>

这是源自于 C++ 的[零开销（Zero-overhead）](https://en.cppreference.com/w/cpp/language/Zero-overhead_principle.html)设计哲学。

原版[万象拼音输入方案](https://github.com/amzxyz/rime_wanxiang)涵盖了丰富的功能，在“对标大厂体验”的同时也引入了具有“大厂风味”的庞大臃肿：其中大部分与输入无关的功能不会被绝大多数用户使用（我为什么要在一个输入法中计算时辰，且[该功能花费了超 3000 行代码来实现](https://github.com/amzxyz/rime_wanxiang/blob/v15.7.0/lua/wanxiang/shijian.lua)？），却依旧会带来潜在的性能负担。此外，其“低内聚、高耦合”的混乱架构设计[^1]也增加了用户的自定义难度及开发者的维护难度。

该 Fork 作为一个**专注于输入**的精简分支，移除了原版中与输入无关的功能，遵循 [SOLID 原则](https://en.wikipedia.org/wiki/SOLID)重构了代码架构，并为全部 Lua 代码添加了完整的类型注解。该 Fork 已全部重写原版由 LLM 生成的低效代码，由自动化 CI/CD 定期同步上游词库，提供更轻量高效的输入体验。同时，该 Fork 重写了原版混乱的说明文档，以降低上手和自定义门槛。

[^1]: [“高内聚、低耦合”](https://baike.baidu.com/item/%E9%AB%98%E5%86%85%E8%81%9A%E4%BD%8E%E8%80%A6%E5%90%88/5227009)是软件工程中的设计原则，指模块内部的元素应该紧密相关（高内聚），而模块之间的依赖关系应该尽量减少（低耦合）。此处“低内聚、高耦合”为其反义词。原版万象拼音输入方案采用了大量“超级模块”的设计，将互不相关的功能混杂在同一个模块中，而实现单个功能的代码却分散在各处，以毫无必要的方式增加了代码的复杂度和维护难度。…
