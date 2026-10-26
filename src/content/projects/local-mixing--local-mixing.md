---
repo: "Local-Mixing/local_mixing"
name: "local_mixing"
description: "New local_mixing ideas for obfuscated circuits"
readmeQualityOk: true
url: "https://github.com/Local-Mixing/local_mixing"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
stars: 10
forks: 7
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-08-12T17:11:20Z"
lastCommitAt: "2026-10-26T11:09:16Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 59
undervaluedScore: 67
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/ad4b071aeffe54392e27de8c50eca7111900ac0ce3da81515615c5c2784f2885/Local-Mixing/local_mixing"
---

# Local Mixing

We use local mixing to obfuscate reversible circuits: replace small portions
of a circuit with equivalent ones, while preserving the function we want to
compute. TDP is the current end-to-end pipeline. It has six stages: it
constructs a sliced sandwich (1), applies preprocessing, i.e. gadgetization
(2), mixes with the frozen database (3), splits the remaining complemented
gates (4), runs the crossing walk (5), and delivers the result (6). Stage 6
runs by default as the adaptive, C-aware resynthesis (`docs/ADAPTIVE_STAGE.md`):
round after round the circuit is cut into large blocks whose boundaries avoid
every cut at which an internal value of the secret circuit is recoverable,
every block is resynthesized from its function alone, and the smaller,
not-leakier candidates are kept until the size plateaus; the smallest round
output in canonical gate order is the published TDP. The windowed delivery
(`delivery.mode = "windowed"`: pack into ANF windows, unpack by
resynthesizing every window, split and repack what does not resynthesize;
`docs/DELIVERY_STAGE.md`) remains as the other mode. The source circuit is
random or balanced (`source.construction`), and stage 2 is…
