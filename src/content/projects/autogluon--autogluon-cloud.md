---
repo: "autogluon/autogluon-cloud"
name: "autogluon-cloud"
description: "Train and deploy ML models in the cloud"
readmeQualityOk: true
url: "https://github.com/autogluon/autogluon-cloud"
homepage: "https://auto.gluon.ai/cloud"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["autogluon", "aws", "classification", "cloud", "forecasting", "machine-learning", "python", "regression", "sagemaker", "structured-data"]
stars: 42
forks: 17
openIssues: 21
closedIssues: 23
watchers: 8
contributors: 12
recentReleases: 1
createdAt: "2022-12-14T22:01:18Z"
lastCommitAt: "2026-10-01T10:24:29Z"
lastReleaseAt: "2026-09-19T16:18:01Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 42
maintainers: ["shchur", "dependabot[bot]", "AnirudhDagar"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/578363230/1cd9643b-206f-4a75-8519-6257e2b5425e"
---

## Train and Deploy AutoGluon in the Cloud

[AutoGluon-Cloud Documentation](https://auto.gluon.ai/cloud/stable/index.html) | [AutoGluon Documentation](https://auto.gluon.ai)

</div>

AutoGluon-Cloud lets you train and deploy state-of-the-art ML models in the cloud in a few lines of code. Run [AutoGluon](https://auto.gluon.ai/stable/index.html) on [Amazon SageMaker](https://aws.amazon.com/sagemaker/) without worrying about infrastructure, dependencies, or a heavy local ML environment. It supports two workflows:

- **[Train your own predictor](https://auto.gluon.ai/cloud/stable/tutorials/predictor-tabular.html)** — the same `fit → deploy → predict` workflow as local AutoGluon, with all the heavy lifting offloaded to SageMaker.
- **[Run pretrained foundation models](https://auto.gluon.ai/cloud/stable/tutorials/foundation-model-timeseries.html)** — deploy state-of-the-art pretrained models like [Chronos-2](https://huggingface.co/amazon/chronos-2) for zero-shot inference, with no training required.

## 💾 Installation & setup

```bash
pip install autogluon.cloud
```

Then provision the IAM role and S3 bucket AutoGluon-Cloud needs to run on AWS:

```python
from autogluon.cloud import…
