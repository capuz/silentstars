---
repo: "HsukqiLee/GoogleSansMax"
name: "GoogleSansMax"
description: "A Magisk/KernelSU font module."
url: "https://github.com/HsukqiLee/GoogleSansMax"
homepage: "https://font.icmp.ing"
language: "Shell"
languages: ["Shell", "JavaScript"]
languagePcts: [47, 29]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-11T08:15:40Z"
lastCommitAt: "2026-07-02T06:35:13Z"
lastReleaseAt: "2026-06-12T07:03:34Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 55
maintainers: ["HsukqiLee", "github-actions[bot]", "fossabot"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5140d5b4d785810f8e42e7fd2f47f5326f346765cfbd4d5ac4b690593164e47/HsukqiLee/GoogleSansMax"
---

# GoogleSansMax

</a>
</a>

</div>

</div>

GoogleSansMax 是一款高度定制化、集大成者的 Magisk/KernelSU 字体模块。本项目的核心目标是为 Android 系统提供最全面、最优化的跨语种字体替换方案，同时从底层架构上解决传统字体模块普遍存在的冲突、字重丢失以及渲染缓存 Bug 等痛点问题。

## 字体覆盖与字重支持

### 总览

| 分类 | 字体族 | 字体文件 | 字重范围 | 样式 |
|---|---|---|---|---|
| **Latin 无衬线** | sans-serif | GoogleSansFlex-Regular.ttf | **100–1000** | normal + italic |
| **Latin 衬线** | serif | NotoSerif-VF.ttf | **100–900** | normal + italic |
| **Latin 等宽** | monospace | NotoSansMono-VF.ttf | **100–1000** | normal + italic |
| **CJK 无衬线** (ja/ko/zh-Hans/zh-Hant/zh-Bopo) | sans-serif | NotoSansCJK-VF.otf.ttc | **100–900** | normal |
| **CJK 衬线** (ja/ko/zh-Hans/zh-Hant/zh-Bopo) | serif (fallbackFor) | NotoSerifCJK-VF.otf.ttc | **200–900** | normal |
| **CJK 等宽** (ja/ko/zh-Hans/zh-Hant/zh-Bopo) | monospace | NotoSansCJK-VF.otf.ttc | **100–900** | normal |
| **Hentaigana** | ja fallback | NotoSerifHentaigana.ttf | **100–1000** | normal |

详细字重实现说明见 [docs/weight-implementation.md](docs/weight-implementation.md)。

### WebUI 字重测试

模块内置字重测试 WebUI，安装后可通过 Magisk/KernelSU 管理器访问：
- 支持 Sans-Serif / Serif / Monospace / CJK 全家族字重预览
- 支持简体中文 / 繁体中文 / 日语 / 韩语切换
- 支持自定义文本测试
- 支持字符覆盖率查看
- 暗色/亮色主题自动切换

## 构建版本与下载

本仓库利用…
