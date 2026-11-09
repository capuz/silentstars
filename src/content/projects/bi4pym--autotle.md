---
repo: "BI4PYM/AutoTLE"
name: "AutoTLE"
description: "自动化更新HAM常用的卫星TLE星历文件"
readmeQualityOk: true
url: "https://github.com/BI4PYM/AutoTLE"
homepage: "https://www.hellocq.net/forum/read.php?tid=370636"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 40
forks: 8
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2021-07-12T13:17:26Z"
lastCommitAt: "2026-11-09T04:35:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 55
maintainers: ["BI4PYM"]
openGraphImageUrl: "https://opengraph.githubassets.com/70ca1ef2774e116d6ffa8a93ac56094e6e56da43e0700febcac5b561059bfe87/BI4PYM/AutoTLE"
---

# AutoTLE V2

使用Vibe Coding

自动化更新业余卫星星历，兼容传统 TLE，并支持 TLE 编号耗尽后的 OMM 多格式输出。

自动化更新HAM常用的卫星TLE星历文件

帖子：https://www.hellocq.net/forum/read.php?tid=370636 https://forum.hamcq.cn/d/3323

AutoTLE五周年，AutoTLE正式更新为AutoTLE V2

添加Norad ID>100000卫星的支持,支持Celestrak新接口,映射到70000~89999,兼容Orbitron

添加OMM JSON到TLE格式转换,支持多卫星列表输出

新增 静安梦想 八一04 两颗卫星

欢迎推荐TLE文件里当前没有的，常用或者最新的卫星以便加入更新列表！

现有卫星：

ISS,SO-50,AO-91,PO-101,RS-44,

AO-7,LILACSAT-2,FO-29,TIANQIN 1 (CAS-6),CSS,

JO-97,METEOR-M2 3,METEOR-M2 4,XW-3 (CAS-9),MT-CUBE-2,

ES'HAIL 2,GK-2A,SONATE-2,ASRTU-1 (AO-123),MESAT1,

RS95S,TEVEL2-9,TEVEL2-8,TEVEL2-7,TEVEL2-6,

TEVEL2-5,TEVEL2-4,TEVEL2-3,TEVEL2-2,TEVEL2-1,

GEMINI-POLLUX,HADES-SA,BY70-4,JAMX01,METOP-B/C

服务器星历更新频率：由于celestrak每两小时检测一次，AutoTLE也将两小时检测一次，保证TLE源数据有变动就会自动更新

食用方法：把追星软件（如Orbitrn，“追星”等）的TLE来源设置为

http://raw.githubusercontent.com/BI4PYM/AutoTLE/refs/heads/master/AutoTLE.txt

http://autotle.bi4pym.cn/AutoTLE.txt

如无法更新，可自行寻找github镜像源使用

注意！有些软件（如Orbitron）不支持HTTPS

最新卫星列表及状态请在`logs.txt` `satellites_state.md`中查询

## 功能

- 从 CelesTrak 获取 GP/OMM：默认顺序 `JSON -> KVN -> CSV -> XML -> TLE`。
- CelesTrak 无数据时回退 SatNOGS：`GET /api/tle/?format=json&norad_cat_id=...`，也支持 `sat_id`。
- CelesTrak 与 SatNOGS…
