---
repo: "LessComplexity/mapal"
name: "mapal"
description: "Parallel-first programming language. Syntax creates a categorical dataflow/execution graph -> the program, and the graph is what gets optimized: dataflow-first, not the control-flow IRs everyone else optimizes on -> optimizations beyond traditional compilers. Same code -> run everywhere: CPU, GPU, FPGA, ASIC -> all in one."
readmeQualityOk: true
url: "https://github.com/LessComplexity/mapal"
language: "Rust"
languages: ["Rust", "Sass"]
languagePcts: [41, 40]
topics: ["code-generation", "compiler", "cuda", "dataflow", "fpga", "gpu", "llvm", "parallel-computing", "programming-language", "rust"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-07-26T08:08:03Z"
lastCommitAt: "2026-11-27T10:40:02Z"
lastReleaseAt: "2026-11-08T16:38:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 51
maintainers: ["LessComplexity"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f2abf9fb6e74bcdee1895cb31f4e3cfaebc94c6e98736fe6f7cf7034b042350/LessComplexity/mapal"
---

![Badge Language]
![Badge Numerics]<br>

**Describe how data flows. Mapal places it where it runs best, on any hardware.**

## A first look

```flow
// softmax: turn scores into probabilities that add up to 1.
fn softmax<n>(scores: [f32; n]) -> [f32; n] {
    n -> iota -> positions;
    (scores[0], positions) -> fold {
        top, i -> (scores[i] > top) -> {
            -true-> scores[i];
            -false-> top;
        }
    } -> largest;
    positions -> map {
        i -> scores[i] - largest -> exp
    } -> weights;
    (0.0, positions) -> fold {
        sum, i -> sum + weights[i]
    } -> total;
    positions -> map {
        i -> weights[i] / total
    } -> ret;
}

fn main() {
    [1.0, 2.0, 3.0, 4.0] -> softmax -> probabilities;
    probabilities[3] -> println;    // 0.6439143
}
```

`a -> f -> b` means "a flows through f and becomes b". A `map` does something to every item, and the items are
independent. A `fold` combines many values into one. That is all the program says, so the compiler is free to decide
the rest: what runs in parallel, where the data lives, and whether it runs on the CPU, the GPU or both. There are no
threads, kernels or tile sizes in the source.
