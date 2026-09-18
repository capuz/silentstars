---
repo: "AfriSpeech/africa-g2p"
name: "africa-g2p"
description: "Rule-based grapheme-to-phoneme (G2P) for 400+ African languages — convert text to native-orthography phonemes (great for TTS/ASR training) or IPA, with romanisation for non-Latin scripts. Data from Omniglot & Alphabets of Africa."
readmeQualityOk: true
url: "https://github.com/AfriSpeech/africa-g2p"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["african-languages", "asr", "g2p", "grapheme-to-phoneme", "ipa", "low-resource-languages", "nlp", "phonemes", "phonemizer", "speech"]
stars: 14
forks: 4
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-24T15:45:10Z"
lastCommitAt: "2026-09-18T08:27:20Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 43
maintainers: ["michsethowusu"]
openGraphImageUrl: "https://opengraph.githubassets.com/12b5f64cc6feaf1b1aeeba81d6d7eb38ec6bc9117e8103f408b968570772351c/AfriSpeech/africa-g2p"
---

# africa-g2p

Segment written text in **750 African languages** into phonemes — for text-to-speech, ASR,
pronunciation lexicons, and linguistic tooling. Many languages support **multiple scripts**
(e.g. Vai syllabary and Latin), and non-Latin scripts can be **transliterated to Latin** too.

By default the output is in each language's **native writing system** (the actual alphabet,
with multigraphs like `ny`, `kp`, `gb` kept as single units) — which trains TTS/ASR models
better than IPA. [IPA](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet)
transcription is available with one option.

```python
from africa_g2p import AfricaPipeline

AfricaPipeline(lang="twi").run("Akwaaba", sep=" ")                  # 'a kw a a b a'
AfricaPipeline(lang="twi", output="ipa").run("Akwaaba", sep=" ")    # 'a kʷ a a b a'
```

## Install

```bash
pip install africa-g2p
```

From source:

```bash
git clone https://github.com/AfriSpeech/africa-g2p
cd africa-g2p
pip install -e .
```

Pure Python (3.9+), no runtime dependencies. English is the one exception — see below.

## English

African speech is full of English, so English is supported too, but **not** through the rule
tables. It routes…
