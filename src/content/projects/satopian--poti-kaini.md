---
repo: "satopian/poti-kaini"
name: "poti-kaini"
description: "\"POTI-board EVO\" is an open-source drawing board PHP script for PaintBBS NEO, tegaki.js, AXNOS Paint, litaChix, and Klecks. (PHP7.4 - PHP8.5) https://paintbbs.sakura.ne.jp/poti/"
originalDescription: "｢お絵かき掲示板PHPスクリプトPOTI-board EVO｣ for PaintBBS NEO, tegaki.js,AXNOS Paint,litaChix and Klecks. (PHP7.4 - PHP8.5)  https://paintbbs.sakura.ne.jp/poti/"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/satopian/poti-kaini"
homepage: "https://paintbbs.sakura.ne.jp/"
language: "JavaScript"
languages: ["JavaScript", "PHP", "CSS"]
languagePcts: [36, 21, 21]
topics: ["paintbbs", "oekaki", "php", "bbs", "oekakibbs", "chickenpaint", "klecks", "potiboard", "paintbbsneo", "litachix"]
stars: 21
forks: 5
openIssues: 0
closedIssues: 10
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2020-05-13T14:54:05Z"
lastCommitAt: "2026-07-22T06:09:59Z"
lastReleaseAt: "2021-08-05T14:54:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 67
maintainers: ["satopian"]
openGraphImageUrl: "https://opengraph.githubassets.com/43c75ed4b75407cfcb0f464176efce38ac9130264d5c9a80dd35dd844fffc0ae/satopian/poti-kaini"
discussionCount: 3
---

# POTI-board EVO PHP Script

This is a project to improve the drawing board PHP script POTI-board.

## Operating Environment
PHP7.4-PHP8.5  
## Other Versions
English translated version is here. [POTI-board EVO-EN](https://github.com/satopian/poti-kaini-EN)  
Traditional Chinese version [POTI-board EVO-zh-TW](https://github.com/satopian/poti-kaini-zh-TW)

## Critical Bugs in Older Versions
- [POTI-board before v2.26.0 has an XSS vulnerability.](https://github.com/satopian/poti-kaini/issues/11)  
There is a possibility that malicious JavaScript may be executed.

- All versions of POTI-board before v3.09.5 have a critical defect.  
There is a possibility of losing all log files.  

Also, the v3.x series of POTI-board will show deprecated errors in PHP8.1 environments.  
Currently, it is a warning, but it will stop working in PHP9.  
This is the development of v6.x for that reason.  
v6.x is recommended for use.

## Overview

In v3.0, in addition to the conventional [PaintBBS NEO](https://github.com/funige/neo/), it became possible to use the high-performance HTML5 paint application [ChickenPaint](https://github.com/thenickdude/chickenpaint).  
The script name has changed to…
