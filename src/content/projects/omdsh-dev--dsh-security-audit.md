---
repo: "omdsh-dev/dsh-security-audit"
name: "dsh-security-audit"
description: "DSH 本机安全审计插件：配置/插件来源/会话/网络暴露面，只读脱敏风险报告"
readmeQualityOk: true
url: "https://github.com/omdsh-dev/dsh-security-audit"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [60, 40]
topics: ["dsh-plugin", "audit", "dsh", "secret-scanning", "security"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-10T07:02:52Z"
lastCommitAt: "2026-08-18T03:57:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 14
maintainers: ["whiteicey"]
openGraphImageUrl: "https://opengraph.githubassets.com/c68dbb8b66b7306d4f65bdf1d46a070a17578a2edf29872ae5ad47fde6567199/omdsh-dev/dsh-security-audit"
---

# dsh-security-audit

[English](https://github.com/omdsh-dev/dsh-security-audit/blob/HEAD/README.en.md)

DSH 本机安全审计插件 —— 防御性、只读的安全审计：配置、凭据存储元数据、已安装插件来源、关键路径权限、会话文件结构与网络暴露面。输出脱敏、可复现、可定位的风险报告。

仓库：[https://github.com/omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit)（public）

## 动机

DSH 本地环境承载 API Key、token、会话内容和插件加载边界，误配置（服务监听公网、凭据文件权限过宽、插件来源不可信、会话文件结构异常）会造成真实风险。现有工具没有这个视角：

1. **`plugin-check` 只做结构/合规检查**——不评估凭据暴露面、危险能力和路径逃逸
2. **`session-health` 只做健康诊断**——不涉及来源可信度与安全风险裁定
3. **手工排查不可复现**——凭据位置、权限、监听端口、插件来源分散在多处，逐项人工检查极易遗漏且无法留档

本插件以只读方式审计本机 DSH 环境并输出风险报告：**不自动修复、不连接远程、不执行被审计插件、不把"没读到"当作"安全"**。

## 安全模型（审计器自身的边界）

- **只读**：绝不修改/删除任何文件，绝不执行被审计插件的代码，绝不主动连接远程目标
- **秘密脱敏**：疑似秘密只返回类型 / 长度 / 进程内随机 HMAC fingerprint / 路径 / 行号，**完整值永不出现在 canonical 输出**（设计级保证，非截断）
- **路径围栏**：所有路径经 lstat → realpath → containment 检查；`root` 固定为进程启动时解析的 `$DSH_HOME`（或管理员声明的 allowedRoot），模型参数不能扩大读取范围
- **诚实判定**：finding / pass / `skipped` / `error` 四态；`skipped` 与 `error` 不计为 pass（coverage 降为 `incomplete`）；`capability finding` 只提示人工确认、不裁定恶意
- **预算**：
  - 文件 ≤ 200、插件 ≤ 200、会话 ≤ 1,000、findings ≤ 1,000
  - 源码单文件 ≤ 1 MiB（累计 ≤ 64 MiB）；canonical 输出 ≤ 2 MiB
  - 单 action 10s / report 30s（deadline…
