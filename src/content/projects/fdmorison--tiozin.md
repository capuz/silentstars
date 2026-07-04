---
repo: "fdmorison/tiozin"
name: "tiozin"
description: "Tiozin, your friendly ETL framework"
readmeQualityOk: true
url: "https://github.com/fdmorison/tiozin"
homepage: "https://pypi.org/project/tiozin/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["data", "declarative", "etl", "framework", "pipeline"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2025-11-30T16:58:10Z"
lastCommitAt: "2026-07-04T22:18:07Z"
lastReleaseAt: "2026-06-01T02:32:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 62
maintainers: ["fdmorison"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1107143403/7b49cf0e-52e5-4034-bdd8-585e87cb2259"
---

# Tiozin

    src="https://raw.githubusercontent.com/fdmorison/tiozin/main/docs/img/tiozin.png"
    alt="Tiozin - Your friendly ETL framework"
  />
</p>

---

ETL shouldn't require 80 files, 50 YAMLs, and a PhD in complexity.

Tiozin brings it back to basics: **Transform. Input. Output.** Nothing more, nothing less.

A lightweight Python framework that makes data jobs declarative, testable, and actually enjoyable to write.

## Who is Tiozin for?

Tiozin is human-readable and machine-generatable:

- Data engineers who want reusable pipeline components
- Teams that value declarative jobs
- Projects that require testable ETL logic
- Pipelines where metadata is connected to the execution model

## One-Minute Example

```bash
pip install tiozin
```

**Using Python directly**

```python
from tiozin import TiozinApp

app = TiozinApp()
app.run("examples/jobs/dummy.yaml")
```

Done. No ceremony, no boilerplate.

**Or define a declarative job**

```yaml
kind: LinearJob
name: example_job
owner: tiozin@tiozin.com
maintainer: tiozin
cost_center: tio_scrooge

org: tiozin
region: latam
domain: marketing
subdomain: campaigns
layer: refined
product: users
model: customers

runner:
  kind:…
