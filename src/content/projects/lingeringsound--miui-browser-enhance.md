---
repo: "lingeringsound/Miui_Browser_enhance"
name: "Miui_Browser_enhance"
description: "A simple Magisk module for restoring the ad-blocking feature of the MIUI Browser."
originalDescription: "一个简单的Magisk模块，用于恢复MIUI 浏览器的广告拦截功能。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lingeringsound/Miui_Browser_enhance"
homepage: "https://lingeringsound.github.io/Miui_Browser_enhance/"
language: "HTML"
languages: ["HTML", "Python", "Shell"]
languagePcts: [37, 33, 30]
topics: ["magisk-module"]
stars: 17
forks: 1
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-04-01T14:17:46Z"
lastCommitAt: "2026-11-12T05:41:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 58
maintainers: ["github-actions[bot]", "lingeringsound"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f788d88572d1e428b69783df42f55142586a64f551eb0cd8f9b83b78de41376/lingeringsound/Miui_Browser_enhance"
---

## MIUI Browser Enhancement
Description: Restores the ad-blocking feature of the MIUI Browser. It uses the **chattr** command to prevent restoration, so please read up on [chattr](https://www.cnbugs.com/post-3216.html)

## 
### Merged **Sources**
#### Listed below. Thanks to all the experts for their rules!
| **Name** | **Link** |
| :-- | :-- |
| ***乘风*** | [link](https://cdn.jsdelivr.net/gh/xinggsf/Adblock-Plus-Rule@master/rule.txt) |
| ***360 rules*** | [link](https://code.gitlink.org.cn/api/v1/repos/keytoolazy/adblock/raw/Qihoo_Adblock_108) | 
| ***Adblock Plus EasylistChina*** | [link](https://easylist-downloads.adblockplus.org/easylistchina.txt) |
## 

## How It Works
① Replace [Host](https://cn.bing.com/search?q=%E4%BB%80%E4%B9%88%E6%98%AFHost)
② Replace the file. The MIUI Browser's Adblock file is located at ``/data/data/com.android.browser/files/data/adblock``. The module copies it and then locks it with [chattr](https://www.cnbugs.com/post-3216.html).
## Notes

> The ``配置.prop`` file in the module directory (``/data/adb/modules/MIUI_browser_key``) can be used to change the rules. After editing the configuration, no reboot is needed; simply run service.sh in the module…
