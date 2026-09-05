---
repo: "QWED-AI/qwed-verification"
name: "qwed-verification"
description: "Open-source AI verification infrastructure for deterministic verification of LLM outputs, tool calls, code, schemas, and agent state before production execution."
readmeQualityOk: true
url: "https://github.com/QWED-AI/qwed-verification"
homepage: "https://docs.qwedai.com/"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["ai-safety", "ai-security", "code-security", "deterministic-ai", "formal-verification", "hallucination-detection", "sympy", "z3-prover", "llm-verification", "ai-accuracy"]
stars: 57
forks: 12
openIssues: 39
closedIssues: 79
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-12-13T06:07:56Z"
lastCommitAt: "2026-09-05T07:49:47Z"
lastReleaseAt: "2026-02-04T11:35:14Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 43
maintainers: ["rahuldass19"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1115581942/33e1e936-fa01-479c-b87e-365851b8f565"
fundingLinks: ["GITHUB:https://github.com/QWED-AI"]
discussionCount: 5
---

<h1>QWED Verification</h1>
  <h3>Reference implementation of the QWED Verification protocol and Verification Context v1.0</h3>
  
  QWED applies deterministic verification to AI outputs before production execution.

  Every verification returns a <code>DiagnosticResult</code>:

  <b>VERIFIED</b> — proof established, evidence attached<br>
  <b>UNVERIFIABLE</b> — proof could not be established<br>
  <b>BLOCKED</b> — policy or rule rejected the action<br>

  Admission: <b>ADMIT</b> | <b>BLOCKED</b>

  Verification Context v1.0 provides the canonical evidence and proof model
  (admission: <b>ADMIT</b> | <b>DENY</b> at the protocol layer).

  <p><i>Don't fix the liar. Verify the lie.</i></p>

  <br>
</div>

---

## Release Update: v7.1.0 — Verification Context v1.0 Rollout

`v7.1.0` ships the **Verification Context (VC) v1.0** — the external, interoperable layer on top of `DiagnosticResult`. Verification methods continue to return `DiagnosticResult`; a schema-validated, canonically-encoded, tamper-evident verification document describing *what* was verified, against *what* evidence, under *which* interpretation, with *what* admission decision is produced on demand via the explicit…
