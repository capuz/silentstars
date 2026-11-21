---
repo: "kg68k/xperiment68k"
name: "xperiment68k"
description: "Experimental codes for X680x0/Human68k"
readmeQualityOk: true
url: "https://github.com/kg68k/xperiment68k"
language: "Assembly"
languages: ["Assembly"]
languagePcts: [99]
topics: ["68000", "human68k", "x68000"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-03-21T07:57:24Z"
lastCommitAt: "2026-11-21T13:28:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 37
maintainers: ["kg68k"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1b4708efa21b6beec482abc494a7168a2d17392fc52534008ebbc7a6d187307/kg68k/xperiment68k"
---

# Xperiment68k

実験的なコードとかいろいろ。

無保証です。  
十分なテストを行っていないので、不具合があるかもしれません。

## Description

* [ADPCM](https://github.com/kg68k/xperiment68k/blob/HEAD/docs/adpcm.md)
  * [beep_adpcmout](https://github.com/kg68k/xperiment68k/blob/HEAD/docs/adpcm.md#beep_adpcmout) ... システムビープ音を`IOCS _ADPCMOUT`で再生
  * [beep_mpcm](https://github.com/kg68k/xperiment68k/blob/HEAD/docs/adpcm.md#beep_mpcm) ... システムビープ音をMPCMで効果音として再生
  * [beep_zmsc3](https://github.com/kg68k/xperiment68k/blob/HEAD/docs/adpcm.md#beep_zmsc3) ... システムビープ音をZMSC3.Xで効果音として再生
  * [mpcm_echcnt](https://github.com/kg68k/xperiment68k/blob/HEAD/docs/adpcm.md#mpcm_echcnt) ... MPCM.Xの効果音発声数を設定
* [BackGround Process](https://github.com/kg68k/xperiment68k/blob/HEAD/docs/bg.md)
  * [bg1pr2th](https://github.com/kg68k/xperiment68k/blob/HEAD/docs/bg.md#bg1pr2th) ... 2個のスレッドを作成して常駐終了
  * [bgchangeprc](https://github.com/kg68k/xperiment68k/blob/HEAD/docs/bg.md#bgchangeprc) ... 常駐してスレッド切り替え回数を表示
  * [bgexec](https://github.com/kg68k/xperiment68k/blob/HEAD/docs/bg.md#bgexec) ... 指定コマンドの実行指示をbgexecdスレッドに送信
  * [bgexecd](https://github.com/kg68k/xperiment68k/blob/HEAD/docs/bg.md#bgexecd) ...
