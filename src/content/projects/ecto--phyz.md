---
repo: "ecto/phyz"
name: "phyz"
description: "differentiable physics engine for rust"
readmeQualityOk: true
url: "https://github.com/ecto/phyz"
homepage: "https://phyz.dev"
language: "Rust"
languages: ["Rust", "PLpgSQL"]
languagePcts: [67, 27]
stars: 26
forks: 3
openIssues: 3
closedIssues: 7
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-02-17T15:53:03Z"
lastCommitAt: "2026-08-23T04:09:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 43
maintainers: ["ecto", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2f87baaf45e5e07f8052f6a5da91ff43ba9eb4923b4cece06ca62c5a78e29b9/ecto/phyz"
---

# phyz

Open-source differentiable multi-physics simulation. Pure Rust.

**[Try the demos →](https://phyz.dev)**

Simulate a robot, compute gradients through the entire trajectory, and optimize a controller — in one loop. `phyz` gives you a reverse-mode adjoint over a rollout with exact dual-number Jacobians inside each step, so you can fit physical parameters, reshape a contact surface, or solve inverse problems without finite-differencing the whole simulation. It's the simulation backend for when you need physics to be a differentiable function.

## Installation

```bash
cargo add phyz
```

The `phyz` crate is an umbrella over the **rigid-body stack**: spatial math,
articulated models, Featherstone dynamics, collision, contact, and the
differentiable rollout. Those modules are re-exports of the focused `phyz-*`
crates, so `phyz::collision` and `phyz_collision` are the same thing. It also
adds `phyz::sim` — `Simulator` and its solvers — which is the one piece of code
it owns.

Collision, contact and diff are default features and can be turned off:

```bash
cargo add phyz --no-default-features            # math + model + rigid only
cargo add phyz --no-default-features -F diff    #…
