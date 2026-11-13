---
repo: "inayatarshad/toxic_span_detection_urdu"
name: "toxic_span_detection_urdu"
description: "A multimodal framework for detecting toxic content in Urdu text and audio, combining XLM-RoBERTa for text-based toxic span detection with Wav2Vec2 , MMS-300M for audio-based toxicity classification via late fusion."
readmeQualityOk: true
url: "https://github.com/inayatarshad/toxic_span_detection_urdu"
homepage: "https://toxic-span-detection-urdu.vercel.app"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [75]
stars: 5
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-02-08T17:01:01Z"
lastCommitAt: "2026-11-13T05:40:19Z"
lastReleaseAt: "2026-08-24T20:10:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 62
maintainers: ["inayatarshad", "Sowaiba-01"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5b9b16ca79f02e2492c5f57ea9d56016dbf2591aeafd83ba0842191049889c6/inayatarshad/toxic_span_detection_urdu"
---

# MUTEX — An Explainable Hybrid Deep Learning Framework for Fine-Grained Toxic Span Detection in Low-Resource Languages

**Manuscript:** *An explainable hybrid deep learning framework for fine-grained toxic span detection in low-resource languages* (PeerJ Computer Science, submission ID 145907, revised version)
**Authors:** Inayat Arshad, Fajar Saleem, Sarah Iqbal, Norah Dhafer Alqahtani, Ijaz Hussain
**Corresponding author:** Ijaz Hussain — ijazhussain@pieas.edu.pk

---

## 1. Description

This repository contains the dataset (**URTOX**), the code and the evaluation outputs behind every result in the revised manuscript.

**MUTEX** is a sequence-labelling pipeline for **word-level toxic span detection in Urdu**. It applies established components to a new task and resource:

1. a multilingual transformer encoder (**XLM-RoBERTa**),
2. a **conditional random field (CRF)** decoder with BIO constraints, so that predicted spans are always well formed,
3. **Integrated Gradients** token attributions, evaluated quantitatively for plausibility and faithfulness.

**Main results** (held-out test split, mean ± SD over five seeds):

| Model | Token-level F1 | Exact-span F1 | Ill-formed spans |…
