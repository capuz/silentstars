---
repo: "weiransoft/TraeMultiAgentSkill"
name: "TraeMultiAgentSkill"
description: "基于任务类型动态调度到合适的智能体角色（架构师、产品经理、测试专家、独立开发者）。支持多智能体协作、共识机制和完整项目生命周期管理。"
url: "https://github.com/weiransoft/TraeMultiAgentSkill"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 33
forks: 11
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-03-04T06:35:38Z"
lastCommitAt: "2026-07-01T07:04:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 33
maintainers: ["weiransoft"]
openGraphImageUrl: "https://opengraph.githubassets.com/76474b5e6dc3543ac821f937a781d8cccdca0c59566887911baeb08565c87b6b/weiransoft/TraeMultiAgentSkill"
---

# Trae Multi-Agent Skill

🎭 基于任务类型动态调度到合适的智能体角色（架构师、产品经理、测试专家、独立开发者、UI 设计师）。支持多智能体协作、共识机制、完整项目生命周期管理、规范驱动开发、代码地图生成、项目理解能力和 UI 设计能力。支持中英文双语。v2.6 新增 Ponytail 决策梯（少写多余代码）、Autonomous 自主迭代模式、Dynamic Workflows 6 大模式、插件热加载，v2.7 新增 UI/UX 巡检分析与视觉回归测试脚本。

## 🎉 2026 年 6 月最新更新 (v2.7)

> 设计原则：标准库优先（Playwright + PIL）、YAGNI、失败安全
> 适用角色：UI 设计师（交付前自检）/ 测试专家（E2E 像素级断言）/ Solo Coder（PR 门禁）

- ✅ **UI/UX 巡检分析 (v2.7)** - 4 大检测维度覆盖前端质量门禁
  - ♿ **可访问性 (A11y)**: WCAG AA 对比度（正常文本 4.5:1 / 大文本 3:1）、img alt、form label、语义化标签、键盘可达
  - 👆 **交互质量**: 按钮最小尺寸（Apple HIG ≥44px）、焦点可见性、加载反馈
  - 📐 **布局与响应式**: 元素重叠、文字截断（text-overflow）、视口溢出
  - ⚠️ **UX 反模式**: 强制注册、破坏性操作无确认、表单无校验
  - 🎯 **关键类**: `UIUXIssue`（dataclass，severity/category/rule/element/message/fix/metric）+ `UIUXAnalyzer`（核心，audit/dump）
  - 🚀 **Playwright 单次综合探针**: 一次 evaluate 取齐所有探针数据，避免多次往返
  - 🛡️ **失败安全**: 任一检查项异常被 try/except 隔离，不影响其他检查
  - 📄 详细章节：[SKILL.md](SKILL.md#uiux-巡检与视觉回归v27-新增--前端质量门禁工具)

- ✅ **视觉回归与显示完整性 (v2.7)** - 像素级 Diff + 显示错误检测
  - 🖼️ **视觉回归**: PIL `ImageChops` 像素级 Diff + 简化 SSIM 区域级 Diff
  - 📊 **数据显示不全检测**: 文本截断、元素溢出视口、图片未加载、骨架屏 >10s、长表格横向滚动
  - 🚨 **显示错误检测**: 红色文字/背景（HSV 检测）、错误关键词、Ant Design / Arco / Element UI 错误 Toast、浏览器原生 dialog
  -…
