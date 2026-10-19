---
repo: "QWED-AI/qwed-verification"
name: "qwed-verification"
description: "Open-source AI verification infrastructure for deterministic verification of LLM outputs, tool calls, code, schemas, and agent state before production execution."
readmeQualityOk: true
url: "https://github.com/QWED-AI/qwed-verification"
homepage: "https://docs.qwedai.com/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ai-safety", "ai-security", "code-security", "deterministic-ai", "formal-verification", "hallucination-detection", "sympy", "z3-prover", "llm-verification", "ai-accuracy"]
stars: 61
forks: 13
openIssues: 42
closedIssues: 115
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-12-13T06:07:56Z"
lastCommitAt: "2026-10-19T09:14:25Z"
lastReleaseAt: "2026-02-04T11:35:14Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 47
maintainers: ["rahuldass19", "dependabot[bot]", "mayuriphad"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1115581942/33e1e936-fa01-479c-b87e-365851b8f565"
fundingLinks: ["GITHUB:https://github.com/QWED-AI"]
discussionCount: 5
---

[Website](https://qwedai.com) · [Documentation](https://docs.qwedai.com) · [Install](#install) · [Engines](#engines-and-guards) · [Security](https://github.com/QWED-AI/qwed-verification/blob/HEAD/SECURITY.md) · [Changelog](https://github.com/QWED-AI/qwed-verification/blob/HEAD/CHANGELOG.md)

---

QWED is an open-source (Apache-2.0) verification layer that checks claims in LLM and AI-agent output with deterministic engines, including SymPy, Z3, SQLGlot and Python AST analysis. A claim that QWED cannot check is never reported as verified: it fails closed. It runs in your own environment as a Python library, a CLI, a self-hosted API or a Docker image, with SDKs for TypeScript, Go and Rust.

This repository is the reference implementation of the QWED verification protocol and of [Verification Context v1.0](https://github.com/QWED-AI/qwed-verification/blob/HEAD/spec/), the record format for a verification result.

## How a result reads

Every verification API endpoint returns a `DiagnosticResult` with two separate answers:

| Field | Values | Meaning |
|---|---|---|
| `status` | `VERIFIED`, `UNVERIFIABLE`, `BLOCKED` | Whether QWED could establish the result deterministically.…
