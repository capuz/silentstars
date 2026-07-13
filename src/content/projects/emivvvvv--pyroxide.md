---
repo: "Emivvvvv/pyroxide"
name: "pyroxide"
description: "A high-concurrency, lock-free task broker bridging Python and Rust via PyO3. Bypasses the GIL for high-throughput background processing."
readmeQualityOk: true
url: "https://github.com/Emivvvvv/pyroxide"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [53, 46]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-12T09:31:21Z"
lastCommitAt: "2026-07-13T06:40:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 29
maintainers: ["Emivvvvv"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2177a9f3f9e309668df62a3307db6b5dc847595d2e182f067de23e9a5e0e934/Emivvvvv/pyroxide"
---

<br />
  </a>

  <h3 align="center">Pyroxide</h3>

    A lock-free, high-concurrency background task broker for Python, powered by Rust.
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    &middot;
    &middot;
    &middot;
  </p>
</div>

---

Pyroxide is a high-concurrency, lock-free background task broker designed to bridge Python and Rust. It allows CPU-bound or blocking workloads to bypass the Python Global Interpreter Lock (GIL) with minimal memory overhead and zero CPU-sleep polling.

With Pyroxide, you can seamlessly offload tasks from Python to a background native OS thread pool. Tasks block natively on the OS kernel level using signaling primitives (`Condvar`) rather than CPU-burning sleep loops, allowing Python to yield control instantly.

## Key Features

*   **Bypass the Python GIL**: Explicitly release the Python GIL via PyO3 thread-detaching, running heavy computations concurrently on native OS threads.
*   **Zero-Overhead Status Tracking**: Avoids global lock contention using an atomic-state (`AtomicU8`) task tracking structure per task slot under a concurrent sharded/read-lock Slab architecture.
*   **Instant Condvar Signaling**: Replaces…
