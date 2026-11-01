---
repo: "eigenergy/powerio"
name: "powerio"
description: "Power system compiler infrastructure"
readmeQualityOk: true
url: "https://github.com/eigenergy/powerio"
homepage: "https://powerio.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["converter", "electrical-engineering", "parser", "parsing-library", "power-systems", "interoperability"]
stars: 36
forks: 5
openIssues: 25
closedIssues: 196
watchers: 1
contributors: 15
recentReleases: 0
createdAt: "2026-05-01T16:28:11Z"
lastCommitAt: "2026-11-01T22:58:23Z"
lastReleaseAt: "2026-06-23T00:48:00Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 43
maintainers: ["samtalki", "frederikgeth", "BurhanAbdullah"]
openGraphImageUrl: "https://opengraph.githubassets.com/352992aa6f7921178e66f8b7fb2a0ecc0112d07e3894839d9e34bb708b3c62c6/eigenergy/powerio"
---

# PowerIO

  <img
    src="https://raw.githubusercontent.com/eigenergy/powerio/60e0126c/docs/src/assets/powerio-hero.png"
    alt="PowerIO format and matrix flow"
    width="720"
  >

PowerIO reads power system data into typed values, writes those values back
out in the formats other tools read, and builds the sparse matrices and graph
data that solvers consume. The core is Rust, and the Python package, the
Julia package [PowerIO.jl](https://github.com/eigenergy/PowerIO.jl), and the
C ABI expose the same operations under the same names.

A parse returns a `PioModule`, which is one typed value together with its
sources, diagnostics, source map, and history. Depending on what the source
declares, the value is a network, an operating point, a calculation instance,
a solution, a time series, a scenario set, a geographic layer, or a PSS/E
contingency analysis file.

[Convert files in the browser](https://powerio.dev/convert/), including mixed
transmission and distribution batches. Files stay on the computer.

## Install

```sh
cargo add powerio                 # parsing, emission, PowerIO IR
cargo add powerio -F matrix       # and sparse matrices, sensitivities, graph data
pip install…
