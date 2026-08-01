---
repo: "DaviRain-Su/proof_forge"
name: "proof_forge"
description: "Lean 4 multi-target compiler: one portable program source → EVM, Solana, NEAR, Noir with fail-closed semantics (proof-forge-next)"
readmeQualityOk: true
url: "https://github.com/DaviRain-Su/proof_forge"
homepage: "https://proofforge.grok.me"
language: "Lean"
languages: ["Lean"]
languagePcts: [86]
topics: ["compiler", "ethereum", "formal-methods", "lean-theorem-prover", "lean4", "multi-chain", "near-protocol", "noir", "smart-contracts", "solana"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-30T09:55:56Z"
lastCommitAt: "2026-08-01T06:14:48Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 55
maintainers: ["DaviRain-Su", "ampagent"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb0c582547b53f676859f3a66f646d0d1093913de374289e7c9916eba9eb3457/DaviRain-Su/proof_forge"
---

# ProofForge V2 (`proof-forge-next`)

**One portable program source → controlled materialization for many execution platforms.**  
**一份 portable 业务程序源码 → 多个执行平台的受控物化。**

ProofForge V2 is a **Lean 4** multi-target compiler (`proof-forge-next`): authors write a
single `program … where` program; the compiler infers semantic **requirements**, then
`--target` selects materialization for **EVM, Solana, NEAR, Noir** (and later platforms).

ProofForge V2 是用 **Lean 4** 实现的多目标编译器：作者只写统一的
`program … where` 源码；编译器从源码推导语义需求（requirements），再由
`--target` 选择 **EVM / Solana / NEAR / Noir**（及后续平台）的物化方式。

- **改 target 只能改制品与物化**，不能改整数语义、状态迁移、回滚、调用顺序、
  授权或信息披露语义。
- **无法保持语义时必须拒绝**（稳定诊断），禁止 best-effort 降级或回退到旧路径。
- 编译器是 **代码生成 + 语义检查工具**，不是链上 VM、密钥托管或默认网络执行器。

仓库根目录即 V2 产品工程。仅包含 V2 源码、测试与门禁；不存在任何 v1 归档、
fallback、镜像或运行时回退依赖。

---

## 30 秒上手

```lean
import ProofForgeV2
open ProofForgeV2.Language

program Counter where
  state count : UInt64

  init(initial : UInt64) do
    count := initial

  entry increment(delta : UInt64) : UInt64 do
    count := count + delta
    return count

  view get() : UInt64 do
    return count
```

```bash
# 安装 Lean（见 lean-toolchain）后：
just dev-check   # 快速文档检查、构建与核心产品测试…
