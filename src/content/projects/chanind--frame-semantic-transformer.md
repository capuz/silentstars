---
repo: "chanind/frame-semantic-transformer"
name: "frame-semantic-transformer"
description: "Frame Semantic Parser based on T5 and FrameNet"
readmeQualityOk: true
url: "https://github.com/chanind/frame-semantic-transformer"
homepage: "https://chanind.github.io/frame-semantic-transformer"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["framenet", "huggingface", "nlp", "semantic-parsing", "t5", "transformers"]
stars: 70
forks: 14
openIssues: 10
closedIssues: 7
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2022-04-30T12:52:35Z"
lastCommitAt: "2026-08-09T04:45:58Z"
lastReleaseAt: "2023-02-23T21:42:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 27
maintainers: ["chanind"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c87b977cbe46a2c6e1519a5dca776c462ba94173e0610c6cf196d58def1533f/chanind/frame-semantic-transformer"
---

# Frame Semantic Transformer

Frame-based semantic parsing library trained on [FrameNet](https://framenet2.icsi.berkeley.edu/) and built on HuggingFace's [T5 Transformer](https://huggingface.co/docs/transformers/model_doc/t5)

**Live Demo: [chanind.github.io/frame-semantic-transformer](https://chanind.github.io/frame-semantic-transformer)**

Full docs: [frame-semantic-transformer.readthedocs.io](https://frame-semantic-transformer.readthedocs.io/)

## About

This library draws heavily on [Open-Sesame](https://github.com/swabhs/open-sesame) ([paper](https://arxiv.org/abs/1706.09528)) for inspiration on training and evaluation on FrameNet 1.7, and uses ideas from the paper [Open-Domain Frame Semantic Parsing Using Transformers](https://arxiv.org/abs/2010.10998) for using T5 as a frame-semantic parser. [SimpleT5](https://github.com/Shivanandroy/simpleT5) was also used as a base for the initial training setup.

More details: [FrameNet Parsing with Transformers Blog Post](https://chanind.github.io/ai/2022/05/24/framenet-transformers.html)

## Performance

This library uses the same train/dev/test documents and evaluation methodology as Open-Sesame, so that the results should be…
