---
repo: "DaviRain-Su/proof_forge"
name: "proof_forge"
description: "Lean 4 multi-target compiler: one portable program source → EVM, Solana, NEAR, Noir with fail-closed semantics (proof-forge-next)"
readmeQualityOk: true
url: "https://github.com/DaviRain-Su/proof_forge"
homepage: "https://pf.grok.me"
language: "Lean"
languages: ["Lean"]
languagePcts: [79]
topics: ["compiler", "ethereum", "formal-methods", "lean-theorem-prover", "lean4", "multi-chain", "near-protocol", "noir", "smart-contracts", "solana"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 25
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-06-30T09:55:56Z"
lastCommitAt: "2026-08-13T05:18:25Z"
lastReleaseAt: "2026-08-09T10:49:55Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 59
maintainers: ["DaviRain-Su", "ampagent"]
openGraphImageUrl: "https://opengraph.githubassets.com/1fb1698e633693ad9837301b79383bc2eab75f71912a30952baaba26b1a4919c/DaviRain-Su/proof_forge"
---

# ProofForge V2 (`proof-forge-next`)

**One portable program source → controlled materialization for many execution platforms.**  
**一份 portable 业务程序源码 → 多个执行平台的受控物化。**

ProofForge V2 is a **Lean 4** multi-target compiler (`proof-forge-next`): authors write a
single `program … where` program; the compiler infers semantic **requirements**, then
`--target` selects materialization. Engineering registry is **12 = 9 implemented + 3
design-only**; nine targets own Plan/IR/materializer leaves today (EVM, Solana, NEAR,
Noir, Aleo, Psy, Quint, CosmWasm, TON). Quint is a non-deployable, source-only
executable-model target; product finalization does not run Quint or Apalache.

ProofForge V2 是用 **Lean 4** 实现的多目标编译器：作者只写统一的
`program … where` 源码；编译器从源码推导语义需求（requirements），再由
`--target` 选择物化方式。工程 registry **12 = 9 implemented + 3 design-only**；当前
九个 target 各有 target-owned Plan/IR/materializer（EVM / Solana / NEAR / Noir / Aleo /
Psy / Quint / CosmWasm / TON）。Quint 是不可部署的 source-only 可执行模型 target；产品
finalization 不运行 Quint 或 Apalache。

- **改 target 只能改制品与物化**，不能改整数语义、状态迁移、回滚、调用顺序、
  授权或信息披露语义。
- **无法保持语义时必须拒绝**（稳定诊断），禁止 best-effort 降级或回退到旧路径。
- 编译器是 **代码生成 + 语义检查工具**，不是链上 VM、密钥托管或默认网络执行器。

仓库根目录即…
