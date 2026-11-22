---
repo: "nbald/volta-forever"
name: "volta-forever"
description: "Your Tesla V100 is not dead: run unmodified CUDA 13 programs (PyTorch, vLLM, SGLang, llama.cpp) on Volta (sm_70). A compatibility layer in front of NVIDIA's driver library."
readmeQualityOk: true
url: "https://github.com/nbald/volta-forever"
language: "Rust"
languages: ["Rust"]
languagePcts: [66]
stars: 40
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-11-20T22:16:46Z"
lastCommitAt: "2026-11-22T02:12:06Z"
lastReleaseAt: "2026-11-21T19:41:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 31
maintainers: ["nbald"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb6d24a1681b98d0c241007c3f3be25b72d9d139811bde1d5eeb8fae5be5ba11/nbald/volta-forever"
---

# volta-forever

**Your Tesla V100 is not dead.** CUDA 13 dropped Volta. volta-forever brings it back.

Run unmodified CUDA 13 programs on a V100: today's PyTorch wheels, vLLM, SGLang, llama.cpp. No
patch, no rebuild. Put two letters in front of your command:

```sh
vf python3 -c "import torch; print(torch.cuda.get_device_name())"    # Tesla V100-SXM2-32GB
vf llama-completion -m model.gguf -p "Hello" -n 48 -ngl 99
```

For a model demo, see the [Ubuntu guides](#inference-engines-on-ubuntu).

What a GPU of 2017 lacks is emulated on what it has: the tensor-core instructions of Turing,
Ampere and Blackwell, so your V100 now speaks BF16, FP8 and NVFP4.

> Tested on Tesla V100-SXM2-32GB cards with NVIDIA's driver 580.178.04. What it cannot run it
> refuses with a reason; `LIMITS.md` has what does not work, what is slower and what was not
> tried. Not NVIDIA's, and not endorsed by NVIDIA.
