---
repo: "amarshat/pqc-assay"
name: "pqc-assay"
description: "Reproducible refinement proof for unmodified PQClean ML-DSA reference C (reduce.c + forward NTT): fixed-width C -> Cryptol -> Isabelle -> FIPS 204, via a SAW + Cryptol + Isabelle pipeline."
readmeQualityOk: true
url: "https://github.com/amarshat/pqc-assay"
homepage: "https://amarshat.github.io/pqc-assay/"
language: "C"
languages: ["C", "Isabelle"]
languagePcts: [47, 33]
topics: ["cryptography", "cryptol", "dilithium", "fips-204", "formal-methods", "formal-verification", "isabelle", "ml-dsa", "post-quantum-cryptography", "pqclean"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-07T12:36:31Z"
lastCommitAt: "2026-10-25T22:11:51Z"
lastReleaseAt: "2026-06-24T06:42:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 50
maintainers: ["amarshat"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1261993071/03280123-5976-4ef4-87ca-bf805951773e"
---

PQC-Assay machine-checks unmodified post-quantum reference C against specifications written from
the standards. SAW proves the C equal to a Cryptol model, Galois's `cryptol-to-isabelle` lifts that
model into Isabelle, and Isabelle proves the lifted model equal to the mathematics. It is the
toolchain Apple used for its 2026 `corecrypto` work; none of Apple's code or theories are used here.

There are two targets. The first is ML-DSA-44 (FIPS 204) in PQClean's reference C. The chain reaches
from the C functions to ring arithmetic in `R_q = Z_q[X]/(X^256+1)`, and `sign.c` is proved to
compose those functions. Apple's `corecrypto` proofs already cover ML-DSA signing end to end on
Apple's code: their loop proof covers every iteration up to a counter bound, and they verify Keccak
and the samplers, which are assumed here. So this repo's ML-DSA work is an independent check of a
different code base, not a first. The second target, and the current main line, is HQC (selected by
NIST in 2025), starting with its reference polynomial multiplication. Writeup on the ML-DSA side:
[The ML-DSA reference NTT multiplies polynomials: C functions to models, models to the…
