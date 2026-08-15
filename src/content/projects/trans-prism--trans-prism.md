---
repo: "Trans-Prism/Trans-Prism"
name: "Trans-Prism"
description: "专为跨性别群体（Transgender）打造的极简、安全、双擎驱动的实用工具箱。"
readmeQualityOk: true
url: "https://github.com/Trans-Prism/Trans-Prism"
homepage: "https://transprism.chengxi.moe"
language: "Dart"
languages: ["Dart"]
languagePcts: [95]
topics: ["flutter", "ftm", "mtf", "offline-first", "transgender", "wiki"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-21T20:48:38Z"
lastCommitAt: "2026-08-15T04:03:33Z"
lastReleaseAt: "2026-07-11T09:28:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 55
maintainers: ["daanser"]
openGraphImageUrl: "https://opengraph.githubassets.com/697063693077da04e9999bf88779d0b4efce3de378eea5d86d82a02317e3a07a/Trans-Prism/Trans-Prism"
discussionCount: 0
---

# Trans Prism (TP) 🌈

**专为跨性别群体打造的极简、安全、双擎驱动的实用工具箱**

  <p>
  </p>
  <p>
  </p>

</div>

---

## 📋 使用须知

**首次使用前请务必阅读：** [SECURITY.md](https://github.com/Trans-Prism/Trans-Prism/blob/HEAD/SECURITY.md) — 了解网络功能说明、血药浓度模拟的正确使用方式及免责声明。

---

## 📖 关于

**Trans Prism（稳态光盒）** 是一款致力于为跨性别群体提供安全、客观、无审查的日常辅助工具的开源 App。采用**在线/离线双擎架构**与**纯本地物理持久化**策略，核心知识库和极其隐私的生理数据不依赖任何第三方服务器。

> Created via Deepseek, GLM, Gemini, Claude, Mimo Vibe Coding（按使用率排序）

---

## ✨ 核心功能

### 🧭 首次启动向导 (Onboarding Wizard)
首次打开 App 时以「稳态光盒向导」引导新用户完成初始化：欢迎页 → 权限说明（声明公益 / 无广告 / 离线优先 / 不上传，再触发系统级通知权限申请，可拒绝继续）→ 性别认同 → 明暗模式（☀️ 折射白昼 / 🌙 吸收余光 / 🌓 随光流转）→ 主题风格（简约 / 毛玻璃）→ 称呼前缀与昵称 → 免责协议 → 「少女祈祷中…」装饰过渡 → 一切就绪。任意步骤点「跳过」即套用默认值（MtF + 跟随系统 + 简约风 + 无前缀 + 伙伴）并完成。老用户（已通过旧免责流程且已存性别认同）自动迁移、不再被打扰。所有偏好实时预览并写入 [`SharedPreferences`](https://github.com/Trans-Prism/Trans-Prism/blob/HEAD/lib/storage/gender_identity_repository.dart:6)，入口由 [`main.dart`](https://github.com/Trans-Prism/Trans-Prism/blob/HEAD/lib/main.dart:704) 的 `onboarding_completed` 标志位单分支判定。

### 💊 药物存量仪表盘 & 智能调度提醒
追踪 HRT 药物库存与安全续航天数。**Chronos 智能调度引擎**支持小时/天/周/月四种给药周期——从口服（12h）、外用凝胶到针剂（7天）、GnRHa（28天/84天）全覆盖。基于绝对时间戳的 OS 级通知，点击"已服药"自动扣减库存、推算下次给药时间并重设系统闹钟。

### 📈 药代动力学 (PK) 模拟器…
