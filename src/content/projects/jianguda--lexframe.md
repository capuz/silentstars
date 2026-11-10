---
repo: "jianguda/lexframe"
name: "lexframe"
description: "A toolkit for interpreting LM residual streams in their native semantics"
readmeQualityOk: true
url: "https://github.com/jianguda/lexframe"
homepage: "https://pypi.org/project/lexframe/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 30
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-10-18T11:37:01Z"
lastCommitAt: "2026-11-10T14:48:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 14
maintainers: ["jianguda"]
openGraphImageUrl: "https://opengraph.githubassets.com/229ab2cc933436ead096589f2bbaf7f4e8f4b3a38271f5d9f20ebdf8416dffa8/jianguda/lexframe"
---

LexFrame reads every hidden state of a language model, at every layer and position, in the model's own vocabulary: its logits, its gradients, and the semantic bases that link them, for every label.
It is **model-native**: the state runs through the model's own remaining layers, calibrated once on unlabelled text, with nothing fitted to the output.
It is **context-aware**: it separates what the state carries by itself from what the context adds later, and steers or ablates the model's run with the full context, carrying every move forward to the output.

## Quickstart

```bash
pip install lexframe
```

```python
import lexframe as lf
frame = lf.Frame(model, tokenizer).calibrate(texts)  # calibrate once
text = "The Eiffel Tower is located in the city of"
trace = frame.trace(text)                            # last token
trace.logits().softmax(-1).topk(5)                   # top labels per layer
state = trace[16]                                    # layer 16
b = state.basis([" Paris", " London"])               # label bases
state.compose(state.logits())                        # reconstruct the state
state.project(state.vector)                          # recover its logits
moved =…
