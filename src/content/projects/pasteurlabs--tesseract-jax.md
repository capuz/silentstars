---
repo: "pasteurlabs/tesseract-jax"
name: "tesseract-jax"
description: "Execute + differentiate Tesseracts as part of JAX programs, with full support for function transformations like JIT, grad, and more. ⚡ "
readmeQualityOk: true
url: "https://github.com/pasteurlabs/tesseract-jax"
homepage: "https://docs.pasteurlabs.ai/projects/tesseract-jax/latest/"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["automatic-differentiation", "differentiable-programming", "jax", "remote-procedure-call", "scientific-machine-learning", "tesseract"]
stars: 36
forks: 5
openIssues: 8
closedIssues: 19
watchers: 3
contributors: 12
recentReleases: 2
createdAt: "2025-04-21T08:46:49Z"
lastCommitAt: "2026-09-22T08:45:20Z"
lastReleaseAt: "2026-07-21T11:28:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 61
maintainers: ["PasteurBot", "dionhaefner", "jpbrodrick89"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9084fa97b56c95263f04abff97fd5de59e8358272af999f92f4506f0e5502c3/pasteurlabs/tesseract-jax"
---

### Tesseract-JAX

Tesseract-JAX is a lightweight extension to [Tesseract Core](https://github.com/pasteurlabs/tesseract-core) that makes Tesseracts look and feel like regular [JAX](https://github.com/jax-ml/jax) primitives, and makes them jittable, differentiable, and composable.

[Read the docs](https://docs.pasteurlabs.ai/projects/tesseract-jax/latest/) |
[Explore the examples](https://github.com/pasteurlabs/tesseract-jax/tree/main/examples) |
[Report an issue](https://github.com/pasteurlabs/tesseract-jax/issues) |
[Talk to the community](https://si-tesseract.discourse.group/) |
[Contribute](https://github.com/pasteurlabs/tesseract-jax/blob/HEAD/CONTRIBUTING.md)

---

The API of Tesseract-JAX consists of a single function, [`apply_tesseract(tesseract_client, inputs)`](https://docs.pasteurlabs.ai/projects/tesseract-jax/latest/content/api.html#tesseract_jax.apply_tesseract), which is fully traceable by JAX. This enables end-to-end autodifferentiation and JIT compilation of Tesseract-based pipelines:

```python
@jax.jit
def vector_sum(x, y):
    res = apply_tesseract(vectoradd_tesseract, {"a": {"v": x}, "b": {"v": y}})
    return res["vector_add"]["result"].sum()…
