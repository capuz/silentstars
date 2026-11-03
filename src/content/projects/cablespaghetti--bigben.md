---
repo: "cablespaghetti/bigben"
name: "bigben"
description: "An AWS Lambda function that posts to mastodon once an hour with bongs"
readmeQualityOk: true
url: "https://github.com/cablespaghetti/bigben"
homepage: "https://mastodon.org.uk/@bigben"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 16
forks: 2
openIssues: 4
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2017-04-16T14:03:20Z"
lastCommitAt: "2026-11-03T19:05:22Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 60
undervaluedScore: 32
maintainers: ["cablespaghetti", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4429b1c3dceb6871ae9e50073d19f226510df7aae7795c334ed71304f5d926ee/cablespaghetti/bigben"
---

# Big Ben Lambda Function
Powers https://mastodon.org.uk/@bigben

Runs as an AWS Lambda for great serverless justice

## You will need

* One Python 3.14 installation
* One Bash shell
* One virtualenv utility
* One zip utility
* One Mastodon access token
* One AWS account with ready-made IAM Role for Lambda Execution with the AWSLambdaBasicExecutionRole policy attached
* One installed and configured AWS CLI tool with the relevant permissions to create a Lambda

## Environment Varibles

* MASTODON_BASE_URL - The hostname of the mastodon instance e.g. https://mastodon.org.uk
* MASTODON_ACCESS_TOKEN - A valid mastodon access token

## Initial Command To Deploy Lambda
```
./buildzip.sh
aws lambda create-function --function-name big-ben --runtime python3.14 --handler main.handler --timeout 15 --zip-file fileb://bigben.zip --role <my-iam-role-arn>
```

## Updating the code
`./deploy.sh`
