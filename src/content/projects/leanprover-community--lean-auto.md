---
repo: "leanprover-community/lean-auto"
name: "lean-auto"
description: "Experiments on automation for Lean"
readmeQualityOk: true
url: "https://github.com/leanprover-community/lean-auto"
language: "Lean"
languages: ["Lean"]
languagePcts: [100]
stars: 194
forks: 34
openIssues: 9
closedIssues: 18
watchers: 7
contributors: 12
recentReleases: 0
createdAt: "2023-07-11T20:35:26Z"
lastCommitAt: "2026-10-24T08:09:07Z"
lastReleaseAt: "2024-02-20T21:48:37Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 38
maintainers: ["PratherConid", "JOSHCLUNE", "kim-em"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c640df7f6b9cf6503819902c8672c69e4b42b2f0db4d4dc171ec949f579e0aa/leanprover-community/lean-auto"
---

[Lean-auto](https://arxiv.org/abs/2505.14929) is an interface between Lean and automated theorem provers. Up to now, lean-auto is maintained and developed primarily by Yicheng Qian (GitHub: PratherConid). It is currently in active development, and pull requests/issues are welcome. For more information, feel free to reach out to Yicheng Qian on [Lean Zulip](https://leanprover.zulipchat.com).  
  
Lean-auto is based on a monomorphization procedure from dependent type theory to higher-order logic and a deep embedding of higher-order logic into dependent type theory. It is capable of handling dependently-typed and/or universe-polymorphic input terms. Currently, proof reconstruction can be handled by [Duper](https://github.com/leanprover-community/duper), a higher-order superposition prover written in Lean. To enable Duper, please import the duper repo in your project, and set the following options:
```lean
import Auto.Tactic
import Duper.Tactic

open Lean Auto in
def Auto.duperRaw (lemmas : Array Lemma) (inhs : Array Lemma) : MetaM Expr := do
  let lemmas : Array (Expr × Expr × Array Name × Bool) ← lemmas.mapM
    (fun ⟨⟨proof, ty, _⟩, _⟩ => do return (ty, ← Meta.mkAppM ``eq_true…
