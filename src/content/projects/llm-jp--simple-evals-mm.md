---
repo: "llm-jp/simple-evals-mm"
name: "simple-evals-mm"
description: "A lightweight library for evaluating vision language models."
readmeQualityOk: true
url: "https://github.com/llm-jp/simple-evals-mm"
homepage: "https://llm-jp.github.io/simple-evals-mm/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [74, 20]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 22
recentReleases: 1
createdAt: "2026-03-28T02:40:06Z"
lastCommitAt: "2026-10-25T08:40:04Z"
lastReleaseAt: "2026-08-20T07:56:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 60
maintainers: ["speed1313"]
openGraphImageUrl: "https://opengraph.githubassets.com/9cb36eb42b42850b95c9c9e0a0343a48c21d575e2b6afc2630ab7f9937a9e65b/llm-jp/simple-evals-mm"
---

simple-evals-mm is a lightweight, highly extensible framework for evaluating vision-language models on 40+ tasks across English and Japanese benchmarks.
It also serves as the official toolkit for evaluating the [JAMMEval](https://huggingface.co/datasets/llm-jp/JAMMEval) Japanese benchmark collection.

Samplers and tasks follow [OpenAI simple-evals](https://github.com/openai/simple-evals). Results follow [Harbor](https://github.com/laude-institute/harbor): each run is one frozen model configuration, stored with every answer, its score, token counts and cost.

## Supported benchmarks

- **English, multimodal:** [AI2D](https://arxiv.org/abs/1603.07396), [BabyVision](https://arxiv.org/abs/2601.06521), [BLINK](https://arxiv.org/abs/2404.12390), [ChartQA](https://arxiv.org/abs/2203.10244), [ChartQAPro](https://arxiv.org/abs/2504.05506), [CharXiv](https://arxiv.org/abs/2406.18521) (reasoning), [CountBenchQA](https://arxiv.org/abs/2302.12066), [DocVQA](https://arxiv.org/abs/2007.00398), [InfoVQA](https://arxiv.org/abs/2104.12756), [MATH-Vision](https://arxiv.org/abs/2402.14804), [MMDU](https://arxiv.org/abs/2406.11833), [MMMU](https://arxiv.org/abs/2311.16502),…
