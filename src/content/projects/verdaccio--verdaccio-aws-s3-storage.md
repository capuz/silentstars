---
repo: "verdaccio/verdaccio-aws-s3-storage"
name: "verdaccio-aws-s3-storage"
description: "📦 Amazon Web Services S3 storage plugin"
readmeQualityOk: true
url: "https://github.com/verdaccio/verdaccio-aws-s3-storage"
homepage: "https://verdaccio.org/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["verdaccio", "verdaccio-plugin", "aws"]
stars: 9
forks: 3
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2019-03-29T05:40:31Z"
lastCommitAt: "2026-09-26T08:47:40Z"
lastReleaseAt: "2026-06-07T08:14:10Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 42
maintainers: ["juanpicado", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e958459f8ccc20253d3e57a2c022208caade66cca2cc2493c549214e3051746/verdaccio/verdaccio-aws-s3-storage"
---

# verdaccio-aws-s3-storage

AWS S3 + DynamoDB storage plugin for [Verdaccio](https://verdaccio.org).

Uses **S3** for package tarballs and metadata, and **DynamoDB** for the registry database (package list, secrets, tokens).

For AWS-compatible S3 that do not include DynamoDB, you can use **S3** for the registry data as well (as in older versions of the plugin).

Built with AWS SDK for JavaScript v3.

## Requirements

- **Node.js** >= 24
- **Verdaccio** >= 7.x
- **AWS S3 Bucket** — stores package tarballs and `package.json` metadata
- **AWS DynamoDB Table (optional)** — stores the registry state (package list, secret, auth tokens)
  - Partition key: `pk` (String)
  - Sort key: `sk` (String)
  - Billing mode: PAY_PER_REQUEST (recommended) or provisioned
- **AWS Credentials** — via environment variables, IAM role, instance profile, or explicit config

### IAM Permissions

The plugin requires the following IAM permissions:

**S3:**

- `s3:GetObject`
- `s3:PutObject`
- `s3:DeleteObject`
- `s3:DeleteObjects` (for bulk deletes)
- `s3:ListBucket` / `s3:ListObjectsV2`
- `s3:HeadObject`

**DynamoDB:**

- `dynamodb:GetItem`
- `dynamodb:PutItem`
- `dynamodb:DeleteItem`
- `dynamodb:Query`

##…
