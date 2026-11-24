---
repo: "leehack/llamadart"
name: "llamadart"
description: "Cross-platform on-device LLM inference for Dart & Flutter: GGUF via llama.cpp and LiteRT-LM on Android, iOS, macOS, Windows, Linux and web."
readmeQualityOk: true
url: "https://github.com/leehack/llamadart"
homepage: "https://llamadart.leehack.com"
language: "Dart"
languages: ["Dart"]
languagePcts: [93]
topics: ["dart", "flutter", "gguf", "litert-lm", "llama-cpp", "llm", "local-llm", "offline", "on-device-ai", "webgpu"]
stars: 92
forks: 37
openIssues: 78
closedIssues: 727
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2026-01-28T02:24:25Z"
lastCommitAt: "2026-11-24T01:59:01Z"
lastReleaseAt: "2026-02-03T02:06:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 46
maintainers: ["leehack", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/512f90910fc72d448e88247334b92f606c47c136a9aad9edea0f534897f67483/leehack/llamadart"
---

# llamadart

`llamadart` is a Dart package for on-device inference. It runs GGUF models
through `llama.cpp` and `.litertlm` bundles through LiteRT-LM, on Android, iOS,
macOS, Linux, Windows and the web, behind one Dart API. Web support is
experimental. Native targets need no network once the model is on the device.

- Streaming chat and text generation, with structured JSON output and cancellable task handles.
- Tool calling driven by the model's chat template.
- Embeddings, reranking, and image and audio input with multimodal models.
- Speech to text (including incremental live PCM streaming on native `llama.cpp` via `LlamaCppLiveAsrAdapter` for Voxtral Realtime and LFM3-Audio, opt-in bounded windowed live PCM via `Qwen3WindowedAsrAdapter` for Qwen3-ASR, and on native LiteRT-LM), text to speech (Qwen3-TTS; LFM3-Audio, Soprano, Chatterbox and Pocket TTS on native; experimental PCM streaming for Qwen3-TTS, LFM3-Audio and Pocket TTS), and decision models with cooperative task cancellation.
- Image generation from text prompts on native platforms (Preview).
- Runtime LoRA adapters for llama.cpp, observability hooks and typed capability checks.
