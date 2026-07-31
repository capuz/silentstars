---
repo: "HaoyiZhu/Piecewise-Taylor-Attention"
name: "Piecewise-Taylor-Attention"
description: "Piecewise-Taylor Attention"
readmeQualityOk: true
url: "https://github.com/HaoyiZhu/Piecewise-Taylor-Attention"
homepage: "https://www.haoyizhu.site/blog/sparse-linear-attention/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["linear-attention", "sparse-attention", "sparse-linear-attention", "video-generation"]
stars: 31
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-28T07:46:02Z"
lastCommitAt: "2026-07-31T06:30:45Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 55
undervaluedScore: 14
maintainers: ["hp-l33", "HaoyiZhu", "zeke-xie"]
openGraphImageUrl: "https://opengraph.githubassets.com/a661dceb479f7c541518de4e12da0287ef89d91410146f4715a09058d6def4c6/HaoyiZhu/Piecewise-Taylor-Attention"
---

<h2>Piecewise-Taylor Attention (PWT)</h2>
    <p><b>A second-order upgrade of PISA — training-free like PISA, and trainable with a full backward pass</b></p>
</div>

</p>

## TL;DR

[PISA](https://arxiv.org/abs/2602.01077) replaces the *keep-or-drop* paradigm of
sparse attention with *exact-or-approximate*: critical blocks get exact
attention, and every other block is compressed into a "virtual token" via a
block-wise Taylor expansion — all under **one shared softmax denominator**,
which is why it works training-free.

Looking closely at PISA's expansion, its numerator is first-order but its
block-mass estimate (denominator) is only zeroth-order — the first-order term
cancels exactly inside a block, so the next non-zero correction is **second
order**, and it has a clean closed form (following
[Su's LSE/Softmax Taylor expansion analysis](https://kexue.fm/archives/11814)):

$$
\sum_{i\in\mathcal{B}_j} e^{\boldsymbol{q}\cdot\boldsymbol{k}_i}
\approx B\,e^{\boldsymbol{q}\cdot\bar{\boldsymbol{k}}_j+w_j},\qquad
w_j=\tfrac{1}{2}\,\overline{\boldsymbol{q}^2}\cdot\boldsymbol{\sigma}_j^2
$$

where $\boldsymbol{\sigma}_j^2$ is the per-dimension key variance of block $j$
and…
