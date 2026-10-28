---
repo: "trueagi-io/PeTTa"
name: "PeTTa"
description: "Efficient MeTTa language implementation in Prolog."
readmeQualityOk: true
url: "https://github.com/trueagi-io/PeTTa"
language: "Prolog"
languages: ["Prolog"]
languagePcts: [88]
stars: 31
forks: 65
openIssues: 9
closedIssues: 48
watchers: 0
contributors: 29
recentReleases: 0
createdAt: "2025-08-28T10:04:39Z"
lastCommitAt: "2026-10-28T09:56:59Z"
lastReleaseAt: "2026-03-02T01:24:16Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 69
maintainers: ["rTreutlein", "patham9", "NatnaelTigistu"]
openGraphImageUrl: "https://opengraph.githubassets.com/b1ff5892f442208463e161b0466a71ac782e21e6c6b2526256f36f5d19d5df11/trueagi-io/PeTTa"
---

## PeTTa

Efficient MeTTa language implementation in Prolog.

Please check out the [Wiki](https://github.com/patham9/PeTTa/wiki) for more information.

### Dependencies

- SWI-Prolog >= 9.3.x
- Python 3.x (for janus Python interop)

### Usage

Example run:

`time sh run.sh ./examples/nars_tuffy.metta`

Several `.metta` files may be named, and they are loaded in exactly the order
given, followed by any flags:

`sh run.sh ./examples/a.metta ./examples/b.metta --strict`

Load order is semantically significant — a declaration or a constructor that
arrives in a later file cannot retroactively inform code already compiled from
an earlier one.

### MORK and FAISS spaces

If MORK and FAISS is installed, execute `sh build.sh` to support MORK-based atom spaces and FAISS-based atom-vector spaces.

The following projects are cloned and built by build.sh:

**Repository:** [mork_ffi](https://github.com/patham9/mork_ffi) dependent on [trueagi-io/mork](https://github.com/trueagi-io/mork)

**Repository:** [faiss_ffi](https://github.com/patham9/faiss_ffi) dependent on [facebookresearch/faiss](https://github.com/facebookresearch/faiss)

### Extension libraries

Please check out [Extension…
