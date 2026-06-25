---
repo: "torch-spyre/torch-spyre"
name: "torch-spyre"
description: "PyTorch backend for IBM's Spyre AIU"
url: "https://github.com/torch-spyre/torch-spyre"
homepage: "https://torch-spyre.readthedocs.io/en/latest/"
language: "Python"
languages: ["Python"]
languagePcts: [85]
stars: 53
forks: 177
openIssues: 712
closedIssues: 786
watchers: 5
contributors: 104
recentReleases: 0
createdAt: "2025-10-16T13:04:20Z"
lastCommitAt: "2026-06-25T01:20:20Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 87
undervaluedScore: 49
maintainers: ["anubhavjana", "dgrove-oss", "HarikrishnanBalagopal"]
openGraphImageUrl: "https://opengraph.githubassets.com/04146502190d199e7c80c5a6cb36fe6009d249c96ffeef4c911bfe9ac88554d4/torch-spyre/torch-spyre"
discussionCount: 0
---

# Torch Spyre Device Enablement

This project contains the PyTorch layer C++ and Python code for supporting the [IBM Spyre device](./docs/source/architecture/spyre_accelerator.md) as a new device, named `spyre`, in PyTorch.

## Documentation

Full documentation: <https://torch-spyre.readthedocs.io/>

To build the docs locally:

```bash
pip install -r docs/requirements.txt
cd docs && make html
```

See the [Documentation Contributor Guide](./docs/README.md) for details.

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
For full details and options to run tests see the [Test Framework Runner guide](tests/docs/test_framework_instructions.md).

Interactive:

```
python3
>>>…
