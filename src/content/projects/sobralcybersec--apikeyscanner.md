---
repo: "SobralCybersec/APIKeyScanner"
name: "APIKeyScanner"
description: "Advanced Secret Finder made in Rust Language, made only for educacional."
url: "https://github.com/SobralCybersec/APIKeyScanner"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["api-key", "github", "osint", "rust", "secret-finder", "secrets"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-12T16:04:37Z"
lastCommitAt: "2026-06-24T23:37:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 47
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c90892457004db2446ea7d27dbcb8e89ef1bc897bec43328632bb030862f372f/SobralCybersec/APIKeyScanner"
---

<h1 align="center">  
  Advanced Secret Finder
</h1>

High-performance Rust-based API key scanner with 70+ detection patterns, concurrent GitHub scanning, and live validation. Achieves fast repository analysis with context-aware filtering and public/private output separation.

**English Language**

</div>

---

<h1 align="center">
  What's New
</h1>

* **30+ New API Patterns**: xAI (Grok), Groq, DeepSeek, Vercel, Supabase, Cloudflare, Databricks, Snowflake, Figma, LangSmith, Airtable
* **False Positive Reduction**: Context-aware filtering, entropy threshold 3.5, minimum length checks, placeholder detection, and UUID suppression where applicable
* **Enhanced Validation**: Live validation support for OpenAI, Anthropic, xAI, Groq, DeepSeek, Vercel, Supabase, GitHub, Stripe, and AWS format checks
* **Workflow Hardening**: GitHub Actions now splits `verify` and `scan`, and skips live scanning cleanly when `SCANNER_TOKEN` is not configured
* **Auth/Error Fixes**: Invalid GitHub credentials now fail honestly with `401` instead of quietly looking like "0 findings"
* **Public Output Safety**: `data/latest.json` is preserved as the public artifact while private findings stay under ignored…
