---
repo: "kloia/platform-modules"
name: "platform-modules"
description: "Kloia Platform Development Terraform Modules"
readmeQualityOk: true
url: "https://github.com/kloia/platform-modules"
language: "HCL"
languages: ["HCL"]
languagePcts: [95]
stars: 25
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 24
recentReleases: 0
createdAt: "2023-04-04T13:12:47Z"
lastCommitAt: "2026-11-10T11:38:25Z"
lastReleaseAt: "2024-05-10T12:25:00Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 54
maintainers: ["kloia-tfmodules-releaser[bot]", "serhatduzen-kloia", "saitbutun"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4c0546fcbc50c4cf7d5665a1c8d745cbe2a4f3630b2cf0e9c46bbd96ee09106/kloia/platform-modules"
---

# Kloia Platform Modules

This monorepo contains Terraform modules for building and managing infrastructure for platform development.

## Usage
Each module can be used by referencing its versioned git tag.
For example, to use the sample `metadata` module, you can include the
following snippet in your Terraform configuration

```hcl
module "metadata" {
  source = "git::https://github.com/kloia/platform-modules?ref=module/metadata/v0.1.0"
}
```

All module contents are released into their own separate tags with the convention of `module/<name>/<version>`.
No need to reference subdirectory of the repo with double-slashes `//`.

Modules can be found under the `modules/` directory.
Check out the GitHub Releases to find out the latest versions.

## Contributing

### Pre-commit

This project uses [pre-commit](https://pre-commit.com) to ensure the quality of the code.

Install the necessary dependencies, and setup pre-commit inside the repository.

```bash
brew install pre-commit tflint
pre-commit install
```

For more installation options visit the [pre-commits](https://pre-commit.com) and [terraform-hooks](https://github.com/antonbabenko/pre-commit-terraform#how-to-install).

### Commit…
