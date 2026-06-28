---
repo: "matsunagalab/mdclaw"
name: "mdclaw"
description: "Molecular dynamics simulation skills for AI agents"
url: "https://github.com/matsunagalab/mdclaw"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-10-18T08:46:40Z"
lastCommitAt: "2026-06-28T11:37:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 54
maintainers: ["ymatsunaga"]
openGraphImageUrl: "https://opengraph.githubassets.com/0cca71720a20b355d46abf94e6a42779f62e93f1a9860aba11467ef86195173a/matsunagalab/mdclaw"
---

</p>

# MDClaw

MDClaw provides skills and CLIs for vibe-MD (Molecular Dynamics) simulations and autonomous
scientific investigation in the Amber/OpenMM ecosystem. It helps an AI agent
turn scientific intent into reproducible atomistic work: prepare systems, run
equilibration and production MD, analyze trajectories, branch hypotheses, and
package evidence with provenance.

## What MDClaw Can Do

- Turn a scientific question into a study plan with observables and
  decision criteria, then run the planned MD jobs end-to-end.
- Prepare MD systems from PDB IDs, AlphaFold/UniProt entries, or local
  structure files.
- Generate monomer conformational source ensembles from MD surrogate models
  such as BioEmu, then hand selected candidates to the standard MD workflow.
- Start from a study-level scientific question, translate it into a small MD
  plan, then organize one or more job DAGs under that study.
- Inspect chains, ligands, waters, ions, glycans, DNA/RNA, and modified
  residues before committing to a setup.
- Clean structures, preserve selected ligands when safe, solvate systems, and
  assign Amber/OpenMM force fields.
- Build OpenMM-ready topology artifacts, then run…
