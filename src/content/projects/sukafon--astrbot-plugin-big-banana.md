---
repo: "sukafon/astrbot_plugin_big_banana"
name: "astrbot_plugin_big_banana"
description: "绘图插件，支持Gemini规范和高级配置参数。"
readmeQualityOk: true
url: "https://github.com/sukafon/astrbot_plugin_big_banana"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 33
forks: 12
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-11-25T09:57:02Z"
lastCommitAt: "2026-08-08T04:33:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 51
maintainers: ["sukafon", "Yao-lin101", "casama233"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9fb14a2a9ea777a9caa4a38a237f04863fef3ef06ce4442e1cb8f7aa500d8fc/sukafon/astrbot_plugin_big_banana"
---

# 🍌 大香蕉 图片/视频生成插件 🍌

</div>

## 兼容性变更：

V2（`v0.2.x`）以全新的配置结构和生成管线为基线，不保证兼容 V1 配置或运行数据。

版本更新请查看 [changelog.md](https://github.com/sukafon/astrbot_plugin_big_banana/blob/HEAD/changelog.md)。

## 主要特性

- 支持 Gemini、OpenAI Chat、OpenAI Images、OpenAI Responses、MiniMax、SiliconFlow、Agnes 等图片生成接口，并兼容流式响应。
- 集成 Vertex AI Anonymous 逆向提供商，免费无限*[1]的 4K 18MB PNG（无损压缩） 图片生成，开箱即用（需能访问 Google）。
- 支持智谱异步视频接口，可使用 `CogVideoX-Flash` 进行文生视频和单图生视频。
- 支持预设查询、图片生成和视频生成 LLM 函数调用工具，并可使用副脑模型优化提示词。
- 支持预设提示词、用户文本占位符、参数别名及预设级参数配置。
- 支持多个 API Key、默认提供商优先级和失败自动降级，也可通过预设或命令临时指定提供商。
- 支持消息图片、引用图片、固定参考图和 QQ 头像，并可自动补充或按需跳过头像。
- 支持多消息收集、后台生成、群组冷却、用户/群组白名单、命令前缀和混合触发模式。
- 支持仅返回图片 URL、本地保存及 R2 图床保存；参考图上传前可自动清理隐私元数据。

\*[1] 免费无限指生成次数不限，服务可用性视服务器实时资源占用情况而定。已知的 Vertex AI Anonymous 支持的图片生成模型有 `gemini-3.1-flash-lite-image`、 `gemini-3.1-flash-image-preview`、 `gemini-3.1-flash-image`、`gemini-3-pro-image`、`gemini-2.5-flash-image`。

## 常用命令

- `<触发词>` 使用预设提示词生成图片
- `bnv <提示词>` 使用 CogVideoX-Flash 生成视频；消息带图时自动作为首帧
- `/lm添加 <触发词> <提示词内容>` 快捷添加预设提示词
- `/lm删除 <触发词>` 快捷删除预设提示词
- `/lm列表` 查看所有预设提示词名称列表
- `/lm提示词 <触发词>` 查看预设的完整提示词
- `/lm白名单添加 <用户/群组> <ID/SID>` 可通过命令增加用户和群组白名单
- `/lm白名单删除 <用户/群组> <ID/SID>` 可通过命令删除用户和群组白名单
- `/lm白名单列表`…
