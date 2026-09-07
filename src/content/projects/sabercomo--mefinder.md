---
repo: "sabercomo/MEFinder"
name: "MEFinder"
description: "本地优先的 Word / PDF 文献原句检索、页码定位与引文辅助工具"
readmeQualityOk: true
url: "https://github.com/sabercomo/MEFinder"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 31
forks: 2
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-20T14:41:27Z"
lastCommitAt: "2026-09-07T08:35:17Z"
lastReleaseAt: "2026-07-28T11:59:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 40
maintainers: ["sabercomo"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b10cc1b330795ec5042b35a68001775f8a8ab224cd1daaa268c44920a8eaf38/sabercomo/MEFinder"
---

</p>

<h1 align="center">MEFinder</h1>



  本地优先的 PDF / Word / EPUB 文献检索、页码定位与引文辅助工具
</p>

</p>

  · <a href="#快速开始">📖 快速开始</a>
  · <a href="docs/MCP_CLIENT_SETUP.md">🔌 MCP 配置</a>
  · <a href="#主要功能">✨ 主要功能</a>
  · <a href="#工作原理">⚙️ 工作原理</a>
</p>

</p>

## 为什么做 MEFinder？

我是一名在读文科硕士生。以前写小论文，每到定稿前，都要把正文里的引文一条条重新核对：原文有没有抄错，出处有没有写对，页码准不准，我对上下文的理解有没有偏差。写作的时候，我也常常明明记得某个观点、某段大意，却一时想不起原句到底怎么写、藏在哪份文献里。

现在写大论文，文献更多了。我常常要在好几个 PDF 之间来回切换，反复打开、搜索、翻页、核对。被这些麻烦反复折腾之后，我开始想：如果有一个工具，能把自己的文献都放在一起，既能凭记得的片段找回原句，也能根据论文里的引文找到出处、上下文和页码，会不会省下很多时间？

我找了一圈，没发现真正贴合这种需求的软件，于是决定自己动手做一个。MEFinder 就这样开始了。

无论你交给它的是完整的原句、残缺的片段，还是带着错字漏字的只言片语，它都会在你的本地文献库里找回原文，带你回到上下文和原始页面，并把出处整理好，方便你继续核对、复制。

它不会替你“猜”引文来自哪里，也不会编一个像模像样的答案来糊弄你。搜索、索引、页码映射和大部分元数据处理，默认都在本机完成；只有扫描件、文本层乱码或版面复杂的 PDF 确实需要解析时，才由你决定是否交给 MinerU 或其他视觉服务。

这也是我第一次完整地做完一个软件项目，一路上磕磕绊绊，很多东西都是边做边学，MEFinder 也还在继续完善。如果它没找到你确定存在的句子，或者页码、题录处理得不对，欢迎附上具体样例来提交 Issue。感谢大家愿意试用，不足之处还请多多包涵。

如果 MEFinder 恰好能帮你少翻几次 PDF、少花点核对引文的时间，欢迎顺手点个 Star 🌟。对第一次做开源项目的我来说，你的支持会是很大的鼓励，也会让我更有动力继续把它做好。


## ✨ 主要功能

| 功能 | 能做什么 |
| --- | --- |
| **原句定位** | 输入完整原句、残句或带少量错字、漏字的文本，通过自动、精确、忽略空格、忽略标点和模糊模式定位原文。 |
| **上下文 / 页码定位** | 查看命中位置的前后文，区分 PDF…
