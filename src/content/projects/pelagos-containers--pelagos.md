---
repo: "pelagos-containers/pelagos"
name: "pelagos"
description: "Daemonless Linux container runtime with a Lisp scripting interface — security-by-default, library API, full networking stack, OCI images, and multi-service orchestration"
readmeQualityOk: true
url: "https://github.com/pelagos-containers/pelagos"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["containers", "daemonless", "linux", "lisp", "namespaces", "orchestration", "rust", "seccomp"]
stars: 16
forks: 2
openIssues: 17
closedIssues: 318
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2021-06-01T13:37:19Z"
lastCommitAt: "2026-11-07T16:12:21Z"
lastReleaseAt: "2026-02-24T20:14:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 67
maintainers: ["skeptomai"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b5633927002d388027d9e50f3d8517bb3e0bb5b42f1a09b604739a45e402b91/pelagos-containers/pelagos"
---

# Pelagos

**Pelagos** is a daemonless Linux container runtime written in Rust. It can run a
single container or orchestrate a multi-service stack — and its primary interface
is a Lisp scripting language, not YAML.

The `.reml` scripting layer lets you express things that declarative config cannot:
run a migration before the app starts, wait for a port to be ready, react to
failure with cleanup logic, or build a dependency graph that executes in parallel.
A runtime that is programmable from first principles.

Pelagos is also an embeddable Rust library, making it possible to add container
isolation directly to your own programs without spawning a daemon or shelling out
to Docker.

**[User Guide](https://github.com/pelagos-containers/pelagos/blob/HEAD/docs/USER_GUIDE.md)** — full CLI reference, networking, storage,
security, scripting, and more.

---

## What makes it different

| | Pelagos | Docker | runc |
|--|--------|--------|------|
| Daemon required | ❌ | ✅ | ❌ |
| Library API | ✅ | ❌ | ❌ |
| Config language | Lisp (`.reml`) | YAML | JSON |
| Imperative scripting | ✅ full language | ❌ | ❌ |
| Security-by-default | ✅ all containers | opt-in | opt-in |
| Rootless networking | ✅…
