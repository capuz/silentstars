---
repo: "Trinity-S-AI-DNA/trinity"
name: "trinity"
description: "The Trinity ternary compute stack — tri CLI · BitNet LLM · VSA · GF16"
readmeQualityOk: true
url: "https://github.com/Trinity-S-AI-DNA/trinity"
homepage: "https://t27.ai/"
language: "Zig"
languages: ["Zig", "HTML"]
languagePcts: [49, 21]
topics: ["golden-ratio", "trinity-ecosystem", "zig"]
stars: 11
forks: 4
openIssues: 331
closedIssues: 459
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-01-31T06:58:35Z"
lastCommitAt: "2026-10-23T09:32:29Z"
lastReleaseAt: "2026-02-28T11:01:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 60
maintainers: ["gHashTag", "dmitrii-f-t27"]
openGraphImageUrl: "https://opengraph.githubassets.com/49e17cb85026d0a11899ef98ba42834bd2726122501af48650e2993389923496/Trinity-S-AI-DNA/trinity"
---

> **Canonical Zenodo SOT:** [zenodo.org/communities/trinity-s3ai](https://zenodo.org/communities/trinity-s3ai/) — the single source of truth for all Vasilev / Trinity-S³AI Zenodo records. Any DOI badge above outside this community (e.g. the v2.0.x FPGA-software series 18939351-18950696) is legitimate authorship but not part of the curated S³AI v5.0 record set (B001-B008 = 19227865-79).

---

## Trinity S³AI DNA

### Trinity Identity
```
    φ² + 1/φ² = 3 = TRINITY
```

### Three Strands
- **Strand I**: Mathematical Foundation — Sacred constants, formulas, VSA
- **Strand II**: Cognitive Architecture — Brain modules, observability
- **Strand III**: Language & Hardware Bridge — TRI-27, FPGA backends

[Full Architecture](https://github.com/Trinity-S-AI-DNA/trinity/blob/HEAD/docs/ARCHITECTURE.md)

---

## TRI-27 — Trinity Kernel

**TRI-27 is the ternary computing kernel** that executes all Trinity workloads:

| Component | Value |
|-----------|-------|
| **Registers** | 27×32-bit (t0-t26) = 3 banks × 9 (Coptic alphabet) |
| **Opcodes** | 36 — arithmetic, logic, control, ternary, sacred |
| **Memory** | 64KB byte-addressable |
| **Targets** | Zig CPU emulator + Verilog FPGA |

```
φ² +…
