---
repo: "erma0/js-reverse-skill"
name: "js-reverse-skill"
description: "通用网页端 JS 逆向工程技能：统一通过 ruyipage + RuyiTrace 采集运行时日志，基于日志证据逆向还原加密参数。融合黑盒补环境（JS 层 NativeProtect）与纯算还原双路径，支持 Node.js / Python 双语言纯协议交付。已在抖音 / 小红书 / 快手 / 同花顺 / 猿人学 / 易盾等真实案例场景中得到实践。（如果最新版效果差可以使用release2.2重构前的版本）"
readmeQualityOk: true
url: "https://github.com/erma0/js-reverse-skill"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [78, 22]
stars: 34
forks: 7
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-07-10T17:35:50Z"
lastCommitAt: "2026-08-24T04:22:01Z"
lastReleaseAt: "2026-08-10T11:40:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 32
maintainers: ["erma0"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9217dcb12a9025098d964176f893c44c040c9b433ba9c9e9b3d60fe6d733b6c/erma0/js-reverse-skill"
---

# js-reverse-skill

网页端 JavaScript 请求参数逆向与纯协议还原。分析网页签名、Cookie/Token、设备指纹、混淆、WASM、JSVMP、验证码 verify 或 Session/TLS 请求链时触发，覆盖桌面网页、移动 H5 与内置浏览器，交付 Node.js/Python 实现。不用于 App、小程序、桌面程序及 Native 逆向；JSVMP 默认黑盒执行或最小环境复现。

## 来源

本 Skill 采用以下项目的流程、工具和案例，并按本仓库的证据门禁与交付规则组织。本仓库自身以 MIT 许可发布，但聚合自上游的流程、工具与代码仍受各上游项目自身许可证约束：

| 来源 | 贡献 | 许可证 |
|------|------|--------|
| [hello_js_reverse_skill](https://github.com/WhiteNightShadow/hello_js_reverse_skill) | 流程骨架 + 案例库 | 未声明（作者保留所有权利） |
| [xbsReverseSkill](https://github.com/lwjjike/xbsReverseSkill) | 补环境流程 + 工具链 + web-verify-patcher 验证码识别/求解模块（ddddocr/坐标/轨迹脚本 + 题型分类器） | MIT |
| [ruyipage](https://github.com/LoseNine/ruyipage) | Firefox WebDriver BiDi 取证 | BSD-3-Clause（上游 README 附加"仅限合法合规非盈利个人研究、商用需授权"限制） |
| [RuyiTrace](https://github.com/LoseNine/Firefox-FingerPrint-Analyzer) | NDJSON trace 内核 | 未声明（上游 README 声明其 Firefox 内核为 MPL-2.0） |

> ⚠️ 合规提示：hello_js_reverse_skill 与 RuyiTrace 两个上游项目未提供 LICENSE 文件，按默认版权法其作者保留所有权利；本仓库引用的上游流程/代码用于个人研究与技术交流，**商业分发或二次发布前需逐一与上游作者确认授权**。

## 能力边界

**触发**：
- 网页签名、Token、Cookie、指纹或设备参数生成逻辑
- JSVMP 黑盒执行或最小环境复现、WASM 加载、混淆还原、TLS 指纹模拟
- 验证码封装层的 verify 接口参数、轨迹加密和 challenge 绑定

**不触发**：App 内 JS、小程序容器、Windows…
