---
repo: "sifr-lang/sifr"
name: "sifr"
description: "Sifr Compiler: Python syntax. Rust performance."
readmeQualityOk: true
url: "https://github.com/sifr-lang/sifr"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
stars: 11
forks: 2
openIssues: 69
closedIssues: 207
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-14T00:48:49Z"
lastCommitAt: "2026-10-21T23:36:34Z"
lastReleaseAt: "2026-06-20T19:20:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 55
maintainers: ["yaseralnajjar"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9f64603d288b1fec56b256f72888b05656ecc795b254bf763307ba016a0fd1a/sifr-lang/sifr"
discussionCount: 0
---

# sifr

**Python syntax. Rust performance. If it compiles, it works.**

Sifr is a compiled language that looks like Python but compiles to Rust, producing native binaries. It enforces static typing, safe error handling, and ownership **all at compile time** so your programs never crash at runtime.

## Why sifr?

- **Write Python, run Rust.** Familiar syntax, native speed.
- **No runtime crashes.** Indexing returns `Option`, errors return `Result` - the compiler forces you to handle them.
- **No exceptions.** `try`/`except` is pattern matching on `Result`, not stack unwinding.
- **Ownership without the pain.** Function args borrow by default. No lifetime annotations. The compiler figures it out.
- **TypeScript-style types.** Union types, literal types, type narrowing - all first-class.

## Examples

**Union types and safe indexing** - no crashes, ever.

```python
def main():
    users: dict[str, int] = {"alice": 30, "bob": 25}

    age: int | None = users["charlie"]  # missing key returns None, not a crash
    if age is not None:
        print(f"age: {age}")
    else:
        print("user not found")

    # union types narrow automatically
    def show(val: int | str) -> str:…
