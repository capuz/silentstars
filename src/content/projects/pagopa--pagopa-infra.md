---
repo: "pagopa/pagopa-infra"
name: "pagopa-infra"
description: "pagoPA platform infrastructure"
readmeQualityOk: true
url: "https://github.com/pagopa/pagopa-infra"
language: "Smarty"
languages: ["Smarty", "HCL"]
languagePcts: [63, 31]
topics: ["infrastructure", "pagopa-infrastructure"]
stars: 8
forks: 2
openIssues: 1
closedIssues: 0
watchers: 9
contributors: 83
recentReleases: 0
createdAt: "2021-05-24T09:57:47Z"
lastCommitAt: "2026-09-17T08:51:29Z"
lastReleaseAt: "2024-05-22T08:26:24Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 78
undervaluedScore: 56
maintainers: ["pietro-tota", "mamari90", "ciuffagianluca"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8270edd4004515c04aa891415935717fcf461503acee1a377486032bca16ff1/pagopa/pagopa-infra"
---

# pagoPA-infrastructure

pagoPA project infrastructure

## Requirements

### 1. terraform

In order to manage the suitable version of terraform it is strongly recommended to install the following tool:

- [tfenv](https://github.com/tfutils/tfenv): **Terraform** version manager inspired by rbenv.

Once these tools have been installed, install the terraform version shown in:

- .terraform-version

After installation install terraform:

```sh
tfenv install
```

## Environment management

In order to properly populate terraform variables for each environment, a script located at `src/core/terraform.sh` is provided.

Terraform invocations described here where environent parameters are required can be replaced with invocations to `terraform.sh` by passing an environment specification. For example:

```sh
./terraform.sh plan dev -target=module.api_config
```

**NOTE**: `terraform.sh` must be run from the `src/core` folder.

## Terraform modules

As PagoPA we build our standard Terraform modules, check available modules:

- [PagoPA Terraform modules](https://github.com/search?q=topic%3Aterraform-modules+org%3Apagopa&type=repositories)

## Apply changes

To apply changes follow the…
