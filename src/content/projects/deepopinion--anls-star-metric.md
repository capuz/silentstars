---
repo: "deepopinion/anls_star_metric"
name: "anls_star_metric"
description: "Official implementation of the ANLS* metric"
readmeQualityOk: true
url: "https://github.com/deepopinion/anls_star_metric"
homepage: "https://arxiv.org/abs/2402.03848"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 25
forks: 0
openIssues: 0
closedIssues: 5
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2024-02-05T08:35:59Z"
lastCommitAt: "2026-07-22T06:10:37Z"
lastReleaseAt: "2026-01-12T14:09:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 52
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd4206395efbe1469e9ae0e0f9bd7c9c79e9ef1346406d8bb16fde3282d22920/deepopinion/anls_star_metric"
---

# ANLS ★
**🌟 A Universal Metric for Generative Large Language Models 🌟**
*Now with benchmarks for gpt-4.5 preview as well as claude-37 and llama-3.1-405B*

</div>

    @misc{anls_star,
        title={ANLS* -- A Universal Document Processing Metric for Generative Large Language Models}, 
        author={David Peer and Philemon Schöpf and Volckmar Nebendahl and Alexander Rietzler and Sebastian Stabinger},
        year={2024},
        eprint={2402.03848},
        archivePrefix={arXiv},
        primaryClass={cs.CL}
    }

## How to use the ANLS* score?
1. `pip install anls_star`
2. Add to your code

```python
from anls_star import anls_score
anls = anls_score("Hello World", "Hello Wrld")
print(anls)
```

4. Thats it!

### Returning the closest match
The `anls_score` function can also be used to return the object which best matches the prediction and can be derived from the ground truth by re-ordering lists, selecting options from tuples etc. by setting the `return_gt` argument to `True` (default is `False`).

As an example:
```python
gt = {'a': ('hello', 'world'), 'b': ['this', 'is', 'a', 'test']}
pred = {'a': 'hello!', 'b': ['a', 'test', 'this', 'be']}
score, closest_gt =…
