---
repo: "okikirmui/handic"
name: "handic"
description: "HanDic: a morphological analysis dictionary for contemporary Korean"
originalDescription: "HanDic: a morphological analysis dictionary for contemporary Korean"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/okikirmui/handic"
homepage: "https://porocise.sakura.ne.jp/wiki/korean/mecab"
language: "Perl"
languages: ["Perl", "Python"]
languagePcts: [51, 49]
topics: ["mecab", "dictionary", "morphological-analysis", "korean-language", "korean-text-processing"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-02-13T03:32:10Z"
lastCommitAt: "2026-10-25T09:00:53Z"
lastReleaseAt: "2025-09-02T12:32:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 49
maintainers: ["okikirmui"]
openGraphImageUrl: "https://opengraph.githubassets.com/cddbc281158579098b40c62fe8cac7f6e1627adf708256546834ababe3a163a2/okikirmui/handic"
---

# HanDic: morphological analysis dictionary for contemporary Korean

Japanese README: [README_ja.md](https://github.com/okikirmui/handic/blob/HEAD/README_ja.md)

HanDic (한딕) is a dictionary for analyzing contemporary Korean with the morphological analysis engine [MeCab](https://taku910.github.io/mecab/).
It is built from over 130,000 dictionary entries and more than 14,000 [training data](https://github.com/okikirmui/handic/blob/HEAD/docs/source_list.md) items, centered on written language.

## Quick Start (Python / pip)

With the Python package **`handic`**, you can **start morphological analysis right away without building dictionary files**.

### Installing the package

```bash
pip install handic mecab-python3 jamotools
```

### Morphological analysis example

```python
import handic

text = "우리가 평생 내는 의료비는 어디로 가장 많이 흘러갈까?"

print(handic.pos_tag(text))
print(handic.tokenize_hangul(text, mode="surface"))
print(handic.convert_text_to_hanja_hangul(text))
```

**Output**

```python
[('우리03', 'NP'), ('가11', 'JKS'), ('평생', 'NNG'), ('내다02', 'VV'), ('는03', 'ETM'), ('의료비', 'NNG'), ('는01', 'JX'), ('어디01', 'NP'), ('로06', 'JKB'), ('가장01', 'MAG'), ('많이', 'MAG'), ('흘러가다', 'VV'), ('ㄹ까',…
