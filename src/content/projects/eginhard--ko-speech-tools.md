---
repo: "eginhard/ko-speech-tools"
name: "ko-speech-tools"
description: "Korean speech and NLP tools"
readmeQualityOk: true
url: "https://github.com/eginhard/ko-speech-tools"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-09-30T14:24:07Z"
lastCommitAt: "2026-10-29T10:20:42Z"
lastReleaseAt: "2025-10-03T01:12:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 41
maintainers: ["eginhard"]
openGraphImageUrl: "https://opengraph.githubassets.com/104ca115e365d0bb430882643ee6f44be6874b167f18370c3faef7aed1b53c93/eginhard/ko-speech-tools"
---

# Korean Speech Tools

This package contains a variety of tools for Korean speech and language
processing, including:
- Hangul romanization.
- Jamo conversion.
- Grapheme-to-phoneme conversion (G2P).

It is mostly a collection of previously existing libraries that are unmaintained
or include unnecessary dependencies that have been removed here. Refer to the
[Credits](#credits) section below for details.

## Installation

```bash
pip install ko-speech-tools
```

The core part of this package does not have any external dependencies. For G2P,
the [mecab-ko](https://github.com/NoUnique/pymecab-ko) package is required,
which can be installed with:

```bash
pip install ko-speech-tools[g2p]
```

## Usage

Romanization:

```python
>>> from ko_speech_tools import hangul_romanize

>>> hangul_romanize("물엿")
'mul-yeos'

```

Jamo conversion ([documentation](https://python-jamo.readthedocs.io/en/latest/)):

```python
>>> from ko_speech_tools.jamo import h2j, j2hcj, j2h

>>> h2j('한굴')
'한굴'

>>> j2hcj(h2j('한굴'))
'ㅎㅏㄴㄱㅜㄹ'

>>> j2h('ㅇ', 'ㅕ', 'ㅇ')
'영'

```

G2P:

```python
>>> from ko_speech_tools import G2p

>>> g2p = G2p()
>>> g2p("것입니다")
'거심니다'

```

## Credits

This package combines and…
