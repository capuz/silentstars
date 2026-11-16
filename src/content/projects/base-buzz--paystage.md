---
repo: "base-buzz/paystage"
name: "paystage"
description: "Your agent's wallet should not sign because a server asked it to. Preflight, policy and spend limits for x402 payments on Base. Free tier — no signup."
readmeQualityOk: true
url: "https://github.com/base-buzz/paystage"
homepage: "https://paystage.xyz"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
topics: ["agent-payments", "ai-agents", "base", "mcp", "mcp-server", "payment-safety", "usdc", "x402"]
stars: 5
forks: 8
openIssues: 2
closedIssues: 3
watchers: 5
contributors: 5
recentReleases: 1
createdAt: "2026-10-30T00:41:57Z"
lastCommitAt: "2026-11-16T04:24:40Z"
lastReleaseAt: "2026-11-13T20:01:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 66
maintainers: ["base-buzz", "dependabot[bot]", "Bucko89"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf7d5617624d7bf7dc0e95cefd6a6956fc452cb4df5ae51e8e04f117717d8bdb/base-buzz/paystage"
---

# PayStage

**Your agent's wallet should not sign because a server asked it to.**

PayStage sits between an agent and the x402 payment it is about to make, and answers one
question before the signature exists: *should this payment happen?* Every tool returns
`pay`, `review`, or `do_not_pay`, with the rule that fired and a receipt you can keep.

The gap it fills is narrow and load-bearing. x402 makes paying trivial and leaves *deciding*
to the caller: a wallet enforces signatures, not intent. `@paystage/x402-guard` evaluates the
challenge before the wallet signs, so a wrong payee, an over-cap amount or an unknown asset
never reaches the signing step at all.

Try it without installing anything:

```bash
curl -s -X POST https://api.paystage.xyz/v1/evaluate_mcp_payment \
  -H 'content-type: application/json' \
  -d '{"payment_required":{…},"policy":{…}}'
```

The hosted endpoint serves a real verdict with no payment and no account for the first 1,000 calls
per IP per day — an agent cannot fill in a signup form, so requiring one would exclude exactly
the callers this is built for.

## The nine tools

Every one is read-only. None of them signs, holds a key, or moves money — the agent…
