---
repo: "openvax/isovar"
name: "isovar"
description: "Assembly of RNA reads to determine the effect of a cancer mutation on protein sequence"
readmeQualityOk: true
url: "https://github.com/openvax/isovar"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 27
forks: 16
openIssues: 32
closedIssues: 322
watchers: 8
contributors: 3
recentReleases: 3
createdAt: "2016-02-04T20:14:48Z"
lastCommitAt: "2026-10-29T10:36:14Z"
lastReleaseAt: "2026-10-27T02:24:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 70
maintainers: ["iskandr"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b0fed8d6a222b64fc5173fb9d14de2a63cd53e4dc53c53adec1c53e4e227701/openvax/isovar"
---

# Isovar

Isovar finds the mutant protein sequence that tumor RNA actually encodes around
each somatic mutation. Given variant calls (VCF) and aligned tumor RNA-seq reads
(BAM), it assembles the reads that carry each mutation into cDNA and translates
that cDNA in the reading frames of annotated transcripts.

The protein comes from the reads, not from the reference plus one edit, so it
can include nearby variants and splice junctions that the reads show. Where
coverage runs out or no reading frame can be established, the result is shorter
or empty: Isovar never fills gaps with reference sequence.

## Installation

```sh
pip install isovar
```

Isovar requires Python 3.11 or later. Reference annotation comes from
[PyEnsembl](https://github.com/openvax/pyensembl); install the Ensembl release
that matches your alignments before the first run, for example:

```sh
pyensembl install --release 75 --species human
```

To choose a specific release or use your own GTF, see
[choosing the reference annotation](https://github.com/openvax/isovar/blob/master/docs/reference-annotation.md).
Figures and PDF reports are included in the standard installation.
For the variant/RNA PDF command,
see the…
