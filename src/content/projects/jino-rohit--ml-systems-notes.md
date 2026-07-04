---
repo: "JINO-ROHIT/ml-systems-notes"
name: "ml-systems-notes"
description: "a personal collection of my notes for ml sys"
url: "https://github.com/JINO-ROHIT/ml-systems-notes"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 89
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-18T04:32:51Z"
lastCommitAt: "2026-07-04T06:13:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 20
maintainers: ["JINO-ROHIT"]
openGraphImageUrl: "https://opengraph.githubassets.com/80e10133d12c1224e735377b82a4b70c78013375d450a949dcc562c950ea0f8c/JINO-ROHIT/ml-systems-notes"
---

# ml-systems-notes

a personal collection of notes on ml systems engineering covering distributed computing, parallelism, quantization, and pytorch internals.

> everything here is a work in progress. i add notes as i do experiments and projects.

## contents

- [distributed-techniques](./distributed-techniques/) - distributed training fundamentals: nccl collectives (gather, all-gather, reduce, all-reduce, scatter, reduce-scatter), mixture-of-experts, parallelism strategies (dp, ddp, zero, tensor/pipeline parallelism), and torch.distributed basics.

- [quantization](./quantization/) - model quantization from first principles: symmetric/asymmetric quantization, llm.int8(), awq, smoothquant, gptq/obs/obq, and quip.

- [torch-notes](./torch-notes/) - pytorch internals

- [jax-scaling-book](./jax-scaling-book/) - roofline analysis exercises for matrix multiplication in jax/tpu context.
