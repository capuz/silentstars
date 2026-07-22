---
repo: "satopian/poti-kaini-zh-TW"
name: "poti-kaini-zh-TW"
description: "繪圖留言板PHPscript POTI-board EVO 繁體中文版本 The OekakiBBS for for PaintBBS NEO, tegaki.js,AXNOS Paint,ChickenPaint and Klecks. (PHP7.4 - PHP8.5) https://paintbbs.sakura.ne.jp/poti/"
readmeQualityOk: true
url: "https://github.com/satopian/poti-kaini-zh-TW"
homepage: "https://paintbbs.sakura.ne.jp/"
language: "JavaScript"
languages: ["JavaScript", "PHP", "CSS"]
languagePcts: [39, 24, 23]
topics: ["paintbbs", "oekaki", "php", "bbs", "oekakibbs", "chickenpaint", "klecks", "potiboard", "paintbbsneo", "litachix"]
stars: 9
forks: 3
openIssues: 1
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-04-27T14:59:31Z"
lastCommitAt: "2026-07-22T06:10:54Z"
lastReleaseAt: "2021-08-22T17:02:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 74
maintainers: ["satopian"]
openGraphImageUrl: "https://opengraph.githubassets.com/7aaa41dbfa085160d36cc5df292e6452c0db53f965823db92f3c90f9f076bc1c/satopian/poti-kaini-zh-TW"
discussionCount: 0
---

# 繪圖留言板 PHP script POTI-board EVO 的中文翻譯本
## 這是POTI-board EVO 的繁體中文翻譯本.
This is the traditional Chinese translation version of POTI-board EVO.  
這是日語顯示的原文.  
[satopian/poti-kaini: ｢お絵かき掲示板PHPスクリプトPOTI-board EVO｣ for PaintBBS NEO and ChickenPaint](https://github.com/satopian/poti-kaini)
存儲庫管理員依靠Google翻譯，因為它只懂日語.  

 

### [繪圖留言板](https://paintbbs.sakura.ne.jp/cgi/neosample/poti-board-zh-TW/index.html)(繁體中文)

## Serious bugs in older versions
- POTI-board v2.26.0 and earlier all versions is vulnerable to XSS.    
Malicious JavaScript can be executed.

- All versions of POTI-board prior to v3.09.5 have a serious bug.    
You may lose all log files.

- POTI-board v3.x gives a deprecated error in PHP8.1 It will not work with future versions of PHP.

Please update to v5.x or higher.

### Overview of required work.
There is a language resource for messages in `template_ini.php`, such as error messages and messages used when images are uploaded successfully.  
The HTML of the template uses Japanese, so we need to translate it.  
We also need to translate the external search programs `search.php` and `search.html`.    
However, potiboard.php externalizes all language settings, so no changes…
