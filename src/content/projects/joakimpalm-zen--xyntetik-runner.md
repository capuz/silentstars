---
repo: "Joakimpalm-Zen/xyntetik-runner"
name: "xyntetik-runner"
description: "Local inference you can prove. A single-binary GGUF engine in C: serves, scores, and trains LoRA through the quantized weights it deploys, byte-reproducibly. Tool calls survive the token limit; every run replays as a signed receipt. CPU/CUDA/Metal, OpenAI- and Anthropic-compatible."
readmeQualityOk: true
url: "https://github.com/Joakimpalm-Zen/xyntetik-runner"
homepage: "https://xyntetik.com"
language: "C"
languages: ["C"]
languagePcts: [88]
topics: ["c", "cuda", "edge-ai", "gguf", "inference", "llm", "local-llm", "metal", "mixture-of-experts", "openai-api"]
stars: 30
forks: 2
openIssues: 0
closedIssues: 10
watchers: 2
contributors: 4
recentReleases: 5
createdAt: "2026-07-10T10:33:21Z"
lastCommitAt: "2026-10-31T07:46:05Z"
lastReleaseAt: "2026-08-06T11:03:20Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 50
maintainers: ["claude-code", "Joakimpalm-Zen"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1296382636/163c8816-ae14-4520-999b-a697072aa69b"
fundingLinks: ["CUSTOM:https://buy.stripe.com/9B69AUddpdx9auHgP27N600"]
---

Running a model yourself is mostly guesswork. Will it fit? Did shrinking it
break it? Why is my laptop out of memory when nothing is running? Runner
exists to replace those guesses with answers you can check.

- **Ask before you download.** Runner reads the first few megabytes of a
  model and tells you whether it fits your machine, and how. It called the
  real split in 70 of 72 tests (release 1.0.1, October 2026) and was never
  too optimistic.
- **Shrink a model and see what it cost.** One command and a one-line plan
  built a Qwen3-30B that is smaller than the official 4-bit file and closer
  to the original.
- **Read longer documents in the same memory.** The context cache fits in
  about 41% of the usual space, with full agreement on models from 4B to 30B.
- **Leave it running.** A 63 GB model sitting idle holds 35 MB of your
  memory. On the same Mac, llama-server holds 60.8 GB.
- **Trust what comes out.** A tool call still parses when the model runs out
  of words, a fine-tune comes out the same twice, byte for byte, and any run
  can be signed and replayed by someone else.

It takes about a minute to try: [quick start](#quick-start).

## What is it?

- **One file.** A…
