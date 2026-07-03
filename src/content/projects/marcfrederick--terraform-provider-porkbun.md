---
repo: "marcfrederick/terraform-provider-porkbun"
name: "terraform-provider-porkbun"
description: "Terraform provider to manage Porkbun domains, DNS records, and other related resources."
url: "https://github.com/marcfrederick/terraform-provider-porkbun"
homepage: "https://registry.terraform.io/providers/marcfrederick/porkbun"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["dns", "porkbun", "terraform", "terraform-provider"]
stars: 14
forks: 1
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2025-04-26T08:36:23Z"
lastCommitAt: "2026-07-03T06:22:06Z"
lastReleaseAt: "2026-04-26T21:03:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 54
maintainers: ["marcfrederick", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/749cca3a724d0c2567063d687ad7e316d3ebc497086c61fcdb7fdad584dfafd9/marcfrederick/terraform-provider-porkbun"
---

# Terraform Provider Porkbun

This Terraform provider lets you automate the management of Porkbun domains, DNS records, and other related resources.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or a pull request.

### Requirements

- [Terraform](https://developer.hashicorp.com/terraform/downloads) >= 1.0
- [Go](https://golang.org/doc/install) >= 1.23

### Building the Provider

1. Clone the repository.
2. Navigate into the repository directory.
3. Build the provider using the Go `install` command:

```shell
go install
```

### Acceptance Testing

To run acceptance tests, you need:

- A valid Porkbun API key and secret
- A registered domain for testing

Set the required environment variables:

```bash
export PORKBUN_API_KEY="your_api_key"
export PORKBUN_SECRET_API_KEY="your_secret_api_key"
export PORKBUN_ACCTEST_DOMAIN="example.com"
```

Run the tests with:

```bash
make acctest
```

> ⚠️ During testing, the provider will create and destroy resources in the domain specified by `PORKBUN_ACCTEST_DOMAIN`.
> Use a test domain or a domain you can safely modify.

## Using the Provider Locally

To test the provider locally,…
