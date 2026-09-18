---
repo: "XXII-AI/Lours"
name: "Lours"
description: "🐻 Lours, the pandas companion"
readmeQualityOk: true
url: "https://github.com/XXII-AI/Lours"
homepage: "https://lours.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["dataset", "object-detection", "pandas-dataframe"]
stars: 21
forks: 1
openIssues: 9
closedIssues: 1
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2024-06-18T14:32:31Z"
lastCommitAt: "2026-09-18T08:26:39Z"
lastReleaseAt: "2025-03-19T13:18:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 64
undervaluedScore: 41
maintainers: ["ClementPinard", "renovate[bot]", "NacerKaciXXII"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd7d8eff96928d0437668b18d833525821596f0124d79d9bd5d4cb3873ad479f/XXII-AI/Lours"
discussionCount: 0
---

</p>

<b>The ultimate companion library for object detection data</b>

| 📚 [Docs](https://lours.readthedocs.io)| 📊 [Slides](https://docs.google.com/presentation/d/1crfwQmDnzkMmekznpZZiX0E0XPEhCAOkFPWa1NmflXU/pub) | 📝 Blogpost (coming soon) |

</div>

## Why Lours ?

The overall complexity and lack of standardization in public object detection data makes it painstakingly hard to work with. Lours is a library that makes construction, conversion and manipulation of any detection dataset easy, fast and reliable.

</p>

### The `Dataset` class

At its core, Lours features a unified `Dataset` class. It offers :

- Seamless conversion between popular formats (COCO, PascalVOC, FiftyOne, ...)
- Powerful dataset operations (merging, smart train/val splitting, class remapping, bbox format conversion...)
- Image and Object-Level indexing
- ... and much more !

A Lours dataset object is essentially composed of two `pandas.DataFrame` :

- `images` containing image-level data
- `annotations` containing object-instance-level data

```python
from lours.dataset import Dataset, from_coco

COCO_dataset = from_coco("docs/notebooks/notebook_data/coco_valid.json")
COCO_dataset
```

</p>

In addition…
