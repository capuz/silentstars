---
repo: "tinfoilsh/confidential-model-router"
name: "confidential-model-router"
description: "Tinfoil Orchestration Server"
url: "https://github.com/tinfoilsh/confidential-model-router"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["tinfoil-functions"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2025-10-15T19:09:26Z"
lastCommitAt: "2026-06-30T06:50:59Z"
lastReleaseAt: "2025-10-29T19:56:11Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 64
maintainers: ["jdrean", "tanyav2", "sachaservan"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f23295f9037a3c2aac1e4e68eff8cd32b48573417b7f3e4f75db4831efe69d1/tinfoilsh/confidential-model-router"
---

# Confidential Inference Router

Tinfoil's confidential inference model router terminates TLS connections (optionally with EHBP), inspects the model name, and directs it to a verified secure inference enclave.

## Request bodies

The router accepts OpenAI-compatible bodies on `/v1/chat/completions` and `/v1/responses`. A few Tinfoil-specific top-level fields are recognized and stripped before the body is forwarded to the model enclave:

- `code_execution_options` — activates the code-execution tool profile. When code execution is requested, this object carries the per-request credentials (`accessToken`, `encryptionKey`, `containerAuthToken`).
- `web_search_options` — activates the web-search tool profile.
- `pii_check_options` — activates the PII safety check.

## Tool Calling

Client side tool calling is handled by the client. Server-side tools currently supported: **web search** and **code execution**.

To handle prompting, we add some instructions about how to call each tool in the system prompt, and we have a short description in each tool.

_vLLM handles putting the system prompt + the tool prompts together, using internal templates built for the specific models._
