---
repo: "mochi-hpc/mochi-margo"
name: "mochi-margo"
description: "Argobots bindings for the Mercury RPC library"
readmeQualityOk: true
url: "https://github.com/mochi-hpc/mochi-margo"
language: "C"
languages: ["C"]
languagePcts: [98]
stars: 27
forks: 10
openIssues: 32
closedIssues: 164
watchers: 9
contributors: 9
recentReleases: 0
createdAt: "2021-03-01T23:40:41Z"
lastCommitAt: "2026-10-06T10:42:51Z"
lastReleaseAt: "2022-05-25T13:22:58Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 87
undervaluedScore: 42
maintainers: ["mdorier", "klasalx"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3fb99856580c38f8ff9a880d3957e6bf69fc7fd324f5549b123be5edd07cc33/mochi-hpc/mochi-margo"
---

# Margo

Margo provides Argobots-aware bindings to the Mercury RPC library.

Mercury (https://mercury-hpc.github.io/) is a remote procedure call
library optimized for use in HPC environments.  Its native API presents a
callback-oriented interface to manage asynchronous operation.  Argobots
(https://www.argobots.org/) is a user-level threading package.

Margo combines Mercury and Argobots to simplify development of distributed
services.  Mercury operations are presented as conventional blocking
operations, and RPC handlers are presented as sequential threads.  This
configuration enables high degree of concurrency while hiding the
complexity associated with asynchronous communication progress and callback
management.

Internally, Margo suspends callers after issuing a Mercury operation, and
automatically resumes them when the operation completes.  This allows
other concurrent user-level threads to make progress while Mercury
operations are in flight without consuming operating system threads.
The goal of this design is to combine the performance advantages of
Mercury's native event-driven execution model with the progamming
simplicity of a multi-threaded execution model.

A…
