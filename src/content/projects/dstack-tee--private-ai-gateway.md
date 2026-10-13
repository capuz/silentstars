---
repo: "Dstack-TEE/private-ai-gateway"
name: "private-ai-gateway"
description: "Private AI Gateway for Attested Confidential Inference"
readmeQualityOk: true
url: "https://github.com/Dstack-TEE/private-ai-gateway"
language: "Rust"
languages: ["Rust"]
languagePcts: [76]
stars: 35
forks: 14
openIssues: 15
closedIssues: 21
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-05-19T23:17:44Z"
lastCommitAt: "2026-10-13T10:57:53Z"
lastReleaseAt: "2026-08-28T07:34:20Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 45
maintainers: ["kingsleydon", "private-ai-gateway-release[bot]", "h4x3rotab"]
openGraphImageUrl: "https://opengraph.githubassets.com/feb8d7813bd7390c4e43160022233d120a93f300043e6e4bf53adf642f4f048d/Dstack-TEE/private-ai-gateway"
---

# Private AI Gateway

**Call the LLM APIs you already know. Verify that no one can read your data
before you send it.**

Private AI Gateway is an OpenAI- and Anthropic-compatible gateway for private
inference. It runs inside a trusted execution environment (TEE), verifies the
confidential provider path selected for the model, and gives the client
evidence it can check independently.

This repository contains the Rust reference implementation of
[Attested Confidential Inference (ACI)](https://github.com/Dstack-TEE/private-ai-gateway/blob/HEAD/spec/aci.md), first discussed in
[Dstack-TEE/dstack#694](https://github.com/Dstack-TEE/dstack/pull/694). It is a
developer preview.

## Try it

Install the Private AI Proxy CLI (macOS, Linux, or Windows):

```bash
npm install --global private-ai-proxy
```

The [install guide](https://github.com/Dstack-TEE/private-ai-gateway/blob/HEAD/docs/private-ai-proxy-install.md) covers Homebrew, the
desktop app, and the install scripts.
You also need system `curl`.

Then call Chat Completions as usual. Replace `YOUR_API_KEY` and `MODEL_ID`
with values from your provider:

```bash
pap curl https://tee.redpill.ai/v1/chat/completions -- \
  --fail-with-body…
