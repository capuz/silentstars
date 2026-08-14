---
repo: "Sisyphbaous-DT-Project/astrbot_plugin_AstrNa"
name: "astrbot_plugin_AstrNa"
description: "AstrNa是一款AstrBot优化插件"
readmeQualityOk: true
url: "https://github.com/Sisyphbaous-DT-Project/astrbot_plugin_AstrNa"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 59
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-23T10:15:26Z"
lastCommitAt: "2026-08-14T05:14:18Z"
lastReleaseAt: "2026-06-27T20:58:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 36
maintainers: ["Sisyphbaous-DT-Project", "xunxiing", "AlanBacker"]
openGraphImageUrl: "https://opengraph.githubassets.com/562f6710b35ac846f3debe7084f4c0b2fb4b9368853ca4bbeef26aa2f7c3391e/Sisyphbaous-DT-Project/astrbot_plugin_AstrNa"
---

# AstrNa

AstrNa 是一款面向 AstrBot 的优化插件，目标是在不修改 AstrBot Core 的前提下，通过可独立开关的运行时补丁，改善上下文、发送链路、身份元数据、工具调用和部分模型兼容问题。

> 💌 售后：`777879783`
> 有问题请加，清漪也会蹦出来一起捣鼓。

🎉 AstrNa 当前正式版：`1.5.5`

当前已测试兼容 AstrBot 版本：`4.27.2 + 4.27.3`

- 仓库地址：[Sisyphbaous-DT-Project/astrbot_plugin_AstrNa](https://github.com/Sisyphbaous-DT-Project/astrbot_plugin_AstrNa)
- 作者主页：[Sisyphbaous-DT-Project](https://github.com/Sisyphbaous-DT-Project)
- 许可证：[MIT License](https://github.com/Sisyphbaous-DT-Project/astrbot_plugin_AstrNa/blob/HEAD/LICENSE)
- 更新日志：[CHANGELOG.md](https://github.com/Sisyphbaous-DT-Project/astrbot_plugin_AstrNa/blob/HEAD/CHANGELOG.md)

## 适合谁

如果你的 AstrBot 正在使用 QQ / NapCat / aiocqhttp，并且遇到这些问题，AstrNa 可能会有帮助：

- DeepSeek V4 或代理模型偶发 400。
- 群聊里模型分不清用户身份、群昵称、真实昵称、群身份。
- Bot 长回复被合并转发或分段插件处理后，后续上下文里看不到自己刚写过的完整内容。
- 历史上下文里残留旧图片 base64，导致上下文轮次不多但 token 仍然暴涨。
- 主动回复或第三方插件自建 LLM 请求时，当前引用图片没有进入多模态模型。
- AstrBot 群聊上下文感知注入太长，希望先用小模型筛选相关消息，再给主模型看。
- AstrBot 或 OutputPro 生成的合并转发太大，QQ / NapCat 发送失败。
- 图片转述没有结合用户当前问题和引用文本。
- 模型误用 `send_message_to_user`，导致发送前插件无法命中。
- 拟人 Bot 偶尔被提示词注入或模型失控影响，突然输出一大段不符合聊天节奏的长文。
- 希望 AstrBot 每天自动清理临时缓存，但不动日志，并且尽量避开正在聊天或调用模型的时候。
- 希望 AstrBot 自带指令可以按需只开放几个，而不是被“禁用自带指令”总开关一刀切。
- 希望 Bot…
