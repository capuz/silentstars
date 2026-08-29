---
repo: "Xposed-Modules-Repo/io.mo.xiaoaiplug"
name: "io.mo.xiaoaiplug"
description: "XiaoAi-plug"
readmeQualityOk: true
url: "https://github.com/Xposed-Modules-Repo/io.mo.xiaoaiplug"
homepage: "https://github.com/lm060719/XiaoAi-plug"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 6
createdAt: "2026-07-21T00:41:45Z"
lastCommitAt: "2026-08-29T17:26:33Z"
lastReleaseAt: "2026-08-23T06:52:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 55
maintainers: ["lm060719"]
openGraphImageUrl: "https://opengraph.githubassets.com/04b97265072ec9873185d8ceab49d487efa56f427a200037d8ba459fefa048ec/Xposed-Modules-Repo/io.mo.xiaoaiplug"
---

# XiaoAi Plug

**自定义替换超级小爱模型，越权完成更多任务。**

一个 LSPosed / Xposed 模块，Hook `com.miui.voiceassist`。它做两件事：

1. **换模型** — 把超级小爱背后的大模型替换成你自己配置的（OpenAI 兼容 / Anthropic / xAI / 硅基流动，任意 API Key）。你问、你的模型答，答案原路送回小爱的语音和卡片里。
2. **提权** — 原生小爱受限于系统权限，很多事只能「跳到设置页让你自己看」「回一句不支持」。模块把 root 和无障碍能力打包成工具交给模型，它能真正读设备、改设置、启动应用、代你发微信消息。

换模型解决「答得好不好」，提权解决「能不能真的做到」。两件事合起来，超级小爱从一个受限的语音壳子变成一个能落地执行的设备助手。

---

## 一、换模型

超级小爱的回答能力由小米的云端模型决定，不可选、不可调。模块把这条链路截断，改由你的模型作答。

**接管是完整替换，不是叠加。** 小爱的输出有四条互相独立的路：

- TTS 语音播报
- 对话结果卡片
- `SpeakContentManager` 的权威文本（卡片上喇叭按钮重播读的是它，不是卡片文字）
- App 内历史对话的 SQLite 落库

只改其中一条，就会出现「声音和字对不上」，或者回头翻历史记录还是小爱的原话。四条全部覆盖。

**播报走小爱自己的 TTS。** 复用 `ToastStreamPlayer`，音色、打断、音频焦点全是原生行为，听感和平时一致。不用小爱的主 TTS 入口是有原因的：模型答案有几秒延迟，那时会话往往已经拆了，主入口内部有引擎判空守卫，为 null 时静默丢弃、一声不吭；`ToastStreamPlayer` 设计上就是给「会话已结束、用户回头点重播」用的，正好合适。

**服务商可扩展。** 只有报文协议（OpenAI / Anthropic 两种）需要写代码，新增一家 OpenAI 兼容服务商只是在 `AiProvider` 里加一行默认地址和默认模型，界面和客户端都不用动。

**接管时机可控。** 不是所有话都拦。默认接管两类：小爱会跳设置页打发掉的查看类问题、小爱答不上来会跳全局搜索的兜底。放行词（如「打开」）可自定义，正常的「打开微信」「导航去公司」照旧交给小爱。也可以全开或全关。

---

## 二、提权

原生小爱能做的事被系统权限框死了。模块把设备能力封装成工具表交给模型，模型自己决定调哪个、怎么调。

### 能读

| 工具 | 作用 |
| --- | --- |
| `device_status` | 电量与充电状态、剩余存储、内存、运行时长、机型、系统版本 |
| `wifi_info` | 当前 WiFi…
