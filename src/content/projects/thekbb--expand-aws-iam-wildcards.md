---
repo: "thekbb/expand-aws-iam-wildcards"
name: "expand-aws-iam-wildcards"
description: "Expand wildcards in AWS IAM policies via an inline comment in pull requests to aid reviewers."
readmeQualityOk: true
url: "https://github.com/thekbb/expand-aws-iam-wildcards"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["aws", "aws-iam", "terraform", "code-review", "security"]
stars: 13
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-12-12T21:03:09Z"
lastCommitAt: "2026-08-23T04:10:21Z"
lastReleaseAt: "2026-04-10T01:33:52Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 57
maintainers: ["thekbb", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/61eee144718dea927361aec76a65e8adb88554a9a4c2d5dc701f715ba235669d/thekbb/expand-aws-iam-wildcards"
discussionCount: 0
---

# Expand AWS IAM Wildcards

Automatically expands IAM wildcard actions in PR diffs and posts inline comments showing what
each wildcard matches, with links to AWS docs.

The goal is to make it easier and faster for reviewers to understand changes to security posture with inline comments
like this:

## Recommended Workflow

```yaml
# .github/workflows/iam-wildcards.yml
name: Expand IAM Wildcards

on:
  pull_request:

permissions: {}

jobs:
  expand:
    permissions:
      pull-requests: write
    runs-on: ubuntu-latest
    steps:
      - uses: thekbb/expand-aws-iam-wildcards@v2.0.0
```

That is the recommended setup:

- trigger on `pull_request`, not `pull_request_target`
- grant only `pull-requests: write` to the job that runs this action

No checkout step is required. The action reads the PR diff through the GitHub API and posts inline review comments
back to the pull request.

## What It Does

When your PR introduces:

```hcl
"s3:Get*Tagging",
```

The action posts an inline comment:

> **IAM Wildcard Expansion**
>
> `s3:Get*Tagging` expands to 5 action(s):
>
> 1. [`s3:GetBucketTagging`][s3-get-bucket-tagging]
> 2. [`s3:GetJobTagging`][s3-get-job-tagging]
> 3.…
