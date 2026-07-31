---
repo: "juliustm/taxConsultant"
name: "taxConsultant"
description: "Smart VFD Receipts collector & dashboard - with Tax consultation from LLMs such as OpenAI & Groq for advice and insights on each receipt submitted."
readmeQualityOk: true
url: "https://github.com/juliustm/taxConsultant"
homepage: "https://karani.atana.co.tz"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [51, 34]
topics: ["agent", "ai", "receipts"]
stars: 9
forks: 4
openIssues: 7
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-11-13T09:48:58Z"
lastCommitAt: "2026-07-31T06:29:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 82
undervaluedScore: 49
maintainers: ["juliustm"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6b8fc9c57a78813d5cb389d8815bd450ce74e602aabb63c5c4ccf9e49c268dc/juliustm/taxConsultant"
fundingLinks: ["CUSTOM:https://atana.co.tz/store?sponsor=true"]
discussionCount: 0
---

# Karani ✨🇹🇿

An open-source, self-hostable AI agent designed to help Tanzanian businesses automate and simplify expense reporting by intelligently processing EFD (Electronic Fiscal Device) receipts.

## The Problem

For many businesses in Tanzania, managing and recording expenses is a tedious, manual process. Collecting physical EFD receipts, manually entering data into spreadsheets, and ensuring compliance for audits is time-consuming and prone to errors. This administrative burden takes valuable time away from focusing on growing the business.

## The Solution

**Karani** transforms this process. By deploying your own private instance of this agent, you create a central hub that can:
1.  **Receive** receipts from various sources (WhatsApp, Telegram, Web App, etc.) via a secure API.
2.  **Verify and Parse** a receipt URL from a QR code against the TRA portal, reading every field straight off the verified page. Photographed receipts, which have no machine-readable source, are read by a vision model instead.
3.  **Extract Key Data** such as Vendor Name, TIN, VRN, EFD serial, Date, line items, per-rate tax and totals.
4.  **Automate Logging** by exporting this structured data…
