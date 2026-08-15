---
repo: "hellodigua/dsh-emoji"
name: "dsh-emoji"
description: "让 AI 回复加入自定义表情，支持Bilibili、小红书、贴吧、知乎等多平台表情包，或自定义表情"
readmeQualityOk: true
url: "https://github.com/hellodigua/dsh-emoji"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [62, 35]
topics: ["deepseek-harness", "dsh", "dsh-plugin"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-08-12T16:16:29Z"
lastCommitAt: "2026-08-15T04:04:32Z"
lastReleaseAt: "2026-08-15T03:36:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 29
maintainers: ["hellodigua"]
openGraphImageUrl: "https://opengraph.githubassets.com/295b9f9445ff20e52dde9ded50345ccaff76de253377eb0d64cc37919eec2591/hellodigua/dsh-emoji"
---

# dsh-emoji

[English](https://github.com/hellodigua/dsh-emoji/blob/HEAD/README.en.md) | 简体中文

为 DeepSeek Harness 的回复加入可切换、自定义的行内表情。

## 效果预览

默认的大肥鱼表情：

切换到贴吧表情包后，也能使用同一套语义协议展示贴吧表情：

上传并切换到 B 站表情包后，也能保留熟悉的社区表达风格：

同一套语义协议也可用于小红书、抖音、微博等自定义表情包。

## 安装

使用 DSH CLI 把插件加入 Web Profile，然后重启 Web Host：

```sh
dsh plugin --profile web add dsh-emoji
```

如需固定当前版本，使用 `dsh-emoji@0.2.2-beta.1`。普通 `npm install dsh-emoji` 只会把包加入当前 Node.js 项目，不会启用 DSH 插件。

## 工作方式

- AI 想加入情绪或装饰性表情时，内置协议要求它输出 `::happy::` 这类语义标记；插件会在 Host 端将其转换为当前表情包的行内图片，无需额外模型调用。
- 内置和用户上传的表情包共用 40 个稳定语义 key，可随时切换，并支持小、正常、偏大、大四档尺寸。
- 转写只作用于插件 marker 和插件图片，不影响普通正文中的 Unicode emoji、代码、链接、未知标记或其他 Markdown 图片。多张插件表情必须由有效正文分隔，相同表情可以在不同位置重复使用。

## 调整 AI 的表情频率

安装并重启 Web Host 后，打开「设置 → 插件 → 表情（Whale Emoji）」：

- `关闭`：不使用表情。
- `智能`：仅在表情确实有助于表达时自然使用，每回合最多 3 张，默认选项。
- `高频`：更积极地考虑使用，但不强制每次出现，也不追求多张；每回合最多 4 张。

还可以选择表情包、调整显示尺寸，或填写“附加提示词”控制表情的选择、语气和使用场景。保存后从下一次回复生效，无需重启；是否实际使用表情仍由模型决定。

## 上传自己的表情包

在同一张设置卡片中点击“上传 ZIP”。上传成功后选择新表情包并保存，下一次模型调用立即使用，无需重启。自定义包复用内置的 40 个稳定语义 key，因此 AI 仍输出 `::happy::` 等 marker，只替换最终图片，不需要重新猜测每套素材的含义。

ZIP 可以直接包含下列文件，也可以再包一层同名目录：

```text
my-whale.zip
├── pack.json
└── images/
    ├── happy.png
    ├── sad.png
    ├──…
