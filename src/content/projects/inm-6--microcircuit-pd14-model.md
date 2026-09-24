---
repo: "INM-6/microcircuit-PD14-model"
name: "microcircuit-PD14-model"
description: "Cortical microcircuit model (Potjans & Diesmann, 2014)"
readmeQualityOk: true
url: "https://github.com/INM-6/microcircuit-PD14-model"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [65, 34]
stars: 8
forks: 8
openIssues: 9
closedIssues: 26
watchers: 7
contributors: 13
recentReleases: 0
createdAt: "2025-02-18T11:58:02Z"
lastCommitAt: "2026-09-24T08:42:34Z"
lastReleaseAt: "2026-03-20T14:07:22Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 86
undervaluedScore: 66
maintainers: ["jhnnsnk", "tomtetzlaff", "jessica-mitchell"]
openGraphImageUrl: "https://opengraph.githubassets.com/29b9c7114d6eba043cf278abb91c424f5afcc92f6340b6b9ad615bc8c528d9e1/INM-6/microcircuit-PD14-model"
---

# Cortical microcircuit model (Potjans & Diesmann, 2014)

## Overview

[This repository](https://github.com/INM-6/microcircuit-PD14-model) contains a **detailed mathematical description and a reference implementation of the model** of a cortical microcircuit proposed by [Potjans & Diesmann (2014, The cell-type specific cortical microcircuit: relating structure and activity in a full-scale spiking network model. Cerebral Cortex, 24(3), 785-806)](https://doi.org/10.1093/cercor/bhs358).
The **PD14 model** describes the neuronal circuitry under one square millimeter of cortical surface.
It comprises **four cortical layers (L2/3, L4, L5, L6), each represented by a randomly connected network of excitatory and inhibitory spiking point neurons**.
The network connectivity is derived from anatomical and electrophysiological data.
Connection probabilities between neurons in the network are highly specific and depend on the cell type (excitatory, inhibitory) and on the locations (cortical layers) of the pre- and postsynaptic neurons.
In contrast to this high specificity in the connectivity, all neurons in the network are identical and share the same dynamics and parameters, irrespective of…
