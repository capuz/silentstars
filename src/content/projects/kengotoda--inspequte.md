---
repo: "KengoTODA/inspequte"
name: "inspequte"
description: "Fast, CLI-first static analysis tool for JVM class and JAR files. Designed for coding agents."
readmeQualityOk: true
url: "https://github.com/KengoTODA/inspequte"
homepage: "https://www.kengo-toda.jp/inspequte/"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["bytecode-analysis", "static-analysis"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-12T01:19:40Z"
lastCommitAt: "2026-10-17T07:58:40Z"
lastReleaseAt: "2026-01-25T21:48:56Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 61
maintainers: ["renovate[bot]", "KengoTODA", "release-please-inspequte[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1132454001/f02ce5ac-28a1-492f-ae1a-8498e5634ec4"
fundingLinks: ["GITHUB:https://github.com/KengoTODA"]
---

# inspequte

inspequte is a fast, CLI-first static analysis tool for JVM class and JAR files.
It focuses on CI/CD speed, deterministic output, and SARIF-only reporting for global
standard compatibility.

The name combines "inspect" and "cute". The CLI command is `inspequte`.

For downloaded CLI releases and Gradle plugin publication files, see
[release provenance verification](https://github.com/KengoTODA/inspequte/blob/HEAD/docs/release-provenance.md) before installation.

## Goals
- Fast startup and analysis for CI pipelines.
- No IDE integration required.
- Deterministic SARIF v2.1.0 output for LLM-friendly automation.

## Local rule workflow (Codex skills)
Five local skills are available under `.codex/skills/` for sequential rule work:
- `inspequte-rule-plan`
- `inspequte-rule-spec`
- `inspequte-rule-impl`
- `inspequte-rule-verify`
- `inspequte-rule-no-go-resume`

Recommended sequence:
1. Plan: run `inspequte-rule-plan` with a short rule idea and target `rule-id`.
2. Spec: run `inspequte-rule-spec` to write `src/rules/<rule-id>/spec.md`.
3. Implement: run `inspequte-rule-impl` from `spec.md` and add tests.
4. Prepare isolated verify input:
   ```bash…
