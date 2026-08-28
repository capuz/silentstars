---
repo: "Admenri/lime"
name: "lime"
description: "Lime RPG Player"
readmeQualityOk: true
url: "https://github.com/Admenri/lime"
homepage: "https://admenri.com"
language: "C++"
languages: ["C++", "C"]
languagePcts: [50, 43]
topics: ["raylib", "rgss", "ruby", "rpgmaker", "rpgmakervx", "rpgmakervxace", "rpgmakerxp"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-07-30T02:54:36Z"
lastCommitAt: "2026-08-28T14:32:05Z"
lastReleaseAt: "2026-08-26T14:54:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 54
maintainers: ["Admenri"]
openGraphImageUrl: "https://opengraph.githubassets.com/2eaa010a2598b8a6cc982814d7ee9a7cf927b2496b4e63ff4d15cf8e4f569a56/Admenri/lime"
---

# lime

**轻量级 RGSS 运行时** · Lightweight RGSS Runtime

使用 **C++20** 编写、以 **CRuby（Ruby 1.9.3）** 为脚本引擎的 RPG Maker 游戏运行时。
兼容 **RGSS1 / RGSS2 / RGSS3**（RPG Maker XP / VX / VX Ace）脚本与数据结构，
开箱即用地运行现成的 RPG Maker 工程。

</div>

---

## ✨ 特性

- **完整 RGSS 运行时**：实现 `Graphics`、`Input`、`Audio`、`Bitmap`、`Sprite`、`Viewport`、`Plane`、`Window` / `WindowXP`、`Tilemap` / `TilemapXP`、`Font`、`Table`、`Color`、`Rect`、`Tone`、`Palette`、`Effect` 等核心 API。
- **三大版本兼容**：根据脚本文件（`.rxdata` / `.rvdata` / `.rvdata2`）自动识别 RGSS1/2/3，并加载对应版本的 `RPG` 数据结构。
- **CRuby 脚本引擎**：内嵌官方 **Ruby 1.9.3** 解释器（`3rdparty/ruby-193`），原生支持 Marshal 序列化，直接运行解密的 `Data/Scripts.rvdata*` 脚本。
- **Marshal 互通**：CRuby 原生 `load_data` / `save_data` / `_dump` / `_load`，与官方 RGSS 的 Marshal 数据格式完全互通。
- **动态 Unicode 字体系统**：基于 **FreeType + HarfBuzz** 的按需字形图集与字体回退链，支持 CJK / 日文 / 韩文 / 阿拉伯文（RTL）/ 彩色 Emoji，以及粗体、斜体、描边、阴影。
- **视口与绘制系统**：Z 排序绘制列表、多级视口、色调 / 颜色 / 透明度滤镜、闪烁与转场特效。
- **音效系统**：BGM / BGS / ME / SE 播放，支持音量、音高、淡入淡出与定位，并通过 **TinySoundFont** 原生支持 **MIDI（SoundFont）** 播放。
- **虚拟文件系统**：基于 **PhysicsFS** 的多路径挂载、读取 / 写入分离，支持 Windows **RTP**（Runtime Package）自动定位（RTP / RTP1 / RTP2 / RTP3）。
- **硬件加速渲染**：基于 **raylib** 的 OpenGL 渲染管线，内置精灵着色器、转场着色器与视口缓存。…
