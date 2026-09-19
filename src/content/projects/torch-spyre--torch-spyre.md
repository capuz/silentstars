---
repo: "torch-spyre/torch-spyre"
name: "torch-spyre"
description: "PyTorch backend for IBM's Spyre AIU"
readmeQualityOk: true
url: "https://github.com/torch-spyre/torch-spyre"
homepage: "https://torch-spyre.readthedocs.io/en/latest/"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 58
forks: 219
openIssues: 904
closedIssues: 1337
watchers: 5
contributors: 137
recentReleases: 0
createdAt: "2025-10-16T13:04:20Z"
lastCommitAt: "2026-09-19T00:51:17Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 89
undervaluedScore: 56
maintainers: ["ani300", "ashokponkumar", "dgrove-oss"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8d1e5a9b3922695ffb2dc916662c74c4fef03d8fd27e9e7970d35c59d4d7174/torch-spyre/torch-spyre"
discussionCount: 0
---

# Torch Spyre Device Enablement

This project contains the PyTorch layer C++ and Python code for supporting the [IBM Spyre device](https://github.com/torch-spyre/torch-spyre/blob/HEAD/docs/source/architecture/spyre_accelerator.md) as a new device, named `spyre`, in PyTorch.

## Documentation

Full documentation: <https://torch-spyre.readthedocs.io/>

To build the docs locally:

```bash
pip install -r docs/requirements.txt
cd docs && make html
```

See the [Documentation Contributor Guide](https://github.com/torch-spyre/torch-spyre/blob/HEAD/docs/README.md) for details.

## Setup and Build

Building this project currently requires a development build of the IBM Spyre Software Stack.
Internal build instructions are available to IBM employees through internal documentation channels.

## How to Try It Out

Non-interactive, simple script:

```bash
python3 docs/source/user_guide/examples/tensor_allocate.py

python3 docs/source/user_guide/examples/softmax.py
```

Run torch-spyre tests

```bash
make # (or make help)
make tests
```

You can override which configs to run and pass extra pytest flags via `TEST_CONFIGS` and `PYTEST_ARGS`:
For full details and options to run tests see the [Test…
