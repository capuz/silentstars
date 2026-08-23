---
repo: "LIghtJUNction/MagicNet"
name: "MagicNet"
description: "Consciously set all groups to block"
readmeQualityOk: true
url: "https://github.com/LIghtJUNction/MagicNet"
homepage: "https://github.com/KernelSU-Modules-Repo/MagicNet"
language: "Shell"
languages: ["Shell", "Rust"]
languagePcts: [40, 30]
stars: 155
forks: 4
openIssues: 0
closedIssues: 59
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2025-06-08T16:33:48Z"
lastCommitAt: "2026-08-23T04:08:04Z"
lastReleaseAt: "2026-07-13T04:38:11Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 50
maintainers: ["LIghtJUNction", "github-actions[bot]", "TimShitPig"]
openGraphImageUrl: "https://opengraph.githubassets.com/c74cd807dc420a241d4d507dc4b21d425a19a360cf50c112744e7018711f36d7/LIghtJUNction/MagicNet"
---

</p>

<h1 align="center">MagicNet</h1>

  Android root 设备上的 sing-box TUN 网络工作台
</p>

MagicNet 用 root 管理的 `sing-box` `magicnet0` TUN 接管、分流和代理 Android 设备流量。它不调用应用侧 `VpnService.establish()`，不会占用系统 VPN slot；当前主线只有 TUN，不包含 TProxy 或 eBPF 透明路径。

## 支持开源开发

MagicNet 的网络接管、分流和代理功能不依赖任何 LLM API。项目开发中的自动化测试、MCP 调试与 AI 协作会持续消耗模型额度；如果你也需要 OpenAI 兼容的多模型接口，可以使用作者维护的 [LMM API Gateway](https://api.lmm.best)。通过 LMM 购买 API 额度会帮助承担这些开发成本；有价值的 Issue、PR 和测试反馈也可能获得 API 额度奖励。

## 安装与首次成功运行

1. 从 [Releases](https://github.com/LIghtJUNction/MagicNet/releases) 下载模块 ZIP，在 Magisk、KernelSU 或 APatch 的模块页面安装并重启。
2. 在系统设置中关闭“私人 DNS / 私密 DNS / Private DNS”，不要保留为“自动”。
3. 打开 root 管理器提供的模块 WebUI，在“订阅”中保存合法的 URL，或导入本地 Clash YAML、base64、分享链接、JSON 或文本订阅。
4. 等待“保存并启用”完成，在 WebUI 健康页确认 sing-box 已运行且 `magicnet0` 已建立。

也可以在 root shell 中完成 URL 配置和验收：

```bash
su -c '/data/adb/modules/MagicNet/cli setup "https://example.com/subscription"'
su -c /data/adb/modules/MagicNet/cli health
su -c /data/adb/modules/MagicNet/cli transparent status
```

成功状态应同时满足：`cli health` 没有核心/TUN 阻塞项，`cli transparent status` 显示 TUN 路径，系统存在 `magicnet0`。MagicNet 不提供节点、订阅或外部出口，请只使用你有权使用且符合当地法律与服务条款的资源。

## 用户能做什么

- URL…
