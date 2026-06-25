---
repo: "thaw-ai/thaw"
name: "thaw"
description: "git for live agent sessions: snapshot, branch, and diff a running vLLM/SGLang session as a durable file. inspect & diff on a laptop, no GPU; restore skips prefill. Rust + CUDA, Apache-2.0. pip install thaw-vllm"
url: "https://github.com/thaw-ai/thaw"
homepage: "https://thaw.sh"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [55, 35]
topics: ["agents", "inference", "kv-cache", "llm", "reinforcement-learning", "sglang", "vllm"]
stars: 6
forks: 1
openIssues: 20
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-14T16:43:09Z"
lastCommitAt: "2026-06-25T01:38:25Z"
lastReleaseAt: "2026-04-21T20:08:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 54
maintainers: ["matteso1"]
openGraphImageUrl: "https://opengraph.githubassets.com/dce4ccd9f62fa378f3d2b20a407e421294db6162f24c95c1579854619bd392ed/thaw-ai/thaw"
---

</p>

# thaw

**git for live LLM agent sessions.**

An agent's KV cache — its working memory — normally dies with the process. thaw turns a running **vLLM** or **SGLang** session into a *durable file* you can `checkpoint`, `branch`, `diff`, `checkout`, and `log` — like git, but for a living agent.

The part most tools miss: **inspecting, diffing, and tracing sessions needs no GPU** — only `checkout` (rehydrating onto a GPU) does. So the everyday loop runs on your laptop.

## See it in 10 seconds — no GPU

```bash
git clone https://github.com/thaw-ai/thaw && cd thaw
pip install thaw-vllm          # installs the `thaw` CLI; inspect/diff/log use no GPU
thaw diff examples/pr-review-fanout/reviewer-security \
          examples/pr-review-fanout/reviewer-style
```

```
thaw diff
  A  reviewer-security
  B  reviewer-style
  model        same  (facebook/opt-125m)
  shared kv    13/13 blocks identical  (~208 tokens)
  text split   first 195 tokens identical, diverge at token 195
  A diverges   …security vulnerabilities.
  B diverges   …code style and naming.
```

Two reviewers forked from the **same** pull-request context — and you can see *exactly* where they diverged. `thaw log` prints…
