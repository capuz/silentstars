---
repo: "paipai-Studio/BioSeqs"
name: "BioSeqs"
description: "BioSeqs - MoonBit Bioinformatics Library"
originalDescription: "BioSeqs - MoonBit 生物信息学库"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/paipai-Studio/BioSeqs"
homepage: "https://mooncakes.io/docs/IvanAXu/BioSeqs"
language: "MoonBit"
languages: ["MoonBit"]
languagePcts: [100]
stars: 83
forks: 9
openIssues: 16
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2026-07-09T18:16:15Z"
lastCommitAt: "2026-11-17T11:58:50Z"
lastReleaseAt: "2026-11-13T00:50:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 81
undervaluedScore: 32
maintainers: ["IvanaXu"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e322304c6ea9cc626555826a031fd1023b45ae8960efc1c8c866d2914ec06d7/paipai-Studio/BioSeqs"
---

# BioSeqs - MoonBit Bioinformatics Library

> GitHub: https://github.com/paipai-Studio/BioSeqs
>
> GitLink: https://gitlink.org.cn/IvanAXu/BioSeqs
>
> Mooncakes: https://mooncakes.io/docs/IvanAXu/BioSeqs

## Project Overview

BioSeqs is a bioinformatics toolkit library developed in the **MoonBit** language. It replicates the core functionality of mainstream bioinformatics libraries (Biopython, Bioconductor, scikit-bio, Scanpy, scikit-allel, SeqKit, DendroPy, gffutils, etc.) and implements efficient sequence assembly algorithms. Current project version: `0.1.16`.

## Table of Contents

- [Biopython Series Features](#biopython-系列功能)
- [Bioconductor Series Features](#bioconductor-系列功能)
- [Molecular Dynamics and Structural Analysis](#分子动力学与结构分析)
- [Others: Miscellaneous Features and Algorithms](#others-其他功能与算法)
- [Sequence Assembly Algorithms](#序列组装算法)
- [Architecture Design](#架构设计)
- [Build and Test](#构建与测试)

---

## Biopython Series Features

### Sequence Processing and Basic Tools

| Module | Corresponding Biopython | Core Features |
| :--- | :--- | :--- |
| **Seq / MutableSeq** | `Bio.Seq` | Sequence objects, mutable sequence editing, complement, transcription, translation,…
