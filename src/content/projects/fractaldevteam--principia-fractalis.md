---
repo: "FractalDevTeam/Principia-Fractalis"
name: "Principia-Fractalis"
description: "Principia Fractalis: Fractal Resonance Ontology. A 1000+ page work exploring how mathematics, consciousness, and physical reality connect through a   unified structure. Formally triple-verified in   Lean 4, Coq, and L4L"
readmeQualityOk: true
url: "https://github.com/FractalDevTeam/Principia-Fractalis"
homepage: "https://fractaldevteam.github.io/Principia-Fractalis/"
language: "Lean"
languages: ["Lean", "TeX"]
languagePcts: [52, 27]
topics: ["complexity-theory", "consciousness-and-neuroscience", "coq", "coq-formalization", "formal-verification", "fractal", "lean4", "mathematics", "millennium-problems", "ontology"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-11-11T05:39:02Z"
lastCommitAt: "2026-08-19T04:07:15Z"
lastReleaseAt: "2025-11-22T02:51:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 65
maintainers: ["your-name123"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2f37a65373e85cb3e40d20f22650af9f365a61e48f0c3f5ebf7f797c29638a1/FractalDevTeam/Principia-Fractalis"
fundingLinks: ["KO_FI:https://ko-fi.com/pablocohen", "LIBERAPAY:https://liberapay.com/pablocohen", "BUY_ME_A_COFFEE:https://buymeacoffee.com/pablocohen"]
discussionCount: 0
---

# Principia Fractalis

Author: **Pablo Cohen** ([ORCID](https://orcid.org/0009-0002-0734-5565))
License: **CC BY-NC 4.0**
Repository: <https://github.com/FractalDevTeam/Principia-Fractalis>

---

## Headline result (kernel-verified, unconditional)

A machine-checked construction of the uniformly hyperfinite (UHF) C\*-algebra $M_{3^\infty}$ —
realized as the metric completion $T_\infty$ of the inductive limit of the matrix tower
$M_{3^k}(\mathbb{C})$ under the unital \*-embeddings $A \mapsto A \otimes I_3$ — together with
a canonical tracial state $\tau_{\mathsf{UHF}}$ on $T_\infty$ that is verified in the Lean 4 kernel
to be additive, unital, 1-Lipschitz, tracial, Hermitian, positive, and **faithful**:

$$\tau_{\mathsf{UHF}}(x^{*}x)=0 \implies x=0 \quad \text{for every } x \in T_\infty.$$

As a corollary, $T_\infty$ is **algebraically simple** — every two-sided ideal is $\bot$ or $\top$.
To our knowledge this is the first formalization of Glimm's 1960 simplicity theorem for a UHF
algebra in any proof assistant, and the first machine-checked construction of a UHF algebra with
a faithful tracial state in any proof assistant.

**Summit theorem.**

```…
