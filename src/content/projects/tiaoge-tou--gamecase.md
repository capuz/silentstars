---
repo: "Tiaoge-tou/GameCase"
name: "GameCase"
description: "为移植游戏而生的 iOS 游戏容器"
readmeQualityOk: true
url: "https://github.com/Tiaoge-tou/GameCase"
language: "Swift"
languages: ["Swift", "Objective-C"]
languagePcts: [55, 24]
topics: ["altstore", "game-container", "ios", "livecontainer", "sideload", "sidestore"]
stars: 98
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 28
recentReleases: 10
createdAt: "2026-11-05T06:55:52Z"
lastCommitAt: "2026-11-09T04:33:56Z"
lastReleaseAt: "2026-11-08T07:11:14Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 80
undervaluedScore: 27
maintainers: ["Tiaoge-tou"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bbf8c0f848c32ba1b5422957d4f1a2746bc8b5502bfef2edb5100c7dd0f755e/Tiaoge-tou/GameCase"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/khanhduytran0"]
---

# GameCase

> 导入 IPA 与数据包，打开就玩

GameCase 是一个专为 iOS 移植游戏设计的侧载游戏容器。它基于开源项目 LiveContainer 定制，砍掉通用 App 容器的旁支功能，只保留一件事：把移植游戏装进一个游戏库里——导入、封面、设置、启动、切换，全在库内完成。

游戏在容器进程内全屏直跑，串行单开；玩完一款，从游戏内快捷栏回到游戏库再开下一款，上一个游戏的进程随之关闭，不留后台。免越狱，侧载即用。

## 它做对了什么

**像游戏机一样选游戏**
游戏库效仿 NX2Apple 壳界面：横屏是封面色调背景加卡片轮播，竖屏是封面大图、最近游玩与游玩时长、底部开始胶囊。打开 GameCase 不是面对一列文件，而是站在自己的游戏架前。

**游戏和数据包，分开导入**
移植游戏的 IPA 与 romfs 数据包（romfs.img）各走各的通道：数据包导入时校验大小后写入对应游戏的容器，游戏更新只换 IPA，几个 G 的数据包不用重下。

**设置项，游戏自己说了算**
每款游戏的设置直接来自它自带的启动器档案（dm/launcher.json）：帧率、画面模式、超分、皮肤——游戏有什么，这里就有什么，不多一项不少一项。库内修改与游戏内修改双向同步，下次启动生效。设置页是 NX 式整页：大封面头加分段控件。

**装进去，点开就进游戏**
单装版游戏 IPA 导入后，点封面直接进游戏，不再弹客体启动页；想保留启动页的游戏，在其设置页打开「显示游戏启动页」即可。

**云存档，换设备接着玩**
在设置里选好云文件夹，存档自动同步：GameCase、单装版、NX2Apple 壳与电脑共用同一套云存档格式，在哪边玩都能接上进度。冲突时保留较新的一份，旧的自动备份。

**Mod 与金手指**
每款游戏有自己的 Mod 组：把散装 Mod 放入对应位置即自动接线，启动生效。金手指导入氛围（Atmosphère）格式文件，逐条开关，数据型修改真实生效。

**封面，不用你操心**
优先用 IPA 自带横版图；有官方主视觉的，按游戏 ID 从任天堂商店自动抓取 1920×1080 封面；也可以换成你自己的图，或随时恢复默认。

**容器夹，就是游戏名**
每款游戏的数据容器文件夹以游戏名命名（`Data/Application/<游戏名>/`）。在「文件」App 里手动放数据包、管存档时，一眼就知道哪个夹是哪款游戏。

**快捷栏一键回库，只开一款所以稳**
游戏内顶部吸附一条半藏的玻璃舌，可沿上边拖动、落点记忆；点开是完整快捷栏，一键返回游戏库（带淡出过场）。串行单开不做多任务，全部性能留给正在运行的游戏——对移植游戏来说，这才是正经事。

**内存，给满**…
