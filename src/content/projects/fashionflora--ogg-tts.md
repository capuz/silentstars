---
repo: "FashionFlora/ogg-tts"
name: "ogg-tts"
description: "OGG TTS: expressive multilingual block-diffusion TTS over Fish Audio codec tokens (OmniVoice backbone + MTP). Built with Fish Audio."
readmeQualityOk: true
url: "https://github.com/FashionFlora/ogg-tts"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-10-30T17:27:20Z"
lastCommitAt: "2026-11-12T11:41:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 22
maintainers: ["FashionFlora"]
openGraphImageUrl: "https://opengraph.githubassets.com/477033415d60cdcb0c4c65979b4ec312626574e2f5f7f4de1d9d6ca8f40a78de/FashionFlora/ogg-tts"
---

# OGG TTS

**Expressive multilingual text-to-speech with block diffusion over Fish Audio codec tokens.**

OGG TTS is named after the trolls of *The Witcher*. Its planned siblings are **ROGG** and **POGG**: the three
architectures compared in the technical report. Like its namesakes, OGG talks a lot.

- Model weights and model card: https://huggingface.co/FashionFlora/ogg-tts (current release: checkpoint 430k).
- Project page (architecture, samples, evaluation): https://fashionflora.github.io/ogg-tts/
- Playground: https://huggingface.co/spaces/FashionFlora/ogg-tts
- Status: pre-training ended at 440k steps; checkpoint 430k is released.

Built with Fish Audio.

## What it does

- **Zero-shot voice cloning** from a few seconds of reference audio, or a built-in speaker identity without any audio prompt.
- **8 languages:** English, Polish, Spanish, German, Russian, French, Portuguese and Italian.
- **Emotions and vocal events as optional inline tags**:
  ```
  [frustrated] Nie ma chwili spokoju… [sighing] O co tu w ogóle chodzi?
  [scared] [whispering] Ktoś tu jest…
  [shouting] Run!
  ```
  The closed list has 24 tags in three groups:
  - emotion: `[angry]` `[frustrated]` `[excited]`…
