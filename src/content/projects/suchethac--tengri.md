---
repo: "suchethac/tengri"
name: "tengri"
description: "Differentiable SED Inference "
readmeQualityOk: true
url: "https://github.com/suchethac/tengri"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [54, 45]
stars: 9
forks: 2
openIssues: 164
closedIssues: 740
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-21T21:52:01Z"
lastCommitAt: "2026-09-24T08:41:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 52
maintainers: ["suchethac"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd91fccf587d7dc52651250e28648bbfa46621b95f453eaae894c5a8179bf59b/suchethac/tengri"
---

# tengri

Tengri is a panchromatic galaxy SED inference library, written in
JAX. The same forward model covers stellar populations, dust,
nebular emission, AGN, IGM, radio, and X-ray. Inference is modular
too: the `Fitter` interface borrows optimizers from `optax`, samplers
from `BlackJAX`, and variational inference from `NIFTy.re`, so new
fitting methods plug in without touching the physics. Gradients are
available everywhere, and they are exact.

Tengri is pre-1.0 and developed as a community effort. The API is
still moving in places, and the repository will move to the
`tengri-project` GitHub organization shortly, where collaborative
development and issue tracking will live going forward.

**Documentation:** [suchethacooray.com/tengri](https://suchethacooray.com/tengri/) · **Notebooks:** [`notebooks/`](https://github.com/suchethac/tengri/tree/main/notebooks)

> *The name [Tengri](https://en.wikipedia.org/wiki/Tengri) comes from
> the all-encompassing God of Heaven in traditional Turkic, Mongolic,
> and other Central Asian nomadic religions. A fitting name for a code
> that models the light of galaxies across cosmic time. This name is
> chosen with respect for the cultural and…
