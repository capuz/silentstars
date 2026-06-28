---
repo: "kuangre123/codex-switch"
name: "codex-switch"
description: "Codex Switch 是一个 macOS 工具，一键配置 Codex 的自定义 API，同时保留官方 OpenAI 登录。保存后 Codex 的模型选择器里只会出现你选的那个 provider 的模型。也支持 Claude Code 的官方 / 自定义 API 切换。Codex Switch is a lightweight helper for configuring multiple coding-agent API routes. For Codex, it keeps Official OpenAI and a custom API provider configured in parallel, registers the custom model in Codex's mod"
url: "https://github.com/kuangre123/codex-switch"
language: "Python"
languages: ["Python"]
languagePcts: [75]
stars: 43
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-06-14T10:46:33Z"
lastCommitAt: "2026-06-28T02:00:17Z"
lastReleaseAt: "2026-06-24T13:04:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 42
maintainers: ["kuangre123"]
openGraphImageUrl: "https://opengraph.githubassets.com/925476cabb9eaa90fd2595075ba2d7664973279477550e5624d2a994297a3ebb/kuangre123/codex-switch"
---

# Codex Switch

> 一个小巧的 macOS 工具：一键把 Codex 在「官方 OpenAI」和「你自己的自定义 / 第三方 API」之间切换，**切换后对话记录始终都在**。
>
> A tiny macOS app to switch Codex between Official OpenAI and your own custom / third‑party API — **without ever losing your conversations**.

Codex Switch 把原本要手改 `~/.codex/auth.json` 和 `~/.codex/config.toml` 的事变成一次点击：官方 OpenAI 和你的自定义 provider 同时保留在配置里，切换只改「默认走哪一路」，**不碰任何对话数据**。它内置了国内主流大模型的快速预设，并能在本地启动一个适配器，把只支持 Chat Completions 的接口自动桥接成 Codex 需要的 Responses 协议。

It turns hand‑editing `~/.codex/auth.json` and `config.toml` into one save: Official OpenAI and your custom provider both stay configured, switching only changes the default route, and your saved conversations are never touched. It ships quick presets for popular Chinese LLM providers and can run a local adapter that bridges Chat‑Completions‑only APIs to the Responses protocol Codex speaks.

> ⚠️ 不要在对话里让 Codex 自己改接入方式，容易改坏。切换请用本工具，稳定得多。
> Don't ask Codex itself to edit its provider config in chat — use this app to switch, it's far more reliable.

</p>

## 下载 / Download

从 [GitHub Releases](https://github.com/kuangre123/codex-switch/releases/latest) 下载，**推荐 DMG**：

```text
Codex-Switch-vX.Y.Z.dmg        # 推荐：已签名 + 公证，双击即开…
