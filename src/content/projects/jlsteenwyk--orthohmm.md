---
repo: "JLSteenwyk/orthohmm"
name: "orthohmm"
description: "Inference of Ortholog Groups using Hidden Markov Models"
readmeQualityOk: true
url: "https://github.com/JLSteenwyk/orthohmm"
homepage: "https://jlsteenwyk.com/orthohmm/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 39
forks: 0
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-08-07T18:52:52Z"
lastCommitAt: "2026-09-18T14:02:54Z"
lastReleaseAt: "2026-04-26T04:17:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 59
maintainers: ["JLSteenwyk"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa77adee0a9bfca329e73430dd0fff17dc93e7e5264462c22d6648821d8f3733/JLSteenwyk/orthohmm"
---

</a>
    ·
    ·
  </p>
        </a>
        </a>
        </a>
        </a>
        <br />
        </a>
        </a>
        </a>
        </a>   
    </p>
</p>

OrthoHMM infers gene orthology using Hidden Markov Models.<br /><br />
If you found orthohmm useful, please cite *OrthoHMM: Improved Inference of Ortholog Groups using Hidden Markov Models*. Steenwyk et al. 2024, bioRxiv. doi: [10.1101/2024.12.07.627370](https://www.biorxiv.org/content/10.1101/2024.12.07.627370v1).

---

**Performance**

As of v0.2.0, OrthoHMM ships a built-in profile HMM + k-mer prefilter
search engine that replaces the `phmmer` subprocess. The production CLI was
rebenchmarked with summed process-tree memory on a single 32-core node:

| proteomes | proteins | wall time | peak process-tree RSS | orthogroups |
|----------:|---------:|----------:|----------------------:|------------:|
|         5 |   15,932 |      7.0s |             1.36 GiB |      12,995 |

The output includes singleton orthogroups. The previous 20-100 proteome table
came from a separate experimental driver and was removed pending a production
harness rerun. See `PERFORMANCE_OPTIMIZATION.md` for commands, checksums,
stage timings, and…
