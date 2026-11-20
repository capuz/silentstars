---
repo: "blacksunshy/coopanion-fatfish"
name: "coopanion-fatfish"
description: "Coopanion/Cortico voice extension: speaks the pet's replies aloud with a chosen Edge TTS voice"
readmeQualityOk: true
url: "https://github.com/blacksunshy/coopanion-fatfish"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 29
forks: 5
openIssues: 2
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-14T14:55:09Z"
lastCommitAt: "2026-11-20T11:58:12Z"
lastReleaseAt: "2026-10-19T06:52:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 46
maintainers: ["blacksunshy", "ink1453", "hansei996"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1c0b24752adc1b2e09ccf9f193bffaf089dda980414216a43cf15b2ee02aaf4/blacksunshy/coopanion-fatfish"
---

# cortico-world-fatfish · 大肥鱼功能复合包

Coopanion 桌宠的 Cortico World 扩展。一句话：**和 DeepSeek Harness（DSH）对话，让它帮你干活、写代码；宠物回复你的时候，用内置语音包读出声。**

> ⚠️ **安全提醒（DSH 侧）**：如果你同时在用 DSH 侧的 `coopanion-connector-dsh` Host 插件，请把它升到 **v0.2.12**（仅 GitHub 分发：`https://github.com/blacksunshy/coopanion-connector-dsh`）。低于 0.2.9 的旧版存在 CSWSH 安全漏洞——任意网页可构造 WS 升级请求劫持桌宠与 DSH 之间的桥接（漏洞详情见 connector 仓库 issue #6）。**fatfish 自己不受这个漏洞影响，但桥接两端要一起升。** 会话选择器与「解除固定」需要 **≥ 0.2.11**，「新建会话」需要 **≥ 0.2.12**。

- **让 DSH 干活**：把桌宠接上 DeepSeek Harness（DSH）——它听见你说话就替你转交给 DSH，DSH 干的活、写的代码、调的工具、等的批准，都变成消息回到对话里；没有回执的台词才需要宠物递话，重启后不会重复转交。
- **回复有声音**：内置 19 个 Edge TTS 音色（晓晓、云希、东北晓北、陕西晓妮、粤语曉曼、台湾曉臻、Aria、Jenny 等），另有一排「语音包」预设——温柔女声、活泼少女、播音腔、东北/陕西口音、粤语、台湾腔、English 各一档，选一个就把音色、语速、音高、音量整套换好；也可以选「自定义」自己调音色、语速、音高、音量。宠物回复你的同时读出声，桌宠提问时连选项一起读。朗读支持 Windows 与 macOS（Linux 合成可用但暂无播放通道）。
- **上下文将满自动交接（0.6.20 起，需 connector ≥ 0.2.18；0.6.28 起只信可信数字）**：DSH 在每轮结束上报上下文用量，到 90% 时自动新建会话、钉住并切过去，投递一句交接种子；Host 不报用量时按 400 轮兜底，每个会话最多交接一次。0.6.28 起 Host 改读 DSH 自己的 `contextPressure`，且 `used > size` 这类不可能的占用一律不信——代理模型把历史折叠在上游时，原始 transcript 会比窗口还长（实测 1.36M / 1M 窗口、实际 12.5%），按它交接会把刚开的会话切走。
- **「只当嘴」模式（0.6.20 起）**：另一个 world 注入 `globalThis.__cooPetSayRaw(text)` 后，批准 / 回答 / 出错 /…
