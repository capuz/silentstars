---
repo: "fzakaria/rewindvm"
name: "rewindvm"
description: "Deterministic Linux VMs you can scrub, rewind and fork. Find and replay flaky builds and tests."
readmeQualityOk: true
url: "https://github.com/fzakaria/rewindvm"
homepage: "https://rewindvm.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["deterministic", "gpui", "kvm", "nix", "record-replay", "time-travel-debugging"]
stars: 113
forks: 6
openIssues: 0
closedIssues: 3
watchers: 5
contributors: 4
recentReleases: 10
createdAt: "2026-09-30T20:54:55Z"
lastCommitAt: "2026-11-01T22:55:11Z"
lastReleaseAt: "2026-10-10T22:49:37Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 38
maintainers: ["fzakaria", "adeci"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ec20a455c325d72bf5a32c56a83847e59428b570d3e71e72908e84ae2fb703e/fzakaria/rewindvm"
---

Catch a flaky build or test once, then replay it exactly, step through it, and branch it.

Rewind VM runs a Nix build, a test suite or any Linux command inside a KVM
virtual machine whose every run is a function of its inputs. The same inputs
give the same run, at the same steps, every time. A failure you saw once is a
failure you keep: replay it, scrub through it step by step, read any file as it
was at any step, and fork it with a different thread interleaving from any
point.

```console
$ rewind check github:fzakaria/rewindvm#mylib
schedule   0: exited:0       6169 steps  a9d703ba8977  run 6380bb57fcb451da
schedule   1: exited:0       7202 steps  a9d703ba8977  run e5003a7041880029
schedule   2: exited:0       7233 steps  a9d703ba8977  run 70416cb698a5d521
...
schedule   6: exited:2       5468 steps    run 1506c6347419c2d2
...

schedule 6 ends differently from schedule 0; finding the step that decides it
schedule 6 limited to steps 3629..5140 still ends differently
step 5139 decides it: a request to switch threads there makes the run fail

passing: run 1989f6d02c080616, schedule 6 over steps 3629..5139
failing: run 5c910df9774b38f2, schedule 6 over steps 3629..5140
the two are…
