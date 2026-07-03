---
repo: "stblake/colossus"
name: "colossus"
description: "Stochastic, slippery hill climber with backtracking for attacking classical ciphers."
url: "https://github.com/stblake/colossus"
language: "C"
languages: ["C"]
languagePcts: [96]
topics: ["cryptanalysis", "cryptology", "crytography"]
stars: 14
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2023-07-24T23:27:44Z"
lastCommitAt: "2026-07-03T12:39:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 64
maintainers: ["sblake-dartt", "stblake"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c753b4619aa691674fc4eb23f2ace4f929968530f035251071a630339d7383a/stblake/colossus"
---

# Colossus — a Classical Cipher Solver
A prototype slippery stochastic shotgun-restarted hill climber with backtracking for a wide range of classical ciphers. It attacks the **polyalphabetic** family — Vigenère, Gronsfeld, Beaufort, Porta, Quagmire I, II, III, IV, and Autokey (including variants and the Beaufort/Porta autokey tableaus) — together with **monographic and polygraphic substitution** ciphers (homophonic substitution, Playfair, Bifid, Trifid, Hill, Phillips, Two-Square, and Four-Square) and a portfolio of **pure transposition** ciphers (matrix/route/columnar/rail-fence/AMSCO/Myszkowski/Redefence/Cadenus/Nihilist/Swagman/turning-grille), optionally composed with a transposition stage.

Cipher conventions follow the [American Cryptogram Association](https://www.cryptogram.org/resource-area/cipher-types/). The solver exists to crack the Kryptos sculpture's K1–K4.

This program is inspired by various explanations of Jim Gillogly's cipher solving program (that he used for solving the first three ciphers on Kryptos): 

https://groups.google.com/g/sci.crypt/c/hOCNN6L13CM/m/s85aEvsmrl0J

The effort to make this program as efficient as possible was inspired by the homophonic…
