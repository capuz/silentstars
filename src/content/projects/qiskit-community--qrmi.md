---
repo: "qiskit-community/qrmi"
name: "qrmi"
description: "Thin and vendor agnostic layer to access, control and monitor underlying on-prem or cloud quantum computers"
readmeQualityOk: true
url: "https://github.com/qiskit-community/qrmi"
homepage: "https://qiskit-community.github.io/qrmi/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [65, 26]
topics: ["hpc", "qiskit", "quantum", "quantum-computing", "resource-management", "c", "lua", "python3", "rust", "workload-managers"]
stars: 65
forks: 42
openIssues: 16
closedIssues: 62
watchers: 5
contributors: 31
recentReleases: 0
createdAt: "2025-08-05T20:10:30Z"
lastCommitAt: "2026-10-22T08:51:58Z"
lastReleaseAt: "2026-03-27T21:03:06Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 93
undervaluedScore: 57
maintainers: ["ohtanim", "awennersteen", "badtst"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1032777916/3726e79e-905e-4991-bcf0-061556297c14"
---

# Quantum Resource Management Interface (QRMI)

> [!IMPORTANT]
> **Deprecation notice (since v0.23.0)**
>
> The IBM Qiskit Runtime Service API has been renamed to the IBM Quantum Compute Service API. Resource names and environment variable prefixes
> have changed accordingly. Legacy names remain supported until **November 21, 2026**. See the [migration guide](https://github.com/qiskit-community/qrmi/blob/main/docs/migration/0.23.0.md) for details.

The *Quantum Resource Management Interface* (QRMI) is a vendor-agnostic library for high-performance compute (HPC) systems to access, control, and monitor the behavior of quantum computational resources. It acts as a thin middleware layer that abstracts away the complexities associated with controlling quantum resources through a set of simple APIs. Written in Rust, this interface also exposes Python, C and Lua APIs for ease of integration into nearly any computational environment.

The source code to build and deploy QRMI is available [here](https://github.com/qiskit-community/qrmi).

An optional `task_runner` command line tool to execute quantum payloads against quantum hardware is included in the Python package. For more information,…
