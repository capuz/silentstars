---
repo: "sapphirepp/sapphirepp"
name: "sapphirepp"
description: "The official Sapphire++ repository "
readmeQualityOk: true
url: "https://github.com/sapphirepp/sapphirepp"
homepage: "https://sapphirepp.org"
language: "C++"
languages: ["C++"]
languagePcts: [90]
stars: 11
forks: 2
openIssues: 8
closedIssues: 5
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2023-11-08T10:25:28Z"
lastCommitAt: "2026-09-29T10:03:27Z"
lastReleaseAt: "2025-12-19T13:56:00Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 74
undervaluedScore: 47
maintainers: ["floschulze", "nils-schween", "TheRumaWo"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e1e923187be0788ed42db974239bfc04381ad675c5624ff6b023af96396fea6/sapphirepp/sapphirepp"
discussionCount: 3
---

</p>

# About

Sapphire++ is an acronym and stands for \"<strong>S</strong>imulating
<strong>a</strong>strophysical <strong>p</strong>lasmas and
<strong>p</strong>articles with <strong>hi</strong>ghly
<strong>r</strong>elativistic <strong>e</strong>nergies in
C<strong>++</strong>\".

It is a code to simulate the interaction of charged particles with a background
plasma, a typical example is the propagation and acceleration of cosmic rays. To
this end it solves a Vlasov-Fokker-Planck (VFP) equation in mixed coordinates,
namely

$$
  \frac{\partial f}{\partial t} + (\mathbf{u} + \mathbf{v}) \cdot \nabla_{x} f -
  \gamma m \frac{\mathrm{D} \mathbf{u}}{\mathrm{D} t} \cdot \nabla_{p}f -
  \mathbf{p} \cdot\nabla_{x} \mathbf{u}\cdot \nabla_{p} f +
  q \mathbf{v} \cdot \left( \mathbf{B} \times \nabla_{p} f \right) =
  \frac{\nu}{2} \Delta_{\theta, \varphi} f + S .
$$

Sapphire++ is developed by
[Nils Schween](https://github.com/nils-schween),
[Florian Schulze](https://github.com/floschulze) and
[Brian Reville](https://github.com/brevrev)
members of the [Astrophysical Plasma
Theory](https://www.mpi-hd.mpg.de/mpi/en/research/scientific-divisions-and-groups/independent-research-groups/apt)…
