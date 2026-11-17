---
repo: "IonDen/mlx-model-doctor"
name: "mlx-model-doctor"
description: "Validate an MLX / Hugging Face model repository before you load it."
readmeQualityOk: true
url: "https://github.com/IonDen/mlx-model-doctor"
homepage: "https://pypi.org/project/mlx-model-doctor/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["apple-silicon", "cli", "huggingface", "llm", "machine-learning", "mlx", "mlx-lm", "model-validation", "python", "safetensors"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-04T13:42:28Z"
lastCommitAt: "2026-11-17T14:33:38Z"
lastReleaseAt: "2026-06-20T10:19:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 85
undervaluedScore: 25
maintainers: ["IonDen"]
openGraphImageUrl: "https://opengraph.githubassets.com/91c619f9ac89e0300a8203366e373c3484d88d82ee94943cf7bbc9e8b4d10160/IonDen/mlx-model-doctor"
fundingLinks: ["GITHUB:https://github.com/IonDen"]
---

# mlx-model-doctor

Validate an MLX / Hugging Face model repository before you load it.

A model repo can be broken in ways you only discover halfway through `load()`: a `config.json` that's missing or internally inconsistent, a missing tokenizer file, a `model.safetensors.index.json` that points at shards that aren't there, quantization metadata that uses a mode or group size MLX rejects, a chat template that's absent or whose stop token has a typo, a corrupt safetensors header, a quantized layer whose packed weight and scales shapes disagree, or a model that simply won't fit in the memory you have. `mlx-model-doctor` checks those up front and prints a report, so a bad repo fails fast with a clear reason instead of a confusing crash.

The checks read repository metadata and the safetensors *header* — `config.json`, the tokenizer files, the safetensors index, quantization fields, and the tensor map (dtypes, shapes, byte-offsets) parsed from the header alone. They need no GPU or MLX and never download the weights; on the Hub the header arrives over a small HTTP range request, so the checks stay cheap to run anywhere. For the default `text` profile, an optional `--smoke` check loads…
