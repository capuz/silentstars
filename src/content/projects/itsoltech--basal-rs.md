---
repo: "itsoltech/basal-rs"
name: "basal-rs"
description: "Rust inference engine for Basal models by Remek Kinas. GPU execution and HTTP serving with CUDA & Metal backends. Benchmarks against upstream."
readmeQualityOk: true
url: "https://github.com/itsoltech/basal-rs"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [61, 27]
topics: ["apple-silicon", "basal", "cuda", "decision-making", "inference", "metal", "rust", "typesafe"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-05T17:25:37Z"
lastCommitAt: "2026-11-10T11:38:58Z"
lastReleaseAt: "2026-10-10T17:17:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 50
maintainers: ["nixuuu", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1406143283/806d0e71-ee6d-40a0-bf4a-934e1d9911c9"
discussionCount: 0
---

[Basal](https://github.com/rkinas/basal) — modele, ich trening, wagi i protokół
decyzyjny — jest dziełem **Remka Kinasa**, rozwijanym na bazie modeli Bielik.
Zdolności decyzyjne i jakość odpowiedzi pochodzą z tych modeli.

**Nasz wkład to silnik inferencji i serwer w Rust**, rozwijane przez
[IT SOL](https://github.com/itsoltech): wykonanie obliczeń na GPU, optymalizacja
pakowania żądań, kernele i harmonogram serwera. Backend CUDA (NVIDIA,
sprawdzony na RTX 6000 Ada), Metal (Apple Silicon, sprawdzony na M1 Pro i M2 Max)
oraz [Intel Arc przez Vulkan](https://github.com/itsoltech/basal-rs/blob/HEAD/docs/INTEL.md) (Linux; pomiary wyłącznie na zintegrowanym
Arc Meteor Lake). Inne karty Arc nie mają jeszcze potwierdzonej poprawności;
[sprawdzony sprzęt i zakres weryfikacji](https://github.com/itsoltech/basal-rs/blob/HEAD/docs/INTEL.md#sprawdzony-sprzęt-i-zakres-weryfikacji)
opisujemy osobno.
Serwer implementuje istniejący kontrakt API **TypeSafe System One** oraz
endpoint zgodny z serwerem upstream. Atrybucję portowanych elementów Basala
i modeli bazowych zawiera [NOTICE](https://github.com/itsoltech/basal-rs/blob/HEAD/NOTICE).

Rozwijamy ten silnik, by ułatwiać korzystanie z polskich…
