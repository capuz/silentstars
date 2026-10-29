---
repo: "meta/DNE-TaaC"
name: "DNE-TaaC"
description: "TAAC (Test-As-A-Config) is a thrift-defined integration test framework for validating datacenter network products and platforms."
readmeQualityOk: true
url: "https://github.com/meta/DNE-TaaC"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 6
forks: 7
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 15
recentReleases: 0
createdAt: "2026-02-19T06:05:15Z"
lastCommitAt: "2026-10-29T00:09:38Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 69
maintainers: ["yelgokul", "Sahil-18", "pavanpatil92"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0d949ee5cc26f781a448a336d1ac049eecd160f6a38090d417a9d7e15db9883/meta/DNE-TaaC"
---

# DNE-Taac

Test As A Config (TAAC) — a configuration-driven network test automation framework. TAAC provides a declarative approach to FBOSS network device testing, where test scenarios are expressed as structured configurations rather than imperative scripts.

A test is a `TestConfig` containing one or more **playbooks**; a playbook runs against a **DUT** (device under test) and is composed of ordered **stages**; each stage is a list of **steps** — the smallest units of work (e.g. `RUN_SSH_COMMAND_STEP`, `DUMMY_STEP`, plus device-management ones). Stages express ordering and parallelism; playbooks group what runs against which device.

## Quick start

Smoke-tested via [facebook/fboss](https://github.com/facebook/fboss)'s public Docker images on **CentOS Stream 9**. Docker is the only host-side dependency.

```bash
# Build the vendor-shippable TAAC image (auto-builds base image if missing)
./docker/build-taac-image.sh
```

That single command builds the FBOSS CentOS base image if missing, compiles the full dep tree (folly, fizz, wangle, mvfst, fbthrift), builds TAAC, and produces `fboss-taac` — a self-contained image with all transitive deps baked in.

The normal command reuses…
