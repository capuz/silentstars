---
repo: "appleboy/drone-lambda"
name: "drone-lambda"
description: "Deploying Lambda code with drone CI to an existing function"
readmeQualityOk: true
url: "https://github.com/appleboy/drone-lambda"
language: "Go"
languages: ["Go"]
languagePcts: [76]
topics: ["drone", "drone-plugin", "drone-ci", "golang", "aws-lambda", "lambda"]
stars: 27
forks: 11
openIssues: 1
closedIssues: 5
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2018-01-20T06:52:37Z"
lastCommitAt: "2026-08-15T04:03:08Z"
lastReleaseAt: "2020-10-24T00:55:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 88
undervaluedScore: 39
maintainers: ["appleboy"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f45b68e509863759ddfd1b01735847b6f4ddd538f414458d89ce5f907164168/appleboy/drone-lambda"
fundingLinks: ["CUSTOM:https://www.paypal.me/appleboy46"]
---

# drone-lambda

Deploying Lambda code with drone CI to an existing function. The plugin automatically deployes a serverless function to AWS Lambda from a zip file located in an S3 bucket. This plugin does not handle creating or uploading the zip file.

## Build or Download a binary

The pre-compiled binaries can be downloaded from [release page](https://github.com/appleboy/drone-lambda/releases). Support the following OS type.

* Windows amd64/386
* Linux amd64/386
* Darwin amd64/386

With `Go` installed

```bash
go install github.com/appleboy/drone-lambda@latest
```

or build the binary with the following command:

```sh
export GOOS=linux
export GOARCH=amd64
export CGO_ENABLED=0
export GO111MODULE=on

go test -cover ./...

go build -v -a -tags netgo -o release/linux/amd64/drone-lambda .
```

## Docker

Build the docker image with the following commands:

```bash
make docker
```

## Usage

There are three ways to send notification.

### Usage from binary

Update lambda function from zip file.

```sh
$ drone-lambda --region ap-southeast-1 \
  --access-key xxxx \
  --secret-key xxxx \
  --function-name upload-s3 \
  --zip-file deployment.zip
```

Update lambda function from s3…
