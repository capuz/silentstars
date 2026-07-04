---
repo: "ServeurpersoCom/qwentts.cpp"
name: "qwentts.cpp"
description: "Local AI text-to-speech with voice cloning and voice design, powered by GGML. C++17 port of Qwen3-TTS (QwenLM/Qwen3-TTS). 10 languages, 24 kHz mono output, runs on CPU, CUDA, ROCm, Metal, Vulkan."
url: "https://github.com/ServeurpersoCom/qwentts.cpp"
language: "C++"
languages: ["C++"]
languagePcts: [79]
stars: 65
forks: 19
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-05-01T15:12:38Z"
lastCommitAt: "2026-07-04T19:19:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 32
maintainers: ["ServeurpersoCom", "andimarafioti", "smashingtags"]
openGraphImageUrl: "https://opengraph.githubassets.com/180e37a0e5891a0c3f8ddd36fdb0ad12dc03b0804129b5aca50a6ea772b784da/ServeurpersoCom/qwentts.cpp"
---

# qwentts.cpp

Local AI text-to-speech with named speakers, voice cloning and voice
design, powered by GGML. C++17 port of Qwen3-TTS 12 Hz (Qwen team,
Alibaba). 11 languages with Mandarin dialects, 24 kHz mono output,
runs on CPU, CUDA, Metal, Vulkan.

## Features

- Named speakers from the CustomVoice checkpoints, with per-speaker
  Mandarin dialect overrides (eric -> sichuan, dylan -> beijing)
- Zero shot voice cloning from a reference clip, x-vector only or
  in-context with a matching transcript
- Voice design from a free text attribute instruction (gender, age,
  pitch, style)
- Streaming synthesis : autoregressive frame loop with chunked codec
  decode over a rolling left context, low latency chunk callback API
- Two stage generation : the Talker LM emits the semantic codebook, a
  code predictor MTP head emits the 15 acoustic codes per frame, both
  KV cached
- Seedable Philox PRNG and an HF aligned sampling chain
  (repetition penalty -> temperature -> top-k -> top-p -> multinomial)
- Q8_0 and Q4_K_M quantisation of the Qwen3 talker backbone (0.6B and
  1.7B), the RVQ codec paths kept at F32
- Two CLI tools : `qwen-tts` (text -> WAV) and `qwen-codec`
  (WAV <-> RVQ codes)…
