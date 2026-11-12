---
repo: "OlivOS-Team/lib-onedice"
name: "lib-onedice"
description: "Today, we stand as one"
readmeQualityOk: true
url: "https://github.com/OlivOS-Team/lib-onedice"
language: "Python"
languages: ["Python", "Kotlin"]
languagePcts: [78, 22]
stars: 7
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2021-11-10T12:12:56Z"
lastCommitAt: "2026-11-12T05:39:47Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 49
maintainers: ["lunzhiPenxil"]
openGraphImageUrl: "https://opengraph.githubassets.com/92973b9843befdd2b273908a047c8809bdb5d71c1942e75fd9f43702b32a1011/OlivOS-Team/lib-onedice"
---

# lib-onedice

本项目是[OneDice](https://github.com/OlivOS-Team/onedice)标准的标准库

### 安装

#### 从 PyPI 安装（推荐）

- 使用 pip

```
pip install onedice
```
### 使用
#### 参考代码
```python
import onedice

dice = onedice.RD("(1d8+2d100)*1d10")
dice.roll()
print(dice.resInt)
print(dice.resError)
```

#### 输出结果
```
1296
None
```

> ### 本库还包含了以下支持的历史版本
语言 | OneDice 版本 | 主要作者 | 项目地址
:-: | :-: | :-: | :--
Python | V1 | [lunzhiPenxil](https://github.com/lunzhiPenxil) | [OlivOS-Team/lib-onedice](https://github.com/OlivOS-Team/lib-onedice/tree/main)
Kotlin | V1 | [zhaodice](https://github.com/zhaodice) | [OlivOS-Team/lib-onedice/archived/kotlin](https://github.com/OlivOS-Team/lib-onedice/tree/archived/kotlin)
