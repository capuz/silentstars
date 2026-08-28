---
repo: "nealcaren/topica"
name: "topica"
description: "40+ validated topic models for computational social science, behind one NumPy-native interface: covariate effects on topic prevalence and content, shared diagnostics, reproducible fits. LDA, STM, CTM, keyATM, BERTopic, ETM, and more on a parallel Rust core. One wheel, no JVM, no PyTorch."
readmeQualityOk: true
url: "https://github.com/nealcaren/topica"
homepage: "https://nealcaren.github.io/topica/"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [53, 45]
topics: ["bertopic", "computational-social-science", "lda", "nlp", "pyo3", "python", "rust", "stm", "text-as-data", "topic-modeling"]
stars: 6
forks: 2
openIssues: 33
closedIssues: 305
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-03T10:29:58Z"
lastCommitAt: "2026-08-28T15:32:44Z"
lastReleaseAt: "2026-06-10T13:10:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 97
undervaluedScore: 70
maintainers: ["nealcaren"]
openGraphImageUrl: "https://opengraph.githubassets.com/e63a31a897594b197a18c3e27a1e3b3fd4aba5650910158a69773f51dd20509d/nealcaren/topica"
discussionCount: 0
---

# Topica: fast, all-in-one topic modeling for Python

`topica` is a fast, memory-efficient, all-in-one topic-modeling library for Python, built for social scientists. It brings together more than fifty models usually split across JVM tools like MALLET and R packages like `stm`, including LDA, STM, CTM, keyATM, BERTopic, and neural, dynamic, short-text, and embedding-based models, all under one NumPy-native API. Every model is validated against its reference implementation and reproducible from a fixed seed; all share one set of diagnostics, labeling, validation, and covariate-effect tools, so you learn a single workflow and it applies across the roster. It installs as a single wheel that needs only NumPy and pandas: no JVM, no PyTorch.

```bash
pip install topica
```

## Quick start

Point topica at a DataFrame and read the topics. This runs exactly as written, on a bundled example dataset, right after install:

```python
import topica

df = topica.datasets.load_gadarian()          # bundled; loads offline
corpus = topica.from_dataframe(
    df, text_col="open.ended.response", stopwords=topica.data.ENGLISH_STOPWORDS
)

model = topica.LDA(num_topics=5, seed=13)
model.fit(corpus)…
