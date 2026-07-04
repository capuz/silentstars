---
repo: "rl-lang/rl-lang"
name: "rl-lang"
description: "Fast to write. Simple to read. Built in Rust from the ground up."
url: "https://github.com/rl-lang/rl-lang"
homepage: "https://rl-lang.github.io/rl-lang/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["programming-language", "rl", "rust"]
stars: 9
forks: 5
openIssues: 17
closedIssues: 26
watchers: 1
contributors: 6
recentReleases: 6
createdAt: "2026-06-04T19:55:04Z"
lastCommitAt: "2026-07-04T06:11:53Z"
lastReleaseAt: "2026-06-29T11:11:47Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine", "fork_magnet"]
healthScore: 92
undervaluedScore: 64
maintainers: ["MohamedGonem"]
openGraphImageUrl: "https://opengraph.githubassets.com/d21a992944f45f26d2665f41244129e13359787c8ca516147741b23d21a89f4c/rl-lang/rl-lang"
discussionCount: 1
---

<h1>RL</h1>
  <p>A statically-typed interpreted language written in Rust with a clean syntax, a TUI REPL, and a growing standard library.</p>
</div>

## Quick look

```rl
get println, len from std::io
get pow, mod, factorial, fibonacci, is_prime from std::math
get PI from std::math::consts

fn collatz(int n) {
    dec int steps = 0
    while (n != 1) {
        if (mod(n, 2) == 0) {
            n = n / 2
        } else {
            n = n * 3 + 1
        }
        steps += 1
    }
    return steps
}

println(factorial(10))    // 3628800
println(fibonacci(15))    // 610
println(is_prime(97))     // true
println(collatz(27))      // 111

dec float r = 5.0
println(PI() * pow(r, 2.0))  // 78.53981633974483
```

## Installation

### From source

```bash
git clone https://github.com/rl-lang/rl-lang
cd rl-lang
cargo build --release
# binary at target/release/rl
```

### Via cargo install

```bash
cargo install rl-lang
```

## Usage

```bash
rl run <file.rl>    # run a source file
rl repl             # start the TUI REPL
rl check <file.rl>  # check for errors without running
rl dev              # run project via rl.toml
rl new <name>       # create a new project
rl docs             # print…
