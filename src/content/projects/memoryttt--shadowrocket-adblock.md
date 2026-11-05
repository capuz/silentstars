---
repo: "memoryttt/shadowrocket-adblock"
name: "shadowrocket-adblock"
description: "Aggregated ad blocking: Qiufeng + fmz200 automatically merged daily into a single Shadowrocket module"
originalDescription: "聚合去广告：秋风+fmz200 每日自动合并为单个 Shadowrocket 模块"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/memoryttt/shadowrocket-adblock"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-15T05:32:19Z"
lastCommitAt: "2026-11-05T00:21:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 46
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/70f10e552946ffaa17cd6ed40f19ed247989d1905bb729b40b42612cbd1b7930/memoryttt/shadowrocket-adblock"
---

# shadowrocket-adblock

Merges multiple ad-blocking modules (Qiufeng AWAvenue + fmz200 per-App modules) into a **single** Shadowrocket module every day, automatically, with security checks before each merge.

## Usage

Shadowrocket → Settings → Modules → Add remote module:

```
https://raw.githubusercontent.com/memoryttt/shadowrocket-adblock/main/dist/merged.sgmodule
```

The module includes its own `[MITM]` section (hostnames already merged). Enable MITM, then install and trust the certificate. You don't need to enter decryption domains manually.

## Coverage

Splash and popup ad blocking for QQ Music, Amap (Gaode Maps), Taobao, JD.com, China Unicom, Meituan, Bilibili, Didi Chuxing, and Xianyu,
plus blocking of third-party ad domains across all Apps from Qiufeng AWAvenue.

## Automatic Updates

`.github/workflows/merge.yml` runs daily at 19:17 UTC (Beijing 03:17). It pulls upstream, runs security checks, merges, and commits.
You can also trigger it manually with `Run workflow` on the Actions page. After you edit `sources.txt`, it re-merges automatically.

## Security Checks (merge.py)

Checks run before every merge. If any one matches, **updates stop** (the previous version is…
