---
repo: "biobuddies/helicopyter"
name: "helicopyter"
description: "Python-defined infrastructure"
readmeQualityOk: true
url: "https://github.com/biobuddies/helicopyter"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [45, 35]
topics: ["ansible", "cdktf", "python", "terraform"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2023-06-17T15:10:56Z"
lastCommitAt: "2026-10-10T10:04:51Z"
lastReleaseAt: "2024-07-31T20:07:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 52
maintainers: ["covingtron", "jamesbraza", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/408d20cd1399ed60713e860057184c249da1afbe9a5635bb869da418bdf9b092/biobuddies/helicopyter"
---

# Helicopyter

Helicopyter generates Hashicorp Configuration Language (HCL) syntax Terraform from Python. The new
**Python Syntax for Terraform** has minimal dependencies. Support for CDKTF sources moved to
`helicopyter.cdktf`. List `cdktf` as a dependency if you need it.

## 1. New deploy using Python Syntax for Terraform

With Python 3.12+, Helicopyter, and OpenTofu (or Terraform), create
`deploys/example/terraform/main.py`:

```python
from helicopyter import provider, resource, terraform

terraform.required_providers(null={'source': 'hashicorp/null', 'version': '~> 3.2'})
provider.null()
resource.null_resource.example(triggers={'message': 'Hello from Python'})
```

Run from the project root:

```sh
python -m helicopyter example
```

Helicopyter writes `deploys/example/terraform/main.tf` and autoformats it with OpenTofu. Use
`--format_with cat` to skip autoformatting, or `--format_with terraform` to format with Terraform.

`resource`, `data`, `provider`, and `variable` build blocks; attribute access supplies their labels.
Use `tlocals` for a `locals` block, `local` and `var` for references, and `Block` for other HCL blocks
or expressions. Use Terraform attribute names, Python…
