---
repo: "g1mn/pqproof"
name: "pqproof"
description: "Offline check that a post-quantum (PQC) migration is complete: the same rules judge the code before and after, with evidence anyone can recompute. Also matches KpqC implementations against reference KATs."
readmeQualityOk: true
url: "https://github.com/g1mn/pqproof"
homepage: "https://g1mn.github.io/pqproof/"
language: "Python"
languages: ["Python"]
languagePcts: [66]
topics: ["cbom", "cryptography", "kpqc", "migration", "ml-dsa", "ml-kem", "post-quantum", "post-quantum-cryptography", "pqc", "security-audit"]
stars: 6
forks: 1
openIssues: 15
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-11-18T02:24:34Z"
lastCommitAt: "2026-11-25T13:21:04Z"
lastReleaseAt: "2026-11-22T13:39:24Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 73
undervaluedScore: 55
maintainers: ["g1mn", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1462217001/4f21c155-26ed-4cc1-b3ec-30501aac3ba2"
discussionCount: 2
---

The same rules judge the code before and after, with no AI model in the verdict. It also matches KpqC implementations against pinned reference KATs without running them.

---

### [Everything is on the site: g1mn.github.io/pqproof](https://g1mn.github.io/pqproof/?lang=en)
> Usage, what it judges, public test results, the KpqC implementation check, PQC standards mappings (NIST IR 8547, the Korean pilot call, and the KISA guide once published), the KISA AI security manual mapping, limits and release notes, in English and Korean. Built by a contest participant; the Ministry of Science and ICT and KISA have not reviewed or endorsed it.

---

## Quick start

```bash
pip install pqproof
pqproof doctor                       # what it found and what is missing
ex=$(pqproof examples)               # the bundled before and after trees
pqproof "$ex/classic" "$ex/pqc"       # try it: RSA and ECDSA moved to ML-KEM-768 and ML-DSA-65, a pass
pqproof <original> <converted>       # judge your two trees, write the evidence folder
pqproof --verify <output folder>     # recompute the evidence hash and every file hash
FAIL_ON_REVIEW=1 pqproof impl judge answers.json   # KpqC implementation check
```
