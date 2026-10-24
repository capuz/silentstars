---
repo: "openvpi/TIFA"
name: "TIFA"
description: "Token-Imputing Forced Aligner"
readmeQualityOk: true
url: "https://github.com/openvpi/TIFA"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["automatic-speech-recognition", "forced-alignment", "grapheme-to-phoneme", "masked-language-models", "music-information-retrieval", "linguistics", "phonetics", "singing-voice-synthesis"]
stars: 46
forks: 4
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 5
recentReleases: 2
createdAt: "2026-05-22T18:55:26Z"
lastCommitAt: "2026-10-24T08:08:14Z"
lastReleaseAt: "2026-10-24T08:08:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 42
maintainers: ["yqzhishen", "autumn-2-net", "Xiantaidu"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0bc976d1d80d8e002df4ab885596f235f81b88b525a3e20cd133585d37201d8/openvpi/TIFA"
---

# TIFA: Token-Imputing Forced Aligner

## Overview

An accurate forced aligner to align speech or singing recordings with their transcripts.

### Highlights

1. Pronunciation scoring: choose the pronunciation candidates that best match the audio.
2. Semantic while phonetic: align both the written forms and phonetic symbols.
3. Robust model: work on label errors, noise, reverberation or even accompaniments.
4. Multilingual: able to align multiple languages in a single transcript through flexible configuration.
5. Diagnostic metrics: identify low-quality alignments without reference annotations.

### Downstream applications

1. Grab phoneme-level labels for speech and singing voice synthesis tasks.
2. Inspect and correct misaligned or noisy annotations in existing datasets.
3. Distill pronunciation knowledge to improve G2P and ASR models.

## Installation

### Environment setup

Step 1: Start with a separate Python environment, such as a Conda environment.

Step 2: Install the latest version of PyTorch following its [official website](https://pytorch.org/get-started/locally/).

Step 3: Install the project dependencies:

```bash
pip install -r requirements.txt
```

Run the commands…
