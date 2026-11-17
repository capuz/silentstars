---
repo: "prooflinedev/sdk-python"
name: "sdk-python"
description: "Read and request Proofline pull request reviews from Python with typed synchronous and asynchronous clients."
readmeQualityOk: true
url: "https://github.com/prooflinedev/sdk-python"
homepage: "https://proofline.sh/docs/sdks/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["asyncio", "code-review", "openapi", "proofline", "python", "python-sdk"]
stars: 5
forks: 31
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-10-15T13:50:38Z"
lastCommitAt: "2026-11-17T14:38:52Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 84
undervaluedScore: 68
maintainers: ["mohsen1", "github-actions[bot]", "Mamut446"]
openGraphImageUrl: "https://opengraph.githubassets.com/35e292b79c4236b4a7c634d26f556ca3aae1b94c45ae1d7880a0ee9db9fd0d1b/prooflinedev/sdk-python"
---

# proofline-sdk

`proofline-sdk` provides typed synchronous (`ProoflineClient`) and asynchronous (`AsyncProoflineClient`) Python clients for the [Proofline](https://proofline.sh) review API. The clients read and request reviews with a scoped API token, and include pagination, waiting for a review, retries, and typed errors. The import package is `proofline`. Python 3.11 or newer is required.

This repository is the published distribution of the Proofline Python SDK. The public OpenAPI contract in `openapi.public.json` generates the client and models in `proofline/_generated/`. [Open an issue](https://github.com/prooflinedev/sdk-python/issues) for changes to the OpenAPI contract, generated code, or workflows. Pull requests are welcome for the hand-written client in `proofline/client.py`, transport and helpers outside `proofline/_generated/`, and tests in `tests/`.

## Installation and authentication

```sh
pip install proofline-sdk
```

```python
import os
from proofline import ProoflineClient

with ProoflineClient(os.environ["PROOFLINE_TOKEN"]) as client:
    ...
```

When no token is passed, the clients read `PROOFLINE_TOKEN` from the environment, keep the token in memory, and…
