---
repo: "askforarun/AMBER2LAMMPS"
name: "AMBER2LAMMPS"
description: "AMBER2LAMMPS: A Python Utility for Converting AMBER Molecular Dynamics Files to LAMMPS Data Format"
readmeQualityOk: true
url: "https://github.com/askforarun/AMBER2LAMMPS"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["amber", "ambertools", "lammps", "topology"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2025-09-12T11:56:57Z"
lastCommitAt: "2026-11-16T11:54:46Z"
lastReleaseAt: "2026-11-15T23:16:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 85
maintainers: ["askforarun", "ajschult"]
openGraphImageUrl: "https://opengraph.githubassets.com/47f98a343b06a09facc6b48b6ef4f5e172f0e764156fe2f9b62c5ef3c6866346/askforarun/AMBER2LAMMPS"
---

---

# Overview

**AMBER2LAMMPS is a validated, provenance-aware, and agent-ready framework for
AMBER-family simulations in LAMMPS.** Agent-ready means that external agents
can use bounded MCP conversion and validation tools with compact structured
responses; it does not mean that an LLM is embedded in the converter.

## Watch the 35-second demo

Click the animated preview to open the full MP4. The demo covers PyPI installation, CLI conversion,
the MCP server for Claude and Codex, generated LAMMPS files, and direct AMBER `sander` validation.

Python utility that converts AMBER `.prmtop`/PDB files to LAMMPS data/parameter formats through CLI or Python API, featuring validation-first error handling. **Can handle multiple AMBER topology files for mixed molecular systems (e.g., drug + solvent mixtures).**

## Key Features

- **🔧 Multi-Topology Conversion**: Convert mixed systems using multiple AMBER `.prmtop` files in a single run
- **🧪 Mixed & Replicated Systems**: Handle mixtures (e.g., drug + solvent) and multiple copies of one molecule via `-c`
- **✅ Validation-First**: Clear errors for missing files, mismatched list lengths, and PDB atom-count/order issues
- **🔄 CLI + Python…
