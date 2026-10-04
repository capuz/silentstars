---
repo: "kadirnar/voicehub"
name: "voicehub"
description: "VoiceHub: A Unified Inference Interface for TTS Models"
readmeQualityOk: true
url: "https://github.com/kadirnar/voicehub"
homepage: "https://kadirnar.github.io/voicehub/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["speech", "text-to-speech", "tts", "voice"]
stars: 118
forks: 13
openIssues: 18
closedIssues: 71
watchers: 3
contributors: 3
recentReleases: 2
createdAt: "2025-06-10T14:45:24Z"
lastCommitAt: "2026-10-04T10:02:06Z"
lastReleaseAt: "2026-08-06T17:44:58Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 92
undervaluedScore: 50
maintainers: ["kadirnar"]
openGraphImageUrl: "https://opengraph.githubassets.com/8184e287e27057e116963ac6a9c074bc1aacc76da43f9838c4bbb3b2f5c4d164/kadirnar/voicehub"
---

VoiceHub provides one API for text-to-speech (TTS), speech recognition (ASR),
and voice activity detection (VAD). It supports Python 3.10–3.12.

## Install

Clone the source repository and install the library:

```bash
git clone https://github.com/kadirnar/voicehub.git
cd voicehub
python -m pip install .
```

Install the correct [PyTorch build](https://pytorch.org/get-started/locally/)
for your hardware first.

## Models

Every registered model has a dedicated page in the
[model list](https://kadirnar.github.io/voicehub/models/providers/).

```python
from voicehub import AutoModelForTextToSpeech, TTSGenerationConfig

model = AutoModelForTextToSpeech.from_pretrained(
    "parler-tts/parler-tts-mini-v1",
    model_type="parlertts",
    device="cuda",
)
output = model.generate(
    "VoiceHub uses one predictable speech model API.",
    generation_config=TTSGenerationConfig(output_file="speech.wav", seed=42),
)
print(output.file_path)
```

See the [TTS capabilities](https://kadirnar.github.io/voicehub/models/tts-capabilities/)
and [ASR/VAD support](https://kadirnar.github.io/voicehub/models/asr-vad-support/)
tables for task-specific inputs.

## Train

```python
from voicehub import…
