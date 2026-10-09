---
repo: "dunyuliu/DR4GM"
name: "DR4GM"
description: "Dynamic Rupture for Ground Motion"
readmeQualityOk: true
url: "https://github.com/dunyuliu/DR4GM"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["dynamic-rupture", "earthquake", "ground-motion", "high-performance-computing"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2024-03-06T07:32:25Z"
lastCommitAt: "2026-10-09T18:57:00Z"
lastReleaseAt: "2026-10-09T18:00:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 75
maintainers: ["dunyuliu"]
openGraphImageUrl: "https://opengraph.githubassets.com/df3bbf46f8875c06c3a54286150a97bb5a63cda128123d7c700b4d348428d1bf/dunyuliu/DR4GM"
---

# DR4GM — Data Repository for Ground Motion

Process high-resolution physics-based earthquake simulations into ground-motion
metrics (PGA, PGV, PGD, CAV, RSA) and distance-binned statistics, and compare
against NGA-West2 GMPEs.

**Author**: Dunyu Liu (<dliu@ig.utexas.edu>), Institute for Geophysics, UT Austin.

## Reproduce manuscript Figs 11–19 (from Zenodo data, ~5 min)

```bash
git clone https://github.com/dunyuliu/dr4gm.git
cd dr4gm
source scripts/install.sh                                         # pip + PATH/PYTHONPATH

# Download ~14 MB Zenodo bundle of post-processed NPZs (22 scenarios × 3 NPZ each)
curl -L -o dr4gm_data.tar.gz \
  https://zenodo.org/record/XXXXXXX/files/dr4gm_data_v0.1.1.tar.gz   # TODO: real DOI
mkdir -p results && tar xzf dr4gm_data.tar.gz -C results/
# After extract: results/production_runs/<code>/<scenario>/{ground_motion_metrics,gm_statistics,geometry}.npz

bash scripts/regen_ensemble_figures.sh                            # Figs 11–19 → figs_to_publish/
```

That's it — every manuscript figure part lands in
`results/production_runs/figs_to_publish/Figure<NN><letter>.png`.

Code letters in filenames: A=WaveQLab3D, B=SeisSol, C=SORD, D=EQdyna,
E=MAFE,…
