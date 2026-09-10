---
repo: "furuCRM-Inc/rtk-sf"
name: "rtk-sf"
description: "Zero-Token Knowledge & Visual Live-Mapping Layer for Salesforce AI Agents — 92% token reduction via MCP"
readmeQualityOk: true
url: "https://github.com/furuCRM-Inc/rtk-sf"
homepage: "https://www.furucrm.com"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 10
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-09-06T04:39:48Z"
lastCommitAt: "2026-09-10T08:20:03Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 53
maintainers: ["hoangkagawa", "kagawa-furucrm"]
openGraphImageUrl: "https://opengraph.githubassets.com/845ac20006f3c7f940bcc2bf654fcc5b7480e6f7dd3d13cd55331b4e69439b0c/furuCRM-Inc/rtk-sf"
---

# rtk-sf

**Multi-Language Token Reduction Framework for Enterprise AI Agents**

> **Stop wasting tokens on raw file reads. Give your AI agent a pre-indexed, multi-language knowledge layer instead.**

rtk-sf started as a Salesforce token-reduction tool and has grown into a **full multi-language framework**. It indexes your codebase, compresses class structure into structural skeletons, and serves everything via MCP stdio — so Claude Code reads 150 tokens instead of 15,000.

**v0.8.0** adds Java support alongside Python, TypeScript, and Kotlin — covering the full enterprise stack.

---

## Language Support

| Language | Extensions | MCP Tools | Skeleton savings | Build/Test masker |
|---|---|---|---|---|
| **Salesforce (Apex)** | `.cls`, `.trigger`, `.flow` | 14 tools | 85–92% | `sf_command` |
| **Java** | `.java` | `get_java_skeleton`, `run_java_build` | 80–90% | Maven + Gradle |
| **Kotlin** | `.kt`, `.kts` | `get_kotlin_skeleton`, `run_gradle` | 75–88% | Gradle |
| **TypeScript / JS** | `.ts`, `.tsx`, `.js`, `.jsx` | `get_ts_skeleton`, `run_js_tests` | 70–85% | Jest / Vitest |
| **Python** | `.py` | `get_python_skeleton`, `run_python_tests` | 65–80% | pytest |

---

## Before…
