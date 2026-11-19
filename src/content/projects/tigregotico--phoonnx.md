---
repo: "TigreGotico/phoonnx"
name: "phoonnx"
description: "A Python library for multilingual phonemization and Text-to-Speech (TTS) using ONNX models."
readmeQualityOk: true
url: "https://github.com/TigreGotico/phoonnx"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["hacktoberfest", "text-to-speech", "library", "onnx", "phonetics", "tigregotico"]
stars: 37
forks: 9
openIssues: 18
closedIssues: 42
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2025-07-25T02:14:01Z"
lastCommitAt: "2026-11-19T05:03:13Z"
lastReleaseAt: "2025-10-04T19:29:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 56
maintainers: ["github-actions[bot]", "openvoiceos-bot", "JarbasAl"]
openGraphImageUrl: "https://opengraph.githubassets.com/53f35e83415e4de061bec5664ee70a3373533baa49e3800ed63a1a3b0b0b3126/TigreGotico/phoonnx"
---

# phoonnx

Multilingual **phonemization** and **Text-to-Speech** using ONNX models. `phoonnx` loads
and runs TTS voices from several ecosystems (native phoonnx, Piper, Mimic3, Coqui, MMS,
Transformers) through one `onnxruntime`-based interface, and ships a training pipeline for
building your own voices.

It reaches **1000+ languages and voices** across the bundled voice indexes. See the full
list in [VOICES.md](https://github.com/TigreGotico/phoonnx/blob/HEAD/VOICES.md).

## 30-second quickstart

```bash
pip install phoonnx
```

Download a voice and synthesize a WAV from the command line:

```bash
# populate the local voice catalog, then fetch one voice
phoonnx-voices update-cache
phoonnx-voices download OpenVoiceOS/phoonnx_pt-PT_miro_tugaphone
```

The same thing from Python:

```python
import wave
from phoonnx.voice import TTSVoice

voice = TTSVoice.load("model.onnx", "model.json")
with wave.open("hello.wav", "wb") as wav_file:
    voice.synthesize_wav("Hello world!", wav_file)
```

New here? Start with the [Quickstart](https://github.com/TigreGotico/phoonnx/blob/HEAD/docs/quickstart.md) — it downloads a voice and
speaks a sentence end-to-end.
