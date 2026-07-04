---
repo: "NatLabRockies/torc"
name: "torc"
description: "Workflow management system"
url: "https://github.com/NatLabRockies/torc"
homepage: "https://natlabrockies.github.io/torc/"
language: "Rust"
languages: ["Rust"]
languagePcts: [70]
topics: ["hpc", "pipelines", "workflows", "slurm"]
stars: 18
forks: 6
openIssues: 15
closedIssues: 28
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2025-06-05T20:04:26Z"
lastCommitAt: "2026-07-04T19:19:02Z"
lastReleaseAt: "2026-01-01T00:36:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 68
maintainers: ["daniel-thom", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4db38b0d2fec1a454abf91f4f483717729b4121c8030f16f407689386161a837/NatLabRockies/torc"
discussionCount: 1
---

# Torc

**Turn one YAML file into thousands of orchestrated jobs — on your laptop or across an HPC
cluster.**

Torc runs the messy, real workflows: parameter sweeps, hyperparameter searches, simulation
campaigns. Write the spec once, get automatic dependency resolution, resource-aware scheduling,
OOM/timeout retries, and a live TUI or Dashboard — local or Slurm, no code changes.

## See it in action

A typical Torc workflow: one pre-process job, a parameterized simulation that fans out into many
runs, and a post-process job that aggregates the results.

```yaml
# simulation_sweep.yaml
jobs:
  - name: prepare_inputs
    command: python prepare.py --out=/data/config.xyz
    resource_requirements: small
    output_files: [config]

  - name: simulate_T{temp}_P{pressure:03d}
    command: ./run_sim --config=/data/config.xyz --T={temp} --P={pressure}
    resource_requirements: simulation
    depends_on: [prepare_inputs]
    input_files: [config]
    output_files: [result_T{temp}_P{pressure:03d}]
    parameters:
      temp: "250:400:50"      # 4 temperatures
      pressure: "1:101:25"    # 5 pressures → 20 simulations

  - name: summarize
    command: python summarize.py…
