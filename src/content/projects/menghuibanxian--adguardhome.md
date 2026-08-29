---
repo: "Menghuibanxian/AdguardHome"
name: "AdguardHome"
description: "这是梦回半仙的adguardhome合并规则，用到的大佬的规则在adguard_rules.py这个文件内"
readmeQualityOk: true
url: "https://github.com/Menghuibanxian/AdguardHome"
homepage: "https://github.com/Menghuibanxian"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["adguardhome", "adguardhome-query", "dns-filter", "github-actions", "privacy", "python", "rules-merger"]
stars: 20
forks: 7
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-28T13:51:55Z"
lastCommitAt: "2026-08-29T17:26:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 56
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/88cd8e34ab51af2b3c5f11311fa2d5df58600f93d902cc829eaaedc04cb26bb0/Menghuibanxian/AdguardHome"
---

# AdguardHome
不建议使用本仓库的规则，因为本仓库的规则是基于我个人的使用习惯和需求而生成的，可能不适用于你的情况

建议自己fock本仓库，根据自己的需求进行修改

本仓库每十分时准时自动执行

黑名单:
https://raw.githubusercontent.com/Menghuibanxian/AdguardHome/main/Black.txt

白名单:
https://raw.githubusercontent.com/Menghuibanxian/AdguardHome/main/White.txt

精简黑名单:
https://raw.githubusercontent.com/Menghuibanxian/AdguardHome/main/pure%20black.txt

## 项目结构

```
仓库根目录/
├── .github/
│   └── workflows/
│       └── adguard-rules.yml              # GitHub Actions工作流配置（合并→聚合→简化）
│
├── scripts/
│   ├── adguard_rules_merger.py            # 下载/清洗/合并黑白名单，输出 Black.txt & White.txt
│   ├── aggregate_domains.py               # 聚合 logs 中 querylog*.json，更新 domain name.txt
│   └── adguard_rules_simplifier.py        # 基于本地 Black.txt 生成纯黑名单 pure black.txt
│       └──logs/
│          ├── domain name.txt             # 域名累计统计（聚合脚本维护）
│          ├── log                         # 最近处理的域名与时间戳标记
│          └── querylog*.json              # 临时日志（聚合后删除，提交包含删除）
│
├── Black.txt                              # 合并后的总规则（黑名单+格式化白名单）
├── White.txt                              # 独立白名单规则
└── pure black.txt                         # 合并后的总规则（纯黑名单＋白名单）
```
