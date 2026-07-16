---
repo: "ddyy/minvoice"
name: "minvoice"
description: "Minimal single-business invoicing on Cloudflare Workers — Stripe & PayPal, PDF invoices, payment reminders. One-click deploy, no monthly fees."
readmeQualityOk: true
url: "https://github.com/ddyy/minvoice"
homepage: "https://minvoice.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["cloudflare-d1", "cloudflare-workers", "hono", "invoice-generator", "invoicing", "paypal", "self-hosted", "serverless", "stripe"]
stars: 18
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-08T09:38:58Z"
lastCommitAt: "2026-07-16T05:59:22Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 14
maintainers: ["ddyy"]
openGraphImageUrl: "https://opengraph.githubassets.com/7540318fbcad22d4147dc13e8f81c5b712c974bae62633832e8a05674afdbeaa/ddyy/minvoice"
---

# Minvoice

Minvoice (**min**imal in**voice**) is single-business invoicing that runs entirely on Cloudflare —
Workers, D1, Access, and Email Sending. Create invoices, email them with a PDF attached, get paid
by card (Stripe Checkout) or PayPal, and keep clean books. No servers, no framework runtime, no
third-party requests on any page. Designed for one business (you), not as a SaaS.

One click gets you: the repo cloned to your GitHub, a D1 database provisioned and migrated, a
password-protected admin (set the `ADMIN_PASSWORD` secret when prompted), and the setup wizard on
first visit — a working invoicing app on workers.dev. Connect payments, email, and Cloudflare
Access at your own pace afterward (see Setup below).

Everything beyond the Worker itself is optional:

- **Custom domain** — optional. Everything works on the free workers.dev domain; the only feature
  that needs a custom domain is Cloudflare Access for admin auth, and the built-in password login
  covers that until you add one.
- **Payments** — optional, and Stripe and PayPal are each optional too: connect either, both, or
  neither. With none connected, clients still get the invoice page, print view, and PDF — and…
