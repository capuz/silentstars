---
repo: "raven-ml/raven"
name: "raven"
description: "Modern scientific computing for OCaml"
readmeQualityOk: true
url: "https://github.com/raven-ml/raven"
homepage: "https://raven-ml.dev"
language: "OCaml"
languages: ["OCaml"]
languagePcts: [81]
stars: 417
forks: 59
openIssues: 1
closedIssues: 100
watchers: 6
contributors: 22
recentReleases: 0
createdAt: "2025-03-14T03:22:19Z"
lastCommitAt: "2026-11-07T15:48:21Z"
lastReleaseAt: "2026-03-14T08:52:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 39
maintainers: ["tmattio"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc214110dcab5bc479c32946f90323437bd2c929161c9223363131e8cb655410/raven-ml/raven"
---

---

Raven is machine learning and scientific computing in OCaml, from neural networks to probabilistic inference to numerical methods, all the way down to the GPU, with no dependencies. It covers what NumPy, JAX, PyTorch, NumPyro, SciPy, pandas and Matplotlib cover in Python, as libraries that compose as ordinary OCaml code.

> Raven is **alpha**. APIs will change. [Feedback welcome.](https://github.com/raven-ml/raven/issues)

```ocaml
(* nx — n-dimensional arrays *)
let x = Nx.linspace Nx.float32 0. 10. 100
let y = Nx.sin x

(* rune — automatic differentiation *)
let grad_f = Rune.grad' (fun x -> Nx.sum (Nx.mul x x)) x

(* brot — tokenization *)
let tokenizer = Brot.from_file "tokenizer.json" |> Result.get_ok
let ids = Brot.encode_ids tokenizer "The meaning of life is"

(* jera — numerical methods *)
let cos_integral = Jera.Quad.(fixed (Rule.gauss 10) Nx.cos (Range.v (Nx.zeros_like x) x))

(* kaun — neural networks *)
let layer = Kaun.Linear.init ~key:(Nx.Rng.key 0) ~inputs:100 ~outputs:10
let logits = Kaun.Linear.apply layer x

(* talon — dataframes *)
let df = Talon.v [
  "name", Talon.Column.v Talon.Type.string [| "Alice"; "Bob"; "Charlie" |];
  "score", Talon.Column.v…
