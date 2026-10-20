---
repo: "Vitesco-Technologies/ldap-password-rotation"
name: "ldap-password-rotation"
description: "The LDAP Password Rotation Service offers a lambda function that integrates with AWS Secrets Manager and can update the user password to a new random password and update it in AWS Secrets Manager."
readmeQualityOk: true
url: "https://github.com/Vitesco-Technologies/ldap-password-rotation"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["hacktoberfest", "aws", "ldap", "secrets-manager"]
stars: 6
forks: 1
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2023-11-17T15:03:58Z"
lastCommitAt: "2026-10-20T08:49:34Z"
lastReleaseAt: "2024-10-10T14:32:12Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 65
undervaluedScore: 44
maintainers: ["dependabot[bot]", "JingHHe"]
openGraphImageUrl: "https://opengraph.githubassets.com/d193fc09a363c4470dab70bc579acb0ff0d4f049dff0570257bfd8aaebd5cd64/Vitesco-Technologies/ldap-password-rotation"
---

# LdapPasswordRotationService

The LDAP Password Rotation Service offers a lambda function that integrates with AWS Secrets Manager and can update the user password to a new random password and update it in AWS Secrets Manager.

The AWS Lambda Function expects to receive a key/value (JSON) secret from AWS Secrets Manager, with a field with the user in which the password should be rotated and the current password. The username has to be the user principal name used to authenticate with LDAP.

## Quick Start

You'll need to have [Python (>=3.9)](https://www.python.org/) with [uv](https://docs.astral.sh/uv/), [Bun](https://bun.sh/) installed, and [AWS CLI](https://aws.amazon.com/cli/).

Optional: [Make](https://www.gnu.org/software/make/)

1. Make sure your default AWS credentials are configured to the environment where you want to deploy this project
1. Update the config file for the environment (located in the config folder) you want to deploy
   1. `config/serverless.dev.yml` for the development environment
1. Setup the project
   1. `make setup`
   1. This creates the local Python environment with uv and installs the Serverless Framework dependencies with Bun.
1. Deploy the…
