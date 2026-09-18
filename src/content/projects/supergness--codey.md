---
repo: "SuperGness/codey"
name: "codey"
description: "一个codex增强工具"
readmeQualityOk: true
url: "https://github.com/SuperGness/codey"
language: "Rust"
languages: ["Rust"]
languagePcts: [69]
stars: 349
forks: 31
openIssues: 2
closedIssues: 19
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-07-20T07:54:02Z"
lastCommitAt: "2026-09-18T08:26:17Z"
lastReleaseAt: "2026-07-24T03:05:03Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 29
maintainers: ["SuperGness", "fraternity-z", "2725238326"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2cbbedbc28f9a4ea837390f8be48f06112cde3a78222161be073916198cc081/SuperGness/codey"
---

# Codey

Codey 是 Codex 桌面客户端的增强启动器。它会启动 Codex，并在 Codex 页面内提供统一控制台，用于管理模型线路、任务辅助能力、通知、诊断和更新。

## 主要功能

- 线路与模型：统一管理官方账号和第三方服务，支持多线路启停与启用优先排序、上游请求头覆盖、线路级上游代理（可指定出口地区）、模型同步、默认模型、任务内切换、Fast 选项、第三方模型上下文与思考强度声明、会话错误重试次数，以及不写入配置的线路 URL 与邮箱脱敏显示。
- 请求日志：查看请求耗时、Token 用量、缓存、请求体形态、请求头与响应头和错误信息，模型列显示发往上游的模型，上游回报了不同的实际模型时在下方补充，支持按线路、官方账号等条件筛选、统计、页码跳转与历史清理。
- 官方账号：在线路设置中添加多个 ChatGPT 账号（浏览器登录或导入 Codex 现有登录），新账号按添加顺序自动生成线路名和短名称，每个账号各占一条官方线路并分别显示套餐、剩余额度和重置时间，可在同一段对话里使用不同账号的模型；设为默认只决定 Codex 客户端以哪个账号登录、页头显示哪个账号的额度，线路名、短名称和上游代理按账号分别设置。账号凭据被官方撤销时卡片会标记失效、收起切换默认入口，所属线路同时下线，之后不再向官方请求该账号的额度或令牌，重新添加该账号即可恢复。结合请求记录可分别估算各账号的周限与费用。
- 会话管理：显示任务时间与运行状态，支持会话导入、导出、指定轮次删除和备份恢复；整段删除沿用 Codex 官方的永久删除入口。
- Codey 插件：导入可信本地插件，独立管理启停、升级和卸载，通过自动生成的表单填写配置；各插件单独保存数据与日志，卸载时可选择保留。
- Codex 插件与页面增强：改善插件市场、本地插件展示和常用会话操作，支持精选插件离线恢复。
- 提示词优化：一键优化输入框中的提示词，结果可继续编辑。
- 子代理协作：提供快速定位、深度检索、视觉分析、代码实施和视觉实施五类角色，可分别设置模型与思考深度。
- 杂事模型：为会话命名、Git 提交消息、环境建议和自动复核回退指定统一的模型；留空时沿用默认选择，自动复核仍优先使用声明支持它的线路。
- 文件工具：可选启用内置 FastCtx，支持文件读取、搜索、查找和批量替换。
- 消息通知：通过飞书、企业微信、Telegram、ntfy 或微信 ClawBot 接收任务完成、失败和等待介入通知。
- 诊断与保护：提供健康检查、Codex 配置检查与修复、断线恢复、Windows 主进程注入修复与恢复、诊断日志和崩溃报告清理，以及宠物精简与渲染诊断选项。
- 更新管理：正常启动后在后台检查 Codey 更新，启动失败时仍可提示更新，也可在控制台手动检查。

## 使用方式

打开 Codey…
