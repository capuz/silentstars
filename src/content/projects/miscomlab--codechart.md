---
repo: "MiscomLab/codechart"
name: "codechart"
description: "Agent skill + CLI: maps and flowcharts of code changes in terminal, chat and HTML. Works with Claude Code, Codex, Cursor, Gemini CLI, OpenCode and more."
readmeQualityOk: true
url: "https://github.com/MiscomLab/codechart"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["agent-skills", "ai-coding-agent", "claude-code", "cli", "code-review", "codex", "cursor", "developer-tools", "diagram", "flowchart"]
stars: 41
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-29T10:16:02Z"
lastCommitAt: "2026-11-24T14:05:40Z"
lastReleaseAt: "2026-11-14T18:16:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 44
maintainers: ["freeleex", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1438253000/7cd58757-dc0f-4d0e-9223-fecd7dd729c1"
---

A skill for AI coding agents that turns their plans and change summaries into maps and flowcharts — checked against your code.

---

## The problem

Your agent just finished a change. Its summary reads like this:

> Done. Migration `0042` adds `coupon_code` to `orders` and changes `orders.status`; adds `refunded` to the `order_status` enum and `bank_transfer` to `payment_method`; creates `invoices` (`order_id`, `method`, `number`) and backfills one invoice per paid order, numbered from `INVOICE_PREFIX`. `OrderStatus` and `PaymentMethod` mirror the new enum values; new `Invoice` model. `POST /orders/{id}/refund` sets `OrderStatus.REFUNDED`, gated by `refundsEnabled`. Didn't read `customers` beyond its id. Tests in `test_invoice_backfill.py`; updated `CHANGELOG.md` and `.env.example`.

Every word is correct, and you still don't *see* it. Which of those are new, and which already existed? What does `invoices` point at? What does the flag actually gate? You open the diff and trace it by hand. On a 20-file change, that's where your review time goes.

## The fix

With codechart, the same reply starts with this:
