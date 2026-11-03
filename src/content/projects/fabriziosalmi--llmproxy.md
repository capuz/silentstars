---
repo: "fabriziosalmi/llmproxy"
name: "llmproxy"
description: "Security-first proxy for Large Language Models"
readmeQualityOk: true
url: "https://github.com/fabriziosalmi/llmproxy"
homepage: "https://fabriziosalmi.github.io/llmproxy/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [66, 22]
topics: ["llm", "prompt-injection", "proxy", "waf", "ai-security", "reverse-proxy", "security", "llm-security"]
stars: 12
forks: 4
openIssues: 2
closedIssues: 11
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-19T21:42:44Z"
lastCommitAt: "2026-11-03T19:05:47Z"
lastReleaseAt: "2026-04-24T10:39:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 60
maintainers: ["dependabot[bot]", "fabriziosalmi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1186668179/e85f3f90-23a4-4fb4-9c4f-33cfb80555e9"
---

# LLMProxy

A self-hosted gateway that sits between your applications and LLM providers and
keeps a record of the traffic that you can verify. It speaks the OpenAI API, so
existing clients point at it unchanged. One process, MIT licensed; prompts,
responses and the audit log stay on your infrastructure.

## What it does

- **A verifiable audit log.** Each request that reaches the pipeline, served, refused
  or failed, is a row in a hash chain. The chain can be keyed (HMAC), its head can be
  recorded outside the database, and retention and GDPR erasure leave a record in the
  chain instead of breaking it. [How to read and verify it, and what it does not show](https://github.com/fabriziosalmi/llmproxy/blob/HEAD/docs/security/audit-log.md).
- **Controls on what a response may do.** A [tool policy](https://github.com/fabriziosalmi/llmproxy/blob/HEAD/docs/security/tool-policy.md)
  decides which tools a response may call and when; PII masking and response
  sanitisation are applied in the request path.
- **Screening of requests.** A byte-level firewall and a scoring shield refuse known
  attack phrasings. They are lexical, and their reach is…
