---
repo: "cusp-ai-oss/kUPS"
name: "kUPS"
description: "A high-performance toolkit for atomistic simulations in JAX."
readmeQualityOk: true
url: "https://github.com/cusp-ai-oss/kUPS"
homepage: "https://cusp-ai-oss.github.io/kUPS/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 229
forks: 22
openIssues: 10
closedIssues: 61
watchers: 1
contributors: 14
recentReleases: 4
createdAt: "2026-04-16T11:41:47Z"
lastCommitAt: "2026-08-28T12:22:30Z"
lastReleaseAt: "2026-08-18T12:07:18Z"
status: "thriving"
tags: ["community_hub"]
healthScore: 92
undervaluedScore: 33
maintainers: ["n-gao", "jonkhler", "sm4rtm4art"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ab66fea11d38d592bdd1cf834b1103bd672ca24f74b3bf6b1801b5547c716ed/cusp-ai-oss/kUPS"
discussionCount: 21
---

<br>

**A toolkit for building high-performance molecular simulations on JAX**

*k*UPS provides composable, differentiable primitives — samplers, potentials, and propagators — with hardware acceleration on CPU, GPU, and TPU.

[Documentation](https://cusp-ai-oss.github.io/kUPS/) | [Quick Start](#quick-start) | [Features](#features) | [Examples](https://github.com/cusp-ai-oss/kUPS/blob/HEAD/examples/)

</div>

---

## Installation

<table>
<tr>
<td><b>Standard Installation</b></td>
<td>

```bash
pip install kups
```

</td>
</tr>
<tr>
<td><b>GPU Support</b></td>
<td>

```bash
pip install kups[cuda]
```

</td>
</tr>
<tr>
<td><b>Development</b></td>
<td>

```bash
git clone https://github.com/cusp-ai-oss/kups.git
cd kUPS
uv sync
```

</td>
</tr>
</table>

## Quick Start

> [!TIP]
> The repository includes example applications built with *k*UPS in the `examples/` directory.

<details>
<summary><b>Monte Carlo Simulation (GCMC)</b></summary>

```bash
cd examples
kups_mcmc_rigid mcmc_rigid.yaml
```

</details>

<details>
<summary><b>Molecular Dynamics (Lennard-Jones)</b></summary>

```bash
cd examples
kups_md md_lj_argon_nvt.yaml
```

</details>

## Features

<table>
<tr>
<td width="50%">…
