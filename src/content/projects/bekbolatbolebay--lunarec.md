---
repo: "BekbolatBolebay/LunarEC"
name: "LunarEC"
description: "🌙 LunarEC — Enterprise Polyglot ERP & CRM Core built with Next.js 15, Rust Stock Engine, Go POS Gateway, and Python AI Analytics"
originalDescription: "🌙 LunarEC — Enterprise Polyglot ERP & CRM Core built with Next.js 15, Rust Stock Engine, Go POS Gateway, and Python AI Analytics"
descriptionLang: "kk"
readmeQualityOk: true
url: "https://github.com/BekbolatBolebay/LunarEC"
homepage: "https://github.com/BekbolatBolebay/LunarEC"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [65]
topics: ["crm", "erp", "golang", "inventory-management", "nextjs", "odoo", "open-source", "polyglot", "pos-system", "python"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 107
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-16T11:12:39Z"
lastCommitAt: "2026-09-25T09:03:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 56
maintainers: ["BekbolatBolebay"]
openGraphImageUrl: "https://opengraph.githubassets.com/2be56d0d58bfc1a31ff74a4af3e6482592d64f4451d1770639c23a6e8c09f8bc/BekbolatBolebay/LunarEC"
discussionCount: 0
---

# 🌙 LunarEC — Polyglot Open-Source CRM & ERP Suite

  </a>
  </a>
  </a>
</p>

</p>

---

## 📖 About LunarEC

**LunarEC** is a modern **Polyglot Monorepo** enterprise CRM & ERP platform built on the Odoo 17/18 pattern, combining the strongest aspects of **4 different programming languages (TypeScript, Rust, Go, Python)**.

---

## 🧩 4-Language Module Architecture (Polyglot Matrix)

| Layer / Module | Language Used | Purpose and Functions |
|---|---|---|
| 🌐 **Frontend & Odoo Shell** | **TypeScript (Next.js 14 + Tailwind)** | Kanban board in Odoo 17 style, App Switcher, Chatter and interactive UI. |
| 🦀 **`crates/stock-engine`** | **Rust (Edition 2021)** | Ultra-fast core that calculates the intrinsic value (BOM/COGS) of 10,000+ ingredients in the warehouse in microseconds. |
| 🐹 **`services/pos-gateway`** | **Go (Golang 1.22+)** | Lightweight network gateway that synchronizes tables and POS events in milliseconds. |
| 🐍 **`services/ai-analytics`** | **Python 3.12+** | Menu sales forecasting (Demand Forecasting) and Odoo JSON-RPC integration. |

---

## 🏗️ Architectural Diagram

```mermaid
graph TD
    Client[🌐 LunarEC Next.js UI]
    
    subgraph Services [⚡ Polyglot…
