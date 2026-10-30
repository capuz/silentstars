---
repo: "gethardcount/hardcount"
name: "hardcount"
description: "Open-source alternative to Stripe Billing and Lago for AI products: price tokens by model, sell prepaid credits, see margin per customer. Self-hosted; Stripe only charges the card (and works out tax, if you turn on Stripe Tax)."
readmeQualityOk: true
url: "https://github.com/gethardcount/hardcount"
homepage: "https://github.com/gethardcount/hardcount#quick-start"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [75, 22]
topics: ["billing", "billing-engine", "go", "golang", "invoicing", "metering", "stripe", "usage-based-billing", "ai", "llm"]
stars: 6
forks: 6
openIssues: 93
closedIssues: 89
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-04-07T09:30:36Z"
lastCommitAt: "2026-10-30T11:03:02Z"
lastReleaseAt: "2026-10-17T12:29:07Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 90
undervaluedScore: 76
maintainers: ["sagarsuperuser", "dependabot[bot]", "mojprofile"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1203696212/04e3c290-6855-47d9-b331-4cc9ba3f5f20"
discussionCount: 3
---

# Hardcount

**Usage billing for AI products, on your own servers.**

Price tokens per model, sell prepaid credit, and see what each customer costs you. Hardcount makes the invoices, and Stripe charges the card. Your billing data stays in your own Postgres.

An open-source alternative to Stripe Billing and Lago: no Stripe Billing fee, no paid edition, and light enough to run yourself. [Why Hardcount →](#why-hardcount)

---

## What it looks like

One month of AI usage for one customer, from the [demo](#quick-start) in test mode.

**1. The demo invoice.** One line per model and token type, priced per million tokens.

**2. Your margin, per model.** What you billed against what the AI provider charged you: Sonnet 67.1%, Haiku 20.0%. Only you see this.

---

## How it works

```mermaid
flowchart LR
    A["Your app or LiteLLM"] -->|"usage events"| B["Hardcount<br/>counts and prices"]
    B -->|"month ends"| C["Invoice + PDF"]
    C -->|"saved card"| D["Stripe charge"]
    D -.->|"card declined"| E["Retries and emails"]
```

Your app tells Hardcount what each customer used. Once the customer and its prices exist, one usage event looks like this:

```bash
curl -X POST…
