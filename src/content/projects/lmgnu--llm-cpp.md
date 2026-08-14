---
repo: "LMGNU/llm.cpp"
name: "llm.cpp"
description: "LLM training in raw CUDA\\C++."
readmeQualityOk: true
url: "https://github.com/LMGNU/llm.cpp"
language: "C++"
languages: ["C++", "Cuda"]
languagePcts: [61, 31]
stars: 6
forks: 1
openIssues: 0
closedIssues: 4
watchers: 3
contributors: 2
recentReleases: 10
createdAt: "2026-06-22T19:10:55Z"
lastCommitAt: "2026-08-14T05:15:07Z"
lastReleaseAt: "2026-07-13T09:51:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 61
maintainers: ["Eamon2009", "dependabot[bot]", "eternalblue22"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a6f87d678af632a7408c3dc3dfcf34e9418690470d8810700a3499277824d7b/LMGNU/llm.cpp"
discussionCount: 7
---

# llm.cpp

LLM training in C++17 with no frameworks on the CPU path. The core is ~1,000 lines of dependency-free C++: `main.cpp`, `config/config.h`, and `include/*.h`. If you want to understand what `loss.backward()` actually does without PyTorch hiding the details, this is the place. Thia eliminating the need for PyTorch or Python to train a transformer locally. The core implementation is a decoder-only **GPT architecture** featuring custom tensors, embeddings, multi-head causal self-attention, layer normalization, cross-entropy loss, and an analytical backward pass with the AdamW optimizer all contained within [`main.cpp`](https://github.com/LMGNU/llm.cpp/blob/HEAD/main.cpp), [`llm.mm`](https://github.com/LMGNU/llm.cpp/blob/HEAD/llm.mm), and the [`include/`](https://github.com/LMGNU/llm.cpp/blob/HEAD/include) directory. There is also a **token-level BPE** [`tokenizer.h`](https://github.com/LMGNU/llm.cpp/blob/HEAD/include/tokenizer.h) implementation inside [`include`](https://github.com/LMGNU/llm.cpp/blob/HEAD/include). With no autograd engine or external frameworks, every gradient is explicitly derived and written out.

This is not a framework. It is a reference implementation.…
