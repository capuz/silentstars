---
repo: "CrispStrobe/CrispASR"
name: "CrispASR"
description: "C++ ggml runtime hub for multilingual ASR and TTS models: Cohere Transcribe, Parakeet TDT, Voxtral, Canary 1B v2, etc, plus universal forced alignment, and more"
readmeQualityOk: true
url: "https://github.com/CrispStrobe/CrispASR"
language: "C++"
languages: ["C++", "C", "Python"]
languagePcts: [46, 24, 23]
topics: ["cohere-transcribe", "cohere-transcribe-03-2026", "ggml", "speech-recognition", "speech-to-text", "stt", "transcription", "whisper-cpp", "parakeet", "voxtral"]
stars: 418
forks: 64
openIssues: 6
closedIssues: 194
watchers: 7
contributors: 16
recentReleases: 9
createdAt: "2026-03-29T21:24:48Z"
lastCommitAt: "2026-07-11T05:57:42Z"
lastReleaseAt: "2026-04-19T07:45:36Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 99
undervaluedScore: 29
maintainers: ["CrispStrobe", "mculbert"]
openGraphImageUrl: "https://opengraph.githubassets.com/1775abdd0adf1d0ad200c071f0b19724ecd8033adfee1fb2c565ae0fcb9b8252/CrispStrobe/CrispASR"
---

# CrispASR

**One C++ binary, 36 ASR backends + 23 TTS engines + multilingual text translation, zero Python dependencies.**

CrispASR started as a fork of [whisper.cpp](https://github.com/ggml-org/whisper.cpp) and extends that base into a **unified speech engine** called `crispasr`, backed by full ggml C++ runtimes for major open-weights ASR *and* TTS architectures. One build, one binary, one consistent CLI — pick the backend at the command line or let CrispASR auto-detect it from your GGUF file. See [Text-to-Speech](#text-to-speech-tts) for the TTS side.

```console
$ crispasr -m ggml-base.en.bin          -f samples/jfk.wav                    # OpenAI Whisper
$ crispasr -m parakeet-tdt-0.6b.gguf    -f samples/jfk.wav                    # NVIDIA Parakeet
$ crispasr -m canary-1b-v2.gguf         -f samples/jfk.wav                    # NVIDIA Canary
$ crispasr -m voxtral-mini-3b-2507.gguf -f samples/jfk.wav                    # Mistral Voxtral
$ crispasr --backend qwen3 -m auto      -f samples/jfk.wav                    # -m auto downloads
$ crispasr --backend kokoro -m auto --tts "Hello world" --tts-output out.wav  # TTS
```

No Python. No PyTorch. No separate per-model binary. No…
