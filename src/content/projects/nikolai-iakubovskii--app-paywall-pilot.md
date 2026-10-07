---
repo: "Nikolai-Iakubovskii/app-paywall-pilot"
name: "app-paywall-pilot"
description: "A framework for designing App Store-compliant subscription paywalls. 4 layers: AI skill (Claude/GPT/Cursor) + knowledge base (79 sourced benchmarks) + Python LTV tool + docs. 20-concept academic foundation (Kahneman + Layer 2). Flagship domain Paywall; expansion planned to Onboarding, Retention, Growth, Pricing, Reviews."
readmeQualityOk: true
url: "https://github.com/Nikolai-Iakubovskii/app-paywall-pilot"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["adapty", "android", "app-store", "claude-code", "claude-code-skill", "cro", "flutter", "in-app-purchase", "ios", "mobile-monetization"]
stars: 38
forks: 2
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2026-04-15T19:23:33Z"
lastCommitAt: "2026-10-07T10:30:14Z"
lastReleaseAt: "2026-04-17T08:16:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 69
undervaluedScore: 7
maintainers: ["WalkingBad", "nik-iakubovskii"]
openGraphImageUrl: "https://opengraph.githubassets.com/62eea9f11cdcd8f8a81e8a03efc35a5d30215952c510cdbefb4de738fc7ffe93/Nikolai-Iakubovskii/app-paywall-pilot"
---

# 📱 Paywall Pilot Framework

### **A framework for designing App Store-compliant<br>subscription paywalls that convert.**

**[🚀 Get Started](#-how-to-use)** • **[🏗️ Architecture](#%EF%B8%8F-architecture)** • **[🧩 Modules](#-modules)** • **[💡 Use Cases](#-use-this-when)** • **[📊 What You Get](#-what-you-get)** • **[🗺️ Roadmap](https://github.com/Nikolai-Iakubovskii/app-paywall-pilot/blob/HEAD/ROADMAP.md)** • **[🤝 Contributing](#contributing)**

---

## 🏗️ Architecture

Paywall Pilot is **not just a Claude Code skill** (though it works as one). It's a 4-layer framework, designed to be used whole or per-layer.

Runtime behavior is intentionally smaller than this README: agents should start from [`SKILL.md`](https://github.com/Nikolai-Iakubovskii/app-paywall-pilot/blob/HEAD/SKILL.md), then use [`runtime/`](https://github.com/Nikolai-Iakubovskii/app-paywall-pilot/blob/HEAD/runtime/) for input contracts, routing, and source lookup rules.

```
┌─────────────────────────────────────────────────────────────┐
│  🤖 SKILL LAYER          SKILL.md + modules/*.md            │
│  Entry point for AI assistants (Claude / GPT / Cursor)      │
│  Thin core + lazy modules + runtime contracts…
