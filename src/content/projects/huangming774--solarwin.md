---
repo: "huangming774/SolarWin"
name: "SolarWin"
description: "基于winui3的第三方sn客户端"
readmeQualityOk: true
url: "https://github.com/huangming774/SolarWin"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 8
forks: 0
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-19T15:15:14Z"
lastCommitAt: "2026-09-13T08:30:30Z"
lastReleaseAt: "2026-08-09T09:29:54Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 60
undervaluedScore: 18
maintainers: ["huangming774"]
openGraphImageUrl: "https://opengraph.githubassets.com/851ec4ac7cd668ee7a99104fd5b42a726d1bb2190a8d233c16e5747cdffdf12c/huangming774/SolarWin"
---

# SolarWin

**Solar Network** 的 Windows 桌面客户端。基于 WinUI 3 与 Windows App SDK，对接官方 API 网关，提供登录、聊天（含 MLS 端到端加密与实时通话）、帖子、探索、寻思、AI、天气、网盘、通知、钱包、恒星计划、瑞幸咖啡点餐与个人中心等能力。

| 项 | 说明 |
|----|------|
| 当前版本 | **1.1.9** |
| 产品显示名 | Solar Network |
| 解决方案 | `SolarWin.slnx` |
| 目标平台 | Windows 10 1809+（最低 10.0.17763）；MLS 加密仅 x64 |
| API | `https://api.solian.app` |
| User-Agent | `SolarWin/1.1` |

---

## 版本 1.1.9 亮点

- **聊天 MLS 端到端加密（RFC 9420）**：Rust OpenMLS 原生桥接，密码套件 `MLS_128_DHKEMX25519_AES128GCM_SHA256_Ed25519`；每账号独立 SQLCipher 加密数据库，密钥由 Windows DPAPI 保护；明文永不进入 HTTP 请求体，解密失败不回退明文
- **瑞幸咖啡点餐**：集成 MCP 协议驱动瑞幸 API，菜单浏览、规格定制、加购下单全流程；Token 安全存储于 PasswordVault
- **实时通话**：基于 LiveKit 的语音通话与屏幕共享（GPU 捕获），来电接听 / 拒绝
- **聊天数据中心**：活动热力图、词云、消息趋势、成员贡献排行
- **聊天本地持久化**：SQLite WAL 写入泵，聊天记录离线可用
- **GPU 图片渲染**：`GpuImage` / `FastWin2DImage` 硬件加速解码缩略图，大图列表不再掉帧
- **视频预览**：C++ `VideoThumbnailer` 提取关键帧 + `VideoMediaCache` 缓存
- **AI 对话页**：聊天式 AI 交互界面
- **GitHub Actions CI/CD**：并行构建 + 测试 → 便携 ZIP / MSIX（签名）→ SHA256 → Release，tag push 自动发版

完整变更见 [CHANGELOG.md](https://github.com/huangming774/SolarWin/blob/HEAD/CHANGELOG.md)。

---

## 功能一览

| 模块 | 能力 |
|------|------|
| 登录 | Padlock 挑战应答、多因素、设备码 / 扫码、WebAuthn、验证码、注册 / 找回、社交登录…
